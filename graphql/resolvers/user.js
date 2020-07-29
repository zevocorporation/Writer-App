const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const request = require('request');
require('dotenv').config();

const User = require('../../models/user');

exports.mutationResolver = {
  sendCode: async (_, args, { req }) => {
    try {
      const mobileNumber = args.sendCodeInput.mobile.trim();
      if (mobileNumber.length != 10) {
        throw new Error('Please enter a valid mobile number.');
      }
      const typeNumber = /^[0-9]+$/;
      if (!mobileNumber.match(typeNumber)) {
        throw new Error('Please enter a valid mobile number.');
      }
      const numberExists = await User.findOne({
        mobile: mobileNumber,
      });
      if (args.sendCodeInput.type == 'SIGN_UP' && numberExists) {
        throw new Error('You already have an account. Please login.');
      } else if (args.sendCodeInput.type == 'RESET_PASSWORD' && !numberExists) {
        throw new Error("Account doesn't exist. Please create one.");
      }
      let otpSent = false;
      const otp = await Math.floor(100000 + Math.random() * 900000);
      const options = {
        method: 'GET',
        url: 'https://global.datagenit.com/API/sms-api.php',
        qs: {
          auth: process.env.DATAGEN_AUTHKEY,
          senderid: process.env.DATAGEN_SENDERID,
          msisdn: mobileNumber,
          message: `Your ${process.env.app_name} verification code is ${otp}. This code will expire in ${process.env.time} minutes. Please don't share this code for security reasons.`,
        },
        strictSSL: false,
        rejectUnauthorized: false,
        headers: {
          'cache-control': 'no-cache',
        },
      };
      req.session.otp = otp;
      req.session.mobile = mobileNumber;
      let sendOtp = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
          if (error) reject(error);
          resolve('Body:' + body);
        });
      });
      await sendOtp
        .then((result) => {
          console.log(result);
          console.log(result[16]);
          if (result[16] == 's') otpSent = true;
        })
        .catch((err) => {
          throw err;
        });
      if (otpSent) return true;
      return false;
    } catch (err) {
      throw err;
    }
  },

  verifyCode: async (_, args, { req }) => {
    try {
      if (req.session.mobile != args.verifyCodeInput.mobile) {
        throw new Error('Mismatching verification code');
      }
      const code = args.verifyCodeInput.code.trim();
      if (code.length != 6) {
        throw new Error('Invalid verification code.');
      }
      const typeNumber = /^[0-9]+$/;
      if (!code.match(typeNumber)) {
        throw new Error('Invalid verification code.');
      }
      if (code != req.session.otp) {
        throw new Error('Verification code is mismatching. Check again.');
      }
      return true;
    } catch (err) {
      throw err;
    }
  },

  login: async (_, args) => {
    try {
      const user = await User.findOne({ mobile: args.loginInput.mobile });
      if (!user) {
        throw new Error("This account doesn't exist. Please create one.");
      }
      const isEqual = await bcrypt.compare(
        args.loginInput.password,
        user.password
      );
      if (!isEqual) {
        throw new Error('Wrong password.');
      }
      const token = jwt.sign(
        { mobile: user.mobile, userId: user._id },
        process.env.SECRET_SUPER_KEY,
        { expiresIn: process.env.TOKEN_EXPIRY }
      );
      return {
        _id: user._id,
        mobile: user.mobile,
        token: token,
        tokenExpiration: process.env.TOKEN_INT_EXPIRY,
      };
    } catch (err) {
      throw err;
    }
  },
  signUp: async (_, args, { req }) => {
    try {
      const code = args.signUpInput.code.trim();
      userPassword = args.signUpInput.password.trim();
      if (req.session.mobile != args.signUpInput.mobile) {
        throw new Error('Wrong mobile number.');
      }
      if (code.length != 6) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      const typeNumber = /^[0-9]+$/;
      if (!code.match(typeNumber)) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (code != req.session.otp) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (userPassword.length < 8) {
        throw new Error('Passwords should contain atleast 8 characters');
      }
      if (userPassword.length > 20) {
        throw new Error('Passwords can only contain maximum 20 characters');
      }
      const hashedPassword = await bcrypt.hash(userPassword, 12);
      const user = new User({
        mobile: req.session.mobile.trim(),
        password: hashedPassword.trim(),
      });
      const result = await user.save();
      return result;
    } catch (err) {
      throw err;
    }
  },

  resetPassword: async (_, args, { req }) => {
    try {
      const code = args.resetPasswordInput.code.trim();
      userPassword = args.resetPasswordInput.newPassword.trim();
      if (req.session.mobile != args.resetPasswordInput.mobile) {
        throw new Error('Wrong mobile number.');
      }
      if (code.length != 6) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      const typeNumber = /^[0-9]+$/;
      if (!code.match(typeNumber)) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (code != req.session.otp) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (userPassword.length < 8) {
        throw new Error('Passwords should contain atleast 8 characters');
      }
      if (userPassword.length > 20) {
        throw new Error('Passwords can only contain maximum 20 characters');
      }
      const hashedPassword = await bcrypt.hash(userPassword, 12);
      const existingUser = await User.findOne({
        mobile: req.session.mobile,
      });
      existingUser.password = hashedPassword;
      await existingUser.save();
      return existingUser;
    } catch (err) {
      throw err;
    }
  },
};
