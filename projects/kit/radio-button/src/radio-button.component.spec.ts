import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { DomUtil } from '@krai-tech/cdk/utils';
import { By } from '@angular/platform-browser';

jest.mock('lodash/isObject', () => ({
  default: jest.fn(fn => fn),
  __esModule: true
}));

@Component({
  standalone : true,
  imports : [
    RadioButtonComponent,
    FormsModule
  ],
  template   : `
    <kri-radio #ref
              name="demo"
              [(ngModel)]="vm"
              [value]="vm"
              [disabled]="disabled"
              (radioChange)="radioChange($event)"
              [checked]="checked">
    </kri-radio>
  `
})
class TestRadioButtonComponent {
  @ViewChild('ref') ref!: RadioButtonComponent;
  vm = '123'
  disabled = false;
  checked = false;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  radioChange(event: string) {}
}

describe('RadioButtonComponent', () => {
  let component: TestRadioButtonComponent;
  let debugEl: DebugElement;
  let fixture: ComponentFixture<TestRadioButtonComponent>;
  let domHelper: DomUtil<TestRadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TestRadioButtonComponent, RadioButtonComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRadioButtonComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    domHelper = new DomUtil(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct base classes', () => {
    const classList = ['.kri-radio', '.kri-radio-input', '.kri-radio-material', '.kri-radio-label'];
    expect(domHelper.hasAllClasses(classList)).toBeTruthy();
  });

  it('should initialize with provided value', fakeAsync(() => {
    fixture.detectChanges();
    tick();
    const radio = debugEl.query(By.directive(RadioButtonComponent)).componentInstance as RadioButtonComponent;
    expect(radio.value()).toEqual('123');
  }));

  it('should initialize with disabled state', () => {
    const radio = debugEl.query(By.directive(RadioButtonComponent)).componentInstance as RadioButtonComponent;
    expect(radio.disabled()).toEqual(false);
    component.disabled = true;
    fixture.detectChanges();
    expect(radio.disabled()).toEqual(true);
  });

  it('should initialize with checked state', fakeAsync(() => {
    const radio = debugEl.query(By.directive(RadioButtonComponent)).componentInstance as RadioButtonComponent;
    component.checked = false;
    fixture.detectChanges();
    tick();
    expect(radio.checked()).toEqual(false);
    component.checked = true;
    fixture.detectChanges();
    tick();
    expect(radio.checked()).toEqual(true);
  }));

  it('should change VM when radio button clicked', fakeAsync(() => {
    const radioEl: HTMLElement = debugEl.query(By.css('.kri-radio-input')).nativeElement;
    radioEl.click()
    tick();
    fixture.detectChanges();
    expect(component.vm).toEqual('123');
  }));

  it('should call radioChange when radio button clicked', fakeAsync(() => {
    const spy = jest.spyOn(component, 'radioChange')
    const radioEl: HTMLElement = debugEl.query(By.css('.kri-radio-input')).nativeElement;
    radioEl.click()
    tick();
    fixture.detectChanges();
    expect(spy).toHaveBeenCalledWith('123');
  }));
});
