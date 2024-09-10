import { Injectable } from '@angular/core';
import packageJson from '../../package.json';

/**
 * Service for retrieving application version information.
 */
@Injectable({
  providedIn: 'root'
})
export class VersionService {
  /**
   * The application version obtained from `package.json`.
   */
  readonly version = packageJson.version;
}
