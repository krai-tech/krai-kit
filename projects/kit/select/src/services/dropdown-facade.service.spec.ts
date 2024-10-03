import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { signal } from '@angular/core';
import { DropdownFacadeService } from './dropdown-facade.service';
import { DropdownStatus } from '@krai-tech/kit/common/directives/dropdown';
import { SelectStateService } from './select-state.service';

describe('DropdownFacadeService', () => {
  let service: DropdownFacadeService;
  let state: SelectStateService;
  let mockSelectStateService: Partial<SelectStateService>;

  beforeEach(() => {
    mockSelectStateService = {
      toggleDropdown: signal(false)
    } as Partial<SelectStateService>;

    TestBed.configureTestingModule({
      providers: [
        DropdownFacadeService,
        { provide: SelectStateService, useValue: mockSelectStateService }
      ]
    });

    state = TestBed.inject(SelectStateService) as SelectStateService;
    service = TestBed.inject(DropdownFacadeService);
  });

  it('should initialize with the dropdown status as CLOSED', () => {
    expect(service.status()).toBe(DropdownStatus.CLOSE);
    expect(service.isOpen()).toBe(false);
  });

  it('should update the status to OPEN when toggleDropdown is true', fakeAsync(() => {
    state.toggleDropdown.set(true);
    tick();
    expect(service.status()).toBe(DropdownStatus.OPEN);
    expect(service.isOpen()).toBe(true);
  }));

  it('should update the status to CLOSE when toggleDropdown is false', fakeAsync(() => {
    state.toggleDropdown.set(false);
    tick();
    expect(service.status()).toBe(DropdownStatus.CLOSE);
    expect(service.isOpen()).toBe(false);
  }));
});
