### {{ NgDocPage.title }}

Набір загальних токенів для використання веб-API з Angular.

#### WINDOW

`WINDOW` забезпечує доступ до глобального об’єкта window, який надає різні властивості та методи для роботи з браузерним контекстом.

##### Імпорт

```ts
import { WINDOW } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { WINDOW } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-window-example',
  template: `
    <p>Current URL: {{ window.location.href }}</p>
    <button (click)="alertMessage()">Show Alert</button>
  `,
})
export class WindowExampleComponent {
  constructor(@Inject(WINDOW) public window: Window) {}

  alertMessage(): void {
    this.window.alert('This is an alert message!');
  }
}
```

#### NAVIGATOR

`NAVIGATOR` забезпечує доступ до об’єкта window.navigator, який надає інформацію про стан і можливості браузера.

##### Імпорт

```ts
import { NAVIGATOR } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject, OnInit } from '@angular/core';
import { NAVIGATOR } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-navigator-example',
  template: ` <p>User Agent: {{ navigator.userAgent }}</p> `,
})
export class NavigatorExampleComponent implements OnInit {
  constructor(@Inject(NAVIGATOR) public navigator: Navigator) {}

  ngOnInit(): void {
    console.log('User Agent:', this.navigator.userAgent);
    console.log('Online Status:', this.navigator.onLine ? 'Online' : 'Offline');
  }
}
```

#### LOCAL_STORAGE

`LOCAL_STORAGE` забезпечує доступ до об’єкта window.localStorage, який дозволяє зберігати дані в браузері на стороні клієнта.

##### Імпорт

```ts
import { LOCAL_STORAGE } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { LOCAL_STORAGE } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-example',
  template: '<p>Check the console</p>',
})
export class ExampleComponent {
  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {
    this.localStorage.setItem('key', 'value');
    console.log(this.localStorage.getItem('key'));
  }
}
```

#### SESSION_STORAGE

`SESSION_STORAGE` забезпечує доступ до об’єкта window.sessionStorage, який дозволяє зберігати дані в браузері на стороні клієнта протягом поточної сесії.

##### Імпорт

```ts
import { SESSION_STORAGE } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { SESSION_STORAGE } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-example',
  template: '<p>Check the console</p>',
})
export class ExampleComponent {
  constructor(@Inject(SESSION_STORAGE) private sessionStorage: Storage) {
    this.sessionStorage.setItem('key', 'value');
    console.log(this.sessionStorage.getItem('key'));
  }
}
```

#### USER_AGENT

`USER_AGENT` забезпечує доступ до рядка window.navigator.userAgent, який надає інформацію про поточний браузер.

##### Імпорт

```ts
import { USER_AGENT } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { USER_AGENT } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-example',
  template: '<p>Check the console</p>',
})
export class ExampleComponent {
  constructor(@Inject(USER_AGENT) private userAgent: string) {
    console.log(this.userAgent);
  }
}
```

#### ANIMATION_FRAME

`ANIMATION_FRAME` — це спільний Observable, оснований на window.requestAnimationFrame, який емулює значення часу на кожному кадрі анімації.

##### Імпорт

```ts
import { ANIMATION_FRAME } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { ANIMATION_FRAME } from '@krai-tech/web-api/tokens';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-animation-example',
  template: '<p>Check the console for animation frame timestamps</p>',
})
export class AnimationExampleComponent implements OnInit, OnDestroy {
  private animationFrameSubscription: Subscription;

  constructor(@Inject(ANIMATION_FRAME) private animationFrame$: Observable<DOMHighResTimeStamp>) {}

  ngOnInit(): void {
    this.animationFrameSubscription = this.animationFrame$.subscribe((timestamp) => {
      console.log('Animation frame timestamp:', timestamp);
    });
  }

  ngOnDestroy(): void {
    if (this.animationFrameSubscription) {
      this.animationFrameSubscription.unsubscribe();
    }
  }
}
```

#### CRYPTO

`CRYPTO` забезпечує доступ до об’єкта window.crypto, який надає доступ до криптографічних функцій.

##### Імпорт

```ts
import { CRYPTO } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { CRYPTO } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-example',
  template: '<p>Check the console for random values</p>',
})
export class ExampleComponent {
  constructor(@Inject(CRYPTO) private crypto: Crypto) {
    // Створюємо масив з 16 байтів і заповнюємо його випадковими значеннями
    const randomValues = new Uint8Array(16);
    this.crypto.getRandomValues(randomValues);
    console.log('Random values:', randomValues);
  }
}
```

#### LOCATION

`LOCATION` забезпечує доступ до об’єкта window.location, який надає інформацію про поточне місцезнаходження документа.

##### Імпорт

```ts
import { LOCATION } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { LOCATION } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-example',
  template: `
    <p>Current URL: {{ location.href }}</p>
    <button (click)="reloadPage()">Reload Page</button>
  `,
})
export class ExampleComponent {
  constructor(@Inject(LOCATION) public location: Location) {}

  reloadPage(): void {
    this.location.reload();
  }
}
```

#### SCREEN

`SCREEN` забезпечує доступ до об’єкта window.screen, який надає інформацію про розмір та інші властивості екрану.

##### Імпорт

```ts
import { SCREEN } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject, OnInit } from '@angular/core';
import { SCREEN } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-screen-example',
  template: `
    <p>Screen Width: {{ screen.width }}px</p>
    <p>Screen Height: {{ screen.height }}px</p>
    <p>Color Depth: {{ screen.colorDepth }}</p>
    <p>Orientation: {{ screen.orientation.type }}</p>
  `,
})
export class ScreenExampleComponent implements OnInit {
  constructor(@Inject(SCREEN) public screen: Screen) {}

  ngOnInit(): void {
    console.log('Screen width:', this.screen.width);
    console.log('Screen height:', this.screen.height);
    console.log('Color depth:', this.screen.colorDepth);
    console.log('Orientation:', this.screen.orientation.type);
  }
}
```

#### PAGE_VISIBILITY

`PAGE_VISIBILITY` — це обгортка для API document.addEventListener('visibilitychange'), що надає Observable, який відслідковує зміни видимості сторінки.

##### Імпорт

```ts
import { PAGE_VISIBILITY } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { PAGE_VISIBILITY } from '@krai-tech/web-api/tokens';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-page-visibility-example',
  template: '<p>Page is currently</p>',
})
export class PageVisibilityExampleComponent implements OnInit, OnDestroy {
  isVisible: boolean;
  private visibilitySubscription: Subscription;

  constructor(@Inject(PAGE_VISIBILITY) private pageVisibility$: Observable<boolean>) {}

  ngOnInit(): void {
    this.visibilitySubscription = this.pageVisibility$.subscribe((isVisible) => {
      this.isVisible = isVisible;
      console.log('Page visibility changed:', isVisible ? 'visible' : 'hidden');
    });
  }

  ngOnDestroy(): void {
    if (this.visibilitySubscription) {
      this.visibilitySubscription.unsubscribe();
    }
  }
}
```

#### HISTORY

`HISTORY` забезпечує доступ до об’єкта window.history, який надає можливості для маніпуляції історією сесій браузера.

##### Імпорт

```ts
import { HISTORY } from '@krai-tech/web-api/tokens';
```

##### Приклад

```ts
import { Component, Inject } from '@angular/core';
import { HISTORY } from '@krai-tech/web-api/tokens';

@Component({
  selector: 'app-history-example',
  template: `
    <button (click)="goBack()">Go Back</button>
    <button (click)="goForward()">Go Forward</button>
    <button (click)="logHistoryLength()">Log History Length</button>
  `,
})
export class HistoryExampleComponent {
  constructor(@Inject(HISTORY) private history: History) {}

  goBack(): void {
    this.history.back();
  }

  goForward(): void {
    this.history.forward();
  }

  logHistoryLength(): void {
    console.log('History length:', this.history.length);
  }
}
```
