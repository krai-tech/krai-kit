import { ControlValueAccessor } from '@angular/forms';
import { EMPTY_FUNCTION } from '@krai-tech/cdk/constants';

export abstract class AbstractControl implements ControlValueAccessor {
  /**
   *  @internal
   * @type {string | undefined}
   */
  _value: string | undefined;

  /**
   *  @internal
   * @type {(...args: any[]) => void}
   * @protected
   */
  protected onTouched = EMPTY_FUNCTION;

  /**
   *  @internal
   * @type {(...args: any[]) => void}
   * @protected
   */
  protected onChange = EMPTY_FUNCTION;

  /**
   * Registers a function called when the control value changes.
   *  @internal
   * @param onChange
   */
  registerOnChange (onChange: any): void {
    this.onChange = onChange
  }

  /**
   * Registers a function called when the control is touched.
   *  @internal
   * @param {() => void} onTouched
   */
  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  /**
   * Sets the "checked" property on the input element.
   *  @internal
   * @param {string} value
   */
  writeValue (value: string): void {
    this._value = value;
    this.onChange(value);
  }
}
