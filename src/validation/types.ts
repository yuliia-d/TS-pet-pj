export type ValidatableType = {
  fieldName: string;
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
};

export type ValidationFieldResultType = {
  isValid: boolean;
  message?: string;
};

export type ErrorType = {
  required: string;
  short: string;
  long: string;
  small: string;
  big: string;
};

export type ValidationRulesType = {
  fieldName: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
};

export type ValidationFieldsResultType = {
  fieldName: string;
  isValid: boolean;
  message?: string;
};
