import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@krai-tech/kit/icon';

@Component({
  selector: 'kri-icon-custom-svg-demo',
  standalone: true,
  imports : [CommonModule, IconComponent],
  templateUrl: './icon-custom-svg-demo.component.html',
  styleUrl: './icon-custom-svg-demo.component.scss',
})
export class IconCustomSvgDemoComponent {}
