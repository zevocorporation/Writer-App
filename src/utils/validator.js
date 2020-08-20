async function mobile(mobile) {
   if (mobile?.trim().length === 0) {
      return { message: 'Please enter your mobile number' }
   }
   if (isNaN(mobile)) {
      return { message: 'Invalid mobile number!' }
   }
   if (mobile?.trim().length !== 10) {
      return { message: 'Please enter a valid 10 digit mobile number' }
   } else {
      return { isValid: true }
   }
}

async function password(password) {
   if (password?.trim().length === 0) {
      return { message: 'Please enter the password' }
   }
   if (password?.trim().length < 8) {
      return { message: 'Password should contain minimum 8 characters' }
   }
   if (password?.trim().length > 20) {
      return { message: 'Password can only contain maximum 20 characters' }
   } else {
      return { isValid: true }
   }
}

async function confirmPassword(password, confirmPassword) {
   if (confirmPassword?.trim().length === 0) {
      return { message: 'Please enter the confirmation password' }
   }
   if (confirmPassword?.trim().length < 8) {
      return { message: 'Password should contain minimum 8 characters' }
   }
   if (confirmPassword?.trim().length > 20) {
      return { message: 'Password can only contain maximum 20 characters' }
   }
   if (confirmPassword !== password) {
      return { message: 'Passwords mismatch' }
   } else {
      return { isValid: true }
   }
}

async function verificationCode(verificationCode) {
   if (verificationCode?.trim().length === 0) {
      return { message: 'Please enter the verification code' }
   }
   if (verificationCode?.trim().length !== 6) {
      return { message: 'Invalid verification code' }
   } else {
      return { isValid: true }
   }
}

async function wordCount(text, wordLimit, field) {
   const result = text
      .split('.')
      .filter((sentence) => sentence !== ' ')
      .map(
         (sentence) => sentence.split(' ').filter((word) => word !== '').length
      )

   let count = 0
   result.forEach((item) => {
      count = count + item
   })

   if (text.length === 0) {
      return {
         message: `Please enter the ${field}`,
      }
   }

   if (count > wordLimit) {
      return {
         message: `${field} can only contain ${wordLimit} words. Please reduce words`,
      }
   } else {
      return { isValid: true }
   }
}

const Validator = {
   mobile,
   password,
   confirmPassword,
   verificationCode,
   wordCount,
}

export default Validator
