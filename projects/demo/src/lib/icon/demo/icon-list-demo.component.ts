import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, IconTypes, iconList } from '@krai-tech/kit/icon';

@Component({
  selector: 'kri-icon-list-demo',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './icon-list-demo.component.html',
  styleUrl: './icon-list-demo.component.scss',
})
export class IconListDemoComponent {
  readonly icons: IconTypes[] = iconList;
}
