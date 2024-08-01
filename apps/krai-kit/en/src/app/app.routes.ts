import { Route } from '@angular/router';
import { DocsComponent, WelcomeComponent } from '@krai-tech/shared';
import { NG_DOC_ROUTING } from '@ng-doc/generated/en';

export const appRoutes: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
    data: { hideSidebar: true },
  },
  {
    path: 'en/docs',
    children: [
      { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
      { path: '', component: DocsComponent, children: NG_DOC_ROUTING },
    ]
  },
  {
    path: '**',
    redirectTo: 'docs/getting-started',
    pathMatch: 'full',
  },
];
