import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaDirective, TextareaResize } from '@krai-tech/kit/textarea';

@Component({
  selector: 'kri-textarea-demo',
  standalone: true,
  imports: [CommonModule, TextareaDirective],
  templateUrl: './textarea-demo.component.html',
  styleUrl: './textarea-demo.component.scss',
})
export class TextareaDemoComponent {
  @Input() error = false;

  @Input() disabled = false;

  @Input() showCounter = false;

  @Input() resize: TextareaResize = 'none';
}
