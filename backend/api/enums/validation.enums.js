module.exports = {
  MIN_CHARS: (field, limit) =>
    `${field} must be at least ${limit} characters long`,
  MIN_UPCASE: (field, limit) =>
    `${field} must contain at least ${limit} uppercase`,
  ALPLHA_NUMERIC: (field, limit) =>
    `${field} must contain at least ${limit} number`,
  SPECIAL_CHARS: (field, limit) =>
    `${field} must contain at least ${limit} special character`,
  ERROR: {
    USER_DATA: 'Error in User Data',
  },
};
