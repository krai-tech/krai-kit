import { TestBed } from '@angular/core/testing';
import { SELECT_INPUTS } from '../directives';
import { SelectStateService } from './select-state.service';

describe('SelectStateService', () => {
  let service: SelectStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SelectStateService,
        { provide: SELECT_INPUTS, useValue: { config: () => ({ search: true }), options: () => [{}, {}] } }
      ]
    });
    service = TestBed.inject(SelectStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial config', () => {
    expect(service.config()).toEqual({ search: true });
  });

  it('should toggle dropdown', () => {
    expect(service.toggleDropdown()).toBeFalsy();
    service.toggleDropdown.set(true);
    expect(service.toggleDropdown()).toBeTruthy();
  });

  it('should update selected items', () => {
    expect(service.selectedItems()).toEqual([]);
    service.selectedItems.set([{ name: 'Option1' }]);
    expect(service.selectedItems()).toEqual([{ name: 'Option1' }]);
  });

  it('should compute isDropdownOpen correctly', () => {
    expect(service.isDropdownOpen()).toBeFalsy();
    service.toggleDropdown.set(true);
    expect(service.isDropdownOpen()).toBeTruthy();
  });

  it('should compute isDropdownClose correctly', () => {
    expect(service.isDropdownClose()).toBeTruthy();
    service.toggleDropdown.set(true);
    expect(service.isDropdownClose()).toBeFalsy();
  });

  it('should compute isSearchEnabled correctly', () => {
    expect(service.isSearchEnabled()).toBeTruthy();
    service.config.set({ search: false });
    expect(service.isSearchEnabled()).toBeFalsy();
  });

  it('should compute selectedItemsLength correctly', () => {
    expect(service.selectedItemsLength()).toBe(0);
    service.selectedItems.set([{ name: 'Option1' }]);
    expect(service.selectedItemsLength()).toBe(1);
  });

  it('should compute displayText correctly', () => {
    service.selectText.set('Select text');
    service.selectTextInSearch.set('Search text');
    service.toggleDropdown.set(true);
    service.isSearchFocused.set(true);
    expect(service.displayText()).toBe('Search text');
    service.isSearchFocused.set(false);
    expect(service.displayText()).toBe('Select text');
  });

  it('should compute areAllSelected correctly', () => {
    expect(service.areAllSelected()).toBeFalsy();
    service.selectedItems.set([{}, {}]);
    expect(service.areAllSelected()).toBeTruthy();
  });
});
