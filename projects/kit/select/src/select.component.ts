import {
  AfterViewInit,
  Component,
  DestroyRef,
  effect,
  ElementRef,
  forwardRef,
  HostListener,
  inject,
  OnInit,
  QueryList,
  untracked,
  ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AbstractControl } from '@krai-tech/cdk/classes';
import { InputTextDirective, InputTextLabelDirective } from '@krai-tech/kit/input-text';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CheckboxComponent } from '@krai-tech/kit/checkbox';
import { SelectOutputDirective, SelectInputsDirective, SELECT_INPUTS, SELECT_OUTPUT } from './directives';
import { SelectService, SelectStateService } from './services';
import { FilterByPipe, LimitToPipe } from './pipes';
import { config as defaultConfig } from './select.config';
import { FocusDirective } from '@krai-tech/cdk/directives/focus';
import { ResetInputDirective } from '@krai-tech/kit/common/directives/reset-input';

/**
 * `SelectComponent` is a custom select dropdown component.
 * It provides features such as multiple selection, custom templates for options,
 * and integration with Angular forms.
 *
 * Additionally, it extends functionality with the following directives:
 * - `SelectInputsDirective` for manage inputs events.
 * - `SelectOutputDirective` for manage output events.
 */
@Component({
  selector: 'kri-select',
  standalone: true,
  imports : [
    CommonModule, FormsModule, FilterByPipe, LimitToPipe, InputTextDirective, CheckboxComponent, FocusDirective,
    ResetInputDirective, InputTextLabelDirective
  ],
  host: {
    '(click)': 'state.clickedInside.set(true)',
    '(focus)': 'focus()',
    '(document:click)': 'clickOutside()',
  },
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  hostDirectives: [
    {
      directive: SelectInputsDirective,
      inputs: ['options', 'config', 'multiple', 'disabled', 'error', 'id', 'floatLabel', 'optionItemTemplate', 'notFoundTemplate', 'selectTemplate'],
    },
    {
      directive: SelectOutputDirective,
      outputs: ['selectChange', 'searchChange', 'selectOpen', 'selectClose'],
    }
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    SelectService,
    SelectStateService
  ]
})
export class SelectComponent extends AbstractControl implements OnInit, AfterViewInit {
  /**
   * @internal
   * Query list of available options elements.
   */
  @ViewChildren('availableOption')
  availableOptions!: QueryList<ElementRef>;

  /**
   * Input directives for the select component.
   */
  readonly inputs = inject(SELECT_INPUTS);

  /**
   * Output directives for the select component.
   */
  readonly output = inject(SELECT_OUTPUT);

  /**
   * @internal
   * State service for managing select component state.
   */
  readonly state = inject(SelectStateService);

  /**
   * @internal
   * Select service for handling select component logic.
   */
  readonly selectService = inject(SelectService);

  /**
   * @internal
   * reference for managing component destruction.
   */
  private destroyRef = inject(DestroyRef);

  /**
   * @internal
   * Sets the value of the select component and triggers change detection.
   * @param val The value to set.
   */
  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  /**
   * @internal
   * Gets the value of the select component.
   * @returns The current value.
   */
  get value(): any {
    return this._value;
  }

  /**
   * @internal
   */
  constructor() {
    super();
    effect((): void => {
      const { options } = this.inputs;
      const { config, selectedItems } = this.state;
      if (options() && config()) {
        selectedItems.set([]);
        this.initAvailableItems();
      }
    }, { allowSignalWrites: true });
  }

  /**
   * @internal
   */
  ngOnInit(): void {
    this.selectService.updateConfig(defaultConfig)
    this.selectService.watchDropdownEvents(this.destroyRef);
    this.initAvailableItems();
  }

  /**
   * @internal
   */
  ngAfterViewInit(): void {
    this.availableOptions.changes.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(() => this.selectService.setNotFoundState(this.availableOptions));
  }

  /**
   * @internal
   * Writes the value to the component.
   * @param value The value to write.
   * @param internal Whether the value change is internal.
   */
  override writeValue(value: any, internal?: boolean): void {
    const { multiple} = this.inputs
    const { selectedItemsLength } = this.state
    const filteredValue = Array.isArray(value)
      ? value.filter(item => !item.disabled)
      : value && !value.disabled ? [value] : [];

    this.value = Array.isArray(filteredValue)
      ? (multiple() ? filteredValue : filteredValue[0] ?? filteredValue)
      : filteredValue;

    if (selectedItemsLength() === 0) {
      this.initSelectedItems();
    }

    if (!internal) {
      this.reset();
    }
  }

  /**
   * @internal
   * Handles the blur event to close the dropdown if necessary.
   * @param event The blur event.
   */
  @HostListener('blur')
  blur(event: Event): void {
    const { availableOptionMouseDown } = this.state
    if (!availableOptionMouseDown() && event instanceof KeyboardEvent) {
      this.state.toggleDropdown.set(false);
      this.selectService.updateDropdownStateAndEmitEvents();
    }
  }

  /**
   * @internal
   * Focuses the component and opens the dropdown if not disabled.
   */
  focus(): void {
    const { disabled } = this.inputs
    const { toggleDropdown } = this.state
    if (!disabled()) {
      toggleDropdown.set(true);
      this.selectService.updateDropdownStateAndEmitEvents();
    }
  }

  /**
   * @internal
   * Handles click events outside the component to close the dropdown.
   */
  clickOutside(): void {
    const { clickedInside, selectedItemsLength, toggleDropdown, selectText, selectTextInSearch } = this.state
    if (!clickedInside()) {
      toggleDropdown.set(false);
      this.selectService.updateDropdownStateAndEmitEvents();
      if (selectedItemsLength() === 0) {
        selectText.set('');
      }
      selectTextInSearch.set('');
    }
    clickedInside.set(false);
  }

  /**
   * @internal
   * Toggles the selection of an item.
   * @param item The item to toggle.
   */
  toggleItem(item: any): void {
    const { multiple } = this.inputs
    const { config, selectedItems, areAllSelected, selectAll } = this.state
    if (!item.disabled) {
      const updatedSelectedItems = this.selectService.toggleItem(
        item,
        selectedItems(),
        config(),
        multiple()
      );

      selectedItems.set(updatedSelectedItems);
      selectAll.set(areAllSelected());
      this.updateDisplayText();
      this.updateAndEmitValueChanges();
      if (!multiple()) {
        this.closeSelectDropdown();
      }
    }
  }

  /**
   * @internal
   * Toggles the selection of all items.
   * @param close Whether to close the dropdown.
   * @param emitChange Whether to emit change events.
   */
  toggleSelectAll({ close, emitChange }: { close?: boolean; emitChange?: boolean }): void {
    const { selectAll, availableItems, config,  selectedItems} = this.state
    const selectAllState = !selectAll();
    selectAll.set(selectAllState);

    const updatedSelectedItems = this.selectService.toggleSelectAll(
      selectAllState,
      availableItems(),
      config()
    );

    selectedItems.set(updatedSelectedItems);

    if (emitChange) {
      this.updateAndEmitValueChanges();
    }

    if (close) {
      this.closeSelectDropdown();
    }

    this.selectService.updateDropdownStateAndEmitEvents();
  }

  /**
   * @internal
   * Handles the click event on the dropdown to open or close it.
   * @param event The mouse event.
   */
  onDropdownClick(event: MouseEvent): void {
    event.stopPropagation();
    const { disabled } = this.inputs

    if (!disabled()) {
      const { isDropdownClose, isSearchEnabled } = this.state

      if (isDropdownClose()) {
        this.openSelectDropdown();
      } else if (!isSearchEnabled()) {
        this.closeSelectDropdown();
      }
    }
  }

  /**
   * @internal
   * Handles the blur event for the search input.
   */
  onSearchBlur(): void {
    const { multiple } = this.inputs
    const { isSearchEnabled, isSearchFocused} = this.state
    isSearchFocused.set(false);
    if (isSearchEnabled() && !multiple()) {
      this.closeSelectDropdown();
    }
  }

  /**
   * @internal
   * Handles the focus event for the search input.
   */
  onSearchFocus(): void {
    const { isSearchEnabled, selectTextInSearch, isSearchFocused } = this.state
    isSearchFocused.set(true);
    if (isSearchEnabled()) {
      selectTextInSearch.set('');
    }
  }

  /**
   * @internal
   * Handles changes in the search text.
   */
  searchTextChanged(): void {
    const { isSearchEnabled, selectTextInSearch } = this.state
    if (isSearchEnabled()) {
      this.output.searchChange.emit(selectTextInSearch());
    }
  }

  /**
   * @internal
   * Handles changes input in the search text.
   */
  searchTextInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.state.selectTextInSearch.set(input.value);
  }

  /**
   * @internal
   * Initializes available items based on the inputs.
   */
  private initAvailableItems(): void {
    this.selectService.updateAvailableItems()
    this.initSelectedItems();
  }

  /**
   * @internal
   * Initializes the selected items based on the current value.
   */
  private initSelectedItems(): void {
    const { selectedItems } = this.state
    if (this.value && this.value !== '') {
      if (Array.isArray(this.value)) {
        selectedItems.set(this.value);
      } else {
        selectedItems.set([this.value]);
      }
    } else {
      selectedItems.set([]);
      this.value = [];
    }
    this.selectService.setDisplayText();
  }


  /**
   * @internal
   * Resets the component state based on the configuration.
   */
  reset(): void {
    const { config, selectedItems, selectTextInSearch, selectAll } = this.state
    if (config()) {
      selectedItems.set([]);
      selectTextInSearch.set('')
      selectAll.set(false)
      this.initAvailableItems()
    }
  }

  /**
   * @internal
   * Updates the display text and emits change events.
   */
  private updateAndEmitValueChanges(): void {
    untracked((): void => {
      const { selectedItems } = this.state
      this.writeValue(selectedItems(), true);
      this.output.selectChange.emit({ value: this.value });
      this.updateDisplayText();
    });
  }

  /**
   * @internal
   * Opens the dropdown.
   */
  private openSelectDropdown(): void {
    const { toggleDropdown } = this.state
    toggleDropdown.set(true);
    this.selectService.updateDropdownStateAndEmitEvents();
  }

  /**
   * @internal
   * Closes the dropdown.
   */
  private closeSelectDropdown(): void {
    const { toggleDropdown } = this.state
    toggleDropdown.set(false);
    this.selectService.setDisplayText();
    this.selectService.updateDropdownStateAndEmitEvents();
  }

  /**
   * @internal
   * Updates the display text and emits change events.
   */
  private updateDisplayText(): void {
    const { selectedItems, selectText } = this.state
    if (selectedItems().length === 0) {
      selectText.set('');
    } else {
      this.selectService.setDisplayText();
    }
  }
}

