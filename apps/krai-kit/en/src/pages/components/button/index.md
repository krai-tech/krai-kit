# {{ NgDocPage.title }}

`ButtonDirective` – an enhanced version of the standard button element, featuring custom styling.

```ts
import { ButtonDirective } from '@krai-tech/kit/button';
```

## Types

### Primary

Used for actions that require the highest level of attention. We recommend using only one such button on a page.

```html
<button kriButton appearance="primary">Text Button</button>
```

```html
<button kriButtonPrimary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false }) }}

#### Secondary

Used for secondary actions or for interfaces with low contrast. Depending on the context of the interface, it may have either a blue or gray border.

```html
<button kriButton appearance="secondary">Text Button</button>
```

```html
<button kriButtonSecondary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'secondary'} }) }}

#### Tertiary

Used for actions that require the least attention on the page.

```html
<button kriButton appearance="tertiary">Text Button</button>
```

```html
<button kriButtonTertiary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'tertiary'} }) }}

#### Ghost

Used for actions that require minimal attention on the page.

```html
<button kriButton appearance="ghost">Text Button</button>
```

```html
<button kriButtonGhost>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'ghost'} }) }}

#### Ghost color

Used for actions that require the least attention on the page.

```html
<button kriButton appearance="ghost-color">Text Button</button>
```

```html
<button kriButtonGhostColor>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'ghost-color'} }) }}

#### Link

Used for links.

```html
<button kriButton appearance="link">Text Button</button>
```

```html
<button kriButtonLink>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'link'} }) }}

### States

#### Disabled

The state of the button when interaction is unavailable for some reason. <br>
It is important to clearly indicate to the user, through other interface elements, why the

```html
<button kriButton [disabled]="true">Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { disabled: true } }) }}

#### Full width

The `fullWidth` state determines whether the button will occupy the entire width of its parent container. <br>
This is useful for creating buttons that need to fill the available space, such as in mobile interfaces or form controls.

```html
<button kriButton [fullWidth]="true">Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { fullWidth: true } }) }}

#### Icon

The icon can be customized with various properties, such as color, size, position relative to the text, and rotation angle.

```html
<button kriButton 
        kriButtonIcon 
        icon="add-to-card">Text Button
</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { icon: "add-to-card" } }) }}

### Sandbox

This section allows you to interact with different button variants and configure their parameters in real time, so you can see how they will look and behave in the interface.

{{ NgDocActions.playground("ButtonPlayground") }}
