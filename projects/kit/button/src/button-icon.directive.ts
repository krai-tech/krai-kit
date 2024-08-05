import {
  Directive, effect,
  ElementRef,
  input,
  InputSignal,
  Renderer2
} from '@angular/core';
import { ButtonIconPosition } from './button.type';
import { IconTypes } from '@krai-tech/kit/icon';

/**
 * Directive to add custom behavior to button icons.
 *
 * This directive can be applied to button elements to transform them into buttons with icons
 * that have various customizable properties such as position, color, size, and rotation.
 */
@Directive({
  selector: '[kriButtonIcon]',
  standalone: true
})
export class ButtonIconDirective {
  /**
   * Optional.
   * The icon to be displayed. It can be of type `IconTypes`, or an empty string.
   */
  icon: InputSignal<IconTypes | string> = input<IconTypes | string>('');

  /**
   * Optional.
   * The color of the icon.
   */
  iconColor: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * The size of the icon.
   */
  iconSize: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * The rotation of the icon in degrees. It can be a number or `'infinite'` for continuous rotation.
   */
  iconRotate: InputSignal<number | 'infinite'> = input<number | 'infinite'>(0);

  /**
   * Optional.
   * The position of the icon relative to the text. Can be `ButtonIconPosition`.
   */
  iconPosition: InputSignal<ButtonIconPosition> = input<ButtonIconPosition>('left');

  private container: HTMLElement | null = null;
  private iconElement: HTMLElement | null = null;

  /**
   * @internal
   * Constructs a new instance of the `ButtonIconDirective`.
   *
   * @param el - The element reference of the host element.
   * @param renderer - The renderer for manipulating the DOM.
   */
  constructor(private el: ElementRef, private renderer: Renderer2) {
    effect(() => {
      if (this.icon()) {
        this.ensureContainerExists();
        this.ensureIconElementExists();
        this.updateIconElement();
      } else {
        this.removeIconAndContainer();
      }
      this.updateIconPosition();
    });
  }

  /**
   * @internal
   * Ensures that the container element exists. If it does not, creates it.
   */
  private ensureContainerExists() {
    if (!this.container) {
      this.container = this.renderer.createElement('span');
      this.renderer.addClass(this.container, 'kri-btn-icon-container');
    }
  }

  /**
   * @internal
   * Ensures that the icon element exists. If it does not, creates it.
   */
  private ensureIconElementExists() {
    if (!this.iconElement) {
      this.iconElement = this.renderer.createElement('i');
      this.renderer.addClass(this.iconElement, 'kri-btn-icon');
      this.renderer.appendChild(this.container, this.iconElement);
    }
  }

  /**
   * @internal
   * Updates the icon element by clearing and setting classes and styles.
   */
  private updateIconElement() {
    this.clearIconClassesAndStyles();
    this.setIconClassesAndStyles();
  }

  /**
   * @internal
   * Clears existing icon classes and styles.
   */
  private clearIconClassesAndStyles() {
    const currentIconClasses = this.iconElement?.className.split(' ').filter(c => c.startsWith('icon-'));
    currentIconClasses?.forEach(c => this.renderer.removeClass(this.iconElement, c));

    this.renderer.setStyle(this.iconElement, 'font-size', null);
    this.renderer.setStyle(this.iconElement, 'transform', null);
    this.renderer.setStyle(this.iconElement, 'color', null);
    this.renderer.setStyle(this.container, 'padding-left', null);
    this.renderer.setStyle(this.container, 'padding-right', null);
    this.renderer.removeClass(this.iconElement, 'kri-btn-icon-spin');
  }

  /**
   * @internal
   * Sets new classes and styles for the icon element.
   */
  private setIconClassesAndStyles() {
    this.renderer.addClass(this.iconElement, `icon-${this.icon()}`);
    this.renderer.setStyle(this.iconElement, 'font-size', `${this.iconSize()}px`);

    if (this.iconRotate() === 'infinite') {
      this.renderer.addClass(this.iconElement, 'kri-btn-icon-spin');
    } else {
      this.renderer.setStyle(this.iconElement, 'transform', `rotate(${this.iconRotate()}deg)`);
    }

    this.renderer.setStyle(this.iconElement, 'color', this.iconColor());

    if (this.iconPosition() === 'left') {
      this.renderer.setStyle(this.container, 'padding-right', '8px');
      this.renderer.setStyle(this.container, 'padding-left', null);
    } else {
      this.renderer.setStyle(this.container, 'padding-left', '8px');
      this.renderer.setStyle(this.container, 'padding-right', null);
    }
  }

  /**
   * @internal
   * Updates the icon position based on the value of iconPosition.
   */
  private updateIconPosition() {
    if (this.icon()) {
      if (this.container && this.container.parentElement) {
        this.renderer.removeChild(this.container.parentElement, this.container);
      }

      if (this.iconPosition() === 'left') {
        this.renderer.insertBefore(this.el.nativeElement, this.container, this.el.nativeElement.firstChild);
      } else {
        this.renderer.appendChild(this.el.nativeElement, this.container);
      }
    }
  }

  /**
   * @internal
   * Removes the icon element and container from the DOM.
   */
  private removeIconAndContainer() {
    if (this.iconElement) {
      this.clearIconClassesAndStyles();
      this.renderer.removeChild(this.container, this.iconElement);
      this.iconElement = null;
    }

    if (this.container) {
      this.renderer.removeChild(this.el.nativeElement, this.container);
      this.container = null;
    }
  }
}
