# {{ NgDocPage.title }}

`InputTextDirective` extends the standard input element by adding custom styling.

```ts
import { InputTextDirective, InputTextLabelDirective } from '@krai-tech/kit/input-text';
```

## Base

`InputTextDirective` is applied to input fields using the `kriInputText` directive, providing additional styling and functionality.

```html
<input kriInputText 
       [placeholder]="placeholder" 
       id="textInput" 
       [error]="error" 
       [disabled]="disabled" 
       [size]="size" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false }) }}

## Floating label

The floating label appears at the top of the input field when it is focused or when there is text entered in the field.

```html
<div class="kri-float-label">
  <input kriInputText 
         [placeholder]="placeholder" 
         id="textInput" 
         [error]="error" 
         [disabled]="disabled" 
         [size]="size" />
  <label kriInputTextLabel for="textInput" [size]="size">Label</label>
</div>
```

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false }) }}

With a preset value

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { showDefaultText: true } }) }}

## States

### Inactive

Used as the default state of the input field until the user begins to interact with it.

```html
<input kriInputText placeholder="Text" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text"} }) }}

### Disabled

Used when data entry is not possible or allowed in the current context. <br>
This can be useful for displaying fields that are temporarily or permanently unavailable for editing.

```html
<input kriInputText placeholder="Text" [disabled]="true" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", disabled: true } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { disabled: true } }) }}

### Error

Used when the entered data does not meet validation requirements or contains an error. <br>
This helps users understand what needs to be corrected.

```html
<input kriInputText placeholder="Text" [error]="true" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { error: true } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { error: true } }) }}

## Clear input

```html
<input kriInputText [showReset]="true" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: {showDefaultText: true, showReset: true } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { showDefaultText: true, showReset: true } }) }}

## Sizes

### Large

Used when a more prominent input field is needed, such as in forms with large amounts of text or to improve readability.

```html
<input kriInputText placeholder="Text" [size]="large" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", size: "large" } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { size: "large" } }) }}

### Small

Used when a compact input field is needed, such as in forms with limited space or for entering short texts.

```html
<input kriInputText placeholder="Text" [size]="small" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", size: "small" } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { size: "small" } }) }}

## Accessibility

To provide a description for this component, you can use the `label` tag with the `id` attribute, or use the `aria-labelledby` or `aria-label` attributes.
> **Note**
> This helps screen readers announce the purpose and instructions for the input field.

```html
<span id="lastname">Lastname</span>
<input kriInputText aria-labelledby="lastname" />

<input kriInputText aria-label="Age" />
```

## Sandbox

{{ NgDocActions.playground("InputTextLabelPlayground") }}
