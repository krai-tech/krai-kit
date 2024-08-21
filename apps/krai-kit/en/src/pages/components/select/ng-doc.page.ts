import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import {
  SingleSelectDemoComponent, SingleTemplateOptionsComponent
} from '@krai-tech/demo';


const SelectPage: NgDocPage = {
  title: `Select`,
  mdFile: './index.md',
  keyword: 'SelectPage',
  category: ComponentsCategory,
  demos: {
    SingleSelectDemoComponent,
    SingleTemplateOptionsComponent
  },
};

export default SelectPage;
