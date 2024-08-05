import { NgDocPage } from '@ng-doc/core';
import { IconComponent } from '@krai-tech/kit/icon';
import ComponentsCategory from '../ng-doc.category';
import { IconCustomSvgDemoComponent, IconListDemoComponent } from '@krai-tech/demo';

const IconPage: NgDocPage = {
  title: `Icon`,
  mdFile: './index.md',
  keyword: 'IconPage',
  category: ComponentsCategory,
  demos: { IconComponent, IconListDemoComponent, IconCustomSvgDemoComponent },
};

export default IconPage;
