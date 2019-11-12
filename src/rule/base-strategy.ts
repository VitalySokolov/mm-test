import { ResponseModel, ResponseStatus } from '../helper/response.model';
import { BadRequestException } from '@nestjs/common';
import { InputValuesDto } from '../dto/input-values.dto';
import { Strategy } from './strategy';

export class BaseStrategy implements Strategy {
  getResult(inputValues: InputValuesDto): ResponseModel {
    const h = this.calculateH(inputValues);
    const k = this.calculateK(inputValues, h);

    return { h, k };
  }

  protected calculateH(values: InputValuesDto): ResponseStatus {
    if (values.a && values.b && !values.c) {
      return ResponseStatus.M;
    }
    if (values.a && values.b && values.c) {
      return ResponseStatus.P;
    }
    if (!values.a && values.b && values.c) {
      return ResponseStatus.T;
    }

    throw new BadRequestException(`Keys a, b, c have an invalid status`);
  }

  protected calculateK(values: InputValuesDto, status: ResponseStatus): number {
    switch (status) {
      case ResponseStatus.M:
        return this.calculateKM(values);
      case ResponseStatus.P:
        return this.calculateKP(values);
      case ResponseStatus.T:
        return this.calculateKT(values);
      default:
        return assertNever(status);
    }
  }

  protected calculateKM(values: InputValuesDto): number {
    return values.d + (values.d * values.e / 10);
  }

  protected calculateKP(values: InputValuesDto): number {
    return values.d + (values.d * (values.e - values.f) / 25.5);
  }

  protected calculateKT(values: InputValuesDto): number {
    return values.d - (values.d * values.f / 30);
  }
}
