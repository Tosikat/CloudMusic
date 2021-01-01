import { Map } from "immutable";
import {
  CHANGE_TOP_BANNER,
  CHANGE_PLAYLIST_HOT,
  CHANGE_RECOMMEND_LIST,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from './constant'

const defaultState = Map({
  TopBanners: [],
  TitleCategory: [],
  HotList: [],
  NewAlbum: [],

  UpRanking: [],
  NewRanking: [],
  OriginRanking: []

})

function reducer(state = defaultState, action){
  switch (action.type) {
    case CHANGE_TOP_BANNER:
      // return { ...state, TopBanners: action.topBanners}
      return  state.set("TopBanners", action.topBanners)
    case CHANGE_PLAYLIST_HOT:
      return state.set('TitleCategory', action.titleCategory)
    case CHANGE_RECOMMEND_LIST:
      return state.set('HotList', action.hotList)
    case CHANGE_NEW_ALBUM:
      return state.set('NewAlbum', action.newAlbum)
    case CHANGE_UP_RANKING:
      return state.set('UpRanking', action.upRanking)
    case CHANGE_NEW_RANKING:
      return state.set('NewRanking', action.newRanking)
    case CHANGE_ORIGIN_RANKING:
      return state.set('OriginRanking', action.originRanking)
    default:
      return state
  }
}

export default reducer;
