# @krai-cdk
## SafePipe

The **SafePipe** is an Angular pipe that bypasses Angular's built-in sanitization for specific content types. This is useful when you trust the content and need to insert it into the DOM without Angular stripping potentially unsafe elements.

## Installation

```bash
npm i @krai-tech/cdk
# or
yarn i @krai-tech/cdk
```

## Usage

### Import

```ts
import { SafePipe } from '@krai-tech/cdk/pipes/safe';
```

### Use the SafePipe

```html
<div [innerHTML]="htmlContent | safe:'html'"></div>
<div [style.background]="styleContent | safe:'style'"></div>
<iframe [src]="urlContent | safe:'resourceUrl'"></iframe>
```

## Security

Be cautious when bypassing security, as it can expose your application to XSS (Cross-Site Scripting) attacks. Ensure that the content being sanitized is from a trusted source.

## Contribution

Yes please! See the
[contributing guidelines](https://krai-kit.dev/en/docs/contribution)
for details.

## Documentation

[Getting Started](https://krai-kit.dev/en/docs/getting-started)

## License

This project is licensed under the terms of the
[MIT license](https://github.com/krai-tech/krai-kit/blob/master/LICENSE).
