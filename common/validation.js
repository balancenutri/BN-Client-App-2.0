import { body } from 'express-validator';

export const validateFields = (fields) => {
  const validations = fields.map((field) => {
    switch (field) {
      case 'email':
        return body('email')
          .notEmpty().withMessage('Email is required')
          .isEmail().withMessage('Please enter a valid email address');
      case 'password':
        return body('password')
          .notEmpty().withMessage('Password is required')
          .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long');
      default:
        return body(field)
          .notEmpty().withMessage(`${field} is required`);
    }
  });

  return validations;
};
