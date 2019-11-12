import { BaseStrategy } from './base-strategy';
import { InputValuesDto } from '../dto/input-values.dto';

export class CustomOne extends BaseStrategy {
  protected calculateKP(values: InputValuesDto): number {
    return 2 * values.d + (values.d * values.e / 100);
  }
}
