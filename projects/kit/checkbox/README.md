# @krai-kit
## CheckboxComponent

The `CheckboxComponent` is an extension of the standard checkbox element with additional theming capabilities.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import
```ts
import { CheckboxComponent } from '@krai-tech/kit/checkbox';
```

### Use the CheckboxComponent:
```html
<kri-checkbox
  [name]="checkboxName"
  [label]="checkboxLabel"
  [color]="checkboxColor"
  [checked]="checkboxSetChecked"
  [disabled]="isDisabled"
  [isShowTitle]="isShowTitle"
  [title]="checkboxTitle"
  [showAnimation]="showAnimation"
  [ariaLabelledBy]="ariaLabelledBy"
  [ariaLabel]="ariaLabel"
  (checkboxChange)="onCheckboxChange($event)">
</kri-checkbox>
```

## Contribution

Yes please! See the
[contributing guidelines](https://krai-kit.dev/en/docs/contribution)
for details.

## Documentation

[Getting Started](https://krai-kit.dev/en/docs/getting-started)

## License

This project is licensed under the terms of the
[
