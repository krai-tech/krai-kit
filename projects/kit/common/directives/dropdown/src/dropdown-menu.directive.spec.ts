import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, ViewChild } from '@angular/core';
import { DropdownMenuDirective } from './dropdown-menu.directive';
import { DropdownDirective } from './dropdown.directive';
import { DOCUMENT } from '@angular/common';
import { DropdownStatus } from './status.enum';
import { By } from '@angular/platform-browser';

@Component({
  standalone: true,
  template: `
    <div kriDropdown>
      <div kriDropdownMenu></div>
    </div>
  `,
  imports: [
    DropdownMenuDirective,
    DropdownDirective,
  ],
})
class TestComponent {
  @ViewChild(DropdownMenuDirective) dropdownMenuDirective!: DropdownMenuDirective;
}

describe('DropdownMenuDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let directive: DropdownMenuDirective;
  let dropdown: DropdownDirective;
  let documentMock: Document;

  beforeEach(() => {
    documentMock = document;

    TestBed.configureTestingModule({
      imports: [TestComponent, DropdownMenuDirective],
      providers: [
        { provide: DOCUMENT, useValue: documentMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    directive = fixture.componentInstance.dropdownMenuDirective;
    dropdown = fixture.debugElement.query(By.directive(DropdownDirective)).injector.get(DropdownDirective);
  });

  it('should manage click listeners on the document when dropdown is opened/closed', () => {
    jest.spyOn(documentMock, 'addEventListener');
    jest.spyOn(documentMock, 'removeEventListener');

    dropdown.status.set(DropdownStatus.OPEN);
    directive['addDocumentClickListener']();
    expect(documentMock.addEventListener).toHaveBeenCalledWith('click', directive['onDocumentClick'], true);

    dropdown.status.set(DropdownStatus.CLOSE);
    directive['removeDocumentClickListener']();
    expect(documentMock.removeEventListener).toHaveBeenCalledWith('click', directive['onDocumentClick'], true);
  });

  it('should close the dropdown when clicking outside the dropdown menu', () => {
    const mockEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      clientX: 0,
      clientY: 0,
    });

    jest.spyOn(directive['elementRef'].nativeElement, 'contains').mockReturnValue(false);
    jest.spyOn(dropdown, 'close');
    directive['onDocumentClick'](mockEvent);
    expect(dropdown.close).toHaveBeenCalled();
  });

  it('should remove the click listener when directive is destroyed', () => {
    jest.spyOn(directive, 'removeDocumentClickListener');
    directive.ngOnDestroy();
    expect(directive['removeDocumentClickListener']).toHaveBeenCalled();
  });
});
