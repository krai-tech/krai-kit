import { Directive, output, OutputEmitterRef } from '@angular/core';
import { createTokenFactory, provide } from '@krai-tech/cdk/utils';

export const SELECT_OUTPUT = createTokenFactory(() => new SelectOutputDirective());

/**
 * Directive to manage output events for the `SelectComponent`.
 */
@Directive({
  selector: '[kriSelectOutput]',
  standalone: true,
  providers: [provide(SELECT_OUTPUT, SelectOutputDirective)]
})
export class SelectOutputDirective {
  /**
   * Emits when the selected items change.
   */
  selectChange: OutputEmitterRef<any> = output<any>();

  /**
   * Emits when the search text changes.
   */
  searchChange: OutputEmitterRef<string> = output<string>();

  /**
   * Emits when the select dropdown is opened.
   */
  selectOpen: OutputEmitterRef<void> = output<void>();

  /**
   * Emits when the select dropdown is closed.
   */
  selectClose: OutputEmitterRef<void> = output<void>();
}
