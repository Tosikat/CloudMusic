import React, {memo} from 'react'

import AlbumItem from "../../../../components/album_item";

const Ranking = memo(function () {
  return (
    <div>
      <h1>排行榜</h1>
      <AlbumItem theme={0}/>
    </div>
  )
})
export default Ranking;
