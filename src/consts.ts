import { inputFields } from "./appTypes";

export const validationRules = [
  {
    fieldName: inputFields.TITLE,
    required: true,
    minLength: 2
  },
  {
    fieldName: inputFields.DESCRIPTION,
    required: false,
    maxLength: 20
  },
  {
    fieldName: inputFields.PEOPLE,
    required: false,
    max: 10
  }
];
