const initialState = {
  inputData: []
}

export const inputDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_INPUT_DATA':
      return {inputData: action.payload}
    default:
      return state
  }
}