/**
 * Checks if there are elements with the specified classes among the sibling elements
 * of the given element in the DOM tree.
 *
 * The function ensures that all the classes provided in the `classes` array are found
 * in the sibling elements of the given `element`.
 *
 * @param element - The HTML element for which to check adjacent siblings.
 * @param classes - An array of class names to check among the sibling elements.
 * @returns A boolean indicating whether all specified classes are found in the sibling elements.
 *
 * @example
 * ```typescript
 * const element = document.querySelector('.my-element');
 * const result = hasAdjacentClasses(element, ['class-one', 'class-two']);
 * console.log(result); // true if both classes are found among the siblings, otherwise false
 * ```
 */
export function hasAdjacentClasses(element: HTMLElement, classes: string[]): boolean {
  const parent = element.parentNode as HTMLElement;

  if (!parent) {
    return false;
  }

  const siblings = Array.from(parent.children) as HTMLElement[];

  return classes.every(className =>
    siblings.some(sibling => sibling !== element && sibling.classList.contains(className))
  );
}
