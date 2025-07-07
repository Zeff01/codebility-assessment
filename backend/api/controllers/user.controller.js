const Argon = require('argon2');
const jwtGenerator = require('../helpers/jwt.generator');
const userModel = require('../models/user.model');
const { ERROR, SUCCESS } = require('../enums/auth.enums');

// Login
const login = (req, res, next) => {
  let user = null;

  userModel
    .findOne({ userName: req.body.userName })
    .select('+password')
    .exec()
    .then((result) => {
      // Respond if user is not found thru username
      if (!result) {
        throw {
          status: 401,
          message: ERROR.INVALID_USER_OR_PASSWORD,
        };
      }
      user = result;

      // if user found verify password with hash
      return Argon.verify(user.password, req.body.password);
    })
    // Check password
    .then(async (password_matched) => {
      // Check if passwords mismatched
      if (!password_matched) {
        throw {
          status: 401,
          message: ERROR.INVALID_USER_OR_PASSWORD,
        };
      }

      // store username, user id in the token
      const payload = {
        userName: user.userName,
        userId: user._id,
      };

      // Sign the JWT token and populate the payload with the username and userId
      const token = jwtGenerator.sign(
        payload,
        process.env.JWT_KEY,
        process.env.JWT_KEY_EXPIRES_AT
      );

      // Send back success message and data along with the token to the user
      return res.status(200).json({
        message: SUCCESS.LOGIN,
        userName: user.userName,
        userId: user._id,
        token: user.token,
        accessToken: token,
      });
    })
    .catch((err) => {
      if (err.name == 'ValidationError') {
        res.status(403).json(err);
      } else if (err.status >= 400 && err.status < 500) {
        res.status(err.status).json(err);
      } else {
        res.status(500).json({
          message: ERROR.INTERNAL_ERROR,
          error: {
            message: err.message,
            stack: err.stack,
          },
        });
      }
    });
};

// Register a user account
const register = async (req, res, next) => {
  // Make sure that the username doesn't exists on database
  const usernameAlreadyExist = await userModel
    .findOne({
      userName: req.body.userName,
    })
    .exec()
    .then((user) => {
      if (user) return true;
    });

  if (usernameAlreadyExist == true) {
    return res.status(409).json({
      name: 'ValidationError',
      message: ERROR.ALREADY_EXIST_USERNAME,
    });
  }

  // apply password hashing for new user
  const hashed_password = await Argon.hash(req.body.password);

  // create schema for new user
  const account = new userModel({
    userName: req.body.userName,
    password: hashed_password,
    lastName: req.body.lastName,
    firstName: req.body.firstName,
  });

  // save new user
  await account
    .save()
    .then((result) => {
      res.status(201).json({
        message: SUCCESS.CREATE,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = {
  login,
  register,
};
