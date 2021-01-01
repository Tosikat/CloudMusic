import request from '../request';

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}
export function getPlaylistHot() {
  return request({
    url: '/playlist/hot'
  })
}

export function getRecommendList() {
  return request({
    url: '/personalized?limit=8'
  })
}

export function getNewAlbum(){
  return request({
    url: '/album/newest'
  })
}

export function getTopList(idx) {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}
