import {DOCUMENT} from '@angular/common';
import {inject, InjectionToken} from '@angular/core';
import type {Observable} from 'rxjs';
import {distinctUntilChanged, fromEvent, map, shareReplay, startWith} from 'rxjs';

/**
 * Injection token for an Observable that emits the visibility state of the document.
 *
 * This token provides an Observable that emits a boolean value indicating whether the document
 * is visible or hidden. It uses the `visibilitychange` event of the document to detect changes
 * in visibility state. The Observable is shared and replayed, ensuring that subscribers receive
 * the latest visibility state.
 */
export const PAGE_VISIBILITY = new InjectionToken<Observable<boolean>>(
  'Shared Observable based on `document visibility changed`',
  {
    factory: () => {
      const documentRef = inject(DOCUMENT);

      return fromEvent(documentRef, 'visibilitychange').pipe(
        startWith(0),
        map(() => documentRef.visibilityState !== 'hidden'),
        distinctUntilChanged(),
        shareReplay({refCount: false, bufferSize: 1}),
      );
    },
  },
);
