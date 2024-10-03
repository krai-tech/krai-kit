import {
  Directive,
  ElementRef,
  OnInit,
  DestroyRef,
  output,
  OutputEmitterRef,
  inject,
  Signal
} from '@angular/core';
import { signal, WritableSignal } from '@angular/core';
import isEmpty from 'lodash/isEmpty';
import { NgControl } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { createTokenFactory, provide } from '@krai-tech/cdk/utils';
import { tap, delay, map } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

export const HAS_VALUE_INPUT = createTokenFactory(() => new HasValueDirective());

/**
 * Directive to track and indicate whether an input element has a value.
 * This directive sets a `has-value` class and a `data-has-value` attribute on the host element
 * if the input element has a value. It also emits a `hasValue` event when the input has a value.
 *
 */
@Directive({
  selector: '[kriHasValue]',
  standalone: true,
  host: {
    '[attr.data-has-value]': 'hasValueState()',
    '[class.has-value]': 'hasValueState() ? true : null',
    '[attr.data-no-animation]': 'animationState()',
    '[class.no-animation]': 'animationState()',
    '(input)': 'onInput()',
    '(blur)': 'onBlurOrFocus()',
    '(focus)': 'onBlurOrFocus()'
  },
  providers: [provide(HAS_VALUE_INPUT, HasValueDirective)]
})
export class HasValueDirective implements OnInit {
  /**
   * Signal to track whether the element has a value.
   */
  hasValueState: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Output emitter to emit an event when the element has a value.
   */
  hasValue: OutputEmitterRef<boolean> = output<boolean>();

  /**
   * Flag to skip the has-value state check after a reset event.
   * Prevents the state from being incorrectly updated immediately after a reset.
   */
  private skipCheckAfterReset = false;

  /**
   * Optional injection of the NgControl.
   */
  private readonly control = inject(NgControl, { optional: true });

  /**
   * A reference to the host input element.
   */
  private readonly elRef = inject(ElementRef);

  /**
   * Reference to the current destroy context.
   */
  private readonly destroyRef = inject(DestroyRef);

  /**
   * Observable that emits `false` after a delay to manage the no-animation state.
   * This is used to remove the no-animation class after the initial check is complete.
   */
  removeAnimation$ = of(null).pipe(
    delay(0),
    map(() => false)
  );
  /**
   * Signal to manage the no-animation class.
   */
  animationState: Signal<boolean> = toSignal(this.removeAnimation$, { initialValue : true });

  /**
   * Initializes the directive, setting up the initial state and subscribing to value changes and reset events.
   * @internal
   */
  ngOnInit(): void {
    // Set the initial state and add no-animation class
    this.updateHasValueState();
    if (this.control && this.control.valueChanges) {
      this.control.valueChanges.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.updateHasValueState())
      ).subscribe();
    }
  }

  /**
   * Handler for the input event. Updates the has-value state based on the input value.
   */
  onInput(): void {
    if (!this.skipCheckAfterReset) {
      this.updateHasValueState();
    }
  }

  /**
   * Handler for the blur and focus events. Resets the skip-check flag and updates the has-value state.
   */
  onBlurOrFocus(): void {
    this.skipCheckAfterReset = false;
    this.updateHasValueState();
  }

  /**
   * Updates the has-value state based on the current value of the host element.
   */
  private updateHasValueState(): void {
    const value = this.getControlValue();
    const hasValue = !isEmpty(value);
    this.hasValueState.set(hasValue);
    this.hasValue.emit(hasValue);
  }

  /**
   * Retrieves the value from the control if it exists, otherwise from the native element.
   * @returns {string} The current value of the control or element.
   */
  private getControlValue(): string {
    if (this.control && this.control.control) {
      const value = this.control.control.value;
      return value != null ? value : '';
    }
    return this.elRef.nativeElement.value;
  }
}
