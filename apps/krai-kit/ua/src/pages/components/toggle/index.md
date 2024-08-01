# {{ NgDocPage.title }}

Перемикач - компонент для перемикання станів. Він дозволяє обрати один з двох взаємосуперечливих варіантів, при цьому один з них обраний за замовчуванням.

### API

Посилання на **API** - `ToggleComponent`

### Імпорт

Для використання компонента кнопки, імпортуйте його наступним чином:

```ts
import { ToggleComponent } from '@krai-tech/kit/toggle';
```

### Базовий приклад

Компонент **Перемикач**, на відміну від **Чекбоксу**, завжди дає негайний результат, для зміни його статусу не потрібно натискати кнопку зберегти. Якщо дія не несе моментального результату краще використовувати **чекбокс** або інший, більш відповідний елемент вибору.

```html name="toggle.component.ts"
<kri-toggle [(checked)]="vm" (toggleChange)="toggleChange($event)"></kri-toggle>
```

{{ NgDocActions.demo("ToggleVmDemoComponent", { container: true }) }}

### Cтани

#### Увімкнений

Використовується для вказівки на те, що опція активна чи увімкнена.

```html name="toggle.component.ts"
<kri-toggle [checked]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: true } }) }}

#### Вимкнутий

Використовується для вказівки на те, що опція не активна чи вимкнута.

```html name="toggle.component.ts"
<kri-toggle [checked]="false"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: false } }) }}

#### Увімкнений, але недоступний для змін

Використовується для вказівки на те, що опція активна, але тимчасово або постійно не може бути змінена користувачем.

```html name="toggle.component.ts"
<kri-toggle [checked]="true" [disabled]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { checked: true, disabled: true } }) }}

#### Вимкнений, і недоступний

Використовується для вказівки на те, що опція неактивна і тимчасово або постійно не може бути змінена користувачем.

```html name="toggle.component.ts"
<kri-toggle [disabled]="true"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { disabled: true } }) }}

> **Note**
> Компонент Toggle не має стану помилки валідації.
>
> Якщо змінити положення перемикача неможливо слід використовувати стан **Вимкнутий**

### Розмір

#### Великий

Використовується, коли потрібен більш помітний перемикач, наприклад, для привертання уваги до важливих налаштувань або на великих екранах.

```html name="toggle.component.ts"
<kri-toggle size="large"></kri-toggle>
```

{{ NgDocActions.demo("ToggleComponent", { container: false, inputs: { size: 'large' } }) }}

### Пісочниця

Цей розділ дозволяє взаємодіяти з різними варіантами перемикача та налаштовувати їх параметри у реальному часі, щоб побачити, як вони будуть виглядати та поводитися в інтерфейсі.

{{ NgDocActions.playground("TogglePlayground") }}
