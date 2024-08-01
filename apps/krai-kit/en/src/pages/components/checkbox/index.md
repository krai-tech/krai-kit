# {{ NgDocPage.title }}

Є розширенням стандартного елемента чекбокса з стилізацією.

### API

Посилання на **API** - `CheckboxComponent`, `CheckboxGComponent`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { CheckboxComponent, CheckboxGComponent } from '@krai-tech/kit/checkbox';
```

### Базовий приклад

Чекбокси дозволяють вибирати безліч елементів.

> **Note**
> Назва групи чекбоксів має явно вказувати на те, що в ній можна вибрати кілька пунктів.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб" (checkboxChange)="onCheckboxChange($event)" [(ngModel)]="vm"> </kri-checkbox>
```

{{ NgDocActions.demo("CheckboxDemoComponent", { container: true }) }}

### Група

```html name="checkbox-g.component.ts"
<kri-checkbox-g name="demo-g" [options]="data" [isShowTitle]="true" [(ngModel)]="vm" (checkboxChange)="onCheckboxChange($event)"> </kri-checkbox-g>
```

{{ NgDocActions.demo("CheckboxGDemoComponent", { container: true }) }}

```html name="checkbox-g.component.ts"
<kri-checkbox-g name="demo-g" direction="row" [options]="data" [isShowTitle]="true" [(ngModel)]="vm" (checkboxChange)="onCheckboxChange($event)"> </kri-checkbox-g>
```

{{ NgDocActions.demo("CheckboxGDemoComponent", { container: true, inputs: { direction: "row" } }) }}

### Стани

#### Неактивний

Використовується за замовчуванням, коли чекбокс доступний для вибору і ще не обраний користувачем.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб" [checked]="false"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", checked: false } }) }}

#### Обраний

Використовується, коли чекбокс обраний користувачем. Це вказує на те, що відповідна опція або елемент вибрані.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб" [checked]="true"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", checked: true } }) }}

#### Вимкнений

Використовується, коли чекбокс не повинен бути доступний для взаємодії. Це може бути корисно для вказівки на тимчасово недоступні опції або елементи.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб" [disabled]="true" [checked]="false"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", disabled: true, checked: false } }) }}

#### Обраний і вимкнений

Використовується, коли опція повинна бути за замовчуванням обрана, але користувач не може змінити її стан. Це часто застосовується для обов’язкових параметрів або умов.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб" [disabled]="true" [checked]="true"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб", disabled: true, checked: true } }) }}

#### Індивідуальний колір

Використовується, коли необхідно виділити певний чекбокс або групу чекбоксів, надавши їм унікальний колір.

```html name="checkbox.component.ts"
<kri-checkbox label="Custom color" color="#e30dbf" [checked]="true"> </kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Custom color", checked: true, color: "#e30dbf" } }) }}

#### Вимкнути анмімацію

Використовується, коли анімація вибору/скасування вибору не потрібна або небажана. Це може бути корисно для покращення продуктивності або для створення більш стриманого інтерфейсу.

```html name="checkbox.component.ts"
<kri-checkbox label="Хліб без анімації" [showAnimation]="false"></kri-checkbox>
```

{{ NgDocActions.demo("CheckboxComponent", { container: false, inputs: { label: "Хліб без анімації", checked: true, showAnimation: false } }) }}

### Тексти

#### Назва чекбоксу

Чекбокс завжди застосовується разом з лейблом, що пояснюють його значення.
Для лейбла краще не використовувати речення з негативним формулюванням.

> **Alert** > **Не вірно** - _Не показувати сповіщення_

> **Note** > **Вірно** - _Показувати сповіщення_

Іноді для підтвердження згоди користувача з умовами роботи використовується чекбокс.
У такому випадку важливо використовувати короткі формулювання і використовувати посилання тільки на частині тексту.

> Я погоджуюся з [умовами обробки персональних даних]() і даю згоду на їх використання

### Доступність

#### Screen Reader

Компонент `Checkbox` використовує прихований нативний елемент `checkbox`, який видимий лише для скрінрідерів.
Значення для опису компонента можна надати за допомогою атрибутів `ariaLabelledBy` та `ariaLabel`.

> **Note**
> Забезпечте доступність вашого інтерфейсу для користувачів із вадами зору, використовуючи атрибути ariaLabelledBy та ariaLabel, щоб надати чіткі описи елементів інтерфейсу.

```html
<span id="checkbox2">Remember Me</span>
<kri-checkbox ariaLabelledBy="checkbox2" />

<kri-checkbox ariaLabel="Remember Me" />
```
