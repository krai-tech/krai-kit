import { NgDocPage } from '@ng-doc/core';
import { RadioButtonComponent } from '@krai-tech/kit/radio-button';
import ComponentsCategory from '../ng-doc.category';
import { RadioButtonDemoComponent } from '@krai-tech/demo';

const RadioButtonPage: NgDocPage = {
  title: `Radio Button`,
  mdFile: './index.md',
  keyword: 'RadioButtonPage',
  category: ComponentsCategory,
  demos: { RadioButtonComponent, RadioButtonDemoComponent },
};

export default RadioButtonPage;
