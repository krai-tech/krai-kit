import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global sessionStorage object.
 *
 * This token provides an abstraction over the window.sessionStorage object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the sessionStorage
 * property of the global window object.
 */
export const SESSION_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.sessionStorage object',
  {
    factory: () => inject(WINDOW).sessionStorage,
  },
);
