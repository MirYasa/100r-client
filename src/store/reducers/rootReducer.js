import {combineReducers} from 'redux'
import {tabsReducer} from './tabsReducer'
import {contentReducer} from './contentReducer'
import {inputDataReducer} from './inputDataReducer'


export const rootReducer = combineReducers({
  tabs: tabsReducer,
  content: contentReducer,
  inputData: inputDataReducer
})