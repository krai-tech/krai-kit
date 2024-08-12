# {{ NgDocPage.title }}

`SelectComponent` is a custom dropdown that provides features for multi-selection, custom option templates, and search.


```ts
import { SelectComponent } from '@krai-tech/kit/select';
```

## Base

```html
<kri-select
  [config]="{ placeholder: "Select a name" }"
  [options]="options"
  [(ngModel)]="vm">
</kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false }) }}

## Floating label

The floating label appears at the top when an item is selected in the field or when the field is focused.

```html
<kri-select floatLabel="Label Text"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { floatLabel: 'Label Text' } }) }}

## Multiselect

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true } }) }}

## Multiselect with a floating label

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

## Multiselect with search

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true, config: { placeholder: "Обрати ім'я", search: true } } }) }}

## Template for options

{{ NgDocActions.demo("MultipleTemplateOptionComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

## States

### Disabled

Use the select component with a `disabled` state when you need to indicate that the dropdown is currently not available for interaction, such as for options that are conditionally hidden, inactive due to a previous selection, or restricted based on user permissions or application state.
```html
<kri-select [disabled]="true"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { disabled: true } }) }}

