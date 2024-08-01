import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, ElementRef, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ToggleComponent } from './toggle.component';

@Component({
  standalone : true,
  imports    : [
    ToggleComponent
  ],
  template   : `
    <kri-toggle #ref size="large"
               [disabled]="disabled"
               [(checked)]="checked"
               (toggleChange)="toggleChange($event)">
    </kri-toggle>
  `
})
class TestToggleComponent {
  @ViewChild('ref') ref!: ElementRef;
  disabled = false;
  checked = false;

  toggleChange(event: boolean): void {
    this.checked = event
  }
}

describe('TestToggleComponent', () => {
  let component: TestToggleComponent;
  let fixture: ComponentFixture<TestToggleComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestToggleComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestToggleComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle checked state on click', () => {
    const toggleDebugElement = debugElement.query(By.directive(ToggleComponent));
    const spy = jest.spyOn(component, 'toggleChange');

    // Simulate the first click to toggle on
    toggleDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.checked).toBe(true);

    // Simulate the second click to toggle off
    toggleDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
    expect(component.checked).toBe(false);
  });

  it('should reflect disabled state change', () => {
    component.disabled = true;
    fixture.detectChanges();
    const toggleComponent = debugElement.query(By.directive(ToggleComponent)).componentInstance as ToggleComponent;
    expect(toggleComponent.disabled()).toBe(true);
  });

  it('should reflect checked state change', () => {
    component.checked = true;
    fixture.detectChanges();
    const toggleComponent = debugElement.query(By.directive(ToggleComponent)).componentInstance as ToggleComponent;
    expect(toggleComponent.checked()).toBe(true);
  });
});
