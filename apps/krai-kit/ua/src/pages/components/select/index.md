# {{ NgDocPage.title }}

Компонент `SelectComponent` є кастомним випадаючим списком, що надає можливості для мультивибору, кастомних шаблонів для опцій та інтеграції з формами.

### API

Посилання на **API** - `SelectComponent`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { SelectComponent } from '@krai-tech/kit/select';
```

### Базовий приклад

`SelectComponent` можна додати до вашої форми за допомогою селектора **kri-select**.

```html name="select.component.ts"
<kri-select
  [config]="{ placeholder: "Обрати ім'я" }"
  [options]="options"
  [(ngModel)]="vm">
</kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false }) }}

### Плаваючий лейбл

Плаваючий лейбл з’являється у верхній частині, коли на нього наводиться фокус або коли в полі є вибраний елемент.

```html name="select.component.ts"
<kri-select floatLabel="Label Text"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { floatLabel: 'Label Text' } }) }}

### Мультіселект

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { multiple: true } }) }}

### Мультіселект з плаваючим лейблом

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

### Мультіселект з пошуком

{{ NgDocActions.demo("MultipleComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true, config: { placeholder: "Обрати ім'я", search: true } } }) }}

### Шаблон для options

{{ NgDocActions.demo("MultipleTemplateOptionComponent", { container: false, inputs: { floatLabel: 'Label Text', multiple: true } }) }}

## Стани

### Вимкнено

Використовується, коли вибір опцій не є можливим або дозволеним в поточному контексті.

```html name="select.component.ts"
<kri-select [disabled]="true"></kri-select>
```

{{ NgDocActions.demo("SingleSelectDemoComponent", { container: false, inputs: { disabled: true } }) }}

### Помилка

Використовується, коли вибрані дані не відповідають вимогам валідації або містять помилку.

```html name="select.component.ts"
<kri-select [error]="true"></kri-select>
```
