import {
  AfterContentInit,
  Component, effect, ElementRef,
  forwardRef,
  input,
  InputSignal,
  OnInit, output, OutputEmitterRef, signal, ViewChild, WritableSignal
} from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import uniqueId from 'lodash/uniqueId';
import { AbstractControl } from '@krai-tech/cdk/classes';

/**
 * CheckboxComponent is an extension of the standard checkbox element with additional theming capabilities.
 */
@Component({
  selector: 'kri-checkbox',
  standalone: true,
  imports: [CommonModule, NgIf],
  host: {
    '(click)': 'toggle()',
  },
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent extends AbstractControl implements OnInit, AfterContentInit {
  /**
   * @internal
  * Element reference to the content projected into the <ng-content> slot.
  * Used to check if there is any content inside the <ng-content> element.
  */
  @ViewChild('content', { static: true, read: ElementRef }) content: ElementRef | undefined;

  /**
   * Optional.
   * Name of the checkbox group.
   */
  name: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Label of the checkbox.
   */
  label: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Checkbox custom color
   */
  color: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * When present, it specifies that the element should be disabled.
   */
  disabled: InputSignal<boolean> = input<boolean>(false)

  /**
   * Optional.
   * Indicates whether to display the title prompt. The value of the label parameter is displayed by default.
   */
  isShowTitle: InputSignal<boolean> = input<boolean>(false)

  /**
   * Optional.
   * Display the customized title prompt content.
   */
  title: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Determines whether to display animations.
   */
  showAnimation: InputSignal<boolean> = input<boolean>(true)

  /**
   * Optional.
   * Accessibility
   */
  ariaLabelledBy: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Accessibility
   */
  ariaLabel: InputSignal<string> = input<string>('')

  /**
   * Optional.
   * Manual set the state of the checkbox
   */
  checked: InputSignal<boolean> = input<boolean>(false)

  /**
   * Fire event when the value of the check box changes.
   */
  checkboxChange: OutputEmitterRef<boolean> = output<boolean>()

  /**
   * @internal
   * State of the checkbox, indicating whether it is checked or not.
   */
  checkedState: WritableSignal<boolean> = signal<boolean>(false)

  /**
   * @internal
   * Signal indicating whether the <ng-content> element contains any content.
   */
  hasContent: WritableSignal<boolean> = signal(false);

  /**
   * @internal
   * @type {string | undefined}
   */
  id: string | undefined;

  /**
   * @internal
   */
  constructor () {
    super();
    effect(() => {
      const checked = this.checked();
      this.checkedState.set(checked)
    }, { allowSignalWrites: true });
  }

  /**
   * @internal
   */
  ngOnInit (): void {
    this.id = uniqueId()
    this.checkedState.set(this.checked())
  }

  /**
   * @internal
   */
  ngAfterContentInit (): void {
    this.checkContent()
  }

  /**
   * @internal
   * Checks if the <ng-content> element contains any content and updates the hasContent signal.
   * If content exists, sets the hasContent signal to true, otherwise sets it to false.
   */
  private checkContent(): void {
    const contentExists = this.content?.nativeElement?.innerHTML.trim().length > 0;
    this.hasContent.set(contentExists);
  }

  /**
   * @internal
   * Updates the checked state from an external value.
   */
  override writeValue(value: any): void {
    if (value !== this.checkedState()) {
      this.checkedState.set(!!value);
    }
  }

  /**
   * Toggles the state of the checkbox and emits the relevant events if it is not disabled.
   * @internal
   */
  toggle(): void {
    if (!this.disabled()) {
      this.checkedState.set(!this.checkedState());
      this.onChange(this.checkedState());
      this.checkboxChange.emit(this.checkedState());
      this.onTouched();
    }
  }
}
