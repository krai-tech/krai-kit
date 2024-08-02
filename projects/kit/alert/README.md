# KRAI Kit
## AlertComponent

The `AlertComponent` is a reusable component for displaying alert messages with various customizable properties.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

## Usage

### Import
```ts
import { AlertComponent } from '@krai-tech/kit/alert';
```

### Use the AlertComponent:

```html
<kri-alert
  [type]="alertType"
  [customClass]="customClass"
  [icon]="icon"
  [showIcon]="showIcon"
  [iconColor]="iconColor"
  [showCloseBtn]="showCloseBtn"
  (closeAlert)="onAlertClosed()">
  This is an alert message!
</kri-alert>
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
