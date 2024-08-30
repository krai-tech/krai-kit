# {{ NgDocPage.title }}

`TextareaDirective` is an extension of the standard `textarea` element, adding styling and automatic resizing functionality.

```ts
import { TextareaDirective } from '@krai-tech/kit/textarea';
```

## Basic

```html
<textarea kriTextarea
          id="textArea"
          placeholder="Text" 
          [error]="error" 
          [disabled]="disabled">
</textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false }) }}

## Floating label

The floating label appears at the top of the input field when it is focused or when there is text entered in the field.

```html
<div class="kri-float-label">
  <textarea kriTextarea
            id="textArea"
            placeholder="Text" 
            [error]="error" 
            [disabled]="disabled">
  </textarea>
  <label for="textArea">Label</label>
</div>
```

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false }) }}

## States

### Inactive

Used as the default state of the input field until the user begins to interact with it.

```html
<textarea kriTextarea></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false }) }}

### Disabled

Used when data entry is not possible or allowed in the current context. <br>
This can be useful for displaying fields that are temporarily or permanently unavailable for editing.

```html
<textarea kriTextarea [disabled]="true"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { disabled: true } }) }}

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false, inputs: { disabled: true } }) }}

### Error

Used when the entered data does not meet validation requirements or contains an error. <br>
This helps the user understand what needs to be corrected.

```html
<textarea kriTextarea [error]="true"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { hasError: true } }) }}

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false, inputs: { hasError: true } }) }}

## Maximum number of characters

Used when you need to limit the number of characters a user can enter in a text area. <br>
A character counter helps the user track the remaining available characters.

```html
<textarea kriTextarea maxlength="120" [showCounter]="true"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { showCounter: true } }) }}

## Resize

### Vertical

Used when you want to allow the user to adjust the height of the text area while keeping the width fixed.

```html
<textarea kriTextarea resize="vertical"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'vertical' } }) }}

### Horizontal

Used when you want to allow the user to adjust the width of the text area while keeping the height fixed.

```html
<textarea kriTextarea resize="horizontal"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'horizontal' } }) }}

### Both

Used when you want to allow the user to adjust both the width and height of the text area for greater input flexibility.

```html
<textarea kriTextarea resize="both"></textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'both' } }) }}

## Accessibility

You can add a description to this component using the `label` tag associated with the `textarea` through the `id` attribute. <br> 
Additionally, you can use the `aria-labelledby` or `aria-label` attributes to provide further explanations.

> **Note**
> Used to ensure the accessibility of text fields for users with visual impairments by helping screen readers accurately announce the purpose and instructions for the text area.
```html
<textarea kriTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea kriTextarea aria-labelledby="address2"></textarea>

<textarea kriTextarea aria-label="Address Details"></textarea>
```
