import { CustomOne } from './custom-one';

describe('CustomOne', () => {
  let customOne;

  beforeEach(() => {
    customOne = new CustomOne();
  });

  it('computes P result', () => {
    const params = {
      a: true,
      b: true,
      c: true,
      d: 11.5,
      e: 100,
      f: -21,
    };

    expect(customOne.getResult(params)).toEqual({ h: 'P', k: 34.5 });
  });
});
