import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from '@krai-tech/kit/toggle';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kri-toggle-demo',
  standalone: true,
  imports: [CommonModule, ToggleComponent, FormsModule],
  templateUrl: './toggle-vm-demo.component.html',
  styleUrl: './toggle-vm-demo.component.scss',
})
export class ToggleVmDemoComponent {
  vm = false;

  toggleChange(event: boolean): void {
    console.log('toggleChange', event);
  }
}
