import { InputValuesDto } from '../dto/input-values.dto';
import { ResponseModel } from '../helper/response.model';
import { BaseStrategy } from './base-strategy';
import { CustomOne } from './custom-one';
import { CustomTwo } from './custom-two';

export interface Strategy {
  getResult(inputValues: InputValuesDto): ResponseModel;
}

export enum Rule {
  BASE = 'BASE',
  CUSTOM1 = 'CUSTOM1',
  CUSTOM2 = 'CUSTOM2',
}

export function getStrategy(ruleName: Rule): Strategy {
  switch (ruleName) {
    case Rule.BASE:
      return new BaseStrategy();
    case Rule.CUSTOM1:
      return new CustomOne();
    case Rule.CUSTOM2:
      return new CustomTwo();
    default:
      return assertNever(ruleName);
  }
}
