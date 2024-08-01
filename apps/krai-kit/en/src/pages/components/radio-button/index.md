# {{ NgDocPage.title }}

Є розширенням стандартного елемента радіокнопки з стилізацією.

### API

Посилання на **API** - `RadioButtonComponent`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { RadioButtonComponent } from '@krai-tech/kit/radio-button';
```

### Базовий приклад

Радіокнопка дозволить вибирати лише один елемент

```html name="radio-button.component.ts"
<kri-radio name="demo" value="18-35" [(ngModel)]="vm" (ngModelChange)="valueChange($event)"> </kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "18-35" } }) }}

### Динамічно побудований

```html name="radio-button.component.ts"
<kri-radio *ngFor="let item of testItems" name="age" [value]="item" [(ngModel)]="vmItem" (ngModelChange)="valueChange($event)">
  <span>{{ item }}</span>
</kri-radio>
```

{{ NgDocActions.demo("RadioButtonDemoComponent", { container: true }) }}

### Стани

#### Активний

Використовується як стандартний стан для радіо-кнопки, коли вона доступна для взаємодії і вибрана користувачем.

```html name="radio-button.component.ts"
<kri-radio name="demo" value="36-45" [checked]="true"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", checked: true } }) }}

#### Неактивний

Використовується як стандартний стан для радіо-кнопки, коли вона доступна для взаємодії і ще не вибрана користувачем.

```html name="radio-button.component.ts"
<kri-radio name="demo" value="36-45"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45" } }) }}

#### Вимкнений

Використовується, коли радіокнопка повинна бути відображена, але не доступна для взаємодії користувача.
Це може бути корисним для тимчасово недоступних опцій або для індикації обмежень.

```html name="radio-button.component.ts"
<kri-radio name="demo" value="36-45" [disabled]="true"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", disabled: true } }) }}

#### Вибраний і вимкнений

Використовується, коли необхідно відобразити обрану за замовчуванням опцію, але при цьому користувач не повинен мати можливості змінити цей вибір.
Це може бути корисним для обов’язкових опцій або умов.

```html name="radio-button.component.ts"
<kri-radio name="demo" value="36-45" [disabled]="true" [checked]="true"></kri-radio>
```

{{ NgDocActions.demo("RadioButtonComponent", { container: false, inputs: { name: 'demo', value: "36-45", disabled: true, checked: true } }) }}

### Доступність

#### Screen Reader

Компонент `RadioButton` використовує прихований нативний елемент `radio`, який видимий лише для скрінрідерів.
Значення для опису компонента можна надати за допомогою атрибутів `ariaLabelledBy` та `ariaLabel`.

> **Note**
> Використовується для забезпечення доступності радіокнопок для користувачів із вадами зору.
> Атрибути ariaLabelledBy та ariaLabel допомагають скрінрідерам озвучувати призначення радіокнопок.

```html
<span id="rb2">Two</span>
<kri-radio ariaLabelledBy="rb2" />

<kri-radio ariaLabel="Three" />
```
