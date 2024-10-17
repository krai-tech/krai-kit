
# Dropdown Directive

A standalone `DropdownDirective` for managing dropdown status. This directive offers a simple API to toggle, open, and close dropdown menus, while allowing configurations like internal click handling and disabling.

## Installation

```bash
npm i @krai-tech/kit
# or
yarn i @krai-tech/kit
```

### Import
```ts
import { DropdownDirective, DropdownToggleDirective, DropdownMenuDirective } from '@krai-tech/kit/common/directives/dropdown';
```

## Use the directive:

```html
<div kriDropdown #dropdown="dropdown">
    <button kriDropdownToggle>Toggle Dropdown</button>
    <div *ngIf="dropdown.isOpen()">
      <div kriDropdownMenu>
        Dropdown content here
      </div>
    </div>
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
