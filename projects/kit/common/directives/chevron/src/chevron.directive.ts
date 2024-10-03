import {
  ComponentRef,
  Directive, effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnDestroy, OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { createTokenFactory, provide } from '@krai-tech/cdk/utils';
import { ChevronDirection } from './chevron-direction.type';
import { IconComponent } from '@krai-tech/kit/icon';
import { DROPDOWN } from '../../dropdown/src';

/**
 * Token factory for the `ChevronDirective`, used to create a unique and injectable instance of the directive.
 */
export const CHEVRON = createTokenFactory(() => new ChevronDirective());

/**
 * A directive that dynamically adds a chevron icon to an input element
 * and updates the chevron's direction based on dropdown state.
 *
 * The chevron is appended to the input's parent container and can be animated
 * and have its direction (up or down) updated.
 *
 * @host
 * - `[attr.data-chevron-animated]`: Indicates whether the chevron is animated.
 * - `[attr.data-chevron-direction]`: Displays the current direction of the chevron.
 *
 * @provider Provides the `CHEVRON` token.
 */
@Directive({
  selector: '[kriChevron]',
  standalone: true,
  host: {
    '[attr.data-chevron-animated]': 'isAnimated()',
    '[attr.data-chevron-direction]': 'direction()',
  },
  providers: [provide(CHEVRON, ChevronDirective)]
})
export class ChevronDirective implements OnInit, OnDestroy {

  /**
   * Controls whether the chevron icon should be visible.
   */
  showChevron: InputSignal<boolean> = input<boolean>(false);

  /**
   * Controls the direction of the chevron (up or down).
   */
  direction: InputSignal<ChevronDirection> = input<ChevronDirection>('down');

  /**
   * Controls whether the chevron icon should be animated.
   */
  isAnimated: InputSignal<boolean> = input<boolean>(true);

  /**
   * Optional dropdown state injection to synchronize chevron direction
   * with the dropdown's open or closed state.
   */
  private readonly dropdown = inject(DROPDOWN, { optional: true});

  /**
   * Reference to the host input element.
   */
  private readonly elRef = inject(ElementRef);

  /**
   * Renderer2 instance for DOM manipulation.
   */
  private readonly renderer = inject(Renderer2);

  /**
   * ViewContainerRef for creating dynamic components.
   */
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * Parent element of the input element.
   */
  private parent: HTMLElement | undefined;

  /**
   * Container element for the chevron.
   */
  private container: HTMLElement | undefined;

  /**
   * Reference to the dynamically created icon component.
   */
  private iconRef: ComponentRef<any> | undefined;

  /**
   * @internal
   * Constructor where the chevron's direction is adjusted
   * based on the dropdown's open state using reactive effects.
   */
  constructor () {
    effect(() => {
      this.dropdown?.isOpen() ? this.changeChevronDirection('up') : this.changeChevronDirection('down');
    });
  }

  /**
   * @internal
   * Initializes the chevron directive by setting up the parent element,
   * creating the icon, and appending the chevron container to the parent.
   */
  ngOnInit(): void {
    this.parent = this.elRef.nativeElement.parentNode;
    this.iconRef = this.createIcon();
    this.container = this.create(this.iconRef);
  }

  /**
   * Creates a container element and appends the icon to it.
   *
   * @param iconRef - Reference to the dynamically created icon component.
   * @returns The created container element.
   */
  private create(iconRef: ComponentRef<IconComponent>): HTMLElement {
    const container = this.renderer.createElement('span');
    this.renderer.addClass(container, 'kri-chevron');
    this.renderer.appendChild(container, iconRef.location.nativeElement);
    this.renderer.appendChild(this.parent, container);
    return container;
  }

  /**
   * Creates the chevron icon component dynamically and sets its default properties.
   *
   * @returns The reference to the dynamically created icon component.
   */
  private createIcon(): ComponentRef<IconComponent> {
    const iconRef = this.viewContainerRef.createComponent(IconComponent);
    iconRef.setInput('icon', 'chevron-down');
    iconRef.setInput('color', '#9C9EA9');
    iconRef.changeDetectorRef.detectChanges();
    return iconRef;
  }

  /**
   * Updates the chevron's direction based on the provided direction value.
   *
   * @param direction - The new direction for the chevron ('up' or 'down').
   */
  private changeChevronDirection(direction: ChevronDirection): void {
    this.iconRef?.setInput('icon', `chevron-${direction}`);
    this.iconRef?.changeDetectorRef.detectChanges();
  }

  /**
   * Clears the chevron from the DOM by removing it from the parent element.
   */
  private clear(): void {
    const chevron = this.parent?.querySelector('.kri-chevron');
    if (chevron) {
      this.renderer.removeChild(this.parent, chevron);
      this.container = undefined;
    }
  }

  /**
   * @internal
   * Lifecycle hook that is called when the directive is destroyed.
   * Removes the chevron from the DOM.
   */
  ngOnDestroy(): void {
    this.clear();
  }
}
