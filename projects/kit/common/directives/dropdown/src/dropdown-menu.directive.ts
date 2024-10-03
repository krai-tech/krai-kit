import { Directive, effect, ElementRef, inject, OnDestroy } from '@angular/core';
import { DROPDOWN, DropdownDirective } from './dropdown.directive';
import { DropdownStatus } from './status.enum';
import { DOCUMENT } from '@angular/common';
import { stopPropagationAndDefault } from '@krai-tech/cdk/utils';

/**
 * The `DropdownMenuDirective` manages the display and closing of a dropdown menu.
 *
 * @example
 * <div kriDropdownMenu>
 *   <!-- Dropdown menu content -->
 * </div>
 *
 * The directive subscribes to changes in the dropdown menu's status using signals.
 * If the menu is open, it adds a click listener to the document to close the menu when clicking outside of it.
 * If the menu is closed, it removes the click listener.
 */
@Directive({
  selector: '[kriDropdownMenu]',
  exportAs: 'dropdownMenu',
  standalone: true,
})
export class DropdownMenuDirective implements OnDestroy {
  /**
   * The dropdown directive
   */
  readonly dropdown = inject<DropdownDirective>(DROPDOWN);

  /**
   * The element reference
   */
  private readonly elementRef = inject(ElementRef);

  /**
   * The Document token for supporting ssr
   */
  private readonly document = inject<Document>(DOCUMENT);

  constructor() {
    effect(() => {
      if (this.dropdown.status() === DropdownStatus.OPEN) {
        this.addDocumentClickListener();
      } else {
        this.removeDocumentClickListener();
      }
    });
  }

  /**
   * Event handler for document clicks.
   * Closes the menu if the click occurs outside of the menu.
   *
   * @param event The click event object.
   */
  private onDocumentClick = (event: MouseEvent): void => {
    stopPropagationAndDefault(event);

    const target = event.target as HTMLElement;

    if (target instanceof HTMLElement && target?.hasAttribute('kriDropdownToggle')) {
      return;
    }

    const clickedInsideDropdown = this.elementRef.nativeElement.contains(target);

    if (!clickedInsideDropdown || (!this.dropdown.allowInsideClick() && clickedInsideDropdown)) {
      this.dropdown.close();
    }
  };

  /**
   * Adds a click listener to the document.
   */
  private addDocumentClickListener(): void {
    this.document.addEventListener('click', this.onDocumentClick, true);
  }

  /**
   * Removes the click listener from the document.
   */
  private removeDocumentClickListener(): void {
    this.document.removeEventListener('click', this.onDocumentClick, true);
  }

  /**
   * Removes the click listener from the document when the directive is destroyed.
   */
  ngOnDestroy(): void {
    this.removeDocumentClickListener();
  }
}
