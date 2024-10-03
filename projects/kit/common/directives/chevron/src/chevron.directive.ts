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

export const CHEVRON = createTokenFactory(() => new ChevronDirective());

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
  showChevron: InputSignal<boolean> = input<boolean>(false);

  direction: InputSignal<ChevronDirection> = input<ChevronDirection>('down');

  isAnimated: InputSignal<boolean> = input<boolean>(true);

  private readonly dropdown = inject(DROPDOWN, { optional: true});

  /**
   * Reference to the host input element.
   */
  private readonly elRef = inject(ElementRef)

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
   * Reference to the icon element.
   */
  private iconRef: ComponentRef<any> | undefined;

  constructor () {
    effect(() => {
      this.dropdown?.isOpen() ? this.changeChevronDirection('up') : this.changeChevronDirection('down');
    });
  }

  ngOnInit(): void {
    this.parent = this.elRef.nativeElement.parentNode;
    this.iconRef = this.createIcon()
    this.container = this.create(this.iconRef)
  }

  private create(iconRef: ComponentRef<IconComponent>): HTMLElement {
    const container = this.renderer.createElement('span');
    this.renderer.addClass(container, 'kri-chevron');
    this.renderer.appendChild(container, iconRef.location.nativeElement);
    this.renderer.appendChild(this.parent, container);
    return container
  }

  private createIcon(): ComponentRef<IconComponent> {
    const iconRef = this.viewContainerRef.createComponent(IconComponent);
    iconRef.setInput('icon', 'chevron-down');
    iconRef.setInput('color', '#9C9EA9');
    iconRef.changeDetectorRef.detectChanges();
    return iconRef
  }

  private changeChevronDirection(direction: ChevronDirection): void {
    this.iconRef?.setInput('icon', `chevron-${direction}`);
    this.iconRef?.changeDetectorRef.detectChanges();
  }

  private clear(): void {
    const chevron = this.parent?.querySelector('.kri-chevron');
    if (chevron) {
      this.renderer.removeChild(this.parent, chevron)
      this.container = undefined
    }
  }

  ngOnDestroy(): void {
    this.clear()
  }
}
