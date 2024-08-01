/**
 * Defines the possible layout directions for a group of checkboxes.
 *
 * - 'row': Arranges the checkboxes in a horizontal row.
 * - 'column': Arranges the checkboxes in a vertical column.
 */
export type CheckboxGDirections = 'row' | 'column'

/**
 * CheckboxGOption defines the properties for a checkbox option within a group.
 */
export type CheckboxGOption = {
  label: string;
  value: any;
  disabled?: boolean;
  isChecked?: boolean
  [key: string]: any;
}
