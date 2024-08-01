import { SelectConfig } from './select.type';

/**
 * Default configuration for the select component.
 *
 * This configuration includes various settings that define the behavior and appearance of the select component:
 * - displayKey: The key used to display the option value.
 * - search: Boolean to enable or disable the search functionality.
 * - placeholder: Placeholder text for the select input.
 * - limitTo: Limit the number of items displayed.
 * - customComparator: Custom comparator function for sorting options.
 * - noResultsFound: Message displayed when no results are found.
 * - moreText: Text displayed when there are more items than the limit.
 * - searchOnKey: Key to search on if search is enabled.
 * - selectAllLabel: Label for the "Select all" option.
 * - enableSelectAll: Boolean to enable or disable the "Select all" option.
 * - direction: Direction in which the dropdown opens (e.g., 'bottom' or 'top').
 * - size: Size of the select component (e.g., 'small', 'medium', 'large').
 */
export const config: SelectConfig = {
  displayKey: "name",
  search: false,
  placeholder: "Select",
  limitTo: 0,
  customComparator: undefined,
  noResultsFound: "Please try searching differently.",
  moreText: "more",
  searchOnKey: '',
  selectAllLabel: "Select all",
  enableSelectAll: false,
  direction: 'bottom',
  size: 'medium'
};
