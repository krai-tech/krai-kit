import { Directive, inject } from '@angular/core';
import { DROPDOWN, DropdownDirective } from './dropdown.directive';

/**
 * The `DropdownToggleDirective` allows an element to toggle the visibility of a dropdown menu.
 *
 * @example
 * <button kriDropdownToggle>
 *   Toggle Dropdown
 * </button>
 *
 * This directive listens for click events on the element it is applied to and toggles the dropdown menu's visibility.
 */
@Directive({
  selector: '[kriDropdownToggle]',
  exportAs: 'dropdownToggle',
  standalone: true,
  host: {
    '(click)': 'dropdownToggle($event)',
  }
})
export class DropdownToggleDirective {
  /*
   * The dropdown directive
   */
  readonly dropdown: DropdownDirective = inject<DropdownDirective>(DROPDOWN);

  dropdownToggle(event: MouseEvent): void {
    event.stopPropagation();

    if (this.dropdown.disabled()) {
      return;
    }

    this.dropdown.toggle()
  }
}
