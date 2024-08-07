# {{ NgDocPage.title }}

`ToggleComponent` - a component for toggling states. It allows selecting one of two mutually exclusive options, with one of them being selected by default.

```ts
import { ToggleComponent } from '@krai-tech/kit/toggle';
```

## Basic

```html
<kri-toggle [(checked)]="vm" (toggleChange)="toggleChange($event)"></kri-toggle>
```

{{ NgDocActions.demo("ToggleVmDemoComponent", { container: true }) }}

## States

### Enabled

Used to indicate that the option is active or enabled.

```html
<kri-toggle [checked]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: true } }) }}

### Disabled

Used to indicate that the option is inactive or disabled.

```html
<kri-toggle [checked]="false"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: false } }) }}

### Enabled but not editable

Used to indicate that the option is active but temporarily or permanently not editable by the user.

```html
<kri-toggle [checked]="true" [disabled]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: true, disabled: true } }) }}

### Disabled and unavailable

Used to indicate that the option is inactive and temporarily or permanently cannot be changed by the user.

```html
<kri-toggle [disabled]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { disabled: true } }) }}

## Size

### Large

Used when a more prominent switch is needed, for example, to draw attention to important settings or on large screens.

```html
<kri-toggle size="large"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { size: 'large' } }) }}
