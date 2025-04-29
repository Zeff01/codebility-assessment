const AppError = require("./AppError");

const validateRequiredFields = (fields) => {
  for (const [key, value] of Object.entries(fields)) {
    if (value === undefined || value === null || value === "") {
      throw new AppError(`${capitalize(key)} is required`, 400);
    }
  }
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

module.exports = validateRequiredFields;
