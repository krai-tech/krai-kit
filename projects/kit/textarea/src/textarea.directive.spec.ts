import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TextareaDirective } from './textarea.directive';
import { DOCUMENT } from '@angular/common';
import { TextareaResize } from './textarea.type';

jest.mock('lodash/isEmpty', () => ({
  __esModule: true,
  default: jest.fn()
}));

class MockResizeObserver {
// eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}

@Component({
  standalone : true,
  imports    : [
    TextareaDirective
  ],
  template   : `<textarea kriTextarea
                          [hasError]="error"
                          [resize]="resize"
                          [showCounter]="showCounter"></textarea>`
})
class TestComponent {
  error = false;
  resize: TextareaResize = 'none';
  showCounter = false;
}

describe('TextareaDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let textarea: HTMLTextAreaElement;
  let directive: TextareaDirective;

  beforeAll(() => {
    // Mock ResizeObserver globally
    (global as any).ResizeObserver = MockResizeObserver;
  });

  afterAll(() => {
    // Clean up the global mock
    delete (global as any).ResizeObserver;
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TextareaDirective, TestComponent],
      providers: [
        Renderer2,
        { provide: DOCUMENT, useValue: document }
      ]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    textarea = fixture.debugElement.query(By.directive(TextareaDirective)).nativeElement;
    directive = fixture.debugElement.query(By.directive(TextareaDirective)).injector.get(TextareaDirective);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should apply data-has-error attribute when error is true', () => {
    component.error = true;
    fixture.detectChanges();
    expect(textarea.getAttribute('data-has-error')).toBe('true');
  });

  it('should apply resize style', () => {
    component.resize = 'both';
    fixture.detectChanges();
    expect(textarea.style.resize).toBe('both');
  });

  it('should set default rows attribute', () => {
    expect(textarea.getAttribute('rows')).toBe('3');
  });

  it('should create counter if showCounter is true and maxLength is set', () => {
    textarea.setAttribute('maxlength', '100');
    component.showCounter = true;
    fixture.detectChanges();
    directive.ngAfterViewInit();
    const counter = fixture.debugElement.nativeElement.querySelector('.kri-textarea-counter');
    expect(counter).toBeTruthy();
  });

  it('should update counter text on input', () => {
    textarea.setAttribute('maxlength', '100');
    component.showCounter = true;
    fixture.detectChanges();
    directive.ngAfterViewInit();
    textarea.value = 'Test';
    textarea.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const counterInner = fixture.debugElement.nativeElement.querySelector('.kri-textarea-counter i');
    expect(counterInner.textContent).toBe('4/100');
  });

  it('should clean up on destroy', () => {
    textarea.setAttribute('maxlength', '100');
    component.showCounter = true;
    fixture.detectChanges();
    directive.ngAfterViewInit();
    expect(directive['resizeCounterObserver']).toBeDefined();
    const spy = jest.spyOn(directive['resizeCounterObserver'] as any, 'unobserve');
    directive.ngOnDestroy();
    expect(spy).toHaveBeenCalled();
  });
});
