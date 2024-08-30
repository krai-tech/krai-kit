import { Directive, forwardRef, input, InputSignal, TemplateRef } from '@angular/core';
import { SelectConfig } from '../select.type';
import { createTokenFactory } from '@krai-tech/cdk/utils';
import { config } from '../select.config';
import uniqueId from 'lodash/uniqueId';

export const SELECT_INPUTS = createTokenFactory(() => new SelectInputsDirective());

/**
 * Directive to manage input properties for the `SelectComponent`.
 */
@Directive({
  selector: '[kriSelectInputs]',
  standalone: true,
  providers: [{
    provide: SELECT_INPUTS,
    useExisting: forwardRef(() => SelectInputsDirective),
  }]
})
export class SelectInputsDirective {
  /**
   * The list of options available for selection.
   */
  options: InputSignal<any[]> = input<any[]>([]);

  /**
   * Configuration settings for the select component.
   * @type `SelectConfig`
   */
  config: InputSignal<SelectConfig> = input<SelectConfig>(config);

  /**
   * Boolean flag to enable/disable multiple selection.
   */
  multiple: InputSignal<boolean> = input(false);

  /**
   * Boolean flag to enable/disable the select component.
   */
  disabled: InputSignal<boolean> = input<boolean>(false);

  /**
   * Boolean flag that indicates whether the select component is in an error state.
   */
  error: InputSignal<boolean> = input<boolean>(false);

  /**
   * Unique identifier for the select component instance.
   */
  id: InputSignal<string> = input<string>(uniqueId('kri-select'));

  /**
   * Floating label text.
   */
  floatLabel: InputSignal<string> = input<string>('');

  /**
   * Template reference for custom option item rendering.
   */
  optionItemTemplate: InputSignal<TemplateRef<any> | null> = input<TemplateRef<any> | null>(null);

  /**
   * Template reference for custom "not found" message rendering.
   */
  notFoundTemplate: InputSignal<TemplateRef<any> | null> = input<TemplateRef<any> | null>(null);

  /**
   * Template reference for custom select input rendering.
   */
  selectTemplate: InputSignal<TemplateRef<any> | null> = input<TemplateRef<any> | null>(null);
}
