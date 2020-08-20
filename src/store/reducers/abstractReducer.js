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
         return {
            ...state,
            isAdded: true,
         }
      case 'OPEN_ABSTRACT_FILE':
         return { ...state, abstractFile: payload }
      case 'UPDATE_ABSTRACT':
         const newUpdateList = state?.myAbstracts.filter((abstract) => {
            return abstract._id !== payload._id
         })
         newUpdateList.push(payload)
         return {
            ...state,
            myAbstracts: newUpdateList.reverse(),
            abstractFile: payload,
            isUpdated: true,
         }
      case 'REMOVE_ABSTRACT':
         const newRemoveList = state?.myAbstracts.filter((abstract) => {
            return abstract._id !== payload._id
         })
         return {
            ...state,
            myAbstracts: newRemoveList,
            isRemoved: true,
         }
   }
}

export default AbstractReducer
