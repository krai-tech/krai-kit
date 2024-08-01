import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SingleSelectDemoComponent,
  MultipleComponent,
  MultipleReactiveFormComponent,
  MultipleTemplateOptionComponent,
} from '@krai-tech/demo';

const SelectPage: NgDocPage = {
  title: `Select`,
  mdFile: './index.md',
  keyword: 'SelectPage',
  category: ComponentsCategory,
  demos: {
    SingleSelectDemoComponent,
    MultipleReactiveFormComponent,
    MultipleComponent,
    MultipleTemplateOptionComponent,
  },
};

export default SelectPage;
