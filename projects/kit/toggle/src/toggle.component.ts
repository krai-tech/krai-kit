import {
  Component,
  forwardRef,
  input,
  InputSignal, model, ModelSignal,
  output, OutputEmitterRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl } from '@krai-tech/cdk/classes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ToggleSize } from './toggle.type';


/**
 * The ToggleComponent is a customizable toggle switch component that extends AbstractControl
 * and implements OnChanges. It can be used within forms and other interactive elements.
 */
@Component({
  selector: 'kri-toggle',
  standalone: true,
  imports: [CommonModule],
  host: {
    '(click)': 'toggle()',
  },
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ToggleComponent),
    multi: true
  }],
})
export class ToggleComponent extends AbstractControl {
  /**
   * Optional. Specifies the size of the toggle.
   *
   * Possible values: `Size`.
   * Default is `medium`.
   */
  size: InputSignal<ToggleSize> = input<ToggleSize>('medium')

  /**
   * Optional.
   * Custom color when the switch is enabled.
   */
  color: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Specifies whether to disable the function.
   */
  disabled: InputSignal<boolean> = input<boolean>(false)

  /**
   * Emits a boolean value indicating the current state of the toggle.
   */
  toggleChange: OutputEmitterRef<boolean> = output<boolean>()

  /**
   * State of the `checked` property in the ViewModel (VM).
   */
  checked: ModelSignal<boolean> = model<boolean>(false)

  /**
   * @internal
   */
  constructor () {
    super()
  }

  /**
   * Toggles the state of the switch and emits events if not disabled.
   * @internal
   */
  toggle(): void {
    if (!this.disabled()) {
      this.checked.set(!this.checked());
      this.toggleChange.emit(this.checked());
      this.onChange(this.checked());
      this.onTouched();
    }
  }

  /**
   * Updates the checked state from an external value.
   * @internal
   */
  override writeValue(value: any): void {
    if (value !== this.checked()) {
      this.checked.set(!!value);
    }
  }
}
