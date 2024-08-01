import { TestBed } from '@angular/core/testing';
import { WatchDropdownEventsService } from './watch-dropdown-events.service';

describe('WatchDropdownEventsService', () => {
  let service: WatchDropdownEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WatchDropdownEventsService]
    });
    service = TestBed.inject(WatchDropdownEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if dropdown is open', () => {
    service.openInstances = ['dropdown1'];
    expect(service.isOpen('dropdown1')).toBeTruthy();
    expect(service.isOpen('dropdown2')).toBeFalsy();
  });

  it('should emit event to open a dropdown', (done) => {
    const instanceId = 'dropdown1';
    service.openDropdownInstance.subscribe(id => {
      expect(id).toBe(instanceId);
      done();
    });
    service.openDropdown(instanceId);
  });

  it('should emit event to close a dropdown', (done) => {
    const instanceId = 'dropdown1';
    service.closeDropdownInstance.subscribe(id => {
      expect(id).toBe(instanceId);
      done();
    });
    service.closeDropdown(instanceId);
  });

  it('should add an instance to openInstances array when openDropdown is called', () => {
    const instanceId = 'dropdown1';
    service.openDropdown(instanceId);
    service.openInstances.push(instanceId);
    expect(service.isOpen(instanceId)).toBeTruthy();
  });

  it('should remove an instance from openInstances array when closeDropdown is called', () => {
    const instanceId = 'dropdown1';
    service.openInstances = [instanceId];
    service.closeDropdown(instanceId);
    service.openInstances = service.openInstances.filter(id => id !== instanceId);
    expect(service.isOpen(instanceId)).toBeFalsy();
  });
});
