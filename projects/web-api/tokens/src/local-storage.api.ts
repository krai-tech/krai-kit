import { inject, InjectionToken } from '@angular/core';
import { WINDOW } from './window.api';

/**
 * Injection token for the global localStorage object.
 *
 * This token provides an abstraction over the window.localStorage object, allowing it to be injected
 * into Angular services or components. It utilizes the WINDOW injection token to access the localStorage
 * property of the global window object.
 */
export const LOCAL_STORAGE = new InjectionToken<Storage>(
  'An abstraction over window.localStorage object',
  {
    factory: () => inject(WINDOW).localStorage,
  },
);
