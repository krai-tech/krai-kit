import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { AlertComponent } from '@krai-tech/kit/alert';
import { AlertDemoComponent } from '@krai-tech/demo';

const AlertPage: NgDocPage = {
  title: `Alert`,
  mdFile: './index.md',
  keyword: 'AlertPage',
  category: ComponentsCategory,
  demos: { AlertComponent, AlertDemoComponent },
  playgrounds: {
    AlertPlayground: {
      target: AlertDemoComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default AlertPage;
