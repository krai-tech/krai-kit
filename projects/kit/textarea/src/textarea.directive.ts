import { AfterViewInit, Directive, ElementRef, inject, input, InputSignal, OnDestroy, Renderer2 } from '@angular/core';
import { TextareaResize } from './textarea.type';
import { DOCUMENT } from '@angular/common';
import { IsDisabledDirective } from '@krai-tech/cdk/directives/is-disabled';
import { FocusDirective } from '@krai-tech/cdk/directives/focus';
import { ResetInputDirective } from '@krai-tech/kit/common/directives/reset-input';
import { HasValueDirective } from '@krai-tech/kit/common/directives/has-value';

/**
 * Directive to enhance standard textarea elements with custom styles and behavior.
 * It provides support for error state, resize options, and character counter.
 * Additionally, it extends functionality with the following directives:
 * - `IsDisabledDirective` for managing the disabled state.
 * - `FocusDirective` for managing the focused state.
 * - `HasValueDirective` for managing the has-value state and emitting hasValue events.
 */
@Directive({
  selector: '[kriTextarea]',
  standalone: true,
  exportAs: 'kriTextarea',
  host: {
    'class': 'kri-textarea',
    '[class.error]': 'error()',
    '[style.resize]': 'resize()',
    '[attr.rows]': '3',
  },
  hostDirectives: [
    {
      directive: IsDisabledDirective,
      inputs: ['disabled']
    },
    {
      directive: FocusDirective,
    },
    {
      directive: HasValueDirective,
      outputs: ['hasValue']
    },
    {
      directive: ResetInputDirective,
      inputs: ['initValue', 'showCounter', 'selectedItems'],
      outputs: ['resetInput']
    }
  ]
})
export class TextareaDirective implements AfterViewInit, OnDestroy {
  /**
   * Optional.
   * Indicates whether the textarea has an input error.
   */
  error: InputSignal<boolean> = input<boolean>(false);

  /**
   * Optional.
   * Indicates whether the textarea can be resized. The options are: None, Horizontal, Vertical, and Both.
   */
  resize: InputSignal<TextareaResize> = input<TextareaResize>('none');

  /**
   * Optional.
   * Input to show character counter.
   */
  showCounter: InputSignal<boolean> = input<boolean>(false);

  private readonly document: Document = inject(DOCUMENT);
  private readonly r2: Renderer2 = inject(Renderer2);
  private counter: HTMLSpanElement | null = null;
  private counterInner: HTMLElement | null = null;
  private maxLengthListener: (() => void) | undefined;
  private resizeCounterObserver: ResizeObserver | undefined;

  /**
   * @internal
   */
  constructor(private readonly elRef: ElementRef) {}

  /**
   * @internal
   * Lifecycle hook to initialize component after view initialization.
   */
  ngAfterViewInit(): void {
    this.setMaxLength();
  }

  /**
   * @internal
   * Initialize the maximum length counter if showCounter is true and maxLength is set.
   */
  private setMaxLength(): void {
    if (this.showCounter() && this.elRef.nativeElement.maxLength) {
      this.createCounter();
      this.maxLengthListener = this.watchMaxLength();
      this.resizeCounterObserver = this.createResizeCounter();
      this.resizeCounterObserver.observe(this.elRef.nativeElement);
    }
  }

  /**
   * @internal
   * Create the counter element and its inner element.
   */
  private createCounter(): void {
    this.counter = this.document.createElement('span');
    this.counter.className = 'kri-textarea-counter';

    this.counterInner = this.document.createElement('i');
    this.updateCounterInnerText();
    this.counterInner.style.width = `${(String(this.elRef.nativeElement.maxLength).length * 2 + 1) * 12}px`;

    this.counter.appendChild(this.counterInner);
    this.elRef.nativeElement.after(this.counter);
  }

  /**
   * @internal
   * Update the text content of the counter inner element.
   */
  private updateCounterInnerText(): void {
    if (this.counterInner) {
      this.counterInner.textContent = `${this.elRef.nativeElement.value.length}/${this.elRef.nativeElement.maxLength}`;
    }
  }

  /**
   * @internal
   * Add an event listener to update the counter on input event.
   * @returns A function to remove the event listener.
   */
  private watchMaxLength(): () => void {
    return this.r2.listen(this.elRef.nativeElement, 'input', (): void => {
      this.updateCounterInnerText();
    });
  }

  /**
   * @internal
   * Observe textarea resize to adjust the position of the counter.
   * @returns A ResizeObserver instance.
   */
  private createResizeCounter(): ResizeObserver {
    return new ResizeObserver((): void => {
      if (this.counter && this.counterInner) {
        this.counter.style.left = `${this.elRef.nativeElement.offsetWidth - this.counterInner.offsetWidth}px`;
        this.counter.style.top = `${this.elRef.nativeElement.offsetHeight - this.counter.offsetHeight}px`;
      }
    });
  }

  /**
   * @internal
   * Cleanup listeners and observers on component destruction.
   */
  ngOnDestroy(): void {
    if (this.maxLengthListener) {
      this.maxLengthListener();
    }
    if (this.resizeCounterObserver) {
      this.resizeCounterObserver.unobserve(this.elRef.nativeElement);
    }
  }
}
