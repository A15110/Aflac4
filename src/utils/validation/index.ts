export * from './address';
export * from './business';
export * from './contact';
export * from './insurance';

import { ValidationResult } from '../../types';

export const combineValidations = (validations: ValidationResult[]): ValidationResult => {
  const combinedErrors: Record<string, string> = {};
  
  validations.forEach((validation, index) => {
    if (!validation.isValid) {
      Object.entries(validation.errors).forEach(([key, value]) => {
        combinedErrors[`${index}_${key}`] = value;
      });
    }
  });
  
  return {
    isValid: Object.keys(combinedErrors).length === 0,
    errors: combinedErrors
  };
};