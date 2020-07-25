import {ChatActionTypes, ChatState, DELETE_MESSAGE, SEND_MESSAGE} from "./types"

const initialState: ChatState = {
  messages: [{user: 'a', message: 'd', timestamp: 2}]
}

export function chatReducer (state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload]
      }
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      }
    default: {
      return state;
    }
  }
}
