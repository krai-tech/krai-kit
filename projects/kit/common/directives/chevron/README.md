
# ChevronDirective

The `ChevronDirective` dynamically adds a chevron icon to an input element and updates the chevron's direction based on the dropdown state. It supports toggling the chevron direction and allows animations.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

### Import
```ts
import { ChevronDirective } from '@krai-tech/kit/common/directives/chevron';
```

## Usage

```html
<div kriDropdown #dropdown="dropdown">
  <!-- add ChevronDirective to input -->
  <input kriDropdownToggle kriChevron/>
  <!-- add ChevronDirective to input -->
  @if(dropdown.isOpen()) {
      <div kriDropdownMenu>
        Dropdown content here
      </div>
    }
</div>
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
