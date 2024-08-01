## Інсталяція

`@krai-kit` — це потужний набір компонентів інтерфейсу для Angular з відкритим кодом.

### Завантажити

```bash
npm install @krai-tech/kit @krai-tech/cdk
```

### Стилі

Стилі є необхідними файлами css/scss компонентів.
Їх треба імпортувати у файл angular.json або src/styles.css

#### angular.json

```json
{
  "styles": ["node_modules/@krai-tech/kit/style/theme/fonts-face.scss"]
}
```

#### styles.css/scss

```sass
  @import "@krai-tech/kit/style/theme/fonts-face.scss";
```
