import { Map } from 'immutable'

import {
  CHANGE_CAT_LIST,
  CHANGE_CATEGORY_SYMBOL,
  CHANGE_TOP_LIST
} from './constant'

const defalutState = Map({
  CatList: [],
  Category: '',
  TopList: []
})

const reducer = (state = defalutState, actions) => {
  switch (actions.type) {
    case CHANGE_CAT_LIST:
      return state.set('CatList',actions.catList);
    case CHANGE_CATEGORY_SYMBOL:
      return state.set('Category', actions.category);
    case CHANGE_TOP_LIST:
      return state.set('TopList', actions.topList)
    default:
      return state;
  }
}

export default reducer;
