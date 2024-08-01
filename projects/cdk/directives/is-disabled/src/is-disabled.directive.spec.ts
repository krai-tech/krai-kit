import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IsDisabledDirective } from './is-disabled.directive';

@Component({
  standalone: true,
  imports: [IsDisabledDirective],
  template: `
    <button kriIsDisabled [disabled]="isDisabled">Click me</button>
  `
})
class TestIsDisabledComponent {
  isDisabled = false;
}

describe('IsDisabledDirective', () => {
  let fixture: ComponentFixture<TestIsDisabledComponent>;
  let debugEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestIsDisabledComponent],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestIsDisabledComponent);
    debugEl = fixture.debugElement;
  }));

  it('should create the component successfully', waitForAsync(() => {
    expect(fixture).toBeTruthy();
  }));

  it('should set disabled and aria-disabled attributes when disabled is true', waitForAsync(() => {
    fixture.componentInstance.isDisabled = true;
    fixture.detectChanges();

    const button: HTMLButtonElement = debugEl.query(By.css('button')).nativeElement;
    expect(button.getAttribute('disabled')).toBe('true');
    expect(button.getAttribute('aria-disabled')).toBe('true');
  }));

  it('should remove disabled and aria-disabled attributes when disabled is false', waitForAsync(() => {
    fixture.componentInstance.isDisabled = false;
    fixture.detectChanges();

    const button: HTMLButtonElement = debugEl.query(By.css('button')).nativeElement;
    expect(button.getAttribute('disabled')).toBeNull();
    expect(button.getAttribute('aria-disabled')).toBeNull();
  }));
});
