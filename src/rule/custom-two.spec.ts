import { BadRequestException } from '@nestjs/common';
import { CustomTwo } from './custom-two';

describe('CustomTwo', () => {
  let customTwo;

  beforeEach(() => {
    customTwo = new CustomTwo();
  });

  it('computes M result', () => {
    const params = {
      a: true,
      b: false,
      c: true,
      d: 11.7,
      e: 100,
      f: 7,
    };

    expect(customTwo.getResult(params)).toEqual({ h: 'M', k: 30.4 });
  });

  it('computes T result', () => {
    const params = {
      a: true,
      b: true,
      c: false,
      d: 11.5,
      e: 5,
      f: 30,
    };

    expect(customTwo.getResult(params)).toEqual({ h: 'T', k: 0 });
  });

  it('throws an error when keys are incorrect', () => {
    const params = {
      a: false,
      b: true,
      c: true,
      d: 11.5,
      e: 5,
      f: 7,
    };

    expect(() => customTwo.getResult(params)).toThrow(BadRequestException);
  });
});
