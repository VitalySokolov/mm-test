import { Controller, Get, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { InputValuesDto } from './dto/input-values.dto';
import { ResponseModel } from './helper/response.model';
import { CustomRuleValidationPipe } from './pipes/custom-rule-validation';
import { Rule } from './rule/strategy';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get('/result')
  @UsePipes(new ValidationPipe({transform: true}))
  getResult(@Query() inputValues: InputValuesDto): ResponseModel {
    return this.appService.getAnswerWithStrategy(inputValues, Rule.BASE);
  }

  @Get('/result/:rule')
  @UsePipes(new ValidationPipe({transform: true}))
  getResultWithCustomRule(
      @Param('rule', CustomRuleValidationPipe) rule: Rule,
      @Query() inputValues: InputValuesDto,
  ): ResponseModel {
    return this.appService.getAnswerWithStrategy(inputValues, rule);
  }
}
