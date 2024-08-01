import { Component, DebugElement } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { ButtonStyle } from './button.type';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IsDisabledDirective } from '@krai-tech/cdk/directives/is-disabled';

@Component({
  standalone: true,
  imports: [ButtonDirective, IsDisabledDirective],
  template: `
    <button kriButton
            [style]="style"
            (buttonClick)="increment()"
            [disabled]="isDisabled"
    >
      {{ text }}
    </button>
  `
})
class TestButtonComponent {
  style: ButtonStyle = 'primary';
  clickCount = 0;
  isDisabled = false;
  text = 'Button text';

  increment(): void {
    this.clickCount++;
  }
}

describe('ButtonDirective', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;
  let buttonDebugElement: DebugElement;
  let buttonNativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestButtonComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    buttonDebugElement = fixture.debugElement.query(By.directive(ButtonDirective));
    buttonNativeElement = buttonDebugElement.nativeElement;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the button text', () => {
    expect(buttonNativeElement.textContent).toContain('Button text');
  });

  it('should increment clickCount on button click', () => {
    buttonNativeElement.click();
    expect(component.clickCount).toBe(1);
  });

  describe('button disabled', () => {
    beforeEach(() => {
      component.isDisabled = true;
      fixture.detectChanges();
    });

    it('button should have disabled attribute', () => {
      expect(buttonNativeElement.hasAttribute('disabled')).toBe(true);
    });

    it('button should not respond to click when disabled', () => {
      buttonNativeElement.click();
      expect(component.clickCount).toBe(0);
    });
  });

  describe('button should contain style secondary', () => {
    beforeEach(() => {
      component.style = 'secondary';
      fixture.detectChanges();
    });

    it('button should apply css classes', () => {
      expect(buttonNativeElement.classList.contains('kri-btn-secondary')).toBe(true);
    });
  });
});
