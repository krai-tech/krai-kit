# {{ NgDocPage.title }}

Базовий набір іконок який задіяний в наших компонентах.

### API

Посилання на **API** - `IconComponent`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { IconComponent } from '@krai-tech/kit/icon';
```

### Базовий приклад

Цей приклад показує, як використати базову іконку.

```html
<kri-icon icon="add-to-card"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card" } }) }}

### Стани

Іконки можуть мати різні стани, в залежності від їх використання.

#### Активний

Цей стан показує, як виглядає активна іконка.

```html
<kri-icon icon="add-to-card" [active]="true"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", active: true } }) }}

#### Вимкнений

Цей стан показує, як виглядає вимкнена іконка.

```html
<kri-icon icon="add-to-card" [disabled]="true"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", disabled: true } }) }}

#### Колір

Іконки можуть бути змінені за кольором. У цьому прикладі іконка має червоний колір.

```html
<kri-icon icon="add-to-card" color="red"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", color: "red" } }) }}

#### Обертання

Іконки можуть обертатися. Нижче наведено приклад безкінечного обертання.

```html
<kri-icon icon="loader" rotate="infinite"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "loader", rotate: "infinite" } }) }}

#### Обертання на {n} кількість градусів

Іконка може обертатися на задану кількість градусів. У цьому прикладі іконка обертається на 180 градусів.

```html
<kri-icon icon="add-to-card" rotate="180"></kri-icon>
```

{{ NgDocActions.demo("IconComponent", { container: false, inputs: { icon: "add-to-card", rotate: "180" } }) }}

### Шаблон

Можна використовувати власні SVG шаблони для іконок. Нижче наведено приклад використання користувацького шаблону.

```html
<kri-icon [icon]="customTemplate"></kri-icon>

<ng-template #customTemplate>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 12L16.11 9.79C15.54 9.11 14.81 8.61 14 8.31V3C14 2.45 13.55 2 13 2H7C6.45 2 6 2.45 6 3V8.14C4.28 8.59 3 10.14 3 12C3 12.09 3.03 12.17 3.05 12.25C2.43 12.59 2 13.24 2 14V18C2 19.1 2.9 20 4 20H5.05C5.28 21.14 6.29 22 7.5 22C8.71 22 9.72 21.14 9.95 20H15.05C15.28 21.14 16.29 22 17.5 22C18.71 22 19.72 21.14 19.95 20H20C21.1 20 22 19.1 22 18V16C22 13.79 20.21 12 18 12ZM15.36 12H11V10H12.28C13.17 10 14.01 10.39 14.58 11.07L15.36 12ZM8 4H9V5C9 5.55 9.45 6 10 6C10.55 6 11 5.55 11 5V4H12V8H8V4ZM7 10H9V12H5C5 10.9 5.9 10 7 10ZM7.5 20C7.22 20 7 19.78 7 19.5C7 19.22 7.22 19 7.5 19C7.78 19 8 19.22 8 19.5C8 19.78 7.78 20 7.5 20ZM17.5 20C17.22 20 17 19.78 17 19.5C17 19.22 17.22 19 17.5 19C17.78 19 18 19.22 18 19.5C18 19.78 17.78 20 17.5 20ZM20 18H19.49C19.03 17.4 18.32 17 17.5 17C16.68 17 15.97 17.4 15.51 18H9.49C9.03 17.4 8.32 17 7.5 17C6.68 17 5.97 17.4 5.51 18H4V14H18C19.1 14 20 14.9 20 16V18Z" fill="#202124" fill-opacity="0.72" />
  </svg>
</ng-template>
```

### Список іконок

Цей розділ містить повний список іконок:

{{ NgDocActions.demo("IconListDemoComponent", { container: false }) }}
