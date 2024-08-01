import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Service to manage and watch dropdown open and close events.
 *
 * This service provides subjects to emit events for opening and closing dropdown instances,
 * as well as an array to keep track of currently open dropdown instances.
 */
@Injectable({
  providedIn: 'root'
})
export class WatchDropdownEventsService {
  /**
   * Subject that emits the instance ID of the dropdown to be opened.
   */
  openDropdownInstance = new Subject<string>();

  /**
   * Subject that emits the instance ID of the dropdown to be closed.
   */
  closeDropdownInstance = new Subject<string>();

  /**
   * Array to keep track of open dropdown instance IDs.
   */
  openInstances: string[] = [];

  /**
   * Checks if a specific dropdown instance is open.
   *
   * @param instanceId - Instance ID of the dropdown to check.
   * @returns True if the instance is open, otherwise false.
   */
  public isOpen(instanceId: string): boolean {
    return this.openInstances.indexOf(instanceId) > -1;
  }

  /**
   * Emits an event to open a specific dropdown instance.
   *
   * @param instanceId - Instance ID of the dropdown that must be opened.
   */
  public openDropdown(instanceId: string): void {
    this.openDropdownInstance.next(instanceId);
  }

  /**
   * Emits an event to close a specific dropdown instance.
   *
   * @param instanceId - Instance ID of the dropdown that must be closed.
   */
  public closeDropdown(instanceId: string): void {
    this.closeDropdownInstance.next(instanceId);
  }
}
