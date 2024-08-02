<p align="center">
  <a href="https://krai-kit.dev">
      <img alt="KRAI WEB API Logo" src="https://github.com/krai-tech/krai-kit/raw/alpha/assets/krai-web-api.svg" width="280" style="max-width:100%;">
  </a>
</p>

<h1 align="center">KRAI Web API</h1>

<div align="center">
  <a href="https://npmjs.com/package/@krai-tech/kit">
    <img src="https://img.shields.io/npm/v/@krai-tech/kit.svg" alt="npm version">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
</div>

[Website](https://krai-kit.dev)

**Web API for Angular** creates injection tokens for working with native web APIs, simplifying their implementation, testing, and maintenance in Angular applications.

## Purpose

- **Testability**: Injection tokens allow replacing real web APIs with mocks during testing.
- **SSR**: During server-side rendering (**SSR**), some web APIs are unavailable. Injection tokens help adapt the code to work on both client and server.

## Installation

```bash
npm i @krai-tech/web-api
# or
yarn i @krai-tech/web-api
```

## Import

```ts
import { Token_Name } from '@krai-tech/web-api/tokens';
```

## Tokens

- `WINDOW` — provides access to the global `window` object
- `NAVIGATOR` — provides access to the `window.navigator` object
- `USER_AGENT` — provides access to the `window.navigator.userAgent` string
- `ANIMATION_FRAME` — shared `Observable` based on `window.requestAnimationFrame`
- `CRYPTO` — provides access to the `window.crypto` object
- `LOCATION` — provides access to the `window.location` object
- `LOCAL_STORAGE` — provides access to the `window.localStorage` object
- `SCREEN` — provides access to the `window.screen` object
- `SESSION_STORAGE` — provides access to the `window.sessionStorage` object
- `PAGE_VISIBILITY` — wrapper for the API `document.addEventListener('visibilityChange')`
- `HISTORY` — provides access to the `window.history` object

## Contribution

Yes please! See the
[contributing guidelines](https://krai-kit.dev/en/docs/contribution)
for details.

## Documentation

[Getting Started](https://krai-kit.dev/en/docs/getting-started)

## License

This project is licensed under the terms of the
[MIT license](https://github.com/krai-tech/krai-kit/blob/master/LICENSE).
