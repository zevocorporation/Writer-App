const userReducer = (state, action) => {
     const { type, payload } = action
     switch (type) {
          default:
               return null
          case 'LOG_IN':
               if (
                    payload.mobile === '9600488285' &&
                    payload.password === 'password'
               ) {
                    return {
                         ...state,
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

export default userReducer
