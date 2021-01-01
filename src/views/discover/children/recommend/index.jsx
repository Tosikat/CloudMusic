import React, { memo} from 'react'

import TopBanner from "./children/top_banner";
import HotRecommend from "./children/hot_recommend";
import NewAlbum from "./children/new_album";
import RoughList from "./children/rough_list";

import {
  RecommendHeart,
  HeartLeft,
  HeartRight
} from './style'

const Recommend = memo(function () {
  return (
    <div>
      <TopBanner/>
      <RecommendHeart>
        <HeartLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RoughList/>
        </HeartLeft>
        <HeartRight></HeartRight>
      </RecommendHeart>
    </div>
  )
})

export default Recommend;
