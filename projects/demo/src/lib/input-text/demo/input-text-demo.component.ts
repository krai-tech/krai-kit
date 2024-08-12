import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  InputTextDirective,
  InputTextLabelDirective,
  InputTextSize,
} from '@krai-tech/kit/input-text';
import { FormsModule } from '@angular/forms';
import { ResetInputDirective } from '@krai-tech/kit/common/directives/reset-input';

@Component({
  selector: 'kri-input-text-demo',
  standalone: true,
  imports : [CommonModule, InputTextDirective, InputTextLabelDirective, FormsModule, ResetInputDirective],
  templateUrl: './input-text-demo.component.html',
  styleUrl: './input-text-demo.component.scss',
})
export class InputTextDemoComponent implements OnInit {
  @Input() placeholder = '';
  @Input() error = false;
  @Input() disabled = false;
  @Input() size: InputTextSize = 'medium';
  @Input() showReset = false;
  @Input() showDefaultText = false;

  vm = '';

  ngOnInit(): void {
    if (this.showDefaultText) {
      this.vm = 'John Doe';
    }
  }
}
