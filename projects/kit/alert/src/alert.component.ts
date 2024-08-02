import {
  Component,
  computed,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertType } from './alert.type';
import { IconComponent, IconTypes } from '@krai-tech/kit/icon';

/**
 * AlertComponent is a reusable component for displaying alert messages with various customizable properties.
 */
@Component({
  selector: 'kri-alert',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
})
export class AlertComponent {
  /**
   * Optional.
   * The type of alert. It can be one of `AlertType`.
   */
  type: InputSignal<AlertType> = input<AlertType>('default');

  /**
   * Optional.
   * Custom CSS class to apply to the alert.
   * Default empty `string`.
   */
  customClass: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * Set icon from `IconTypes` to apply to the alert.
   * Default empty `string`.
   */
  icon: InputSignal<IconTypes> = input<IconTypes>('' as IconTypes);

  /**
   * Optional.
   * Determines if the icon should be shown. Default is `true`.
   */
  showIcon: InputSignal<boolean> = input<boolean>(true);

  /**
   * Optional.
   * The color of the icon.
   * Default is empty `string`.
   */
  iconColor: InputSignal<string> = input<string>('');

  /**
   * Optional.
   * Signal to show close button in the alert.
   * Default is `false`
   */
  showCloseBtn: InputSignal<boolean> = input<boolean>(false);

  /**
   * Event emitter for closing the alert.
   */
  closeAlert: OutputEmitterRef<void> = output();

  /**
   * Getter for showIcon
   * @internal
   * @type {Signal<boolean>}
   */
  isShowIcon: Signal<boolean> = computed((): boolean => {
    return this.type() === 'default' && this.showIcon() || this.showIcon();
  })

  /**
   * Signal state is hidden the alert.
   * @internal
   * @type {WritableSignal<boolean>}
   */
  isHidden: WritableSignal<boolean> = signal(false)

  /**
   * @internal
   * Computes the type of icon based on the alert type.
   */
  iconType: Signal<IconTypes> = computed((): IconTypes => {
    const typeMap: Record<string, string> = {
      info: 'info',
      success: 'ok',
      warning: 'warning',
      danger: 'attention'
    };

    return (typeMap[this.type()] || '') as IconTypes;
  });

  /**
   * @internal
   * Close alert handler
   */
  onCloseAlert(): void {
    this.closeAlert.emit()
    this.isHidden.set(true)
  }
}
