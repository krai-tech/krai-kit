import { TestBed } from '@angular/core/testing';
import { DestroyRef, ElementRef, QueryList } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectService } from './select.service';
import { SelectStateService } from './select-state.service';
import { WatchDropdownEventsService } from './watch-dropdown-events.service';
import { SELECT_INPUTS, SELECT_OUTPUT } from '../directives';
import { SelectConfig } from '../select.type';

jest.mock('lodash/isEqual', () => ({
  __esModule: true,
  default: jest.fn((a, b) => JSON.stringify(a) === JSON.stringify(b)),
}));

describe('SelectService', () => {
  let service: SelectService;
  let stateService: SelectStateService;
  let watchDropdownEventsService: WatchDropdownEventsService;
  let destroyRef: DestroyRef;
  let selectInputs: any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    const destroyRefMock = { destroy : jest.fn() };
    const selectInputsMock = {
      options : jest.fn(),
      config  : jest.fn(),
      id      : jest.fn(),
    };
    const selectOutputsMock = {
      selectOpen  : { emit : jest.fn() },
      selectClose : { emit : jest.fn() },
    };

    TestBed.configureTestingModule({
      providers : [
        SelectService,
        SelectStateService,
        WatchDropdownEventsService,
        { provide : DestroyRef, useValue : destroyRefMock },
        { provide : SELECT_INPUTS, useValue : selectInputsMock },
        { provide : SELECT_OUTPUT, useValue : selectOutputsMock },
      ],
    });

    service = TestBed.inject(SelectService);
    stateService = TestBed.inject(SelectStateService);
    watchDropdownEventsService = TestBed.inject(WatchDropdownEventsService);
    destroyRef = TestBed.inject(DestroyRef);
    selectInputs = TestBed.inject(SELECT_INPUTS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('updateAvailableItems', () => {
    it('should update available items based on options and config', () => {
      const options = [{ name : 'Option1' }, { name : 'Option2' }];
      const config: SelectConfig = {
        customComparator : (a, b) => a.name.localeCompare(b.name),
        displayKey       : 'name',
      };

      selectInputs.options.mockReturnValue(options);
      stateService.config.set(config);

      service.updateAvailableItems();

      expect(stateService.availableItems()).toEqual(options.sort(config.customComparator));
    });
  });

  describe('isItemSelected', () => {
    it('should return true if the item is selected', () => {
      const item = { name : 'Option1' };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.selectedItems.set(selectedItems);

      const result = service.isItemSelected(item);

      expect(result).toBe(true);
    });

    it('should return false if the item is not selected', () => {
      const item = { name : 'Option3' };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.selectedItems.set(selectedItems);

      const result = service.isItemSelected(item);

      expect(result).toBe(false);
    });

    it('should return false if the item is disabled', () => {
      const item = { name : 'Option1', disabled : true };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.selectedItems.set(selectedItems);

      const result = service.isItemSelected(item);

      expect(result).toBe(false);
    });
  });

  describe('watchDropdownEvents', () => {
    it('should watch for dropdown open and close events', () => {
      const openSubject = new Subject<string>();
      const closeSubject = new Subject<string>();

      watchDropdownEventsService.openDropdownInstance = openSubject;
      watchDropdownEventsService.closeDropdownInstance = closeSubject;

      service.watchDropdownEvents(destroyRef);

      const openSpy = jest.spyOn(service as any, 'handleDropdownEvent');
      const closeSpy = jest.spyOn(service as any, 'handleDropdownEvent');

      openSubject.next('instance1');
      expect(openSpy).toHaveBeenCalledWith('instance1', true);

      closeSubject.next('instance1');
      expect(closeSpy).toHaveBeenCalledWith('instance1', false);
    });
  });

  describe('setDisplayText', () => {
    it('should set the display text based on selected items', () => {
      const config: SelectConfig = { displayKey : 'name' };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.config.set(config);
      stateService.selectedItems.set(selectedItems);

      service.setDisplayText();

      expect(stateService.selectText()).toBe('Option1, Option2');
    });

    it('should use displayFn if provided', () => {
      const config: SelectConfig = {
        displayFn  : item => `Display: ${item.name}`,
        displayKey : 'name',
      };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.config.set(config);
      stateService.selectedItems.set(selectedItems);

      service.setDisplayText();

      expect(stateService.selectText()).toBe('Display: Option1, Display: Option2');
    });
  });

  describe('setNotFoundState', () => {
    it('should set showNotFound state based on available options and selected items', () => {
      const availableOptions = { length : 0 } as QueryList<ElementRef>;
      const options = [{ name : 'Option1' }, { name : 'Option2' }];
      stateService.selectedItems.set(options);
      selectInputs.options.mockReturnValue(options);

      service.setNotFoundState(availableOptions);

      expect(stateService.showNotFound()).toBe(false);

      stateService.selectedItems.set([]);
      service.setNotFoundState(availableOptions);

      expect(stateService.showNotFound()).toBe(true);
    });
  });

  describe('toggleItem', () => {
    it('should toggle the selection of an item', () => {
      stateService.toggleDropdown.set(true)
      const item = { name : 'Option1' };
      const selectedItems = [{ name : 'Option2' }];
      const config: SelectConfig = { customComparator : (a, b) => a.name.localeCompare(b.name) };

      const result = service.toggleItem(item, selectedItems, config, false);

      expect(result).toEqual([item].sort(config.customComparator));
      expect(stateService.toggleDropdown()).toBe(false);
    });

    it('should delete all items in selectedItems and leave only the one that was selected', () => {
      stateService.toggleDropdown.set(true)
      const item = { name : 'Option1' };
      const selectedItems = [{ name : 'Option1' }, { name : 'Option2' }];
      const config: SelectConfig = { customComparator : (a, b) => a.name.localeCompare(b.name) };

      const result = service.toggleItem(item, selectedItems, config, false);

      expect(result).toEqual([{ name : 'Option1' }]);
      expect(stateService.toggleDropdown()).toBe(false);
    });

    it('should allow multiple selection if multiple is true', () => {
      stateService.toggleDropdown.set(true)
      const item = { name : 'Option1' };
      const selectedItems = [{ name : 'Option2' }];
      const config: SelectConfig = { customComparator : (a, b) => a.name.localeCompare(b.name) };

      const result = service.toggleItem(item, selectedItems, config, true);

      expect(result).toEqual([...selectedItems, item].sort(config.customComparator));
      expect(stateService.toggleDropdown()).toBe(true);
    });
  });

  describe('toggleSelectAll', () => {
    it('should select all items if selectAll is true', () => {
      const availableItems = [{ name : 'Option1' }, { name : 'Option2' }];
      const config: SelectConfig = { customComparator : (a, b) => a.name.localeCompare(b.name) };

      const result = service.toggleSelectAll(true, availableItems, config);

      expect(result).toEqual(availableItems.sort(config.customComparator));
    });

    it('should clear all items if selectAll is false', () => {
      const availableItems = [{ name : 'Option1' }, { name : 'Option2' }];
      const config: SelectConfig = { customComparator : (a, b) => a.name.localeCompare(b.name) };

      const result = service.toggleSelectAll(false, availableItems, config);

      expect(result).toEqual([]);
    });
  });

  describe('handleDropdownEvent', () => {
    it('should handle dropdown open and close events', () => {
      const instanceId = 'instance1';
      selectInputs.id.mockReturnValue(instanceId);

      const updateSpy = jest.spyOn(service as any, 'updateDropdownStateAndEmitEvents');

      (service as any).handleDropdownEvent(instanceId, true);
      expect(stateService.toggleDropdown()).toBe(true);
      expect(updateSpy).toHaveBeenCalled();

      (service as any).handleDropdownEvent(instanceId, false);
      expect(stateService.toggleDropdown()).toBe(false);
      expect(updateSpy).toHaveBeenCalled();
    });
  });

  describe('updateConfig', () => {
    it('should update the current configuration with the default configuration values', () => {
      const defaultConfig: SelectConfig = {
        displayKey: 'name',
        search: true,
        placeholder: 'Select',
        limitTo: 5,
        customComparator: undefined,
        noResultsFound: 'No results found',
        moreText: 'more',
        searchOnKey: 'name',
        selectAllLabel: 'Select all',
        enableSelectAll: true,
        direction: 'bottom',
        size: 'medium'
      };

      const currentConfig: SelectConfig = {
        displayKey: 'id',
        search: false,
        placeholder: 'Choose',
        limitTo: 10,
        customComparator: undefined,
        noResultsFound: 'Nothing found',
        moreText: 'additional',
        searchOnKey: 'id',
        selectAllLabel: 'Select everything',
        enableSelectAll: false,
        direction: 'top',
        size: 'large'
      };

      selectInputs.config.mockReturnValue(currentConfig);

      service.updateConfig(defaultConfig);

      expect(stateService.config()).toEqual({ ...defaultConfig, ...currentConfig });
    });

    it('should set the configuration to default if the current configuration is empty', () => {
      const defaultConfig: SelectConfig = {
        displayKey: 'name',
        search: true,
        placeholder: 'Select',
        limitTo: 5,
        customComparator: undefined,
        noResultsFound: 'No results found',
        moreText: 'more',
        searchOnKey: 'name',
        selectAllLabel: 'Select all',
        enableSelectAll: true,
        direction: 'bottom',
        size: 'medium'
      };

      selectInputs.config.mockReturnValue({});

      service.updateConfig(defaultConfig);

      expect(stateService.config()).toEqual(defaultConfig);
    });
  });
})
