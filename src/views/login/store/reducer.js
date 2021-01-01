import { Map } from 'immutable'

import {
  CHANGE_LOGIN_INFO
} from './constant'

const defaultState = Map({
  UserInfo: []
})

const Reducer = (state = defaultState, actions) => {
  switch (actions.type){
    case CHANGE_LOGIN_INFO:
      return state.set('UserInfo', actions.userInfo);
    default:
      return state;
  }
}

export default Reducer
