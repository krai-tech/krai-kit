import { NgDocPage } from '@ng-doc/core';
import { TextareaDemoComponent, TextareaLabelDemoComponent } from '@krai-tech/demo';
import ComponentsCategory from '../ng-doc.category';

const TextareaPage: NgDocPage = {
  title: `Textarea`,
  mdFile: './index.md',
  keyword: 'TextareaPage',
  category: ComponentsCategory,
  demos: { TextareaDemoComponent, TextareaLabelDemoComponent },
  playgrounds: {
    TextareaLabelPlayground: {
      target: TextareaLabelDemoComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default TextareaPage;
