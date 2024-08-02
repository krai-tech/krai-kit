# KRAI CDK
## Base Classes

This library contains a set of base classes that are part of the [**@krai-kit**](https://github.com/krai-tech/krai-kit).

## Installation

```bash
npm i @krai-tech/cdk
# or
yarn i @krai-tech/cdk
```

## Usage

### Import

```ts
import { BaseClassName } from '@krai-tech/cdk/classes';
```

## Example

```ts
import { Component } from '@angular/core';
import { BaseClassName } from '@krai-tech/cdk/classes';

@Component({
  selector : 'app-component'
})
export class AppComponent extends BaseClassName {
  constructor () {
    super();
  }
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
