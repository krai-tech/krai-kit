import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaLabelDemoComponent } from './textarea-label-demo.component';

describe('TextareaLabelDemoComponent', () => {
  let component: TextareaLabelDemoComponent;
  let fixture: ComponentFixture<TextareaLabelDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaLabelDemoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaLabelDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
