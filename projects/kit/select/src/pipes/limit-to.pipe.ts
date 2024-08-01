import { Pipe, PipeTransform } from '@angular/core';

/**
 * `LimitToPipe` is an pipe used to transform an array by returning a subset of it
 * based on the specified count of items and the start index.
 *
 * This pipe can be used to limit the number of items displayed in template.
 */
@Pipe({
  name: 'limitTo',
  standalone: true
})
export class LimitToPipe implements PipeTransform {
  /**
   * Transforms the given array by returning a subset of it based on the specified count and start index.
   *
   * @param {any[]} array - The array to transform.
   * @param {number} itemsCount - The number of items to include in the subset.
   * @param {number} [startIndex=0] - The index at which to start the subset.
   * @returns {any[]} The transformed array subset.
   *
   * @example
   * // Get the first 3 items of the array
   * const items = [1, 2, 3, 4, 5];
   * const result = limitTo.transform(items, 3);
   * // Result: [1, 2, 3]
   *
   * @example
   * // Get 2 items starting from index 2
   * const items = [1, 2, 3, 4, 5];
   * const result = limitTo.transform(items, 2, 2);
   * // Result: [3, 4]
   */
  transform(array: any[], itemsCount?: number, startIndex = 0): any[] {
    if (!Array.isArray(array) || itemsCount === 0 || itemsCount === undefined) {
      return array;
    }
    return array.slice(startIndex, startIndex + itemsCount);
  }
}
