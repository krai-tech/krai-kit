import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DropdownToggleDirective } from './dropdown-toggle.directive';
import { DropdownDirective } from './dropdown.directive';

@Component({
  standalone: true,
  imports: [
    DropdownToggleDirective,
    DropdownDirective
  ],
  template: `
    <div kriDropdown>
      <button kriDropdownToggle></button>
    </div>
  `
})
class TestComponent {}

describe('DropdownToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let button: HTMLElement;
  let dropdown: DropdownDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    button = fixture.debugElement.query(By.directive(DropdownToggleDirective)).nativeElement;
    dropdown = fixture.debugElement.query(By.directive(DropdownDirective)).injector.get(DropdownDirective);
  });

  it('should toggle dropdown when clicked', () => {
    jest.spyOn(dropdown, 'toggle');
    button.click();
    expect(dropdown.toggle).toHaveBeenCalled();
  });

  it('should not toggle dropdown if disabled', () => {
    jest.spyOn(dropdown, 'disabled').mockReturnValue(true);
    jest.spyOn(dropdown, 'toggle');
    button.click();
    expect(dropdown.toggle).not.toHaveBeenCalled();
  });

  it('should stop event propagation', () => {
    const event = new MouseEvent('click');
    const stopPropagationSpy = jest.spyOn(event, 'stopPropagation');
    button.dispatchEvent(event);
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});
