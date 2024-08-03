import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { IconComponent, IconTypes } from '@krai-tech/kit/icon';
import { AlertType } from './alert.type';

@Component({
  standalone: true,
  template: `
    <kri-alert
      [type]="type"
      [customClass]="customClass"
      [icon]="icon"
      [showIcon]="showIcon"
      [iconColor]="iconColor"
      [showCloseBtn]="showCloseBtn"
      (closeAlert)="onCloseAlert()"
    >
      <ng-template #customTemplate>Custom Template</ng-template>
    </kri-alert>
  `,
  imports: [CommonModule, IconComponent, AlertComponent]
})
class TestHostComponent {
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;

  type: AlertType = 'default';
  customClass = '';
  icon: IconTypes | '' = '';
  showIcon = true;
  iconColor = '';
  showCloseBtn = false;

  onCloseAlert(): void {
    // Custom logic for close alert event
  }
}

describe('AlertComponent', () => {
  let component: AlertComponent;
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IconComponent, AlertComponent, TestHostComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(AlertComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply default CSS class', () => {
    const alertElement = fixture.debugElement.query(By.css('.kri-alert'));
    expect(alertElement.nativeElement.classList).toContain('kri-alert--default');
  });

  it('should apply custom CSS class', () => {
    const customClass = 'custom-alert-class';
    hostComponent.customClass = customClass;
    fixture.detectChanges();
    const alertElement = fixture.debugElement.query(By.css('.kri-alert'));
    expect(alertElement.nativeElement.classList).toContain(customClass);
  });

  it('should show/hide icon based on showIcon property', () => {
    hostComponent.showIcon = true;
    hostComponent.type = 'default'
    fixture.detectChanges();
    let icon = fixture.debugElement.query(By.css('.kri-alert__icon'));
    expect(icon).not.toBeNull();

    hostComponent.showIcon = false;
    fixture.detectChanges();
    icon = fixture.debugElement.query(By.css('.kri-alert__icon'));
    expect(icon).toBeNull();
  });

  it('should emit closeAlert event and hide alert on close button click', () => {
    jest.spyOn(hostComponent, 'onCloseAlert');
    hostComponent.showCloseBtn = true;
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('.kri-alert__close'));
    closeButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(hostComponent.onCloseAlert).toHaveBeenCalled();
  });

  it('should not display close button if showCloseBtn is false', () => {
    hostComponent.showCloseBtn = false;
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('.kri-alert__close'));
    expect(closeButton).toBeNull();
  });

  it('should display close button if showCloseBtn is true', () => {
    hostComponent.showCloseBtn = true;
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('.kri-alert__close'));
    expect(closeButton).not.toBeNull();
  });
});
