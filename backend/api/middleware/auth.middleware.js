const jwt = require('jsonwebtoken');
const { ERROR } = require('../enums/auth.enums');

// Verify if there is a token
const Authenticate = (req, res, next) => {
  // Reject if auth token doesn't exist
  if (!req.headers.authorization) return reject.authFailed(res);

  // Decode token
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, process.env.JWT_KEY, (err, decodedToken) => {
    // Reject if token is not valid
    if (err) return reject.authFailed(res);

    // Reject if the token payload's user id is not equal to userId route param
    if (decodedToken.user_id !== req.params.userId)
      return reject.authFailed(res);

    // send the decoded token
    req.userData = decodedToken;
    next();
  });
};

const reject = {
  authFailed: (res) =>
    res
      .status(401)
      .json({
        message: ERROR.FAILED_AUTH,
      })
      .end(),
};

module.exports = {
  Authenticate,
};
