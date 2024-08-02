# KRAI Kit
## ButtonDirective

The `ButtonDirective` adds custom behavior and theming capabilities to button elements.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import
```ts
import { ButtonDirective } from '@krai-tech/kit/button';
```

### Use the ButtonDirective:
```html
<button kriButton
  [type]="buttonType"
  [style]="buttonStyle"
  [size]="buttonSize"
  [disabled]="isDisabled" 
  [fullWidth]="isFullWidth"
  (buttonClick)="onButtonClick($event)">
  {{ buttonText }}
</button>
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
