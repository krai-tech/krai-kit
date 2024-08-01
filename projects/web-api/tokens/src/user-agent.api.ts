import { inject, InjectionToken } from '@angular/core';
import { NAVIGATOR } from './navigator.api';

/**
 * Injection token for the global userAgent string.
 *
 * This token provides an abstraction over the window.navigator.userAgent property, allowing it to be injected
 * into Angular services or components. It utilizes the NAVIGATOR injection token to access the userAgent
 * property of the global navigator object.
 */
export const USER_AGENT = new InjectionToken<string>(
  'An abstraction over window.navigator.userAgent object',
  {
    factory: () => inject(NAVIGATOR).userAgent,
  },
);
