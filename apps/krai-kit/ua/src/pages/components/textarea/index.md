# {{ NgDocPage.title }}

Є розширенням стандартного елемента textarea та додає стилі та функції автоматичного зміни розміру.

### API

Посилання на **API** - `TextareaDirective`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { TextareaDirective } from '@krai-tech/kit/textarea';
```

### Базовий приклад

`TextareaDirective` додається до поля введення за допомогою директиви **kriTextarea**, що забезпечує додаткову стилізацію та функціональність.

```html name="textarea.directive.ts"
<textarea kriTextarea placeholder="Text" id="textArea" [error]="error" [disabled]="disabled"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false }) }}

### Плаваючий лейбл

Плаваючий лейбл з’являється у верхній частині поля введення, коли на нього наводиться фокус або коли в полі є введений текст.

```html name="textarea.directive.ts"
<div class="kri-float-label">
  <textarea kriTextarea placeholder="Text" id="textArea" [error]="error" [disabled]="disabled"> </textarea>
  <label for="textArea">Label</label>
</div>
```

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false }) }}

### Стани

#### Неактивний

Використовується як стандартний стан поля введення до моменту, коли користувач почне взаємодію з ним.

```html name="textarea.directive.ts"
<textarea kriTextarea> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false }) }}

#### Вимкнено

Використовується, коли введення даних не є можливим або дозволеним в поточному контексті.
Це може бути корисно для відображення полів, які тимчасово або постійно недоступні для редагування.

```html name="textarea.directive.ts"
<textarea kriTextarea [disabled]="true"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { disabled: true } }) }}

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false, inputs: { disabled: true } }) }}

#### Помилка

Використовується, коли введені дані не відповідають вимогам валідації або містять помилку.
Це допомагає користувачеві зрозуміти, що потрібно виправити.

```html name="textarea.directive.ts"
<textarea kriTextarea [error]="true"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { error: true } }) }}

{{ NgDocActions.demo("TextareaLabelDemoComponent", { container: false, inputs: { error: true } }) }}

#### Максимальна кількість символів

Використовується, коли необхідно обмежити кількість символів, які користувач може ввести в текстову область.
Лічильник символів допомагає користувачу відслідковувати залишок доступних символів.

```html name="textarea.directive.ts"
<textarea kriTextarea maxlength="120" [showCounter]="true"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { showCounter: true } }) }}

### Зміна розміру

#### Вертикальний

Використовується, коли потрібно дозволити користувачу змінювати висоту текстової області, зберігаючи при цьому фіксовану ширину.

```html name="textarea.directive.ts"
<textarea kriTextarea resize="vertical"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'vertical' } }) }}

#### Горизонтальний

Використовується, коли потрібно дозволити користувачу змінювати ширину текстової області, зберігаючи при цьому фіксовану висоту.

```html name="textarea.directive.ts"
<textarea kriTextarea resize="horizontal"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'horizontal' } }) }}

#### Обидва

Використовується, коли потрібно дозволити користувачу змінювати як ширину, так і висоту текстової області для більшої гнучкості введення.

```html name="textarea.directive.ts"
<textarea kriTextarea resize="both"> </textarea>
```

{{ NgDocActions.demo("TextareaDemoComponent", { container: false, inputs: { resize: 'both' } }) }}

### Пісочниця

{{ NgDocActions.playground("TextareaLabelPlayground") }}

### Accessibility

Ви можете додати опис до цього компонента за допомогою тега `label`, який пов'язаний з `textarea` через атрибут `id`.
Також можна використовувати атрибути `aria-labelledby` або `aria-label` для надання додаткових пояснень.

> **Note**
> Використовується для забезпечення доступності текстових полів для користувачів із вадами зору, допомагаючи скрінрідерам правильно озвучувати призначення та інструкції для текстової області.

```html
<textarea kriTextarea id="address1"></textarea>

<span id="address2">Address 2</span>
<textarea kriTextarea aria-labelledby="address2"></textarea>

<textarea kriTextarea aria-label="Address Details"></textarea>
```
