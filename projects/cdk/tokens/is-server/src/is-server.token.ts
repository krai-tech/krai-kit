import { inject, InjectionToken, PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { createTokenFactory } from '@krai-tech/cdk/utils';

/**
 * Injection token that determines if the current platform is a server.
 *
 * This token can be injected into your services or components to check if the current execution context is a server.
 *
 * @example
 * // Import the token
 * import { IS_SERVER } from '@krai-tech/cdk/tokens/is-server';
 *
 * @Component({
 *   selector: 'app-example',
 *   template: '<p>Check console for platform type</p>',
 * })
 * export class ExampleComponent {
 *   constructor(@Inject(IS_SERVER) private isServer: boolean) {
 *     console.log('Is platform server:', this.isServer);
 *   }
 * }
 *
 * @type {InjectionToken<boolean>}
 */
export const IS_SERVER: InjectionToken<boolean> = createTokenFactory(() => {
  const platformId = inject(PLATFORM_ID);
  return isPlatformServer(platformId);
});
