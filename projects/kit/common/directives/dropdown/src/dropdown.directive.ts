import { computed, Directive, ElementRef, inject, input, OnInit, Renderer2, signal } from '@angular/core';
import { DropdownStatus } from './status.enum';
import { toObservable } from '@angular/core/rxjs-interop';
import { createTokenFactory, provide } from '@krai-tech/cdk/utils';

export const DROPDOWN = createTokenFactory(() => new DropdownDirective());

@Directive({
  selector: '[kriDropdown]',
  exportAs: 'dropdown',
  standalone: true,
  providers: [
    provide(DROPDOWN, DropdownDirective)
  ]
})
export class DropdownDirective implements OnInit {
  disabled = input<boolean>(false);

  allowInsideClick = input<boolean>(false);

  readonly status = signal(DropdownStatus.CLOSE);

  readonly status$ = toObservable(this.status);

  readonly isOpen = computed(() => this.status() === DropdownStatus.OPEN);

  private readonly elRef = inject(ElementRef, { optional: true });

  private readonly renderer = inject(Renderer2, { optional: true});

  ngOnInit(): void {
    this.updateDropdownStatus(DropdownStatus.CLOSE);
  }

  toggle(): void {
    this.status() === DropdownStatus.OPEN ? this.close() : this.open();
  }

  open(): void {
    this.updateDropdownStatus(DropdownStatus.OPEN);
  }

  close(): void {
    this.updateDropdownStatus(DropdownStatus.CLOSE);
  }

  private updateDropdownStatus(status: DropdownStatus): void {
    if (this.status() !== status) {
      this.status.set(status);
      this.renderer?.setAttribute(this.elRef?.nativeElement, 'kri-dropdown', status);
    }
  }
}
