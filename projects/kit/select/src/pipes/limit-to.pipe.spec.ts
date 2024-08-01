import { LimitToPipe } from './limit-to.pipe';

describe('LimitToPipe', () => {
  let pipe: LimitToPipe;

  beforeEach(() => {
    pipe = new LimitToPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the original array if it is not an array', () => {
    const items: any = 'not an array';
    const result = pipe.transform(items, 3);
    expect(result).toBe(items);
  });

  it('should return the original array if itemsCount is 0', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 0);
    expect(result).toEqual(items);
  });

  it('should limit the array to the first N items', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 3);
    expect(result).toEqual([1, 2, 3]);
  });

  it('should limit the array to N items starting from a specific index', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 2, 2);
    expect(result).toEqual([3, 4]);
  });

  it('should handle a startIndex greater than array length', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 2, 10);
    expect(result).toEqual([]);
  });

  it('should handle a startIndex of 0', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 2, 0);
    expect(result).toEqual([1, 2]);
  });

  it('should handle negative startIndex', () => {
    const items = [1, 2, 3, 4, 5];
    const result = pipe.transform(items, 2, -2);
    expect(result).toEqual([]);
  });

  it('should handle itemsCount greater than array length', () => {
    const items = [1, 2, 3];
    const result = pipe.transform(items, 5);
    expect(result).toEqual([1, 2, 3]);
  });
});
