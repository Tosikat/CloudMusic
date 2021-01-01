import * as constants from './constant'

import {
  getCatList,
  getPlayList
} from '@/network/discover/playlist'


const changeCatList = res =>({
  type: constants.CHANGE_CAT_LIST,
  catList: res
})

const changeCategorySymbol = res =>({
  type: constants.CHANGE_CATEGORY_SYMBOL,
  category: res
})

const changeTopList = res => ({
  type: constants.CHANGE_TOP_LIST,
  topList: res
})

export const getCatListAction = () => {
  return dispatch => {
    getCatList().then(res => {
      console.log(res.data);
      dispatch(changeCatList(res.data));
    })
  }
}
export const getCategorySyboml = (res) => {
  return dispatch => {
    dispatch(changeCategorySymbol(res))
  }
}

export const getPlayListAction = (cat, offset) => {
  return dispatch => {
    getPlayList(cat, offset).then(res => {
      console.log(res.data);
      dispatch(changeTopList(res.data))
    })
  }
}
