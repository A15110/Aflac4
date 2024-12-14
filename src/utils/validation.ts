export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?1?\s*\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$/;
  return phoneRegex.test(phone);
};

export const validateZipCode = (zipCode: string): boolean => {
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zipCode);
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validatePassword = (password: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (password.length < 8) {
    errors.length = 'Password must be at least 8 characters long';
  }
  if (!/[A-Z]/.test(password)) {
    errors.uppercase = 'Password must contain at least one uppercase letter';
  }
  if (!/[a-z]/.test(password)) {
    errors.lowercase = 'Password must contain at least one lowercase letter';
  }
  if (!/[0-9]/.test(password)) {
    errors.number = 'Password must contain at least one number';
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.special = 'Password must contain at least one special character (!@#$%^&*)';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateName = (name: string): ValidationResult => {
  const errors: Record<string, string> = {};
  
  if (name.trim().length < 2) {
    errors.length = 'Name must be at least 2 characters long';
  }
  if (/[0-9]/.test(name)) {
    errors.numbers = 'Name should not contain numbers';
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(name)) {
    errors.special = 'Name should not contain special characters';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateDate = (date: string): ValidationResult => {
  const errors: Record<string, string> = {};
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    errors.invalid = 'Invalid date format';
  } else {
    const today = new Date();
    if (dateObj > today) {
      errors.future = 'Date cannot be in the future';
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateForm = (
  fields: Record<string, string>,
  rules: Record<string, (value: string) => boolean | ValidationResult>
): ValidationResult => {
  const errors: Record<string, string> = {};
  
  Object.entries(rules).forEach(([field, rule]) => {
    if (field in fields) {
      const result = rule(fields[field]);
      if (typeof result === 'boolean') {
        if (!result) {
          errors[field] = `Invalid ${field}`;
        }
      } else {
        if (!result.isValid) {
          Object.entries(result.errors).forEach(([key, value]) => {
            errors[`${field}_${key}`] = value;
          });
        }
      }
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};