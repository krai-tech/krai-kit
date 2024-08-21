import {NgDocPage} from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { MultipleComponent, MultipleReactiveFormComponent, MultipleTemplateOptionComponent } from '@krai-tech/demo';

const MultiselectPage: NgDocPage = {
	title: `Multiselect`,
	mdFile: './index.md',
  keyword: 'MultiselectPage',
  category: ComponentsCategory,
  demos: {
    MultipleReactiveFormComponent,
    MultipleComponent,
    MultipleTemplateOptionComponent,
  }
};

export default MultiselectPage;
