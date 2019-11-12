import { BaseStrategy } from './base-strategy';
import { BadRequestException } from '@nestjs/common';

describe('BaseStrategy', () => {
  let baseStrategy;

  beforeEach(() => {
    baseStrategy = new BaseStrategy();
  });

  it('computes M result', () => {
    const params = {
      a: true,
      b: true,
      c: false,
      d: 11.5,
      e: 10,
      f: 7,
    };

    expect(baseStrategy.getResult(params)).toEqual({ h: 'M', k: 23 });
  });

  it('computes P result', () => {
    const params = {
      a: true,
      b: true,
      c: true,
      d: 0.5,
      e: 30,
      f: -21,
    };

    expect(baseStrategy.getResult(params)).toEqual({ h: 'P', k: 1.5 });
  });

  it('computes T result', () => {
    const params = {
      a: false,
      b: true,
      c: true,
      d: 11.5,
      e: 5,
      f: 30,
    };

    expect(baseStrategy.getResult(params)).toEqual({ h: 'T', k: 0 });
  });

  it('throws an error when keys are incorrect', () => {
    const params = {
      a: false,
      b: false,
      c: true,
      d: 11.5,
      e: 5,
      f: 7,
    };

    expect(() => baseStrategy.getResult(params)).toThrow(BadRequestException);
  });
});
