import { ValidationResult } from '../../types';

export const validateStreetAddress = (street: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (street.trim().length < 5) {
    errors.length = 'Street address must be at least 5 characters long';
  }
  
  if (!/\d/.test(street)) {
    errors.number = &apos;Street address must contain a house/building number&apos;;
  }
  
  if (/[!@#$%^&*()_+=<>{}[\]|~`]/.test(street)) {
    errors.special = 'Street address contains invalid special characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateCity = (city: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (city.trim().length < 2) {
    errors.length = 'City name must be at least 2 characters long';
  }
  
  if (/\d/.test(city)) {
    errors.numbers = 'City name should not contain numbers';
  }
  
  if (/[!@#$%^&*()_+=<>{}[\]|~`]/.test(city)) {
    errors.special = 'City name contains invalid special characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateState = (state: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const stateRegex = /^[A-Z]{2}$/;
  
  if (!stateRegex.test(state)) {
    errors.format = 'State must be a valid 2-letter US state code (e.g., CA)';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};