import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleVmDemoComponent } from './toggle-vm-demo.component';

describe('ToggleDemoComponent', () => {
  let component: ToggleVmDemoComponent;
  let fixture: ComponentFixture<ToggleVmDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleVmDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleVmDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
