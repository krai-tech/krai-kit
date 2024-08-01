import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputTextDirective,
  InputTextLabelDirective,
  InputTextSize,
} from '@krai-tech/kit/input-text';

@Component({
  selector: 'kri-input-text-demo',
  standalone: true,
  imports: [CommonModule, InputTextDirective, InputTextLabelDirective],
  templateUrl: './input-text-demo.component.html',
  styleUrl: './input-text-demo.component.scss',
})
export class InputTextDemoComponent {
  @Input() placeholder = '';
  @Input() error = false;
  @Input() disabled = false;
  @Input() size: InputTextSize = 'medium';
}
