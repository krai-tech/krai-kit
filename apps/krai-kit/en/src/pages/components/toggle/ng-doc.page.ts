import { NgDocPage } from '@ng-doc/core';
import { ToggleComponent } from '@krai-tech/kit/toggle';
import ComponentsCategory from '../ng-doc.category';
import { ToggleDemoComponent, ToggleVmDemoComponent } from '@krai-tech/demo';

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
