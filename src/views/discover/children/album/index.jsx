import React, {memo} from 'react'

import HotAlbum from "./children/hot_album";
import CategoryAlbum from "./children/category_album";
import {
  AlbumDiv
} from './style'

const Album = memo(function () {
  return (
    <AlbumDiv>
      <HotAlbum/>
      <CategoryAlbum/>
    </AlbumDiv>
  )
})
export default Album;
