# {{ NgDocPage.title }}

Є розширенням стандартного елемента введення з стилізацією.

### API

Посилання на **API** - `InputTextDirective`, `InputTextLabelDirective`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { InputTextDirective, InputTextLabelDirective } from '@krai-tech/kit/input-text';
```

### Базовий приклад

`InputTextDirective` застосовується до поля введення за допомогою директиви **kriInputText**, що забезпечує додаткову стилізацію та функціональність.

```html name="input-text.directive.ts"
<input kriInputText [placeholder]="placeholder" id="textInput" [error]="error" [disabled]="disabled" [size]="size" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false }) }}

### Плаваючий лейбл

Плаваючий лейбл з’являється у верхній частині поля введення, коли на нього наводиться фокус або коли в полі є введений текст.

```html name="input-text.directive.ts, input-text-label.directive.ts"
<div class="kri-float-label">
  <input kriInputText [placeholder]="placeholder" id="textInput" [error]="error" [disabled]="disabled" [size]="size" />
  <label for="textInput" kriInputTextLabel [size]="size">Label</label>
</div>
```

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false }) }}

З предустановленним значенням

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { showDefaultText: true } }) }}

### Стани

#### Неактивний

Використовується як стандартний стан поля введення до моменту, коли користувач почне взаємодію з ним.

```html name="input-text.directive.ts"
<input kriInputText placeholder="Text" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text"} }) }}

#### Вимкнено

Використовується, коли введення даних не є можливим або дозволеним в поточному контексті.
Це може бути корисно для відображення полів, які тимчасово або постійно недоступні для редагування.

```html name="input-text.directive.ts"
<input kriInputText placeholder="Text" [disabled]="true" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", disabled: true } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { disabled: true } }) }}

#### Помилка

Використовується, коли введені дані не відповідають вимогам валідації або містять помилку.
Це допомагає користувачеві зрозуміти, що потрібно виправити.

```html name="input-text.directive.ts"
<input kriInputText placeholder="Text" [error]="true" />
```

#### Очистити інпут

```html name="input-text.directive.ts"
<input kriInputText [showReset]="true" />
```

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { showDefaultText: true, showReset: true } }) }}

### Розміри

#### Великий

Використовується, коли потрібне більш помітне поле введення, наприклад, у формах з великим обсягом тексту або для покращення читабельності.

```html name="input-text.directive.ts"
<input kriInputText placeholder="Text" [size]="large" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", size: "large" } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { size: "large" } }) }}

#### Маленький

Використовується, коли необхідне компактне поле введення, наприклад, у формах з обмеженим простором або для введення коротких текстів.

```html name="input-text.directive.ts"
<input kriInputText placeholder="Text" [size]="small" />
```

{{ NgDocActions.demo("InputTextDemoComponent", { container: false, inputs: { placeholder: "Text", size: "small" } }) }}

{{ NgDocActions.demo("InputTextLabelDemoComponent", { container: false, inputs: { size: "small" } }) }}

### Пісочниця

{{ NgDocActions.playground("InputTextLabelPlayground") }}

### Доступність

Щоб надати опис для цього компонента, можна використовувати тег `label` у поєднанні з атрибутом `id`, або скористатися атрибутами `aria-labelledby` чи `aria-label`.

> **Note**
> Це допомагає скрінрідерам озвучувати призначення та інструкції для поля введення.

```html
<span id="lastname">Lastname</span>
<input kriInputText aria-labelledby="lastname" />

<input kriInputText aria-label="Age" />
```
