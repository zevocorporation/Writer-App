const AbstractReducer = (state, action) => {
   const { type, payload } = action
   switch (type) {
      default:
         return null
      case 'LOAD_ABSTRACTS':
         return {
            ...state,
            myAbstracts: payload.reverse(),
         }
      case 'ADD_ABSTRACT':
         if (state?.myAbstracts) state.myAbstracts.push(payload)
         return { ...state, isAdded: true }
      case 'OPEN_ABSTRACT_FILE':
         return { ...state, abstractFile: payload }
      case 'UPDATE_ABSTRACT':
         return {
            ...state,
            isLoggedIn: false,
         }
      case 'REMOVE_ABSTRACT':
         const myAbstracts = state?.myAbstracts
         const data = myAbstracts.filter((myAbstract) => {
            return myAbstract._id !== payload._id
         })
         return { ...state, myAbstracts: data, isRemoved: true }
   }
}

export default AbstractReducer
