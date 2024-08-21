# {{ NgDocPage.title }}

`SelectComponent` is a custom dropdown designed for selecting a single item from a list, custom option templates and search. 

```ts
import { SelectComponent } from '@krai-tech/kit/select';
```

## Base

```html
<kri-select [options]="options"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { vmResult: true } }) }}

## Floating Label

The floating label appears at the top when an item is selected in the field or when the field is focused.

```html
<kri-select floatLabel="Label Text" [options]="options"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { floatLabel: 'Label Text' } }) }}

## States

### Disabled

Use the select component with a `disabled` state when you need to indicate that the dropdown is currently not available for interaction, such as for options that are conditionally hidden, inactive due to a previous selection, or restricted based on user permissions or application state.

```html
<kri-select [disabled]="true"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { disabled: true } }) }}

## Change Placeholder

The `placeholder` configuration allows you to customize the text displayed when no item is selected.

```html
<kri-select [options]="options"
            [config]="{ placeholder: 'Choose a name' }">
</kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { placeholder: 'Choose a name' } } }) }}

## Display Options by Key

The `displayKey` configuration specifies the key of the object array to be displayed in the dropdown. <br>
By default, the key used is `name`.

```html {3}
<kri-select [options]="options"
            [config]="{ 
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

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { displayKey: 'balance' } } }) }}

## Template for Options

The custom template for options allows users to define a unique layout and style for the options, enabling a more personalized and visually appealing presentation of the available choices.
```html
<kri-select
  [optionItemTemplate]="optionTemplate"
  [options]="options"
></kri-select>

<ng-template #optionTemplate let-item="item">
  <div class="option-container">
    <kri-icon icon="add-to-card"></kri-icon>
    <span class="option-container__name">{{ item.name }}</span>
  </div>
</ng-template>
```

{{ NgDocActions.demo("SingleTemplateOptionsComponent", { container: false }) }}

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

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { limitTo: 3 } } }) }}

## Size

### Small

```html
<kri-select [options]="options" [config]="{ size: 'small' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'small'} } }) }}

### Medium

```html
<kri-select [options]="options" [config]="{ size: 'medium' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'medium'} } }) }}

### Large

```html
<kri-select [options]="options" [config]="{ size: 'large' }"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { config: { size: 'large' } } }) }}
