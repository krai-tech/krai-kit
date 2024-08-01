import { DestroyRef, ElementRef, inject, Injectable, QueryList } from '@angular/core';
import isEqual from 'lodash/isEqual';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SelectStateService } from './select-state.service';
import { WatchDropdownEventsService } from './watch-dropdown-events.service';
import { SELECT_INPUTS, SELECT_OUTPUT } from '../directives';
import { SelectConfig } from '../select.type';

/**
 * Service to handle the logic and state management for the select component.
 */
@Injectable()
export class SelectService {
  private inputs = inject(SELECT_INPUTS);
  private output = inject(SELECT_OUTPUT);
  private state = inject(SelectStateService);
  private watchDropdownEventsService = inject(WatchDropdownEventsService);

  /**
   * Updates the available items based on the options and configuration.
   */
  updateAvailableItems(): void {
    const options = this.inputs.options();
    const config = this.state.config();
    if (options && config) {
      this.state.availableItems.set([...options.sort(config.customComparator)]);
    }
  }

  /**
   * Checks if the given item is selected.
   * @param item The item to check.
   * @returns True if the item is selected, otherwise false.
   */
  isItemSelected(item: any): boolean {
    if (!item.disabled) {
      return this.state.selectedItems().some(selectedItem => isEqual(selectedItem, item));
    }
    return false;
  }

  /**
   * Watches for dropdown open and close events.
   * @param destroyRef A reference to manage the component's destruction.
   */
  watchDropdownEvents(destroyRef: DestroyRef): void {
    this.watchDropdownEventsService.openDropdownInstance
    .pipe(takeUntilDestroyed(destroyRef))
    .subscribe(instanceId => this.handleDropdownEvent(instanceId, true));

    this.watchDropdownEventsService.closeDropdownInstance
    .pipe(takeUntilDestroyed(destroyRef))
    .subscribe(instanceId => this.handleDropdownEvent(instanceId, false));
  }

  /**
   * Sets the display text for the selected items.
   */
  setDisplayText(): void {
    const config = this.state.config();
    const { displayFn, displayKey = '' } = config;

    const selectedItems = this.state.selectedItems();
    const selectedItemsCount = selectedItems.length;

    let displayText = '';

    if (selectedItemsCount > 0) {
      const displayTexts = selectedItems.map(item =>
        displayFn ? displayFn(item) : item[displayKey]
      );
      displayText = displayTexts.join(', ');
    }

    this.state.selectText.set(displayText);
  }

  /**
   * Sets the "not found" state for the available options.
   * @param availableOptions The available options to check.
   */
  setNotFoundState(availableOptions: QueryList<ElementRef>): void {
    const showNotFound = availableOptions.length === 0 && this.state.selectedItems().length !== this.inputs.options().length;
    this.state.showNotFound.set(showNotFound);
  }

  /**
   * Toggles the selection of an item.
   * @param item The item to toggle.
   * @param selectedItems The current list of selected items.
   * @param config The selection configuration.
   * @param multiple Whether multiple selection is allowed.
   * @returns The updated list of selected items.
   */
  toggleItem(item: any, selectedItems: any[], config: any, multiple: boolean): any[] {
    let updatedSelectedItems = [...selectedItems];

    if (!multiple) {
      updatedSelectedItems = [];
      this.state.toggleDropdown.set(false);
    }

    const itemIndex = updatedSelectedItems.findIndex(selectedItem => isEqual(selectedItem, item));
    if (itemIndex > -1) {
      updatedSelectedItems.splice(itemIndex, 1);
    } else {
      updatedSelectedItems.push(item);
    }

    return updatedSelectedItems.sort(config.customComparator);
  }

  /**
   * Toggles the selection of all items.
   * @param selectAll Whether to select all items.
   * @param availableItems The list of available items.
   * @param config The selection configuration.
   * @returns The updated list of selected items.
   */
  toggleSelectAll(selectAll: boolean, availableItems: any[], config: any): any[] {
    let selectedItems = [];

    if (selectAll) {
      selectedItems = availableItems.filter(item => !('disabled' in item && item.disabled));
    }

    return selectedItems.sort(config.customComparator);
  }

  /**
   * Handles dropdown open and close events.
   * @param instanceId The ID of the instance.
   * @param isOpen Whether the dropdown is open.
   */
  private handleDropdownEvent(instanceId: string, isOpen: boolean): void {
    if (this.inputs.id() === instanceId) {
      this.state.toggleDropdown.set(isOpen);
      this.updateDropdownStateAndEmitEvents();
    }
  }

  /**
   * Changes the state of the dropdown and emits the appropriate event.
   */
  updateDropdownStateAndEmitEvents(): void {
    const isOpen = this.state.isDropdownOpen();
    const instanceId = this.inputs.id();
    const openInstances = this.watchDropdownEventsService.openInstances;

    if (isOpen) {
      openInstances.push(instanceId);
      this.output.selectOpen.emit();
    } else {
      this.state.availableOptionMouseDown.set(false);

      if (this.state.selectedItems().length === 0) {
        this.state.selectText.set('');
      }
      this.output.selectClose.emit();
      const instanceIndex = openInstances.indexOf(instanceId);
      if (instanceIndex !== -1) {
        openInstances.splice(instanceIndex, 1);
      }
    }
  }

  /**
   * Updates the current configuration with the default configuration values.
   * If the current configuration is empty or missing certain keys, those keys
   * will be filled in with values from the default configuration.
   *
   * @param defaultConfig
   */
  updateConfig(defaultConfig: SelectConfig): void {
    const currentConfig = this.inputs.config() || {};
    if (Object.keys(currentConfig).length === 0) {
      this.state.config.set({ ...defaultConfig });
    } else {
      this.state.config.set({ ...defaultConfig, ...currentConfig });
    }
  }
}
