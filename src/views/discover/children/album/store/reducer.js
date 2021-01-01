import { Map } from 'immutable';
import {
  CHANGE_NEW_ALBUM,
  CHANGE_TOP_ALBUM
} from './constant'

const defaultState = Map({
  NewAlbum: [],
  TopAlbum: []
})

const reducer = (state = defaultState, action) => {
  switch (action.type){
    case CHANGE_NEW_ALBUM:
      return state.set('NewAlbum', action.newAlbum)
    case CHANGE_TOP_ALBUM:
      return state.set('TopAlbum', action.topAlbum)
    default:
      return state;
  }
}

export default reducer;
