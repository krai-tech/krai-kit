import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HasValueDirective } from './has-value.directive';
import { RESET_INPUT } from '@krai-tech/kit/common/directives/reset-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

jest.mock('lodash/isEmpty', () => ({
  __esModule: true,
  default: jest.fn()
}));

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HasValueDirective],
  template: `<input kriHasValue (hasValue)="onHasValue()">`
})
class TestComponent {
  hasValueEventTriggered = false;

  onHasValue() {
    this.hasValueEventTriggered = true;
  }
}

describe('HasValueDirective without ResetInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;
  let isEmpty: jest.Mock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent, FormsModule, ReactiveFormsModule],
      providers: [
        provideHttpClient(),
        { provide: RESET_INPUT, useValue: null }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    isEmpty = require('lodash/isEmpty').default;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should add the "has-value" class when the input has a value on input', () => {
    isEmpty.mockReturnValue(false);
    inputEl.value = 'test';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputEl.classList.contains('has-value')).toBeTruthy();
  });

  it('should not add the "has-value" class when the input is empty on input', () => {
    isEmpty.mockReturnValue(true);
    inputEl.value = '';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(inputEl.classList.contains('has-value')).toBeFalsy();
  });

  it('should emit the hasValue event when the input has a value on input', () => {
    isEmpty.mockReturnValue(false);
    inputEl.value = 'test';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(component.hasValueEventTriggered).toBeTruthy();
  });

  it('should add the "no-animation" class initially and remove it after initialization', (done) => {
    fixture.detectChanges();
    expect(inputEl.classList.contains('no-animation')).toBeTruthy();

    // Wait for the animation removal delay
    setTimeout(() => {
      fixture.detectChanges();
      expect(inputEl.classList.contains('no-animation')).toBeFalsy();
      done();
    }, 0);
  });
});
