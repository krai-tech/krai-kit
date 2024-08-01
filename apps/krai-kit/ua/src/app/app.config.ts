import {
  provideNgDocApp,
  provideSearchEngine,
  NgDocDefaultSearchEngine,
  providePageSkeleton,
  NG_DOC_DEFAULT_PAGE_SKELETON,
  provideMainPageProcessor,
  NG_DOC_DEFAULT_PAGE_PROCESSORS,
} from '@ng-doc/app';
import { provideNgDocContext } from '@ng-doc/generated/ua';
import {
  provideHttpClient,
  withInterceptorsFromDi,
  withFetch,
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    provideNgDocContext(),
    provideNgDocApp({
      themes: [
        {
          id: 'docs-dark',
          path: 'assets/theme/docs-dark.css',
        },
        {
          id: 'docs-light',
          path: 'assets/theme/docs-light.css',
        },
      ],
    }),
    provideSearchEngine(NgDocDefaultSearchEngine),
    providePageSkeleton(NG_DOC_DEFAULT_PAGE_SKELETON),
    provideMainPageProcessor(NG_DOC_DEFAULT_PAGE_PROCESSORS),
  ],
};
