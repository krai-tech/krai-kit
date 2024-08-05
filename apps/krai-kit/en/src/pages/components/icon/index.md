# {{ NgDocPage.title }}

`IconComponent` - A basic set of icons used in our components.

```ts
import { IconComponent } from '@krai-tech/kit/icon';
```

## Base

This shows how to use a basic icon.

```html
<kri-icon icon="add-to-card"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card" } }) }}

## States

Icons can have different states depending on their usage.

### Active

Active icons are best used to indicate interactive state. <br>
They help highlight the current focus or action within the interface, providing clear visual feedback to users about their current selection or activity.

```html
<kri-icon icon="add-to-card" [active]="true"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", active: true } }) }}

### Disabled

The disabled state for an icon should be used to indicate that the icon represents a feature or action that is currently unavailable or non-interactive.

```html
<kri-icon icon="add-to-card" [disabled]="true"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", disabled: true } }) }}

## Color

Icons can be customized by color.

```html
<kri-icon icon="add-to-card" color="red"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", color: "red" } }) }}

## Rotation

Continuous rotation of icons is commonly used for loading indicators, animated feedback, and progress indicators to show ongoing activities or processes.
```html
<kri-icon icon="loader" rotate="infinite"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "loader", rotate: "infinite" } }) }}

## Rotation by {n} degrees

Rotation by a specific number of degrees can be used to adjust icon orientation, enhance animations, or create visually dynamic layouts.

```html
<kri-icon icon="add-to-card" rotate="180"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", rotate: "180" } }) }}

## Template

Custom SVG templates for icons can be used to maintain design consistency, match branding requirements, and provide unique visual elements in the UI.
```html
<kri-icon [icon]="customTemplate"></kri-icon>

<ng-template #customTemplate>
  <svg width="56px" height="56px" viewBox="0 -6.234 56 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><g><path d="M47.437 3.631A45.609 45.609 0 0 0 35.884 0c-0.498 0.9 -1.079 2.11 -1.48 3.073q-6.461 -0.972 -12.804 0c-0.401 -0.963 -0.995 -2.173 -1.498 -3.073a45.456 45.456 0 0 0 -11.562 3.64C1.229 14.688 -0.753 25.463 0.238 36.084c4.849 3.621 9.549 5.821 14.17 7.261A35.219 35.219 0 0 0 17.442 38.347a29.838 29.838 0 0 1 -4.779 -2.326 23.844 23.844 0 0 0 1.172 -0.927c9.214 4.31 19.226 4.31 28.33 0a28.875 28.875 0 0 0 1.171 0.927 29.75 29.75 0 0 1 -4.788 2.33c0.876 1.754 1.89 3.428 3.035 4.998 4.625 -1.439 9.329 -3.639 14.178 -7.265 1.163 -12.313 -1.986 -22.988 -8.325 -32.454M18.697 29.552c-2.766 0 -5.035 -2.582 -5.035 -5.727s2.22 -5.731 5.035 -5.731 5.083 2.582 5.035 5.731c0.004 3.145 -2.22 5.727 -5.035 5.727m18.605 0c-2.766 0 -5.034 -2.582 -5.034 -5.727s2.22 -5.731 5.034 -5.731c2.815 0 5.083 2.582 5.035 5.731 0 3.145 -2.22 5.727 -5.035 5.727" fill="#5865F2" fill-rule="nonzero"/></g></svg>
</ng-template>
```

{{ NgDocActions.demo("IconCustomSvgDemoComponent", { container: false }) }}


## Icon list

This section contains the complete list of icons:

{{ NgDocActions.demo("IconListDemoComponent", { container: false }) }}
