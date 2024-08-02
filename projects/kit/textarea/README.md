# KRAI Kit
## TextareaDirective

The `TextareaDirective` enhances standard textarea elements with custom styles and behavior. It provides support for error state, resize options, and character counter.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import

```ts
import { TextareaDirective } from '@krai-tech/kit/textarea';
```

### Use the TextareaDirective:

```html
<textarea kriTextarea
  [error]="hasError"
  [resize]="textareaResize"
  [showCounter]="showCounter"
  [(ngModel)]="textareaValue">
</textarea>
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
