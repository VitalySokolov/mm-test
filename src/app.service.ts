import { Injectable } from '@nestjs/common';
import { InputValuesDto } from './dto/input-values.dto';
import { ResponseModel } from './helper/response.model';
import { getStrategy, Rule } from './rule/strategy';

@Injectable()
export class AppService {
  getAnswerWithStrategy(params: InputValuesDto, ruleName: Rule): ResponseModel {
    const strategy = getStrategy(ruleName);

    return strategy.getResult(params);
  }
}
