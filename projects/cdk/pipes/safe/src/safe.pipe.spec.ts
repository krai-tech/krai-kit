import { SafePipe } from './safe.pipe';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('SafePipe', () => {
  let pipe: SafePipe;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    const sanitizerMock = {
      bypassSecurityTrustHtml: jest.fn(),
      bypassSecurityTrustStyle: jest.fn(),
      bypassSecurityTrustScript: jest.fn(),
      bypassSecurityTrustUrl: jest.fn(),
      bypassSecurityTrustResourceUrl: jest.fn(),
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: DomSanitizer, useValue: sanitizerMock }
      ],
    });

    sanitizer = TestBed.inject(DomSanitizer);
    pipe = new SafePipe(sanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should bypass security for HTML', () => {
    const value = '<div>Test</div>';
    const sanitizedValue: SafeHtml = {} as SafeHtml;
    jest.spyOn(sanitizer, 'bypassSecurityTrustHtml').mockReturnValue(sanitizedValue);
    const result = pipe.transform(value, 'html');
    expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(value);
    expect(result).toBe(sanitizedValue);
  });

  it('should bypass security for style', () => {
    const value = 'color: red;';
    const sanitizedValue: SafeStyle = {} as SafeStyle;
    jest.spyOn(sanitizer, 'bypassSecurityTrustStyle').mockReturnValue(sanitizedValue);
    const result = pipe.transform(value, 'style');
    expect(sanitizer.bypassSecurityTrustStyle).toHaveBeenCalledWith(value);
    expect(result).toBe(sanitizedValue);
  });

  it('should bypass security for script', () => {
    const value = 'alert("Test");';
    const sanitizedValue: SafeScript = {} as SafeScript;
    jest.spyOn(sanitizer, 'bypassSecurityTrustScript').mockReturnValue(sanitizedValue);
    const result = pipe.transform(value, 'script');
    expect(sanitizer.bypassSecurityTrustScript).toHaveBeenCalledWith(value);
    expect(result).toBe(sanitizedValue);
  });

  it('should bypass security for URL', () => {
    const value = 'http://example.com';
    const sanitizedValue: SafeUrl = {} as SafeUrl;
    jest.spyOn(sanitizer, 'bypassSecurityTrustUrl').mockReturnValue(sanitizedValue);
    const result = pipe.transform(value, 'url');
    expect(sanitizer.bypassSecurityTrustUrl).toHaveBeenCalledWith(value);
    expect(result).toBe(sanitizedValue);
  });

  it('should bypass security for resource URL', () => {
    const value = 'http://example.com/resource';
    const sanitizedValue: SafeResourceUrl = {} as SafeResourceUrl;
    jest.spyOn(sanitizer, 'bypassSecurityTrustResourceUrl').mockReturnValue(sanitizedValue);
    const result = pipe.transform(value, 'resourceUrl');
    expect(sanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(value);
    expect(result).toBe(sanitizedValue);
  });

  it('should throw an error for an invalid type', () => {
    const value = '<div>Test</div>';
    expect(() => pipe.transform(value, 'invalidType')).toThrowError('Invalid safe type specified: invalidType');
  });
});
