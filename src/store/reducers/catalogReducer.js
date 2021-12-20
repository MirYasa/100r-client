const initialState = {
  catalog: [],
  categories: [],
  products: {},
  orders: [],
  product_id: 0
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_CATALOG':
      return {...state, catalog: action.payload}
    case'GET_PRODUCTS':
      return {...state, products: action.payload}
    case'GET_CATEGORIES':
      return {...state, categories: action.payload}
    case'GET_ORDERS':
      return {...state, orders: action.payload}
    case 'GET_PRODUCT_ID':
      return {...state, product_id: action.payload}
    default:
      return state
  }
}