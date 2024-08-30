import { Directive, ElementRef, input, InputSignal } from '@angular/core';
import { InputTextSize } from './input-text.type';
import { IsDisabledDirective } from '@krai-tech/cdk/directives/is-disabled';
import { FocusDirective } from '@krai-tech/cdk/directives/focus';
import { HasValueDirective } from '@krai-tech/kit/common/directives/has-value';
import { HasErrorDirective } from '@krai-tech/cdk/directives/has-error';

/**
 * Directive to enhance standard input elements with custom styles and behavior.
 * It provides support for error state, size variants (small, medium, large),
 * and additional title attribute for disabled inputs.
 * Additionally, it extends functionality with the following directives:
 * - `IsDisabledDirective` for managing the disabled state.
 * - `FocusDirective` for managing the focused state.
 * - `HasValueDirective` for managing the has-value state and emitting hasValue events.
 */
@Directive({
  selector: '[kriInputText]',
  standalone: true,
  exportAs: 'kriInputText',
  host: {
    'class': 'kri-input-text',
    '[class.kri-input-text-lg]': `size() === 'large'`,
    '[class.kri-input-text-sm]': `size() === 'small'`,
    '[attr.title]': 'showTitle'
  },
  hostDirectives: [
    {
      directive: IsDisabledDirective,
      inputs: ['disabled']
    },
    {
      directive: FocusDirective,
    },
    {
      directive: HasValueDirective,
      outputs: ['hasValue']
    },
    {
      directive: HasErrorDirective,
      inputs: ['hasError']
    }
  ]
})
export class InputTextDirective {
  /**
   * Input that defines the size of the input.
   * Can be `InputTextSize`
   */
  size: InputSignal<InputTextSize> = input<InputTextSize>('medium');

  /**
   * @internal
   */
  constructor(private elRef: ElementRef) {}

  /**
   * @internal
   * Adds a title attribute to the input when it is disabled.
   * The title attribute contains the current value of the input.
   */
  get showTitle() {
    const element = this.elRef?.nativeElement;
    return element?.disabled ? element.value ?? '' : '';
  }
}
