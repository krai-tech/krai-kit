import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ShellComponent } from '@krai-tech/shared';

bootstrapApplication(ShellComponent, appConfig).catch((err) =>
  console.error(err)
);
