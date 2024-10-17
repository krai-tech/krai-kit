import { TestBed } from '@angular/core/testing';
import { ChevronDirective } from './chevron.directive';
import { ElementRef, Renderer2, ViewContainerRef } from '@angular/core';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

class MockRenderer2 {
  createElement(tag: string): HTMLElement {
    return document.createElement(tag);
  }
  appendChild(parent: any, child: any) {
    parent.appendChild(child);
  }
  addClass(element: any, className: string) {
    element.classList.add(className);
  }
  removeChild(parent: any, child: any) {
    parent.removeChild(child);
  }
}

class MockViewContainerRef {
  createComponent() {
    return {
      setInput: jest.fn(),
      changeDetectorRef: { detectChanges: jest.fn() },
      location: { nativeElement: document.createElement('span') }
    };
  }
}

describe('ChevronDirective', () => {
  let directive: ChevronDirective;
  let renderer: MockRenderer2;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChevronDirective,
        { provide: ElementRef, useClass: MockElementRef },
        { provide: Renderer2, useClass: MockRenderer2 },
        { provide: ViewContainerRef, useClass: MockViewContainerRef }
      ]
    });

    directive = TestBed.inject(ChevronDirective);
    renderer = TestBed.inject(Renderer2) as unknown as MockRenderer2;
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should have default input values', () => {
    expect(directive.showChevron()).toBe(false);
    expect(directive.direction()).toBe('down');
    expect(directive.isAnimated()).toBe(true);
  });

  it('should change chevron direction to up', () => {
    directive['iconRef'] = { setInput: jest.fn(), changeDetectorRef: { detectChanges: jest.fn() } } as any;
    directive['changeChevronDirection']('up');
    expect(directive['iconRef']?.setInput).toHaveBeenCalledWith('icon', 'chevron-up');
    expect(directive['iconRef']?.changeDetectorRef.detectChanges).toHaveBeenCalled();
  });

  it('should change chevron direction to down', () => {
    directive['iconRef'] = { setInput: jest.fn(), changeDetectorRef: { detectChanges: jest.fn() } } as any;
    directive['changeChevronDirection']('down');
    expect(directive['iconRef']?.setInput).toHaveBeenCalledWith('icon', 'chevron-down');
    expect(directive['iconRef']?.changeDetectorRef.detectChanges).toHaveBeenCalled();
  });
});
