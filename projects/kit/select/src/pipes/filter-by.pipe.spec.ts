import { FilterByPipe } from './filter-by.pipe';

describe('FilterByPipe', () => {
  let pipe: FilterByPipe;

  beforeEach(() => {
    pipe = new FilterByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter array of strings', () => {
    const items = ['Apple', 'Banana', 'Orange'];
    const searchText = 'an';
    const result = pipe.transform(items, searchText);
    expect(result).toEqual(['Banana', 'Orange']);
  });

  it('should filter array of objects by key', () => {
    const users = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Mike', age: 32 }
    ];
    const searchText = 'Jane';
    const keyName = 'name';
    const result = pipe.transform(users, searchText, keyName);
    expect(result).toEqual([{ name: 'Jane', age: 25 }]);
  });

  it('should filter array of objects by all keys', () => {
    const products = [
      { name: 'Laptop', price: 1000 },
      { name: 'Phone', price: 500 },
      { name: 'Tablet', price: 700 }
    ];
    const searchText = '1000';
    const result = pipe.transform(products, searchText);
    expect(result).toEqual([{ name: 'Laptop', price: 1000 }]);
  });

  it('should return the original array if no searchText is provided', () => {
    const items = ['Apple', 'Banana', 'Orange'];
    const result = pipe.transform(items);
    expect(result).toEqual(items);
  });

  it('should return the original array if array is not an array', () => {
    const items: any = 'not an array';
    const searchText = 'an';
    const result = pipe.transform(items, searchText);
    expect(result).toEqual('not an array');
  });

  it('should filter array of objects by all keys when no keyName is provided', () => {
    const users = [
      { name: 'John', age: 30 },
      { name: 'Jane', age: 25 },
      { name: 'Mike', age: 32 }
    ];
    const searchText = '25';
    const result = pipe.transform(users, searchText);
    expect(result).toEqual([{ name: 'Jane', age: 25 }]);
  });

  it('should handle case insensitivity', () => {
    const items = ['Apple', 'Banana', 'Orange'];
    const searchText = 'AN';
    const result = pipe.transform(items, searchText);
    expect(result).toEqual(['Banana', 'Orange']);
  });
});
