import { ButtonIconDirective } from './button-icon.directive';
import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ButtonIconPosition } from './button.type';

@Component({
  standalone : true,
  imports    : [
    ButtonIconDirective
  ],
  template   : `
    <button kriButtonIcon
            [icon]="icon"
            [iconColor]="iconColor"
            [iconSize]="iconSize"
            [iconRotate]="iconRotate"
            [iconPosition]="iconPosition">
      Test Button
    </button>
  `
})
class TestComponent {
  icon: string | any = 'test-icon';
  iconColor = 'red';
  iconSize = '24';
  iconRotate: number | 'infinite' = 0;
  iconPosition: ButtonIconPosition = 'left';
}

describe('ButtonIconDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonIconDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the test component', () => {
    expect(component).toBeTruthy();
  });

  it('should create icon container and icon element', () => {
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    const container = button.querySelector('.kri-btn-icon-container');
    expect(container).toBeTruthy();
    const iconElement = container.querySelector('.kri-btn-icon');
    expect(iconElement).toBeTruthy();
    expect(iconElement.classList.contains('icon-test-icon')).toBe(true);
    expect(iconElement.style.color).toBe('red');
    expect(iconElement.style.fontSize).toBe('24px');
  });

  it('should remove icon and container when icon is empty', () => {
    component.icon = '';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    const container = button.querySelector('.kri-btn-icon-container');
    expect(container).toBeNull();
  });

  it('should update icon position correctly', () => {
    component.iconPosition = 'left';
    fixture.detectChanges();

    let button = fixture.nativeElement.querySelector('button');
    let container = button.querySelector('.kri-btn-icon-container');
    expect(container).toBeTruthy();
    expect(container.style.paddingRight).toBe('8px');

    component.iconPosition = 'right';
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
    container = button.querySelector('.kri-btn-icon-container');
    expect(container).toBeTruthy();
    expect(container.style.paddingLeft).toBe('8px');
  });

  it('should rotate icon if rotation is set to infinite', () => {
    component.iconRotate = 'infinite';
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('.kri-btn-icon');
    expect(iconElement).toBeTruthy();
    expect(iconElement.classList.contains('kri-btn-icon-spin')).toBe(true);
  });

  it('should set icon rotation correctly', () => {
    component.iconRotate = 45;
    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('.kri-btn-icon');
    expect(iconElement).toBeTruthy();
    expect(iconElement.style.transform).toBe('rotate(45deg)');
  });
});
