import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { DomUtil } from '@krai-tech/cdk/utils';

jest.mock('lodash/uniqueId', () => ({
  default: jest.fn(fn => fn),
  __esModule: true
}));

@Component({
  standalone : true,
  template   : `
    <kri-checkbox
      #ref
      label="Test"
      ngDefaultControl
      [isShowTitle]="false"
      (checkboxChange)="onCheckboxChange()"
      [ngModel]="true"
      [disabled]="disabled"
    >
    </kri-checkbox>`,
  imports : [
    CheckboxComponent,
    FormsModule
  ]
})
class TestCheckBoxComponent {
  @ViewChild('ref') ref: CheckboxComponent | undefined;
  checked = false;
  label = 'Хліб'
  number = 1;
  disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCheckboxChange(): void {}
}

describe('CheckboxComponent', () => {
  let component: TestCheckBoxComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TestCheckBoxComponent>;
  let domHelper: DomUtil<TestCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TestCheckBoxComponent],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckBoxComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    domHelper = new DomUtil(fixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    const classList = ['.kri-checkbox', '.kri-checkbox-input', '.kri-checkbox-material', '.kri-checkbox-tick'];
    expect(domHelper.hasAllClasses(classList)).toBeTruthy();
  });

  it('should trigger onCheckboxChange function when clicked', () => {
    const toggleSpy = jest.spyOn(component, 'onCheckboxChange');
    const labelElement = fixture.nativeElement.querySelector('label');
    labelElement.click();
    fixture.detectChanges()
    expect(toggleSpy).toHaveBeenCalled();
  });

  it('should toggle the checked status when clicked', fakeAsync(() => {
    const checkboxEl: HTMLElement = debugEl.query(By.css('.kri-checkbox')).nativeElement;
    checkboxEl.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.ref?.checkedState()).toBeTruthy();
  }));

  it('should not change checked status when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const labelEl: HTMLElement = debugEl.query(By.css('.kri-checkbox')).nativeElement;
    labelEl.dispatchEvent(new Event('click'));
    expect(component.checked).toBeFalsy();
  });

  it('should uncheck when clicked on label', () => {
    const labelElement = fixture.nativeElement.querySelector('label');
    labelElement.click();
    fixture.detectChanges();
    expect(component.ref?.checkedState()).toBeFalsy();
  });
});
