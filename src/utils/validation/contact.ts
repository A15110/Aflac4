import { ValidationResult } from '../../types';

export const validatePhoneNumber = (phone: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const phoneRegex = /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  
  if (!phoneRegex.test(phone)) {
    errors.format = 'Invalid phone number format';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateEmail = (email: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!emailRegex.test(email)) {
    errors.format = &apos;Invalid email address format&apos;;
  }
  
  if (email.length > 254) {
    errors.length = &apos;Email address is too long&apos;;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateMessage = (message: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (message.trim().length < 10) {
    errors.length = 'Message must be at least 10 characters long';
  }
  
  if (message.length > 1000) {
    errors.maxLength = 'Message cannot exceed 1000 characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};