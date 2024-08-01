import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global Screen object.
 *
 * This token provides an abstraction over the window.screen object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the screen
 * property of the global window object.
 */
export const SCREEN = new InjectionToken<Screen>(
  'An abstraction over window.screen object',
  {
    factory: () => inject(WINDOW).screen,
  },
);
