import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaDirective } from '@krai-tech/kit/textarea';

@Component({
  selector: 'kri-textarea-label-demo',
  standalone: true,
  imports: [CommonModule, TextareaDirective],
  templateUrl: './textarea-label-demo.component.html',
  styleUrl: './textarea-label-demo.component.scss',
})
export class TextareaLabelDemoComponent {
  @Input() error = false;

  @Input() disabled = false;
}
