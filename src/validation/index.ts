import {
  ValidatableType,
  ErrorType,
  ValidationFieldResultType,
  ValidationRulesType,
  ValidationFieldsResultType
} from "./types";

const getErrorsMessage = (
  fieldName: string,
  maxLength?: number,
  minLength?: number,
  max?: number,
  min?: number
): ErrorType => {
  return {
    required: `${fieldName} is required`,
    short: `${fieldName} should to be longer than ${minLength}`,
    long: `${fieldName} should to be shorter than ${maxLength}`,
    small: `${fieldName} should to be bigger than ${min}`,
    big: `${fieldName} should to be smaller than ${max}`
  };
};

export const validateField = ({
  fieldName,
  value,
  required,
  maxLength,
  minLength,
  max,
  min
}: ValidatableType): ValidationFieldResultType => {
  const errorMessages = getErrorsMessage(
    fieldName,
    maxLength,
    minLength,
    max,
    min
  );

  if (!value && required) {
    return {
      isValid: false,
      message: errorMessages.required
    };
  }

  if (minLength && typeof value === "string" && value.length < minLength) {
    return {
      isValid: false,
      message: errorMessages.short
    };
  }

  if (maxLength && typeof value === "string" && value.length > maxLength) {
    return {
      isValid: false,
      message: errorMessages.long
    };
  }

  if (min && typeof value === "number" && value < min) {
    return {
      isValid: false,
      message: errorMessages.small
    };
  }

  if (max && typeof value === "number" && value > max) {
    return {
      isValid: false,
      message: errorMessages.big
    };
  }

  return {
    isValid: true
  };
};

export const getFieldsWithValidateRules = (
  validateRules: ValidationRulesType[],
  fields: Record<string, string | number>
) => {
  return validateRules.map((field) => ({
    ...field,
    value: fields[field.fieldName]
  }));
};

export const validateFormFields = (
  validateRules: ValidationRulesType[],
  fields: Record<string, string | number>
): ValidationFieldsResultType[] => {
  const formFields = getFieldsWithValidateRules(validateRules, fields);

  return formFields.reduce(
    (acc: ValidationFieldsResultType[], filedProps) => [
      ...acc,
      {
        fieldName: filedProps.fieldName,
        ...validateField(filedProps)
      }
    ],
    []
  );
};
