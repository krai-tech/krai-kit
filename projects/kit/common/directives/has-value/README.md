# @krai-kit
## HasValue Directive

The `HasValueDirective` is designed to add a ‘has-value’ class and ‘data-has-value’ attribute to an element based on its value. 
It listens to input, blur, and focus events to manage the class and emits a `inputHasValue` event when the element has a value. 
It also integrates with a reset input directive to handle state changes when the input is reset.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

### Import
```ts
import { HasValueDirective } from '@krai-tech/common/has-value';
```

### Use the directive:

```html
<input kriHasValue (hasValue)="onHasValue($event)">
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
