/**
 * Configuration options for the Select component.
 */
export type SelectConfig = {
  /**
   * Function to display a customized text for each item.
   * @param item The item to display.
   * @returns {string} The customized display text.
   */
  displayFn?: (item: any) => string;

  /**
   * Key of the object array to be displayed. Defaults to 'description'.
   */
  displayKey?: string;

  /**
   * Enable or disable the search functionality. Defaults to false.
   */
  search?: boolean;

  /**
   * Text to display when no item is selected. Defaults to 'Select'.
   */
  placeholder?: string;

  /**
   * Custom comparator function for sorting items. If undefined, Array.sort() will be used.
   * @param a First item to compare.
   * @param b Second item to compare.
   * @returns {number} The comparison result.
   */
  customComparator?: (a: any, b: any) => number;

  /**
   * Limits the number of options displayed in the UI. If zero, options will not be limited. Defaults to 0.
   */
  limitTo?: number;

  /**
   * Text to display when more than one item is selected, e.g., 'Option 1 + 5 more'.
   */
  moreText?: string;

  /**
   * Text to display when no items are found during a search.
   */
  noResultsFound?: string;

  /**
   * Key on which search should be performed. If undefined, search will be extensive on all keys.
   */
  searchOnKey?: string;

  /**
   * Label displayed for the select all option in multiple selection. Defaults to 'Select all'.
   */
  selectAllLabel?: string;

  /**
   * Enable or disable the select all option to select all available items. Defaults to false.
   */
  enableSelectAll?: boolean;

  /**
   * Direction in which the dropdown opens. Can be 'top' or 'bottom'. Defaults to 'bottom'.
   */
  direction?: 'top' | 'bottom';

  /**
   * Size of the select component. Can be 'small', 'medium', or 'large'. Defaults to 'medium'.
   */
  size?: 'small' | 'medium' | 'large';
}
