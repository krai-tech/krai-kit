import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef,
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  InputSignal,
  effect,
  ComponentRef,
  input,
  output,
  OutputEmitterRef,
  inject,
  forwardRef,
  OnInit,
  DestroyRef
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { IconComponent } from '@krai-tech/kit/icon';
import { createTokenFactory, withStyles } from '@krai-tech/cdk/utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { tap } from 'rxjs/operators';

export const RESET_INPUT = createTokenFactory(() => new ResetInputDirective());

@Component({
  template: '',
  standalone: true,
  styleUrls: ['./reset-input.directive.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class ResetInputComponent {}

/**
 * Directive to add a reset button to an input element and optionally show a counter for selected items.
 */
@Directive({
  selector: '[kriResetInput]',
  standalone: true,
  host: {
    '(focus)': 'onFocus()',
    '(blur)': 'onBlur()',
    '(input)': 'onInput()'
  },
  providers: [{
    provide: RESET_INPUT,
    useExisting: forwardRef(() => ResetInputDirective)
  }]
})
export class ResetInputDirective implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Signal to manually show the reset button.
   */
  showReset: InputSignal<boolean> = input<boolean>(false);

  /**
   * Signal to manually show the counter for selected items.
   */
  showCounter: InputSignal<boolean> = input<boolean>(false);

  /**
   * Signal to manage the initial value of the input element.
   */
  initValue: InputSignal<any> = input<any>('');

  /**
   * Signal to manage the selected items in the input element.
   */
  selectedItems: InputSignal<any[]> = input<any[]>([]);

  /**
   * Output emitter to emit an event when the input is reset.
   */
  resetInput: OutputEmitterRef<void> = output<void>();

  /**
   * Container element for the reset button and counter.
   */
  private container: HTMLElement | undefined;

  /**
   * Reset button element.
   */
  private button: HTMLElement | undefined;

  /**
   * Reference to the host input element.
   */
  private readonly elRef = inject(ElementRef);

  /**
   * Renderer2 instance for DOM manipulation.
   */
  private readonly renderer = inject(Renderer2);

  /**
   * Optional injection of NgControl for form control.
   */
  private readonly control = inject(NgControl, { optional: true });

  /**
   * ViewContainerRef for creating dynamic components.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * DestroyRef for managing subscription lifecycles.
   */
  private readonly destroyRef = inject(DestroyRef);

  /**
   * @internal
   */
  constructor() {
    withStyles(ResetInputComponent);
    effect(() => {
      if (this.showCounter()) {
        this.updateCounter();
      }
      this.updateResetButtonVisibility();
    });
  }

  /**
   * @internal
   */
  ngOnInit (): void {
    this.updateResetButtonVisibility();
    if (this.control && this.control.valueChanges) {
      this.control.valueChanges.pipe(
        takeUntilDestroyed(this.destroyRef),
        tap(() => this.updateResetButtonVisibility())
      ).subscribe();
    }
  }

  /**
   * @internal
   */
  ngAfterViewInit(): void {
    this.updateResetButtonVisibility();
    this.addPaddingToInput();
  }

  ngOnDestroy(): void {
    this.checkExistingButtonOrRemove();
  }

  /**
   * Handler for focus events on the input element.
   */
  onFocus(): void {
    this.updateResetButtonVisibility();
  }

  /**
   * Handler for blur events on the input element.
   */
  onBlur(): void {
    this.updateResetButtonVisibility();
  }

  /**
   * Handler for input events on the input element.
   */
  onInput(): void {
    this.updateResetButtonVisibility();
  }

  /**
   * Creates the reset button and adds it to the DOM.
   */
  private createResetButton(): void {
    const parent = this.elRef.nativeElement.parentNode;

    this.checkExistingButtonOrRemove();

    this.container = this.renderer.createElement('div');
    this.renderer.addClass(this.container, 'kri-reset-input');

    if (this.showCounter()) {
      const span = this.renderer.createElement('span');
      this.renderer.appendChild(this.container, span);
      this.renderer.addClass(this.container, 'counter');
    }

    this.button = this.renderer.createElement('button');
    const iconRef = this.createCounter();
    this.renderer.appendChild(this.button, iconRef.location.nativeElement);
    this.renderer.listen(this.button, 'click', (event) => this.resetControl(event));
    this.renderer.appendChild(this.container, this.button);
    this.renderer.setStyle(parent, 'position', 'relative');
    this.renderer.appendChild(parent, this.container);

    if (this.showCounter()) {
      this.updateCounter();
    }
  }

  /**
   * Creates the counter icon.
   * @returns The component reference for the counter icon.
   */
  private createCounter(): ComponentRef<IconComponent> {
    const iconRef = this.viewContainerRef.createComponent(IconComponent);
    iconRef.setInput('icon', 'circle-cancel');
    iconRef.setInput('color', '#9C9EA9');
    iconRef.changeDetectorRef.detectChanges();
    return iconRef;
  }

  /**
   * Checks if a reset button already exists and removes it if present.
   */
  private checkExistingButtonOrRemove(): void {
    const parent = this.elRef.nativeElement.parentNode;
    const existingIndicator = parent.querySelector('.kri-reset-input');
    if (existingIndicator) {
      this.renderer.removeChild(parent, existingIndicator);
      this.container = undefined;
    }
  }

  /**
   * Resets the control to its initial value and updates the UI accordingly.
   * @param event The event object.
   */
  private resetControl(event: Event): void {
    event.stopPropagation();
    if (this.control) {
      this.control.reset(this.initValue());
    } else {
      this.renderer.setProperty(this.elRef.nativeElement, 'value', this.initValue());
    }
    if (this.showCounter()) {
      this.updateCounter();
    }
    this.updateResetButtonVisibility();
    this.resetInput.emit();
  }

  /**
   * Updates the counter display based on the number of selected items.
   */
  private updateCounter(): void {
    const span = this.container?.querySelector('span');
    if (this.selectedItems().length > 0) {
      this.renderer.setProperty(span, 'innerText', this.selectedItems().length.toString());
    } else {
      this.checkExistingButtonOrRemove();
    }
  }

  /**
   * Updates the visibility of the reset button based on the input value and selected items.
   */
  private updateResetButtonVisibility(): void {
    const inputValue = this.control ? this.control.control?.value : this.elRef.nativeElement.value;
    const shouldShowButton = (this.showReset() && inputValue) || this.selectedItems().length > 0;
    if (shouldShowButton) {
      if (!this.container) {
        this.createResetButton();
        this.addPaddingToInput();
      } else {
        this.renderer.setStyle(this.container, 'display', 'flex');
      }
    } else {
      this.checkExistingButtonOrRemove();
      this.removePaddingFromInput();
    }
  }

  /**
   * Adds padding to the input element to make space for the reset button.
   */
  private addPaddingToInput(): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'padding-right', '30px');
  }

  /**
   * Removes the padding from the input element when the reset button is not visible.
   */
  private removePaddingFromInput(): void {
    this.renderer.removeStyle(this.elRef.nativeElement, 'padding-right');
  }
}
