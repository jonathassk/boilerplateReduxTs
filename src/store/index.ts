import { combineReducers } from 'redux'
import { systemReducer } from "./system/reducers"
import { chatReducer } from "./chat/reducers"
import { notesReducer } from "./note/reducers";


export const rootReducer = combineReducers({
  system: systemReducer,
  chat: chatReducer,
  note: notesReducer
})

export type RootState = ReturnType<typeof rootReducer>
