import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Renderer2,
} from '@angular/core';
import { ButtonSize, ButtonAppearance, ButtonType } from './button.type';
import { IsDisabledDirective } from '@krai-tech/cdk/directives/is-disabled';

const SELECTOR_CLASS_PAIR: { selector: string; class: string }[] = [
  {
    selector: 'button[kriButtonPrimary]',
    class: 'kri-btn-primary'
  },
  {
    selector: 'button[kriButtonSecondary]',
    class: 'kri-btn-secondary'
  },
  {
    selector: 'button[kriButtonTertiary]',
    class: 'kri-btn-tertiary'
  },
  {
    selector: 'button[kriButtonGhost]',
    class: 'kri-btn-ghost'
  },
  {
    selector: 'button[kriButtonGhostColor]',
    class: 'kri-btn-ghost-color'
  },
  {
    selector: 'button[kriButtonLink]',
    class: 'kri-btn-link'
  }
];

/**
 * Directive to add custom behavior to buttons.
 *
 * This directive is applied to buttons with various styles such as primary, secondary, tertiary, ghost, and link.
 * It also integrates the `ButtonIconDirective` to manage the icon properties and the `IsDisabledDirective` to handle the disabled state of the button.
 */
@Directive({
  standalone : true,
  selector: 'button[kriButton], button[kriButtonPrimary], button[kriButtonSecondary], button[kriButtonTertiary], button[kriButtonGhost], button[kriButtonGhostColor], button[kriButtonLink]',
  host: {
    class: 'kri-btn'
  },
  hostDirectives: [
    {
      directive: IsDisabledDirective,
      inputs: ['disabled']
    }
  ]
})
export class ButtonDirective {
  /**
   * Optional.
   * Specifies the type of button.
   */
  type: InputSignal<ButtonType> = input<ButtonType>('button');

  /**
   * Optional.
   * Specifies the appearance of the button.
   */
  appearance: InputSignal<ButtonAppearance> = input<ButtonAppearance>('primary');

  /**
   * Optional.
   * Specifies the size of the button.
   */
  size: InputSignal<ButtonSize> = input<ButtonSize>('32');

  /**
   * Optional.
   * Specifies whether the button should be full width.
   */
  fullWidth: InputSignal<boolean> = input<boolean>(false);

  /**
   * Optional.
   * Specifies whether the button is disabled.
   */
  disabled: InputSignal<boolean> = input<boolean>(false);

  /**
   * Event emitted when the button is clicked.
   */
  buttonClick: OutputEmitterRef<MouseEvent> = output<MouseEvent>()

  /**
   * @internal
   * Constructs a new instance of the `ButtonDirective`.
   *
   * @param el - The element reference of the host element.
   * @param renderer - The renderer for manipulating the DOM.
   */
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applySelectorClassPair()
  }

  /**
   * @internal
   * Binds classes to the host element based on its attributes.
   *
   * @returns A string containing the classes to be applied to the host element.
   */
  @HostBinding('class')
  get hostClasses(): string {
    const hasButton = this.el.nativeElement.hasAttribute('kriButton');
    const baseClasses = `kri-btn-${this.size()}`;
    const widthClass = this.fullWidth() ? 'kri-btn-full-width' : '';
    return hasButton ? `${baseClasses} kri-btn-${this.appearance()} ${widthClass}` : `${baseClasses} ${widthClass}`;
  }

  /**
   * @internal
   * Handles the click event on the host element.
   *
   * @param event - The mouse event.
   */
  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.disabled()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      this.buttonClick.emit(event);
    }
  }

  /**
   * @internal
   * Applies the appropriate class to the host element based on its selector.
   */
  private applySelectorClassPair() {
    const hostElement: HTMLElement = this.el.nativeElement;
    SELECTOR_CLASS_PAIR.forEach(pair => {
      if (hostElement.matches(pair.selector)) {
        this.renderer.addClass(hostElement, pair.class);
      }
    });
  }
}
