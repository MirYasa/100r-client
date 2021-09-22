import {combineReducers} from 'redux'
import {tabsReducer} from './tabsReducer'
import {contentReducer} from './contentReducer'


export const rootReducer = combineReducers({
  tabs: tabsReducer,
  content: contentReducer
})