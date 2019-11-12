import { BaseStrategy } from './base-strategy';
import { ResponseStatus } from '../helper/response.model';
import { BadRequestException } from '@nestjs/common';
import { InputValuesDto } from '../dto/input-values.dto';

export class CustomTwo extends BaseStrategy {
  protected calculateH(values: InputValuesDto): ResponseStatus {
    if (values.a && !values.b && values.c) {
      return ResponseStatus.M;
    }
    if (values.a && values.b && values.c) {
      return ResponseStatus.P;
    }
    if (values.a && values.b && !values.c) {
      return ResponseStatus.T;
    }

    throw new BadRequestException(`Keys a, b, c have an invalid status`);
  }

  protected calculateKM(values: InputValuesDto): number {
    return values.f + values.d + (values.d * values.e / 100);
  }
}
