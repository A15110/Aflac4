import { ValidationResult } from '../../types';

export const validateEIN = (ein: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const einRegex = /^\d{2}-\d{7}$/;
  
  if (!einRegex.test(ein)) {
    errors.format = 'EIN must be in format XX-XXXXXXX';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateBusinessName = (name: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (name.trim().length < 3) {
    errors.length = &apos;Business name must be at least 3 characters long&apos;;
  }
  
  if (/[!@#$%^&*()_+=<>{}[\]|~`]/.test(name)) {
    errors.special = 'Business name contains invalid special characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateDUNS = (duns: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const dunsRegex = /^\d{9}$/;
  
  if (!dunsRegex.test(duns)) {
    errors.format = 'DUNS number must be exactly 9 digits';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};