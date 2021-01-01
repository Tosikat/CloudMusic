import request from '../request';

export function getCatList() {
  return request({
    url: '/playlist/catlist'
  })
}

export function getPlayList(cat, offset) {
  return request({
    url: '/top/playlist?limit=35',
    params: {
      cat,
      offset
    }
  })
}
