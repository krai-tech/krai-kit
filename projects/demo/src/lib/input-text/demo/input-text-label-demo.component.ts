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
  selector: 'kri-input-text-label-demo',
  standalone: true,
  imports : [
    CommonModule,
    InputTextDirective,
    InputTextLabelDirective,
    FormsModule,
    ResetInputDirective
  ],
  templateUrl: './input-text-label-demo.component.html',
  styleUrl: './input-text-label-demo.component.scss',
})
export class InputTextLabelDemoComponent implements OnInit {
  @Input() error = false;
  @Input() disabled = false;
  @Input() size: InputTextSize = 'medium';
  @Input() label = 'Label text';
  @Input() showDefaultText = false;
  @Input() showReset = false;

  vm = '';

  ngOnInit(): void {
    if (this.showDefaultText) {
      this.vm = 'John Doe';
    }
  }
}
