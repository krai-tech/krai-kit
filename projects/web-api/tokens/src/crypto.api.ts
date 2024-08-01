import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global Crypto object.
 *
 * This token provides an abstraction over the window.crypto object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the crypto
 * property of the global window object.
 */
export const CRYPTO = new InjectionToken<Crypto>(
  'An abstraction over window.crypto object',
  {
    factory: () => inject(WINDOW).crypto,
  },
);
