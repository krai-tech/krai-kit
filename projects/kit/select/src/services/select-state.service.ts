import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { SELECT_INPUTS } from '../directives';
import { SelectConfig } from '../select.type';

/**
 * Service to manage the state for the select component.
 */
@Injectable()
export class SelectStateService {
  private readonly inputs = inject(SELECT_INPUTS);

  /**
   * The configuration settings for the select component.
   */
  config: WritableSignal<SelectConfig> = signal<SelectConfig>(this.inputs.config());

  /**
   * Boolean signal to toggle the dropdown open or closed.
   */
  toggleDropdown: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Signal to hold the available items for selection.
   */
  availableItems: WritableSignal<any[]> = signal<any[]>([]);

  /**
   * Signal to hold the selected items.
   */
  selectedItems: WritableSignal<any[]> = signal<any[]>([]);

  /**
   * Boolean signal to track if the component was clicked inside.
   */
  clickedInside: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Boolean signal to show or hide the "not found" state.
   */
  showNotFound: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Boolean signal to track if an option is being mouse-downed.
   */
  availableOptionMouseDown: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Boolean signal to track if the search input is focused.
   */
  isSearchFocused: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Boolean signal to track if all items are selected.
   */
  selectAll: WritableSignal<boolean> = signal<boolean>(false);

  /**
   * Signal to hold the display text for the selected items.
   */
  selectText: WritableSignal<string> = signal<string>('');

  /**
   * Signal to hold the search text input.
   */
  selectTextInSearch: WritableSignal<string> = signal<string>('');

  /**
   * Computed signal to check if the dropdown is open.
   */
  isDropdownOpen: Signal<boolean> = computed(() => this.toggleDropdown());

  /**
   * Computed signal to check if the dropdown is closed.
   */
  isDropdownClose: Signal<boolean> = computed(() => !this.toggleDropdown());

  /**
   * Computed signal to check if the search is enabled.
   */
  isSearchEnabled: Signal<boolean> = computed(() => this.config().search ?? false);

  /**
   * Computed signal to get the length of the selected items.
   */
  selectedItemsLength: Signal<number> = computed(() => this.selectedItems().length);

  /**
   * Computed signal to get the display text based on the current state.
   */
  displayText: Signal<string> = computed((): string => {
    if (this.isDropdownOpen() && this.isSearchEnabled() && this.isSearchFocused()) {
      return this.selectTextInSearch();
    }
    return this.selectText();
  });

  /**
   * Computed signal to check if all items are selected.
   */
  areAllSelected: Signal<boolean> = computed((): boolean => {
    return this.selectedItems().length === this.inputs.options().length;
  });
}
