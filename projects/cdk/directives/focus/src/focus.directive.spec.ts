import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FocusDirective } from './focus.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone : true,
  imports    : [
    FocusDirective
  ],
  template   : `<input kriFocus [autofocus]="autofocus" />`
})
class TestComponent {
  autofocus = true;
}

describe('FocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FocusDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should focus the input element if autofocus is true', () => {
    fixture.componentInstance.autofocus = true;
    fixture.detectChanges();
    expect(document.activeElement).toBe(inputEl);
  });

  it('should not focus the input element if autofocus is false', () => {
    fixture.componentInstance.autofocus = false;
    fixture.detectChanges();
    inputEl.blur();
    expect(document.activeElement).not.toBe(inputEl);
  });

  it('should focus the input element after view init', () => {
    fixture.componentInstance.autofocus = true;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(document.activeElement).toBe(inputEl);
    });
  });
});
