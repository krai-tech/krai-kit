import { Directive, input, InputSignal } from '@angular/core';

/**
 * Directive to manage the error state of an element.
 *
 * This directive sets the `has-error`, `data-has-error`, and `aria-has-error` attributes on the host element based on the provided input signal.
 * It also applies the `has-error` class when the error state is active.
 *
 * @example
 * <input kriHasError [hasError]="hasInputError" />
 */
@Directive({
  selector: '[kriHasError]',
  standalone: true,
  host: {
    '[class.has-error]': 'hasError() || null',
    '[attr.data-has-error]': 'hasError() || null',
    '[attr.aria-has-error]': 'hasError() || null',
  },
})
export class HasErrorDirective {
  /**
   * A signal to control the error state of the element.
   *
   * If `true`, the element will have `has-error` class, `data-has-error` attribute, and `aria-has-error` attribute set.
   * If `false`, these attributes will be removed.
   */
  hasError: InputSignal<boolean> = input<boolean>(false);
}
