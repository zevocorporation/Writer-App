const UserReducer = (state, action) => {
   const { type, payload } = action
   switch (type) {
      default:
         return null
      case 'LOG_IN':
         if (payload?._id && payload?.token) {
            return {
               ...state,
               _id: payload._id,
               token: payload.token,
               isLoggedIn: true,
            }
         } else {
            return { ...state }
         }
      case 'LOG_OUT':
         return {
            ...state,
            isLoggedIn: false,
         }
      case 'RESET_PASSWORD':
         console.log('resetting password')
         return {
            ...state,
            isLoggedIn: false,
         }
      case 'SIGNUP':
         console.log('signing up')
         return {
            ...state,
            isLoggedIn: false,
         }
   }
}

export default UserReducer
