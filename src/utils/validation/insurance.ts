import { ValidationResult } from '../../types';

export const validatePolicyNumber = (policyNumber: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const policyRegex = /^[A-Z0-9]{10}$/;
  
  if (!policyRegex.test(policyNumber)) {
    errors.format = &apos;Policy number must be 10 characters of letters and numbers&apos;;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateClaimNumber = (claimNumber: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const claimRegex = /^CLM-\d{8}$/;
  
  if (!claimRegex.test(claimNumber)) {
    errors.format = 'Claim number must be in format CLM-XXXXXXXX';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateDateOfService = (date: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const serviceDate = new Date(date);
  const today = new Date();
  
  if (isNaN(serviceDate.getTime())) {
    errors.invalid = 'Invalid date format';
  } else {
    if (serviceDate > today) {
      errors.future = 'Date of service cannot be in the future';
    }
    
    const twoYearsAgo = new Date();
    twoYearsAgo.setFullYear(today.getFullYear() - 2);
    if (serviceDate < twoYearsAgo) {
      errors.tooOld = 'Date of service cannot be more than 2 years old';
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};