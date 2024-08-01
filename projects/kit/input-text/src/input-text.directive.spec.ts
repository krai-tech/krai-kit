import { InputTextDirective } from './input-text.directive';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

jest.mock('lodash/isEmpty', () => ({
  __esModule: true,
  default: jest.fn()
}));

@Component({
  standalone : true,
  imports : [
    InputTextDirective
  ],
  template   : `
    <input kriInputText placeholder="Please Enter" id="textInput" />
    <input kriInputText placeholder="Please Enter" [disabled]="true" />
    <input kriInputText placeholder="Please Enter" [error]="true" />
  `
})
class TestInputTextComponent {}

describe('InputTextDirective', () => {
  let fixture: ComponentFixture<TestInputTextComponent>;
  let debugEl: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TestInputTextComponent, InputTextDirective],
    }).compileComponents();
  }));

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestInputTextComponent);
    debugEl = fixture.debugElement;
  }));

  it('should be created successfully', waitForAsync(() => {
    expect(fixture
    ).toBeTruthy();
  }));

  it('should have correct placeholder', waitForAsync(() => {
    const inputs = debugEl.queryAll(By.css('input'));
    expect(inputs[0].nativeElement.placeholder).toContain('Please Enter');
  }));

  it('should have correct error class', waitForAsync(() => {
    const inputs = debugEl.queryAll(By.css('input'));
    fixture.detectChanges();
    expect(inputs[2].nativeElement.classList).toContain('error');
  }));

  it('should have correct disabled state', waitForAsync(() => {
    const inputs = debugEl.queryAll(By.css('input'));
    fixture.detectChanges();
    expect(inputs[1].nativeElement.disabled).toBeTruthy();
  }));
});
