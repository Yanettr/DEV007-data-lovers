import { getFilmsData, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof getFilmsData).toBe('function');
  });

  it('returns `example`', () => {
    expect( getFilmsData()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
