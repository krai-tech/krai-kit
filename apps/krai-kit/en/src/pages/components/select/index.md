# {{ NgDocPage.title }}

`SelectComponent` is a custom dropdown that provides features for multi-selection, custom option templates, and search.


```ts
import { SelectComponent } from '@krai-tech/kit/select';
```

## Base

```html
<kri-select [options]="options"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false }) }}

## Floating label

The floating label appears at the top when an item is selected in the field or when the field is focused.

```html
<kri-select floatLabel="Label Text" [options]="options"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { floatLabel: 'Label Text' } }) }}

## Multiselect

The multiselect is used to provide users with the ability to conveniently select multiple values from a set of options simultaneously.

```html
<kri-select floatLabel="Label Text"
            [multiple]="true" 
            [options]="options">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

## Multiselect with search

The multiselect with search allows users to easily select multiple values from a set of options while providing a search function to quickly find specific options within a large list.

```html
<kri-select floatLabel="Label Text"
            [multiple]="true" 
            [options]="options"
            [config]="{ search: true }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true, config: { search: true } } }) }}

### Select All

```html
<kri-select floatLabel="Label Text"
            [multiple]="true" 
            [options]="options"
            [config]="{ enableSelectAll: true }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true, config: { enableSelectAll: true } } }) }}

### Change ‘Select All’ Label

```html
<kri-select floatLabel="Label Text"
            [multiple]="true" 
            [options]="options"
            [config]="{ 
              enableSelectAll: true, 
              selectAllLabel: 'Select Everything' 
            }">
</kri-select>
```

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true, config: { enableSelectAll: true, selectAllLabel: 'Select Everything' } } }) }}


## Template for options

The custom template for options enables users to define a unique layout and style for the options within a multiselect component, allowing for a more personalized and visually appealing presentation of the available choices.

```html
<kri-select
  floatLabel="Label Text"
  [optionItemTemplate]="optionTemplate"
  [options]="options"
  [multiple]="true"
></kri-select>

<ng-template #optionTemplate let-item="item">
  <div class="option-container">
    <kri-icon icon="add-to-card"></kri-icon>
    <span class="option-container__name">{{ item.name }}</span>
  </div>
</ng-template>
```

{{ NgDocActions.demo("MultipleTemplateOptionComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

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

## States

### Disabled

Use the select component with a `disabled` state when you need to indicate that the dropdown is currently not available for interaction, such as for options that are conditionally hidden, inactive due to a previous selection, or restricted based on user permissions or application state.
```html
<kri-select [disabled]="true"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { disabled: true } }) }}

## Size

### Small

```html
<kri-select [options]="options" [config]="{ size: 'small' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'small'}, vmResult: false } }) }}

### Medium

```html
<kri-select [options]="options" [config]="{ size: 'medium' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'medium'}, vmResult: false } }) }}

### Large

```html
<kri-select [options]="options" [config]="{ size: 'large' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'large' }, vmResult: false } }) }}
