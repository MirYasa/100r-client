const initialState = {
  content: [],
  categories: [],
  manufacturers: []
}

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_CONTENT':
      return {...state, content: action.payload}
    case'GET_CATEGORY':
      return {...state, categories: action.payload}
    case'GET_MANUFACTURE':
      return {...state, manufacturers: action.payload}
    default:
      return state
  }
}