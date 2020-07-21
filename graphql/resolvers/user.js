const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const request = require('request');
require('dotenv').config();

const User = require('../../models/user');

exports.queryResolver = {
  login: async (_, args, { req }) => {
    try {
      const usernum = await User.findOne({ mobile: args.mobile });
      const user = await User.findById(args.id);
      if (!usernum) {
        throw new Error('mobile num not exists!');
      }

      if (user) {
        const isEqual = await bcrypt.compare(args.password, user.password);

        if (!isEqual) {
          throw new Error('invalid password!');
        }
      }

      console.log(args.mobile);

      const token = jwt.sign(
        { mobile: args.mobile },
        'fjdfhkry8i46328yasjfhwi7r8q3ryifh',
        { expiresIn: '1h' }
      );

      return {
        userId: args.userInput.userId,
        mobile: args.mobile,
        token: token,
        tokenExpiration: 1,
      };
    } catch (err) {
      throw err;
    }
  },

  sendCode: async (_, args, { req }) => {
    try {
      const numberExists = await User.findOne({
        mobile: args.sendCodeInput.mobile,
      });
      if (args.sendCodeInput.pageType === 'SIGNUP' && numberExists) {
        throw new Error('Mobile number already exists');
      } else if (
        args.sendCodeInput.pageType === 'RESETPASSWORD' &&
        !numberExists
      ) {
        throw new Error('Mobile number does not exists');
      }
      var request = require('request');
      const otp = await Math.floor(1000 + Math.random() * 9000);
      const options = {
        method: 'GET',
        url: 'https://global.datagenit.com/API/sms-api.php',
        qs: {
          auth: process.env.DATAGEN_AUTHKEY,
          senderid: process.env.DATAGEN_SENDERID,
          msisdn: args.sendCodeInput.mobile,
          message: `Your one time password is ${otp}.this otp will expire in 1 minute `,
        },
        strictSSL: false,
        rejectUnauthorized: false,
        headers: {
          'cache-control': 'no-cache',
        },
      };
      console.log(otp);
      request(options, (error, response, body) => {
        if (error) throw new Error(error);
        console.log(body);
        return true;
      });
      console.log(req);
      req.session.otp = otp;
      req.session.mobile = args.sendCodeInput.mobile;

      return false;
    } catch (err) {
      throw err;
    }
  },
};

exports.mutationResolver = {
  signUp: async (_, args, { req }) => {
    try {
      const otp = args.userInput.otp;
      otp.trim();
      if (otp.length !== 4 && otp === ' ') {
        throw new error('Otp is invalid');
      }
      if (otp !== req.session.otp) {
        throw new error('Otp mismatch');
      }
      if (args.userInput.password !== args.userInput.confirmPassword) {
        throw new error('Password and confirm Password does not match');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
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
      const existingUser = await User.findOne({
        mobile: req.session.mobile,
      });
      const otp = args.userInput.otp;
      otp.trim();
      if (otp.length != 4 && otp == ' ') {
        throw new error('Otp is invalid');
      }
      if (otp != req.session.otp) {
        throw new error('Otp mismatch');
      }
      if (args.userInput.password != args.userInput.confirmPassword) {
        throw new error('Password and confirm Password does not match');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      existingUser.password = hashedPassword;
      await existingUser.save();
      return existingUser;
    } catch (err) {
      throw err;
    }
  },
};
