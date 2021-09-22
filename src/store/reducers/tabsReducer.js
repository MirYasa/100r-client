const initialState = {
  tabs: []
}

export const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case'GET_TABS':
      return {tabs: action.payload}
    default:
      return state
  }
}