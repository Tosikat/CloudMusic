import React, {memo} from 'react'

import CatList from "./children/cat_list";
import PlayList from "./children/play_list";
import {
  SongsDiv
} from './style'
const Songs = memo(function () {
  return (
    <SongsDiv>
      <CatList />
      <PlayList/>
    </SongsDiv>
  )
})
export default Songs;
