const initialState = {
  catalog: [],
  categories: [],
  products: {}
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_CATALOG':
      return {...state, catalog: action.payload}
    case'GET_PRODUCTS':
      return {...state, products: action.payload}
    case'GET_CATEGORIES':
      return {...state, categories: action.payload}
    default:
      return state
  }
}