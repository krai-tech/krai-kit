import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent, AlertType } from '@krai-tech/kit/alert';
import { SafePipe } from '@krai-tech/cdk/pipes/safe';
import { IconTypes } from '@krai-tech/kit/icon';

@Component({
  selector: 'kri-alert-demo',
  standalone: true,
  imports: [CommonModule, AlertComponent, SafePipe],
  templateUrl: './alert-demo.component.html',
  styleUrl: './alert-demo.component.scss',
})
export class AlertDemoComponent {
  @Input() type: AlertType = 'default';

  @Input() text = 'Please review the updated privacy policy in your account settings.';

  @Input() showIcon = true;

  @Input() iconColor = '';

  @Input() icon: IconTypes | any = '';

  @Input() showCloseBtn = false;
}
