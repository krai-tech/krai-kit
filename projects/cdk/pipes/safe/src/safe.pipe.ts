import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

/**
 * @ngdoc pipe
 * @name SafePipe
 * @description
 * A pipe that bypasses Angular's built-in sanitization for specific content types.
 * This is useful when you trust the content and need to insert it into the DOM without Angular stripping potentially unsafe elements.
 *
 * @example
 * ```html
 * <div [innerHTML]="htmlContent | safe:'html'"></div>
 * <div [style.background]="styleContent | safe:'style'"></div>
 * <iframe [src]="urlContent | safe:'resourceUrl'"></iframe>
 * ```
 *
 * @usageNotes
 * Be cautious when bypassing security, as it can expose your application to XSS (Cross-Site Scripting) attacks.
 * Ensure that the content being sanitized is from a trusted source.
 *
 * @param {DomSanitizer} sanitizer - The Angular sanitizer to use for bypassing security.
 */
@Pipe({
  name: 'safe',
  standalone: true,
})
export class SafePipe implements PipeTransform {

  /**
   * @internal
   * Constructs a new instance of the SafePipe.
   *
   * @param {DomSanitizer} sanitizer - The Angular sanitizer to use for bypassing security.
   */
  constructor(protected sanitizer: DomSanitizer) {}

  /**
   * Transforms the input value by bypassing Angular's built-in security and returning a safe value of the specified type.
   *
   * @param {any} value - The value to be transformed and sanitized.
   * @param {string} type - The type of safe value to be returned. Can be 'html', 'style', 'script', 'url', or 'resourceUrl'.
   * @returns {SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl} - The sanitized value.
   *
   * @throws {Error} If an invalid type is specified.
   */
  public transform(value: any, type: string): SafeHtml | SafeStyle | SafeScript | SafeUrl | SafeResourceUrl {
    switch (type) {
      case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
      case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
      case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
      case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
      default: throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
