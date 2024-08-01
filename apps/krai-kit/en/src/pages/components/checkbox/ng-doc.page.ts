import { NgDocPage } from '@ng-doc/core';
import { CheckboxComponent, CheckboxGComponent } from '@krai-tech/kit/checkbox';
import ComponentsCategory from '../ng-doc.category';
import { CheckboxDemoComponent, CheckboxGDemoComponent } from '@krai-tech/demo';

const CheckboxPage: NgDocPage = {
  title: `Checkbox`,
  mdFile: './index.md',
  keyword: 'CheckboxPage',
  category: ComponentsCategory,
  demos: {
    CheckboxComponent,
    CheckboxGComponent,
    CheckboxDemoComponent,
    CheckboxGDemoComponent,
  },
};

export default CheckboxPage;
