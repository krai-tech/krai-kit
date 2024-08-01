import { Directive, input, InputSignal } from '@angular/core';

/**
 * Directive to manage the disabled state of an element.
 *
 * This directive sets the `disabled`, `aria-disabled` and `class.disabled` attributes on the host element based on the provided input signal.
 *
 * @example
 * <button kriIsDisabled [disabled]="isButtonDisabled">Click me</button>
 */
@Directive({
  selector: '[kriIsDisabled]',
  standalone: true,
  host: {
    '[class.disabled]': 'disabled() || null',
    '[attr.disabled]': 'disabled() || null',
    '[attr.aria-disabled]': 'disabled() || null',
  },
})
export class IsDisabledDirective {
  /**
   * A signal to control the disabled state of the element.
   *
   * If `true`, the element will have `disabled`, `aria-disabled` and `class.disabled` attributes set.
   * If `false`, these attributes will be removed.
   */
  disabled: InputSignal<boolean> = input<boolean>(false);
}
