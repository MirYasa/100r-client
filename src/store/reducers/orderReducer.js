const initialState = {
  status: []
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_STATUS':
      return {status: [...state.status, ...action.payload]}
    default:
      return state
  }
}