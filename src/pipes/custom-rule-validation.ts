import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { Rule } from '../rule/strategy';

@Injectable()
export class CustomRuleValidationPipe implements PipeTransform {
  readonly allowedRules = [
    Rule.BASE,
    Rule.CUSTOM1,
    Rule.CUSTOM2,
  ];

  transform(value: any): Rule {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid rule`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedRules.includes(status);
  }
}
