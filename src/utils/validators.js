// Form Validation Utilities
// Provides validation functions for forms throughout the app

// Email validation
export const isValidEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation (minimum 8 characters, at least one letter and one number)
export const isValidPassword = (password) => {
  if (!password || password.length < 8) return false;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  return hasLetter && hasNumber;
};

// Phone number validation (US format)
export const isValidPhone = (phone) => {
  if (!phone) return false;
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '');
  // Should have 10 digits
  return cleaned.length === 10 || cleaned.length === 11;
};

// Format phone number to (XXX) XXX-XXXX
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

// Name validation (only letters, spaces, hyphens)
export const isValidName = (name) => {
  if (!name || name.trim().length < 2) return false;
  const nameRegex = /^[a-zA-Z\s-]+$/;
  return nameRegex.test(name);
};

// ZIP code validation (US 5 or 9 digit)
export const isValidZipCode = (zip) => {
  if (!zip) return false;
  const zipRegex = /^\d{5}(-\d{4})?$/;
  return zipRegex.test(zip);
};

// Credit card number validation (Luhn algorithm)
export const isValidCreditCard = (cardNumber) => {
  if (!cardNumber) return false;

  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s-]/g, '');

  // Check if only digits
  if (!/^\d+$/.test(cleaned)) return false;

  // Check length (13-19 digits)
  if (cleaned.length < 13 || cleaned.length > 19) return false;

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  return sum % 10 === 0;
};

// CVV validation
export const isValidCVV = (cvv) => {
  if (!cvv) return false;
  const cvvRegex = /^\d{3,4}$/;
  return cvvRegex.test(cvv);
};

// Expiry date validation (MM/YY format)
export const isValidExpiryDate = (expiry) => {
  if (!expiry) return false;

  const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
  if (!expiryRegex.test(expiry)) return false;

  const [month, year] = expiry.split('/');
  const now = new Date();
  const currentYear = now.getFullYear() % 100; // Get last 2 digits
  const currentMonth = now.getMonth() + 1;

  const expiryYear = parseInt(year);
  const expiryMonth = parseInt(month);

  // Check if expired
  if (expiryYear < currentYear) return false;
  if (expiryYear === currentYear && expiryMonth < currentMonth) return false;

  return true;
};

// Driver's license number validation (basic check)
export const isValidLicenseNumber = (license) => {
  if (!license) return false;
  // Most licenses are 8-12 alphanumeric characters
  const licenseRegex = /^[A-Z0-9]{6,15}$/i;
  return licenseRegex.test(license);
};

// Required field validation
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

// Minimum length validation
export const hasMinLength = (value, minLength) => {
  if (!value) return false;
  return value.length >= minLength;
};

// Maximum length validation
export const hasMaxLength = (value, maxLength) => {
  if (!value) return true; // Empty is valid for max length
  return value.length <= maxLength;
};

// Number range validation
export const isInRange = (value, min, max) => {
  const num = parseFloat(value);
  if (isNaN(num)) return false;
  return num >= min && num <= max;
};

// URL validation
export const isValidURL = (url) => {
  if (!url) return false;
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

// Age validation (must be 21+)
export const isValidAge = (birthdate) => {
  if (!birthdate) return false;
  const birth = new Date(birthdate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age >= 21;
};

// Password match validation
export const passwordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Validate entire login form
export const validateLoginForm = (email, password) => {
  const errors = {};

  if (!isRequired(email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(password)) {
    errors.password = 'Password is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Validate entire signup form
export const validateSignupForm = (formData) => {
  const errors = {};

  // First Name
  if (!isRequired(formData.firstName)) {
    errors.firstName = 'First name is required';
  } else if (!isValidName(formData.firstName)) {
    errors.firstName = 'Please enter a valid first name';
  }

  // Last Name
  if (!isRequired(formData.lastName)) {
    errors.lastName = 'Last name is required';
  } else if (!isValidName(formData.lastName)) {
    errors.lastName = 'Please enter a valid last name';
  }

  // Email
  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password
  if (!isRequired(formData.password)) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(formData.password)) {
    errors.password = 'Password must be at least 8 characters with letters and numbers';
  }

  // Confirm Password
  if (!isRequired(formData.confirmPassword)) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (!passwordsMatch(formData.password, formData.confirmPassword)) {
    errors.confirmPassword = 'Passwords do not match';
  }

  // Phone
  if (formData.phone && !isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Validate booking form
export const validateBookingForm = (formData) => {
  const errors = {};

  // Pickup Location
  if (!isRequired(formData.pickupLocation)) {
    errors.pickupLocation = 'Pickup location is required';
  }

  // Return Location
  if (!isRequired(formData.returnLocation)) {
    errors.returnLocation = 'Return location is required';
  }

  // Pickup Date
  if (!isRequired(formData.pickupDate)) {
    errors.pickupDate = 'Pickup date is required';
  }

  // Return Date
  if (!isRequired(formData.returnDate)) {
    errors.returnDate = 'Return date is required';
  }

  // Pickup Time
  if (!isRequired(formData.pickupTime)) {
    errors.pickupTime = 'Pickup time is required';
  }

  // Return Time
  if (!isRequired(formData.returnTime)) {
    errors.returnTime = 'Return time is required';
  }

  // Driver Info
  if (!isRequired(formData.firstName)) {
    errors.firstName = 'First name is required';
  } else if (!isValidName(formData.firstName)) {
    errors.firstName = 'Please enter a valid first name';
  }

  if (!isRequired(formData.lastName)) {
    errors.lastName = 'Last name is required';
  } else if (!isValidName(formData.lastName)) {
    errors.lastName = 'Please enter a valid last name';
  }

  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!isRequired(formData.phone)) {
    errors.phone = 'Phone number is required';
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!isRequired(formData.licenseNumber)) {
    errors.licenseNumber = 'Driver\'s license number is required';
  } else if (!isValidLicenseNumber(formData.licenseNumber)) {
    errors.licenseNumber = 'Please enter a valid license number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Validate search form
export const validateSearchForm = (formData) => {
  const errors = {};

  if (!isRequired(formData.location)) {
    errors.location = 'Please select a location';
  }

  if (!isRequired(formData.pickupDate)) {
    errors.pickupDate = 'Please select a pickup date';
  }

  if (!isRequired(formData.returnDate)) {
    errors.returnDate = 'Please select a return date';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

// Real-time field validation
export const validateField = (fieldName, value, allValues = {}) => {
  let error = null;

  switch (fieldName) {
    case 'email':
      if (!isRequired(value)) {
        error = 'Email is required';
      } else if (!isValidEmail(value)) {
        error = 'Please enter a valid email address';
      }
      break;

    case 'password':
      if (!isRequired(value)) {
        error = 'Password is required';
      } else if (!isValidPassword(value)) {
        error = 'Password must be at least 8 characters with letters and numbers';
      }
      break;

    case 'confirmPassword':
      if (!isRequired(value)) {
        error = 'Please confirm your password';
      } else if (!passwordsMatch(allValues.password, value)) {
        error = 'Passwords do not match';
      }
      break;

    case 'firstName':
    case 'lastName':
      if (!isRequired(value)) {
        error = `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`;
      } else if (!isValidName(value)) {
        error = 'Please enter a valid name';
      }
      break;

    case 'phone':
      if (value && !isValidPhone(value)) {
        error = 'Please enter a valid phone number';
      }
      break;

    case 'licenseNumber':
      if (!isRequired(value)) {
        error = 'License number is required';
      } else if (!isValidLicenseNumber(value)) {
        error = 'Please enter a valid license number';
      }
      break;

    default:
      break;
  }

  return error;
};

export default {
  isValidEmail,
  isValidPassword,
  isValidPhone,
  formatPhoneNumber,
  isValidName,
  isValidZipCode,
  isValidCreditCard,
  isValidCVV,
  isValidExpiryDate,
  isValidLicenseNumber,
  isRequired,
  hasMinLength,
  hasMaxLength,
  isInRange,
  isValidURL,
  isValidAge,
  passwordsMatch,
  validateLoginForm,
  validateSignupForm,
  validateBookingForm,
  validateSearchForm,
  validateField
};
