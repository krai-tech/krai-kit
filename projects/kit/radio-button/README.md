# KRAI Kit
# RadioButtonComponent

The `RadioButtonComponent` is a custom radio button element that extends AbstractControl and includes additional theming capabilities.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import

```ts
import { RadioButtonComponent } from '@krai-tech/kit/radio-button';
```

### Use the RadioButtonComponent:

```html
<kri-radio
  [name]="radioName"
  [value]="radioValue"
  [disabled]="isDisabled"
  [checked]="radioSetChecked"
  [ariaLabelledBy]="ariaLabelledBy"
  [ariaLabel]="ariaLabel"
  (radioChange)="onRadioChange($event)">
</kri-radio>
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
