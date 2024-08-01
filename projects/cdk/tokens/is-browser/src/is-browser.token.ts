import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { createTokenFactory } from '@krai-tech/cdk/utils';

/**
 * Injection token that determines if the current platform is a browser.
 *
 * This token can be injected into your services or components to check if the current execution context is a browser.
 *
 * @example
 * // Import the token
 * import { IS_BROWSER } from '@krai-tech/cdk/tokens/is-browser';
 *
 * @Component({
 *   selector: 'app-example',
 *   template: '<p>Check console for platform type</p>',
 * })
 * export class ExampleComponent {
 *   constructor(@Inject(IS_BROWSER) private isBrowser: boolean) {
 *     console.log('Is platform browser:', this.isBrowser);
 *   }
 * }
 *
 * @type {InjectionToken<boolean>}
 */
export const IS_BROWSER: InjectionToken<boolean> = createTokenFactory(() => {
  const platformId = inject(PLATFORM_ID);
  return isPlatformBrowser(platformId);
});
