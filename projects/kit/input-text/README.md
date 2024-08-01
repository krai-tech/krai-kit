# @krai-kit
## InputTextDirective

The `InputTextDirective` enhances standard input elements with custom styles and behavior. It provides support for error state, size variants (small, medium, large), and an additional title attribute for disabled inputs.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import
```ts
import { InputTextDirective } from '@krai-tech/kit/input-text';
```

### Use the InputTextDirective:

You can use the `InputTextDirective` in your Angular templates to enhance input elements:

```html
<input kriInputText
  [error]="hasError"
  [size]="inputSize"
  [(ngModel)]="inputValue">
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
