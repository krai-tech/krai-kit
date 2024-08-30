# KRAI CDK
## HasError Directive

Provides a directive to manage the `has-error`, `data-has-error`, and `aria-has-error` attributes of an element.

## Installation

```bash
npm i @krai-tech/cdk
# or
yarn add @krai-tech/cdk
```

## Usage

### Import

```typescript
import { HasErrorDirective } from '@krai-tech/cdk/directives/has-error';
```

### Use the directive

```html
<input kriHasError [hasError]=isError>
```

### Example Component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  template: `
    <input kriHasError [hasError]=hasError />
  `
})
export class ExampleComponent {
  hasError = false;
}
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

