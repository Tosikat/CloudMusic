import request from '../request';

export function getTopAlbum(area, offset) {
  return request ({
    url: '/top/album?limit=35',
    params: {
      area,
      offset
    }
  })
}

