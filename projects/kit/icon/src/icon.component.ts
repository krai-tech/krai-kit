import { Component, input, InputSignal, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconTypes } from './icons.type';

/**
 * IconComponent is a reusable component for displaying icons with various customizable properties.
 */
@Component({
  selector: 'kri-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class IconComponent<T = any> {
  /**
   * Required.
   * The icon to be displayed. It can be of type `IconTypes`, `TemplateRef`, or an empty string.
   */
  icon: InputSignal<IconTypes | TemplateRef<T> | ''> = input.required<IconTypes | TemplateRef<T> | ''>();

  /**
   * Optional.
   * Determines if the icon is active. Default is `false`.
   */
  active: InputSignal<boolean> = input<boolean>(false);

  /**
   * Optional.
   * Determines if the icon is disabled. Default is `false`.
   */
  disabled: InputSignal<boolean> = input<boolean>(false);

  /**
   * Optional.
   * The color of the icon.
   */
  color: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * The size of the icon.
   */
  size: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * The rotation of the icon in degrees. It can be a number or `'infinite'` for continuous rotation.
   */
  rotate: InputSignal<number | 'infinite'> = input<number | 'infinite'>(0);

  /**
   * @internal
   * Retrieves the template if the `icon` is a `TemplateRef`, otherwise returns `null`.
   */
  get template(): any {
    return this.icon() instanceof TemplateRef ? this.icon() : null;
  }
}

