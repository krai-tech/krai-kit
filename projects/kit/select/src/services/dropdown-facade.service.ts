import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { DropdownStatus } from '@krai-tech/kit/common/directives/dropdown';
import { SelectStateService } from './select-state.service';

/**
 * Service responsible for managing the dropdown state.
 * It uses signals and the select state service to control opening and closing of the dropdown.
 */
@Injectable({
  providedIn: 'root'
})
export class DropdownFacadeService {

  /**
   * Current state of the dropdown. By default, it is set to CLOSED.
   */
  readonly status = signal(DropdownStatus.CLOSE);

  /**
   * Computed signal that returns `true` if the dropdown is open.
   */
  readonly isOpen = computed(() => this.status() === DropdownStatus.OPEN);

  /**
   * Injects the SelectStateService to manage the dropdown state.
   */
  private readonly state = inject(SelectStateService)

  /**
   * Constructor that sets up an effect to listen to the state changes
   * and update the dropdown status accordingly.
   * If `toggleDropdown` is `true`, it sets the status to OPEN, otherwise to CLOSE.
   * Allows signal writes within the effect.
   */
  constructor () {
    effect(() => {
      this.state.toggleDropdown() ? this.status.set(DropdownStatus.OPEN) : this.status.set(DropdownStatus.CLOSE);
    }, { allowSignalWrites: true });
  }
}
