import { NgDocPage } from '@ng-doc/core';
import { ToggleComponent } from '@krai-tech/kit/toggle';
import { ToggleVmDemoComponent, ToggleDemoComponent } from '@krai-tech/demo';
import ComponentsCategory from '../ng-doc.category';

const TogglePage: NgDocPage = {
  title: `Toggle`,
  mdFile: './index.md',
  keyword: 'TogglePage',
  category: ComponentsCategory,
  demos: { ToggleComponent, ToggleDemoComponent, ToggleVmDemoComponent },
  playgrounds: {
    TogglePlayground: {
      target: ToggleDemoComponent,
      template: `<ng-doc-selector></ng-doc-selector>`,
    },
  },
};

export default TogglePage;
