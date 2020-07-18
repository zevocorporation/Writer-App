const bcrypt = require('bcryptjs');
const request = require('request');
require('dotenv').config();

const User = require('../../models/user');

exports.queryResolver = {
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
      req.session.otp = otp;
      req.session.mobile = args.sendCodeInput.mobile;
      request(options, (error, response, body) => {
        if (error) throw new Error(error);
        console.log(body);
        return true;
      });
      return false;
    } catch (err) {
      throw err;
    }
  },
};

exports.mutationResolver = {};
