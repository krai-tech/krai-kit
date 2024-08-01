### {{ NgDocPage.title }}

Встановіть пакет за допомогою `npm`:

```bash
npm install @krai-tech/web-api
```

Імпортуйте необхідний токен:

```ts
import { Назва_Токену } from '@krai-tech/web-api/tokens';
```

Приклад використання:

```ts
import { Component, Inject } from '@angular/core';
import { WINDOW } from '@krai-tech/web-api';

@Component({
  selector: 'app-root',
  template: `<h1>Web API для Angular</h1>`,
})
export class AppComponent {
  constructor(@Inject(WINDOW) private window: Window) {
    console.log(this.window.location.href);
  }
}
```
