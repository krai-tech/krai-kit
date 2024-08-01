import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from '@krai-tech/kit/radio-button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kri-radio-button-demo',
  standalone: true,
  imports: [CommonModule, RadioButtonComponent, FormsModule],
  templateUrl: './radio-button-demo.component.html',
  styleUrl: './radio-button-demo.component.scss',
})
export class RadioButtonDemoComponent {
  testItems = ['18-35', '36-45', 'Старше 46'];

  vm = '18-35';

  valueChange(item: string): void {
    console.log(item);
  }
}
