import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';

/**
 * Injection token for the global window object.
 *
 * This token provides an abstraction over the global window object, allowing it to be injected
 * into Angular services or components. It uses the Angular DOCUMENT token to access the defaultView,
 * which represents the window object.
 *
 * Throws an error if the window object is not available.
 */
export const WINDOW = new InjectionToken<Window>(
  'An abstraction over global window object',
  {
    factory: () => {
      const {defaultView} = inject(DOCUMENT);

      if (!defaultView) {
        throw new Error('Window is not available');
      }

      return defaultView;
    },
  },
);
