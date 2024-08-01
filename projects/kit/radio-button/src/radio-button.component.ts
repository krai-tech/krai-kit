import { Component, effect, ElementRef, forwardRef, input, InputSignal, output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControl } from '@krai-tech/cdk/classes';
import isObject from 'lodash/isObject';

/**
 * RadioButtonComponent is a custom radio button element that extends AbstractControl
 * and includes additional theming capabilities.
 */
@Component({
  selector: 'kri-radio',
  standalone: true,
  imports : [CommonModule, FormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent extends AbstractControl {
  /**
   *  @internal
   * @type {ElementRef | undefined}
   */
  @ViewChild('radioContent', { static: true }) radioContent: ElementRef | undefined;

  /**
   * Required. Name of the checkbox group.
   */
  name: InputSignal<string> = input.required<string>()

  /**
   * Required. Value of the checkbox.
   */
  value: InputSignal<string> = input.required<string>()

  /**
   * Optional. When present, it specifies that the element should be disabled.
   */
  disabled: InputSignal<boolean> = input<boolean>(false)

  /**
   * Optional. Manual set radio active
   */
  checked: InputSignal<boolean> = input<boolean>(false)

  /**
   * Optional.
   * Accessibility
   */
  ariaLabelledBy: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Accessibility
   */
  ariaLabel: InputSignal<string> = input<string>('')

  /**
   * Fires an event when the value of the radio button changes.
   */
  radioChange = output<string>()

  /**
   * @internal
   * @type {string | undefined}
   */
  id: string | undefined

  /**
   * @internal
   * @type {string | undefined}
   */
  inputValue: string | undefined;

  /**
   *  @internal
   */
  constructor () {
    super();
    effect((): void => {
      if (isObject(this.value())) {
        this.id = ''
      } else {
        this.id = `${this.name()}-${this.value()}`;
      }
    })
  }

  /**
   *  @internal
   * @param {string} value
   */
  override writeValue(value: string): void {
    this.inputValue = value;
  }

  /**
   *  @internal
   * @param {Event} $event
   * @param value
   */
  onRadioChange($event: Event, value: any): void {
    $event.stopPropagation();
    this.inputValue = value;
    this.onTouched();
    this.onChange(value);
    this.radioChange.emit(value)
  }

  /**
   *  @internal
   * @returns {boolean}
   */
  hasContent(): boolean {
    return !!this.radioContent && this.radioContent.nativeElement && this.radioContent.nativeElement.innerHTML.trim();
  }
}
