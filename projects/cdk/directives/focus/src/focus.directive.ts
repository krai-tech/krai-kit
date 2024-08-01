import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  input,
  InputSignal
} from '@angular/core';
import { IS_BROWSER } from '@krai-tech/cdk/tokens/is-browser';

/**
 * A directive that focuses or blurs an element based on an input signal.
 *
 * The `kriFocus` directive can be used to automatically focus or blur an element when it is initialized.
 * This directive is particularly useful for forms or interactive elements that require immediate user attention.
 */
@Directive({
  selector: '[kriFocus]',
  standalone: true,
  host: {
    '(blur)': 'onBlur()',
    '(focus)': 'onFocus()'
  }
})
export class FocusDirective implements AfterViewInit, AfterContentChecked, AfterViewChecked {
  /**
   * Determines if the element should be focused on initialization.
   */
  autofocus: InputSignal<boolean> = input(false);

  /**
   * @internal
   * @param {boolean} isBrowser - Indicates if the current platform is a browser.
   * @param {ElementRef} elRef - Reference to the element that will be focused or blurred.
   */
  constructor(
    @Inject(IS_BROWSER)
    private readonly isBrowser: boolean,
    private readonly elRef: ElementRef
  ) {}

  /**
   * Lifecycle hook that is called after the component's view has been fully initialized.
   * If `autofocus` is true, the element will be focused.
   */
  ngAfterViewInit(): void {
    if (this.autofocus()) {
      this.setFocusOnElement();
    }
  }

  /**
   * Lifecycle hook that is called after the component's content has been checked.
   * Updates the element's `autofocus` attribute based on the `autofocus` signal.
   */
  ngAfterContentChecked(): void {
    if (this.autofocus()) {
      this.setFocusOnElement();
    }
  }

  /**
   * Lifecycle hook that is called after the component's view has been checked.
   * Ensures the element is focused if the `focused` signal is false.
   */
  ngAfterViewChecked(): void {
    if (this.autofocus()) {
      this.setFocusOnElement();
    }
  }

  /**
   * Handles the blur event by removing the 'focused' class and updating the focus state.
   */
  onBlur(): void {
    if (this.isBrowser && !this.autofocus()) {
      this.elRef.nativeElement.classList.remove('focused');
      this.elRef.nativeElement.setAttribute('data-focused', 'false');
    }
  }

  /**
   * Handles the focus event by adding the 'focused' class.
   */
  onFocus(): void {
    if (this.isBrowser) {
      this.elRef.nativeElement.classList.add('focused');
      this.elRef.nativeElement.setAttribute('data-focused', 'true');
    }
  }

  /**
   * Sets focus or blur on the element based on the provided boolean value.
   * Adds or removes the 'focused' class and attribute accordingly.
   *
   */
  private setFocusOnElement(): void {
    if (this.isBrowser) {
      this.elRef.nativeElement.focus();
    }
  }
}
