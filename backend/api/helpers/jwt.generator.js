const jwt = require('jsonwebtoken');

/**
 * Intialize JWT Sign and return a token
 * @param {Object} payload
 * @param {String} secretKey
 * @param {String} expiration
 */
const sign = (payload, secretKey, expiration) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: expiration });
  return token;
};

module.exports = {
  sign,
};
