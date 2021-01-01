import * as constants from './constant'

import {
  getTopBanners,
  getPlaylistHot,
  getRecommendList,
  getNewAlbum,
  getTopList
} from '@/network/discover/recommend'//从network中获得数据在此进行交互

// 将数据添加到reducer中 type为action添加进reducer的标识
/*
* type reducer中进入函数的标识
* topBanners action中需要修改的数据用action.topBanners访问*/
const changeTopBanner = res => ({
  type: constants.CHANGE_TOP_BANNER,
  topBanners: res.banners
})

const changePlaylist = res => ({
  type: constants.CHANGE_PLAYLIST_HOT,
  titleCategory: res.tags
})

const changeRecommendList = res => ({
  type: constants.CHANGE_RECOMMEND_LIST,
  hotList: res.result
})

const changeNewAlbum = res => ({
  type: constants.CHANGE_NEW_ALBUM,
  newAlbum: res.albums
})

const changeUpRanking = res => ({
  type: constants.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRanking = res => ({
  type: constants.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRanking = res => ({
  type: constants.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res.data)
      dispatch(changeTopBanner(res.data));
    })
  }
}

export const getPlaylistHotAction = () => {
  return dispatch => {
    getPlaylistHot().then(res => {
      console.log(res.data);
      dispatch(changePlaylist(res.data));
    })
  }
}

export const getRecommendListAction = () => {
  return dispatch => {
    getRecommendList().then(res => {
      console.log(res.data);
      dispatch(changeRecommendList(res.data))
    })
  }
}

//新碟上架
export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbum().then(res => {
      console.log(res.data);
      dispatch(changeNewAlbum(res.data))
    })
  }
}

//榜单
export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      // eslint-disable-next-line
      switch (idx) {
        case 0:
          console.log(res.data);
          dispatch(changeNewRanking(res.data));
          break;
        case 2:
          console.log(res.data);
          dispatch(changeOriginRanking(res.data));
          break;
        case 3:
          console.log(res.data);
          dispatch(changeUpRanking(res.data));
          break;;

      }
    })
  }
}
