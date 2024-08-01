import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global navigator object.
 *
 * This token provides an abstraction over the window.navigator object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the navigator
 * property of the global window object.
 */
export const NAVIGATOR = new InjectionToken<Navigator>(
  'An abstraction over window.navigator object',
  {
    factory: () => inject(WINDOW).navigator,
  },
);
