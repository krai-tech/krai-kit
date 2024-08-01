import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconComponent } from './icon.component';
import { CommonModule } from '@angular/common';
import { IconTypes } from './icons.type';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone : true,
  template   : `
    <ng-template #customTemplate>Custom Template</ng-template>
    <kri-icon
      [icon]="icon"
      [active]="active"
      [disabled]="disabled"
      [color]="color"
      [rotate]="rotate"
    ></kri-icon>
  `,
  imports    : [
    IconComponent
  ]
})
class TestHostComponent {
  @ViewChild('customTemplate') customTemplate!: TemplateRef<any>;

  icon: IconTypes | TemplateRef<any> | '' = '';
  active = false;
  disabled = false;
  color = '';
  rotate: number | 'infinite' = 0;
}

describe('IconComponent', () => {
  let component: IconComponent;
  let hostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IconComponent, TestHostComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.directive(IconComponent)).componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default icon when icon input is empty', () => {
    expect(fixture.debugElement.query(By.css('.kri-icon')).nativeElement.className).toContain('icon-');
  });

  it('should apply the active class when active is true', () => {
    hostComponent.active = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.kri-icon-container')).nativeElement.classList).toContain('kri-icon-active');
  });

  it('should apply the disabled class when disabled is true', () => {
    hostComponent.disabled = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.kri-icon-container')).nativeElement.classList).toContain('disabled');
  });

  it('should apply the color style when color is set', () => {
    const testColor = 'red';
    hostComponent.color = testColor;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.kri-icon')).nativeElement;
    expect(iconElement.style.color).toBe(testColor);
  });

  it('should apply the rotation style when rotate is set', () => {
    const testRotate = 45;
    hostComponent.rotate = testRotate;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.kri-icon')).nativeElement;
    expect(iconElement.style.transform).toBe(`rotate(${testRotate}deg)`);
  });

  it('should apply the spin class when rotate is infinite', () => {
    hostComponent.rotate = 'infinite';
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('.kri-icon')).nativeElement;
    expect(iconElement.classList).toContain('kri-icon-spin');
  });

  it('should use custom template when icon input is a TemplateRef', () => {
    hostComponent.icon = hostComponent.customTemplate;
    fixture.detectChanges();
    const iconElement = fixture.debugElement.query(By.css('kri-icon')).nativeElement;
    expect(iconElement.textContent).toContain('Custom Template');
  });
});
