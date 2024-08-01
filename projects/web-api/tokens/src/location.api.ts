import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global location object.
 *
 * This token provides an abstraction over the window.location object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the location
 * property of the global window object.
 */
export const LOCATION = new InjectionToken<Location>(
  'An abstraction over window.location object',
  {
    factory: () => inject(WINDOW).location,
  },
);
