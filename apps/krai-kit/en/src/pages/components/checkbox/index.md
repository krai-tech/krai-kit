# {{ NgDocPage.title }}

`CheckboxComponent` - It is an extension of the standard checkbox element with styling.

```ts
import { CheckboxComponent, CheckboxGComponent } from '@krai-tech/kit/checkbox';
```

## Basic

Checkboxes allow for the selection of multiple items.

> **Note**
> The name of a group of checkboxes should clearly indicate that multiple options can be selected.

```html
<kri-checkbox 
  label="Хліб" 
  (checkboxChange)="onCheckboxChange($event)" 
  [(ngModel)]="vm">
</kri-checkbox>
```

{{ NgDocActions.demo("CheckboxDemoComponent", { container: true }) }}

## Group

```html
<kri-checkbox-g 
  name="demo-g" 
  [options]="data" 
  [isShowTitle]="true" 
  [(ngModel)]="vm" 
  (checkboxChange)="onCheckboxChange($event)">
</kri-checkbox-g>
```

{{ NgDocActions.demo("CheckboxGDemoComponent", { container: true }) }}

Direction - row

```html
<kri-checkbox-g 
  name="demo-g" 
  direction="row" 
  [options]="data" 
  [isShowTitle]="true" 
  [(ngModel)]="vm" 
  (checkboxChange)="onCheckboxChange($event)">
</kri-checkbox-g>
```

{{ NgDocActions.demo("CheckboxGDemoComponent", { container: true, inputs: { direction: "row" } }) }}

## States

### Inactive

Used by default when the checkbox is available for selection and has not yet been chosen by the user.

```html
<kri-checkbox label="Хліб" [checked]="false"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", checked: false } }) }}

### Checked

Used when the checkbox is checked by the user. <br>
This indicates that the corresponding option or item is chosen.

```html
<kri-checkbox label="Хліб" [checked]="true"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", checked: true } }) }}

### Disabled

Used when the checkbox should not be available for interaction. <br>
This can be useful for indicating temporarily unavailable options or items.

```html
<kri-checkbox label="Хліб" 
              [disabled]="true" 
              [checked]="false">
</kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", disabled: true, checked: false } }) }}

### Checked and disabled

Used when an option should be checked by default, but the user cannot change its state. <br>
This is often applied to mandatory parameters or conditions.

```html
<kri-checkbox label="Хліб" 
              [disabled]="true" 
              [checked]="true">
</kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", disabled: true, checked: true } }) }}

## Custom color

Used when it is necessary to highlight a specific checkbox or group of checkboxes by giving them a unique color.

```html
<kri-checkbox label="Custom color" 
              color="#e30dbf"
              [checked]="true">
</kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Custom color", checked: true, color: "#e30dbf" } }) }}

## Disable animation

Used when the checked/unchecked animation is not needed or desired. <br>
This can be useful for improving performance or creating a more subdued interface.

```html
<kri-checkbox 
  label="Хліб без анімації" 
  [showAnimation]="false">
</kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб без анімації", checked: true, showAnimation: false } }) }}

## Label naming

The checkbox is always used with a label that explains its meaning. <br>
It is better to avoid using sentences with negative wording for the label.

> **Alert** **Bad naming**
> 
{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Do not show notifications" } }) }}

> **Note** **Great naming**

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Show notifications" } }) }}


Sometimes a checkbox is used to confirm the user's agreement with terms of service. <br>
In such cases, it is important to use concise wording and include links only in part of the text.

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "I agree to the terms of personal data processing and consent to their use." } }) }}

## Accessibility

### Screen Reader

The `Checkbox` component uses a hidden native `checkbox` element that is only visible to screen readers. <br>
The description for the component can be provided using the `aria-labelledby` and `aria-label` attributes.

> **Note**
> Ensure the accessibility of your interface for users with visual impairments by using the `aria-labelledby` and `aria-label` attributes to provide clear descriptions of interface elements.

```html
<span id="checkbox2">Remember Me</span>
<kri-checkbox ariaLabelledBy="checkbox2" />

<kri-checkbox ariaLabel="Remember Me" />
```
