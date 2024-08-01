import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DomUtil<T> {
  constructor(private fixture: ComponentFixture<T>) {}

  /**
   * Checks if all the specified CSS classes exist within the fixture's debug element.
   * @param classList Array of CSS class selectors.
   * @returns True if all classes exist, false otherwise.
   */
  hasAllClasses(classList: string[]): boolean {
    const debugEl = this.fixture.debugElement;
    return classList.every(className => !!debugEl.query(By.css(className)));
  }

  /**
   * Checks if all the specified CSS classes exist in the document's body.
   * @param classList Array of CSS class selectors.
   * @returns True if all classes exist in the body, false otherwise.
   */
  bodyHasAllClasses(classList: string[]): boolean {
    return classList.every(className => !!document.querySelector(className));
  }

  /**
   * Retrieves the text content of the first element matching the specified tag name.
   * @param tagName The tag name to search for.
   * @returns The text content of the element, or undefined if the element is not found.
   */
  getTextContent(tagName: string): string | undefined {
    const debugEl = this.fixture.debugElement.query(By.css(tagName));
    return debugEl ? debugEl.nativeElement.textContent : undefined;
  }

  /**
   * Finds all debug elements within the fixture matching the specified tag name.
   * @param tagName The tag name to search for.
   * @returns An array of debug elements matching the tag name.
   */
  findAllByTag(tagName: string) {
    return this.fixture.debugElement.queryAll(By.css(tagName));
  }
}
