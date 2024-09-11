import { TestBed } from '@angular/core/testing';
import { VersionService } from './version.service';
import packageJson from '../../package.json';

describe('VersionService', () => {
  let service: VersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the correct version from package.json', () => {
    expect(service.version).toBe(packageJson.version);
  });
});
