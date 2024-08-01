# {{ NgDocPage.title }}

Є розширенням стандартного елемента кнопки з стилізацією.

### API

Посилання на **API** - `ButtonDirective`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { ButtonDirective } from '@krai-tech/kit/button';
```

### Типи

#### Primary

Використовується для дій, які потребують максимальної уваги. Рекомендуємо використовувати тільки одну таку кнопку на сторінці.

```html name="button.directive.ts"
<button kriButton style="primary">Text Button</button>
або
<button kriButtonPrimary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false }) }}

#### Secondary

Використовується для вторинних дій або для інтерфейсів з низьким ступенем контрастності. В залежності від контексту інтерфейсу може мати синє або сіре обведення.

```html name="button.directive.ts"
<button kriButton style="secondary">Text Button</button>
або
<button kriButtonSecondary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'secondary'} }) }}

#### Tertiary

Використовується для дій, які потребують найменшої уваги на сторінці.

```html name="button.directive.ts"
<button kriButton style="tertiary">Text Button</button>
або
<button kriButtonTertiary>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'tertiary'} }) }}

#### Ghost

Використовується для дій, які потребують найменшої уваги на сторінці.

```html name="button.directive.ts"
<button kriButton style="ghost">Text Button</button>
або
<button kriButtonGhost>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'ghost'} }) }}

#### Ghost кольоровий

Використовується для дій, які потребують найменшої уваги на сторінці.

```html name="button.directive.ts"
<button kriButton style="ghost-color">Text Button</button>
або
<button kriButtonGhostColor>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'ghost-color'} }) }}

#### Посилання

Використовується для посилань.

```html name="button.directive.ts"
<button kriButton style="link">Text Button</button>
або
<button kriButtonLink>Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: {style: 'link'} }) }}

### Стани

#### Вимкнений

Стан кнопки, коли взаємодія з нею з якихось причин недоступна. Варто через інші елементи інтерфейсу очевидно відобразити для користувача, чому кнопка недоступна в даний момент.

```html name="button.directive.ts"
<button kriButton [disabled]="true">Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { disabled: true } }) }}

#### На всю ширину

Стан `fullWidth` визначає, чи буде кнопка займати всю доступну ширину свого батьківського контейнера.
Це корисно для створення кнопок, які повинні займати всю ширину доступного простору, наприклад, у мобільних інтерфейсах або в елементах управління формою.

```html name="button.directive.ts"
<button kriButton [fullWidth]="true">Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { fullWidth: true } }) }}

#### Іконка

Іконка може бути налаштована з різними властивостями, такими як колір, розмір, позиція відносно тексту та кут повороту.

```html name="button.directive.ts"
<button kriButton icon="add-to-card">Text Button</button>
```

{{ NgDocActions.demo("ButtonDirectiveComponent", {container: false, inputs: { icon: "add-to-card" } }) }}

### Пісочниця

Цей розділ дозволяє взаємодіяти з різними варіантами кнопок та налаштовувати їх параметри у реальному часі, щоб побачити, як вони будуть виглядати та поводитися в інтерфейсі.

{{ NgDocActions.playground("ButtonPlayground") }}
