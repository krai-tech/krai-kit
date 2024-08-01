import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxGComponent } from './checkbox-g.component';
import { Component, DebugElement } from '@angular/core';
import { CheckboxGOption } from './checkbox-g.type';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

jest.mock('lodash/uniqueId', () => ({
  default: jest.fn(fn => fn),
  __esModule: true
}));

@Component({
  standalone: true,
  template: `
    <kri-checkbox-g
      [(ngModel)]="vm"
      ngDefaultControl
      name="demo-g"
      [options]="data"
      [direction]="'row'"
      [isShowTitle]="true"
    >
    </kri-checkbox-g>
  `,
  imports: [CommonModule, CheckboxComponent, FormsModule, CheckboxGComponent]
})
class TestCheckBoxGroupComponent {
  vm: CheckboxGOption[] = [{ label : 'Світить сонце', value : 2, id : 2 }];

  data: CheckboxGOption[] = [
    { label: 'Дощить', disabled: true, value: 1, id: 1 },
    { label: 'Світить сонце', value: 2, id: 2 },
    { label: 'Дме вітер', value: 3, id: 3 },
  ];
}

describe('CheckboxGComponent', () => {
  let component: TestCheckBoxGroupComponent;
  let fixture: ComponentFixture<TestCheckBoxGroupComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, TestCheckBoxGroupComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCheckBoxGroupComponent);
    debugEl = fixture.debugElement;
    component = debugEl.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct number of checkboxes', () => {
    fixture.detectChanges();
    const checkboxes = debugEl.queryAll(By.css('kri-checkbox'));
    expect(checkboxes.length).toBe(3);
  });

  it('should display checkboxes with correct labels', () => {
    fixture.detectChanges();
    const checkboxes = debugEl.queryAll(By.css('kri-checkbox'));
    checkboxes.forEach((checkbox, index) => {
      const labelElement = checkbox.nativeElement.querySelector('label');
      expect(labelElement.textContent.trim()).toContain(component.data[index].label);
    });
  });

  it('should update model when checkbox is toggled', () => {
    fixture.detectChanges();
    const checkboxes = debugEl.queryAll(By.css('kri-checkbox'));
    const input = checkboxes[1].nativeElement.querySelector('input');
    input.click();
    fixture.detectChanges();
    expect(component.vm).toEqual([{ label: 'Світить сонце', value: 2, id: 2 }]);
  });
});
