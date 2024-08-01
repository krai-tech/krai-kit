import { NgDocPage } from '@ng-doc/core';
import ComponentsCategory from '../ng-doc.category';
import { InputTextDemoComponent, InputTextLabelDemoComponent } from '@krai-tech/demo';

const InputTextPage: NgDocPage = {
  title: `Input Text`,
  mdFile: './index.md',
  keyword: 'InputTextPage',
  category: ComponentsCategory,
  demos: { InputTextDemoComponent, InputTextLabelDemoComponent },
  playgrounds: {
    InputTextLabelPlayground: {
      target: InputTextLabelDemoComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default InputTextPage;
