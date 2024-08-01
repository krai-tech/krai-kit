import {inject, InjectionToken} from '@angular/core';
import {Observable, share} from 'rxjs';
import { WINDOW } from './window.api';

/**
 * Injection token for an Observable based on `window.requestAnimationFrame`.
 *
 * This token provides an Observable that emits timestamps on each animation frame.
 * It utilizes the WINDOW injection token to access the requestAnimationFrame and cancelAnimationFrame
 * methods of the global window object. The Observable is shared to ensure multiple subscribers
 * receive the same animation frame updates.
 */
export const ANIMATION_FRAME = new InjectionToken<Observable<DOMHighResTimeStamp>>(
  'Shared Observable based on `window.requestAnimationFrame`',
  {
    factory: () => {
      const { requestAnimationFrame, cancelAnimationFrame } = inject(WINDOW);
      const animationFrame$ = new Observable<DOMHighResTimeStamp>(subscriber => {
        let id = NaN;
        const callback = (timestamp: DOMHighResTimeStamp): void => {
          subscriber.next(timestamp);
          id = requestAnimationFrame(callback);
        };

        id = requestAnimationFrame(callback);

        return () => {
          cancelAnimationFrame(id);
        };
      });

      return animationFrame$.pipe(share());
    },
  },
);
