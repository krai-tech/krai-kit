# @krai-kit
## ToggleComponent

The `ToggleComponent` is a customizable toggle switch component that extends AbstractControl and implements OnChanges. It can be used within forms and other interactive elements.

## Installation

```bash
npm install @krai-tech/kit
```

## Usage

### Import 
```ts
import { ToggleComponent } from '@krai-tech/kit/toggle';
```

### Use the ToggleComponent:

```html
<kri-toggle
  [size]="toggleSize"
  [color]="toggleColor"
  [disabled]="isDisabled"
  [checked]="toggleChecked"
  (toggleChange)="onToggleChange($event)">
</kri-toggle>
```

## Contribution

Yes please! See the
[contributing guidelines](https://krai-kit.dev/en/docs/contribution)
for details.

## Documentation

[Getting Started](https://krai-kit.dev/en/docs/getting-started)

## License

This project is licensed under the terms of the
[MIT license](https://github.com/krai-tech/krai-kit/blob/master/LICENSE).
