import React, {memo, useEffect, Fragment} from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  getPlaylistHotAction,
  getRecommendListAction
} from '../../store/acitonCreators'
import {
  RecommmendEnhance,
  RecommendList
} from './style'
import MaskCover from "@/components/mask_img";


const HotRecommend = memo(function () {

  const recommend = useSelector( state => ({
    titleCategory: state.getIn(['recommend', 'TitleCategory']),
    hotList: state.getIn(['recommend', 'HotList'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlaylistHotAction())
    dispatch(getRecommendListAction())
  }, [dispatch])


  function RenderTitle (item, index) {
    if(index < 4) {
      return (
        <Fragment key={item.id}>
          <a
            href={'#/discover/songs/?cat=' + item.name}
            className={'tags'}
          >{item.name}</a>
          <span className={'line'}>|</span>
        </Fragment>
      )
    }else if(index === 4){
        return (
          <a
            href={'#/discover/songs/?cat='+item.name}
            key={item.id}
          >{item.name}</a>
        )
      }
    }


  return (
    <RecommmendEnhance>
      {/*头部*/}
      <div className={'topControl'}>
        <a href={'#/discover/singer'} className={'topTitle'}>热门推荐</a>
        <div className={'tabControl'}>
          {
            recommend.titleCategory.map((item, index) => {
              return RenderTitle(item, index)
            })
          }
        </div>
        <a href={'#/discover/songs'} className={'more'}>更多</a>
      </div>

      {/*推荐歌单*/}
      <RecommendList>
        {
          recommend.hotList.map((item, index) => {
            return (
              <li className={'list-item'} key={item.id}>

                <MaskCover message={item}/>

                <p className={'des'}>
                  <a href={'#/playlist'}
                     className={'item'}
                     title={item.name}
                  >{ item.name }
                  </a>
                </p>

              </li>
            )
          })
        }
      </RecommendList>
    </RecommmendEnhance>
  )
})
export default HotRecommend;
