const { ERROR } = require('../enums/validation.enums');
const {
  loginValidation,
  registerValidation,
} = require('../validation/user.validation');

const registerMiddleware = async (req, res, next) => {
  const payload = {
    userName: req.body.userName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  };

  const { error } = registerValidation.validate(payload);
  if (error) {
    const errorMsg = error.message;
    res.status(406);
    return res.json({
      message: ERROR.USER_DATA,
      errorMsg,
    });
  } else {
    next();
  }
};

const loginMiddleware = async (req, res, next) => {
  const payload = {
    userName: req.body.userName,
    password: req.body.password,
  };

  const { error } = loginValidation.validate(payload);
  if (error) {
    const errorMsg = error.message;
    res.status(406);
    return res.json({
      message: ERROR.USER_DATA,
      errorMsg,
    });
  } else {
    next();
  }
};

module.exports = { loginMiddleware, registerMiddleware };
