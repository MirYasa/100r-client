const initialState = {
  content: []
}

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_CONTENT':
      return {content: action.payload}
    default:
      return state
  }
}