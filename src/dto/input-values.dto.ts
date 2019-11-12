import { IsBoolean, IsInt, IsNumber, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class InputValuesDto {
  @Transform(convertToBoolean)
  @IsBoolean()
  a: boolean;

  @Transform(convertToBoolean)
  @IsBoolean()
  c: boolean;

  @Transform(convertToBoolean)
  @IsBoolean()
  b: boolean;

  @Transform(convertToNumber)
  @IsNumber()
  d: number;

  @Transform(convertToNumber)
  @IsInt()
  @Max(9007199254740990)
  @Min(-9007199254740990)
  e: number;

  @Transform(convertToNumber)
  @IsInt()
  @Max(9007199254740990)
  @Min(-9007199254740990)
  f: number;
}

function convertToNumber(value: string): number | string {
  if (value.length === 0) {
    return '';
  }

  return Number(value);
}

function convertToBoolean(value: string): boolean | string {
  value = value.toLowerCase();

  if (value === 'true') {
    return true;
  }

  if (value === 'false') {
    return false;
  }

  return value;
}
