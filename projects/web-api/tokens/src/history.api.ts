import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global history object.
 *
 * This token provides an abstraction over the window.history object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the history
 * property of the global window object.
 */
export const HISTORY = new InjectionToken<History>(
  'An abstraction over window.history object',
  {
    factory: () => inject(WINDOW).history,
  },
);
