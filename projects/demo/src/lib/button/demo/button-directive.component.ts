import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonDirective,
  ButtonIconPosition,
  ButtonSize,
  ButtonStyle,
  ButtonType,
} from '@krai-tech/kit/button';
import { IconTypes } from '@krai-tech/kit/icon';

@Component({
  selector: 'kri-button-directive',
  standalone: true,
  imports: [CommonModule, ButtonDirective],
  templateUrl: './button-directive.component.html',
  styleUrl: './button-directive.component.scss',
})
export class ButtonDirectiveComponent {
  @Input() type: ButtonType = 'button';
  @Input() style: ButtonStyle = 'primary';
  @Input() size: ButtonSize = '32';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() icon: IconTypes | '' = '';
  @Input() iconColor = '';
  @Input() iconSize = '';
  @Input() iconRotate = 0;
  @Input() iconPosition: ButtonIconPosition = 'right';
}
