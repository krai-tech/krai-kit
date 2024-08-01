import { Directive, input, InputSignal } from '@angular/core';
import { InputTextSize } from './input-text.type';

/**
 * Directive to enhance standard input elements with custom styles and behavior.
 * It provides support size variants (small, medium, large) for input label
 */
@Directive({
  selector: '[kriInputTextLabel]',
  standalone: true,
  exportAs: 'kriInputTextLabel',
  host: {
    '[class.kri-input-label-small]': `this.size() === 'small'`,
    '[class.kri-input-label-large]': `this.size() === 'large'`,
  }
})
export class InputTextLabelDirective {
  /**
   * Signal that defines the size of the label.
   * Can be `InputTextSize`
   */
  size: InputSignal<InputTextSize> = input<InputTextSize>('medium');
}
