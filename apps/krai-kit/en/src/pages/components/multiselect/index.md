# {{ NgDocPage.title }}

`SelectComponent` is a custom dropdown that provides features for multi-selection, custom option templates, and search.

```ts
import { SelectComponent } from '@krai-tech/kit/select';
```

## Base

The multiselect is used to provide users with the ability to conveniently select multiple values from a set of options simultaneously.

```html
<kri-select [multiple]="true" [options]="options"></kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true } }) }}


## Floating Label

The floating label appears at the top when an item is selected in the field or when the field is focused.

```html
<kri-select floatLabel="Label Text" 
            [multiple]="true" 
            [options]="options">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

## States

### Disabled

Use the select component with a `disabled` state when you need to indicate that the dropdown is currently not available for interaction, such as for options that are conditionally hidden, inactive due to a previous selection, or restricted based on user permissions or application state.

```html
<kri-select [multiple]="true"
            [options]="options"
            [disabled]="true">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, disabled: true, withPresetData: true } }) }}

with [Floating Label](en/docs/components/multiselect#floating-label)

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, floatLabel: 'Label Text', disabled: true, withPresetData: true } }) }}


### Error

```html
<kri-select [hasError]="true"></kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, hasError: true, withPresetData: true } }) }}

with [Floating Label](en/docs/components/multiselect#floating-label)

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, floatLabel: 'Label Text',  hasError: true, withPresetData: true } }) }}

## Change Placeholder

The `placeholder` configuration allows you to customize the text displayed when no item is selected.

```html
<kri-select [multiple]="true"
            [options]="options"
            [config]="{ placeholder: 'Choose a name' }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { placeholder: 'Choose a name' } } }) }}

## Search

The multiselect with search allows users to easily select multiple values from a set of options while providing a search function to quickly find specific options within a large list.

```html
<kri-select [multiple]="true" 
            [options]="options"
            [config]="{ search: true }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { search: true } } }) }}

### Search on Key

The `searchOnKey` configuration allows you to specify a particular key on which the search should be performed within the options.

```html {5}
<kri-select [multiple]="true" 
            [options]="options"
            [config]="{ 
              search: true, 
              searchOnKey: 'name' 
            }">
</kri-select>
```
Array of data:

```ts {7}
[
    {
      _id: '5a66d6c3657e60c6073a2d22',
      index: 1,
      balance: '$2,984.98',
      picture: 'http://placehold.it/32x32',
      name: 'Mcintyre Lawson',
    },
];
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { search: true, searchOnKey: 'name' } } }) }}

### Change "No result found" Label

The “No results found” label is used to inform users that their search did not match any available options, providing clear feedback and guiding them to refine their search criteria.

```html {5}
<kri-select [multiple]="true" 
            [options]="options"
            [config]="{ 
              search: true, 
              noResultsFound: 'No results found. Please try a different search term.' 
            }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { search: true, noResultsFound: 'No results found. Please try a different search term.' } } }) }}

## Display Options by Key

The `displayKey` configuration specifies the key of the object array to be displayed in the dropdown. <br>
By default, the key used is `name`.

```html {5}
<kri-select [multiple]="true" 
            [options]="options"
            [config]="{ 
              search: true, 
              displayKey: 'balance' 
            }">
</kri-select>
```
Array of data:

```ts {5}
[
    {
      _id: '5a66d6c3657e60c6073a2d22',
      index: 1,
      balance: '$2,984.98',
      picture: 'http://placehold.it/32x32',
      name: 'Mcintyre Lawson',
    },
];
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { displayKey: 'balance' } } }) }}

## Display Options Function

A function that customizes and displays text for each item based on specific conditions or parameters.

```html {4}
<kri-select
  [multiple]="true"
  [options]="options"
  [config]="{ displayFn: ({ name, balance }) => `${name} - ${balance}`">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, displayFn: true } }) }}

## Select All

```html {3}
<kri-select [multiple]="true" 
            [options]="options"
            [config]="{ enableSelectAll: true }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { enableSelectAll: true } } }) }}

### Change "Select All" Label

```html {5}
<kri-select [multiple]="true"
            [options]="options"
            [config]="{ 
              enableSelectAll: true, 
              selectAllLabel: 'Select Everything' 
            }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { enableSelectAll: true, selectAllLabel: 'Select Everything' } } }) }}

## From

```html
<form [formGroup]="form">
  <kri-select
    formControlName="select"
    [config]="{ search: true }"
    [options]="options"
    [multiple]="multiple">
  </kri-select>
</form>
```

```ts
  form = this.fb.group({
  select: [
    [
      {
        _id: '5a66d6c31d5e4e36c7711b7a',
        index: 0,
        balance: '$2,806.37',
        picture: 'http://placehold.it/32x32',
        name: 'Burns Dalton',
        disabled: true,
      }
    ],
    Validators.required,
  ],
});
```

{{ NgDocActions.demo("MultipleReactiveFormComponent", { container: false, inputs: { multiple: true } }) }}

## Template for Options

The custom template for options enables users to define a unique layout and style for the options, allowing for a more personalized and visually appealing presentation of the available choices.

```html
<kri-select
  [optionItemTemplate]="optionTemplate"
  [options]="options"
  [multiple]="true">
</kri-select>

<ng-template #optionTemplate let-item="item">
  <div class="option-container">
    <kri-icon icon="add-to-card"></kri-icon>
    <span class="option-container__name">{ { item.name } }</span>
  </div>
</ng-template>
```

{{ NgDocActions.demo("MultipleTemplateOptionComponent", { container: false, inputs: { multiple: true } }) }}

## Limits Options Displayed

The `limitTo` configuration restricts the number of options shown in the dropdown. In this example, only the first three options are displayed. <br>
If set to `0`, all options are shown.

```html {4}
<kri-select
  [optionItemTemplate]="optionTemplate"
  [options]="options"
  [config]="{ limitTo: 3 }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { limitTo: 3 } } }) }}

## Size

### Small

```html
<kri-select [multiple]="true"
            [options]="options"
            [config]="{ size: 'small' }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { size: 'small'} } }) }}

### Medium

```html
<kri-select [multiple]="true"
            [options]="options"
            [config]="{ size: 'medium' }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { size: 'medium'} } }) }}

### Large

```html
<kri-select [multiple]="true"
            [options]="options"
            [config]="{ size: 'large' }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true, config: { size: 'large'} } }) }}
