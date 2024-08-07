# {{ NgDocPage.title }}

`RadioButtonComponent` extends the standard radio button element with styling.

```ts
import { RadioButtonComponent } from '@krai-tech/kit/radio-button';
```

## Basic

A radio button allows selecting only one element.

```html
<kri-radio name="demo" 
           value="18-35" 
           [(ngModel)]="vm" 
           (ngModelChange)="valueChange($event)">
</kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "18-35" } }) }}

## Dynamic

```html
<kri-radio *ngFor="let item of testItems" 
           name="age" 
           [value]="item" 
           [(ngModel)]="vmItem" 
           (ngModelChange)="valueChange($event)">
  <span>{{ item }}</span>
</kri-radio>
```

{{ NgDocActions.demo("RadioButtonDemoComponent", { container: true }) }}

## States

### Active

Used as the default state for a radio button when it is available for interaction and selected by the user.

```html
<kri-radio name="demo" value="36-45" [checked]="true"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", checked: true } }) }}

### Inactive

Used as the default state for a radio button when it is available for interaction but has not yet been selected by the user.

```html
<kri-radio name="demo" value="36-45"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45" } }) }}

### Disabled

Used when the radio button should be displayed but not available for user interaction. <br>
This can be useful for temporarily unavailable options or indicating restrictions.

```html
<kri-radio name="demo" value="36-45" [disabled]="true"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", disabled: true } }) }}

### Selected and disabled

Used when you need to display a default selected option while preventing the user from changing this choice. <br>
This can be useful for mandatory options or conditions.

```html
<kri-radio name="demo" 
           value="36-45" 
           [disabled]="true" 
           [checked]="true">
</kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", disabled: true, checked: true } }) }}

## Accessibility

### Screen Reader

The `RadioButton` component uses a hidden native `radio` element that is only visible to screen readers. <br>
Descriptions for the component can be provided using the `aria-labelledby` and `aria-label` attributes.

> **Note**
> Used to ensure accessibility of radio buttons for users with visual impairments.
> The `aria-labelledby` and `aria-label` attributes help screen readers announce the purpose of radio buttons.

```html
<span id="rb2">Two</span>
<kri-radio ariaLabelledBy="rb2" />

<kri-radio ariaLabel="Three" />
```
