import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { ButtonDirectiveComponent } from '@krai-tech/demo';

const ButtonPage: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  keyword: 'ButtonPage',
  demos: { ButtonDirectiveComponent },
  category: ComponentsCategory,
  playgrounds: {
    ButtonPlayground: {
      target: ButtonDirectiveComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default ButtonPage;
