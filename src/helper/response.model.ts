export interface ResponseModel {
  h: ResponseStatus;
  k: number;
}

export enum ResponseStatus {
  M = 'M',
  P = 'P',
  T = 'T',
}
