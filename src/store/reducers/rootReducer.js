import {combineReducers} from 'redux'
import {tabsReducer} from './tabsReducer'
import {contentReducer} from './contentReducer'
import {inputDataReducer} from './inputDataReducer'
import {catalogReducer} from './catalogReducer'
import {orderReducer} from './orderReducer'


export const rootReducer = combineReducers({
  tabs: tabsReducer,
  content: contentReducer,
  inputData: inputDataReducer,
  catalog: catalogReducer,
  order: orderReducer
})