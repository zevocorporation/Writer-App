async function validateMobileNumber(mobile, type) {
     if (type === 'signup' || type === 'reset-password') {
          try {
               if (mobile.trim().length > 11) {
                    return 'mobile number is more that 10 digits'
               } else if (mobile.trim().length < 9) {
                    return 'invalid mobile number'
               } else {
                    return true
               }
          } catch (err) {
               console.log(err)
          }
     } else {
          try {
               if (mobile.trim().length > 11) {
                    return ''
               } else if (mobile.trim().length < 9) {
                    return ''
               } else {
                    return true
               }
          } catch (err) {
               console.log(err)
          }
     }
}

async function validatePassword(password, type) {
     if (type === 'signup' || type === 'reset-password') {
          try {
               if (password.trim().length > 21) {
                    return 'password can only contain max 20 characters'
               } else if (password.trim().length < 7) {
                    return 'password should have minimum 8 characters'
               } else {
                    return true
               }
          } catch (err) {
               console.log(err)
          }
     } else {
          try {
               if (password.trim().length > 21) {
                    return ''
               } else if (password.trim().length < 7) {
                    return ''
               } else {
                    return true
               }
          } catch (err) {
               console.log(err)
          }
     }
}

async function validateConfirmPassword(
     password,
     confirmPassword
) {
     console.log('here')

     try {
          if (
               password.slice(0, -1).trim() !==
               confirmPassword.trim()
          ) {
               return 'password mismatch'
          } else {
               return true
          }
     } catch (err) {
          console.log(err)
     }
}

async function validateVerificationCode(verificationCode) {
     try {
          if (verificationCode.trim().length !== 3) {
               return 'invalid verification code'
          } else {
               return true
          }
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
