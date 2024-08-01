import {
  Component, effect,
  forwardRef,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
  WritableSignal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox.component';
import { CheckboxGDirections, CheckboxGOption } from './checkbox-g.type';
import { AbstractControl } from '@krai-tech/cdk/classes';
import isArray from 'lodash/isArray';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * CheckboxGComponent is an extension of the standard checkbox element with added theming capabilities.
 * This component acts as a checkbox group, allowing for the grouping of multiple checkboxes.
 */
@Component({
  selector: 'kri-checkbox-g',
  standalone: true,
  imports : [CommonModule, CheckboxComponent, FormsModule],
  templateUrl: './checkbox-g.component.html',
  styleUrls: ['./checkbox-g.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxGComponent),
      multi: true,
    },
  ],
})
export class CheckboxGComponent extends AbstractControl {
  /**
   * Optional.
   * Name of the checkbox group.
   */
  name: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * Checkbox custom color
   */
  color: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * Indicates whether to display the title prompt. The value of the label parameter is displayed by default.
   */
  isShowTitle: InputSignal<boolean> = input<boolean>(true);

  /**
   * Optional. When present, it specifies that the element should be disabled.
   */
  disabled: InputSignal<boolean> = input<boolean>(false);

  /**
   * Optional.
   * Check box option array
   */
  options: InputSignal<CheckboxGOption[]> = input<CheckboxGOption[]>([]);

  /**
   * Optional.
   * Determines whether to display animations.
   */
  showAnimation: InputSignal<boolean> = input<boolean>(true);

  /**
   * Optional.
   * Display direction
   */
  direction: InputSignal<CheckboxGDirections> = input<CheckboxGDirections>('column');

  /**
   * Fire event when the value of the check box changes.
   */
  checkboxChange: OutputEmitterRef<CheckboxGOption> = output<CheckboxGOption>()

  /**
   * @internal
   */
  values: WritableSignal<CheckboxGOption[]> = signal<CheckboxGOption[]>([]);

  /**
   * @internal
   */
  readonly optionsToDisplay: WritableSignal<CheckboxGOption[]> = signal<CheckboxGOption[]>([])

  /**
   * @internal
   */
  constructor() {
    super();
    effect(() => this.updateCheckedState(), { allowSignalWrites: true });
  }

  /**
   * @internal
   */
  onToggle($event: any, i: number): void {
    this.onChange(this.getCheckedArray());
    this.onTouched();
    this.checkboxChange.emit(this.optionsToDisplay()[i]);
  }

  /**
   * @internal
   */
  override writeValue(values: any): void {
    if (values && isArray(values)) {
      this.values.set(values);
      this.updateCheckedState();
    }
  }

  /**
   * @internal
   */
  updateCheckedState(): void {
    const checkedSet = new Set(this.values().map(item => item.value));
    const updatedOptions = this.options().map((item: CheckboxGOption) => ({
      ...item,
      isChecked: checkedSet.has(item.value),
    }));
    this.optionsToDisplay.set(updatedOptions)
  }

  /**
   * @internal
   */
  private getCheckedArray(): CheckboxGOption[] {
    return this.optionsToDisplay()
    .filter((item: CheckboxGOption) => item.isChecked)
  }
}
