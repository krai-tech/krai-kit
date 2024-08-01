import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent, ToggleSize } from '@krai-tech/kit/toggle';

@Component({
  selector: 'kri-toggle-demo',
  standalone: true,
  imports: [CommonModule, ToggleComponent],
  templateUrl: './toggle-demo.component.html',
  styleUrl: './toggle-demo.component.scss',
})
export class ToggleDemoComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Input() size: ToggleSize = 'medium';
  @Input() color: string = '';
}
