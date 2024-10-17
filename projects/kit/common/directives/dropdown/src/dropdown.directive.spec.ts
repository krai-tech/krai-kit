import { TestBed } from '@angular/core/testing';
import { Renderer2, ElementRef } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { DropdownStatus } from './status.enum';

describe('DropdownDirective', () => {
  let directive: DropdownDirective;
  let mockRenderer: Renderer2;
  let mockElementRef: ElementRef;

  beforeEach(() => {
    mockRenderer = {
      setAttribute: jest.fn(),
    } as unknown as Renderer2;

    mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    TestBed.configureTestingModule({
      providers: [
        DropdownDirective,
        { provide: Renderer2, useValue: mockRenderer },
        { provide: ElementRef, useValue: mockElementRef },
      ],
    });

    directive = TestBed.inject(DropdownDirective);
  });

  it('should initialize with CLOSED status', () => {
    directive.ngOnInit();
    expect(directive.status()).toBe(DropdownStatus.CLOSE);
  });

  it('should toggle status between OPEN and CLOSE', () => {
    directive.toggle();
    expect(directive.status()).toBe(DropdownStatus.OPEN);

    directive.toggle();
    expect(directive.status()).toBe(DropdownStatus.CLOSE);
  });

  it('should open the dropdown', () => {
    directive.open();
    expect(directive.status()).toBe(DropdownStatus.OPEN);
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'kri-dropdown',
      DropdownStatus.OPEN
    );
  });

  it('should close the dropdown', () => {
    directive.open();
    directive.close();
    expect(directive.status()).toBe(DropdownStatus.CLOSE);
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'kri-dropdown',
      DropdownStatus.CLOSE
    );
  });

  it('should update status correctly using updateDropdownStatus', () => {
    directive['updateDropdownStatus'](DropdownStatus.OPEN);
    expect(directive.status()).toBe(DropdownStatus.OPEN);
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'kri-dropdown',
      DropdownStatus.OPEN
    );

    directive['updateDropdownStatus'](DropdownStatus.CLOSE);
    expect(directive.status()).toBe(DropdownStatus.CLOSE);
    expect(mockRenderer.setAttribute).toHaveBeenCalledWith(
      mockElementRef.nativeElement,
      'kri-dropdown',
      DropdownStatus.CLOSE
    );
  });
});
