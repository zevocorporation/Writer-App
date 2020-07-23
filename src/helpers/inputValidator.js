function validateMobileNumber(number) {
     try {
          console.log('validating mobile')
     } catch (err) {
          console.log(err)
     }
}

function validatePassword(password) {
     try {
          console.log('validating password')
     } catch (err) {
          console.log(err)
     }
}

function validateConfirmPassword(
     password,
     confirmPassword
) {
     try {
          console.log('validating confirm password')
     } catch (err) {
          console.log(err)
     }
}

function validateVerificationCode(verificationCode) {
     try {
          console.log('validating verification code')
     } catch (err) {
          console.log(err)
     }
}

const InputValidator = {
     validateMobileNumber,
     validatePassword,
     validateConfirmPassword,
     validateVerificationCode,
}

export default InputValidator
