import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HasErrorDirective } from './has-error.directive';

@Component({
  standalone: true,
  imports: [HasErrorDirective],
  template: `
    <input kriHasError [hasError]="hasError" />
  `
})
class TestHasErrorComponent {
  hasError = false;
}

describe('HasErrorDirective', () => {
  let fixture: ComponentFixture<TestHasErrorComponent>;
  let debugEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestHasErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHasErrorComponent);
    debugEl = fixture.debugElement;
  });

  it('should create the component successfully', () => {
    expect(fixture).toBeTruthy();
  });

  it('should set has-error class, data-has-error attribute, and aria-has-error attribute when hasError is true', () => {
    fixture.componentInstance.hasError = true;
    fixture.detectChanges();

    const input: HTMLInputElement = debugEl.query(By.css('input')).nativeElement;
    expect(input.classList.contains('has-error')).toBe(true);
    expect(input.getAttribute('data-has-error')).toBe('true');
    expect(input.getAttribute('aria-has-error')).toBe('true');
  });

  it('should remove has-error class, data-has-error attribute, and aria-has-error attribute when hasError is false', () => {
    fixture.componentInstance.hasError = false;
    fixture.detectChanges();

    const input: HTMLInputElement = debugEl.query(By.css('input')).nativeElement;
    expect(input.classList.contains('has-error')).toBe(false);
    expect(input.getAttribute('data-has-error')).toBeNull();
    expect(input.getAttribute('aria-has-error')).toBeNull();
  });
});
