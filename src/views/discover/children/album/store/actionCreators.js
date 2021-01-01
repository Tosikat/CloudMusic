import * as constant from "./constant";

import {
  getNewAlbum,
} from '@/network/discover/recommend';
import {
  getTopAlbum
} from '@/network/discover/album'

const changeNewAlbum = res => ({
  type: constant.CHANGE_NEW_ALBUM,
  newAlbum: res
})

const changeTopAlbum = res => ({
  type: constant.CHANGE_TOP_ALBUM,
  topAlbum: res
})

export const getNewAlbumAction = res => {
  return dispatch => {
    getNewAlbum().then(res => {
      console.log(res.data)
      dispatch(changeNewAlbum(res.data))
    })
  }
}

export const getTopAlbumAction = (area, offset) => {
  return dispatch => {
    getTopAlbum(area, offset).then(res => {
      console.log(res.data)
      dispatch(changeTopAlbum(res.data))
    })
  }
}
