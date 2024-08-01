import { Pipe, PipeTransform } from '@angular/core';

/*
 /**
 * This pipe can filter arrays of strings or arrays of objects. When filtering objects,
 * you can specify a key to search by or search across all keys.
 *
 * This pipe is particularly useful for implementing search functionality in Angular templates.
 * @example
 * // Example for array of strings
 * const items = ['Apple', 'Banana', 'Orange'];
 * const searchText = 'an';
 * // Usage in template: items | filterBy: searchText
 * // Result: ['Banana', 'Orange']
 *
 * @example
 * // Example for array of objects with keyName
 * const users = [
 *   { name: 'John', age: 30 },
 *   { name: 'Jane', age: 25 },
 *   { name: 'Mike', age: 32 }
 * ];
 * const searchText = 'Jane';
 * const keyName = 'name';
 * // Usage in template: users | filterBy: searchText: keyName
 * // Result: [{ name: 'Jane', age: 25 }]
 *
 * @example
 * // Example for array of objects without keyName
 * const products = [
 *   { name: 'Laptop', price: 1000 },
 *   { name: 'Phone', price: 500 },
 *   { name: 'Tablet', price: 700 }
 * ];
 * const searchText = '1000';
 * // Usage in template: products | filterBy: searchText
 * // Result: [{ name: 'Laptop', price: 1000 }]
 */
@Pipe({
  name: 'filterBy',
  standalone: true,
})
export class FilterByPipe implements PipeTransform {
  /**
   * Transforms the given array by filtering items that match the search text.
   *
   * @param {any[]} array - The array to filter.
   * @param {string} [searchText] - The text to search for.
   * @param {string} [keyName] - The key to filter by in case of objects.
   * @param isFiltered
   * @returns {any[]} The filtered array.
   */
  transform(array: any[], searchText?: string, keyName?: string): any[] {
    if (!array || !Array.isArray(array) || !searchText) {
      return array;
    }

    const normalizedSearchText = searchText.trim().toLowerCase();

    if (typeof array[0] === 'string') {
      return this.filterStrings(array, normalizedSearchText);
    }

    if (keyName) {
      return this.filterByKey(array, keyName, normalizedSearchText);
    } else {
      return this.filterByAllKeys(array, normalizedSearchText);
    }
  }

  /**
   * Filters an array of strings by the given search text.
   *
   * @param {string[]} array - The array of strings to filter.
   * @param {string} searchText - The text to search for.
   * @returns {string[]} The filtered array of strings.
   */
  private filterStrings(array: string[], searchText: string): string[] {
    return array.filter(item => item.toLowerCase().includes(searchText));
  }

  /**
   * Filters an array of objects by the value of a specific key.
   *
   * @param {any[]} array - The array of objects to filter.
   * @param {string} keyName - The key to filter by.
   * @param {string} searchText - The text to search for.
   * @returns {any[]} The filtered array of objects.
   */
  private filterByKey(array: any[], keyName: string, searchText: string): any[] {
    return array.filter(item =>
      typeof item[keyName] !== 'object' &&
      item[keyName].toString().toLowerCase().includes(searchText)
    );
  }

  /**
   * Filters an array of objects by checking all keys for the search text.
   *
   * @param {any[]} array - The array of objects to filter.
   * @param {string} searchText - The text to search for.
   * @returns {any[]} The filtered array of objects.
   */
  private filterByAllKeys(array: any[], searchText: string): any[] {
    return array.filter(item => {
      return Object.keys(item).some(key =>
        typeof item[key] !== 'object' &&
        item[key].toString().toLowerCase().includes(searchText)
      );
    });
  }
}
