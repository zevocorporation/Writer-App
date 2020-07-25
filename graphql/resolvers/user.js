const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const request = require('request');
require('dotenv').config();

const User = require('../../models/user');

exports.queryResolver = {
  sendCode: async (_, args, { req }) => {
    try {
      const numberExists = await User.findOne({
        mobile: args.sendCodeInput.mobile,
      });
      if (args.sendCodeInput.pageType == 'SIGN_UP' && numberExists) {
        throw new Error('You already have an account. Please login.');
      } else if (
        args.sendCodeInput.pageType == 'RESET_PASSWORD' &&
        !numberExists
      ) {
        throw new Error("Account doesn't exist. Please create one.");
      }
      let otpSent = false;
      const otp = await Math.floor(1000 + Math.random() * 9000);
      const options = {
        method: 'GET',
        url: 'https://global.datagenit.com/API/sms-api.php',
        qs: {
          auth: process.env.DATAGEN_AUTHKEY,
          senderid: process.env.DATAGEN_SENDERID,
          msisdn: args.sendCodeInput.mobile,
          message: `Your ${process.env.app_name} verification code is ${otp}. This code will expire in ${process.env.time} minutes. Please don't share this code for security reasons.`,
        },
        strictSSL: false,
        rejectUnauthorized: false,
        headers: {
          'cache-control': 'no-cache',
        },
      };
      req.session.otp = otp;
      req.session.mobile = args.sendCodeInput.mobile;
      let sendOtp = new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
          if (error) reject(error);
          resolve('Body:' + body);
        });
      });
      await sendOtp
        .then((result) => {
          console.log(result);
          otpSent = true;
        })
        .catch((err) => {
          throw err;
        });
      if (otpSent) return true;
      return false;
    } catch (err) {
      return err;
    }
  },

  verifyCode: async (_, args, { req }) => {
    try {
      const code = args.code;
      code.trim();
      if (code.length != 4) {
        throw new Error('Wrong verification code.');
      }
      if (code != req.session.otp) {
        throw new Error('Verification code is mismatching. Check again.');
      }
      return true;
    } catch (err) {
      return err;
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
      return err;
    }
  },
};

exports.mutationResolver = {
  signUp: async (_, args, { req }) => {
    try {
      const code = args.signUpInput.code;
      code.trim();
      const hashedPassword = await bcrypt.hash(args.signUpInput.password, 12);
      if (code.length != 4) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (code != req.session.otp) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      const user = new User({
        mobile: req.session.mobile.trim(),
        password: hashedPassword.trim(),
      });
      const result = await user.save();
      return result;
    } catch (err) {
      return err;
    }
  },

  resetPassword: async (_, args, { req }) => {
    try {
      const code = args.resetPasswordInput.code;
      code.trim();
      const hashedPassword = await bcrypt.hash(
        args.resetPasswordInput.newPassword,
        12
      );
      if (code.length != 4) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      if (code != req.session.otp) {
        throw new Error(
          'Unauthorized access. Please verify your mobile number'
        );
      }
      const existingUser = await User.findOne({
        mobile: req.session.mobile,
      });
      existingUser.password = hashedPassword;
      await existingUser.save();
      return existingUser;
    } catch (err) {
      return err;
    }
  },
};
