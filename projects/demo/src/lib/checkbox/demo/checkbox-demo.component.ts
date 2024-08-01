import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '@krai-tech/kit/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kri-checkbox-demo',
  standalone: true,
  imports: [CommonModule, CheckboxComponent, FormsModule],
  templateUrl: './checkbox-demo.component.html',
  styleUrl: './checkbox-demo.component.scss',
})
export class CheckboxDemoComponent {
  vm = true;

  onCheckboxChange(event: any): void {
    console.log('onCheckboxOneChange', event);
  }
}
