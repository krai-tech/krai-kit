import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CheckboxGComponent,
  CheckboxGDirections,
  CheckboxGOption,
} from '@krai-tech/kit/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'kri-checkbox-g-demo',
  standalone: true,
  imports: [CommonModule, CheckboxGComponent, FormsModule],
  templateUrl: './checkbox-g-demo.component.html',
  styleUrl: './checkbox-g-demo.component.scss',
})
export class CheckboxGDemoComponent {
  direction = input<CheckboxGDirections>('column');

  vm: CheckboxGOption[] = [{ label: 'Світить сонце', value: 2, id: 2 }];

  data: CheckboxGOption[] = [
    { label: 'Дощить', disabled: true, value: 1, id: 1 },
    { label: 'Світить сонце', value: 2, id: 2 },
    { label: 'Дме вітер', value: 3, id: 3 },
  ];

  onCheckboxChange(event: any): void {
    console.log('onCheckboxChange', event);
  }
}
