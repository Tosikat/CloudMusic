import React, {memo, useRef, useEffect} from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux";

import { Carousel } from 'antd';
import TabControl from "../../../../../../components/tab_control";
import { getNewAlbumAction } from "../../store/acitonCreators";
import {
  AlbumDiv,
  contentStyle
} from './style'

import AlbumItem from "../../../../../../components/album_item";

const NewAlbum = memo(function () {
  const swiperRef = useRef();
  const dispatch = useDispatch();

  const recommend = useSelector( state => ({
    newAlbum: state.getIn(['recommend', 'NewAlbum'])
  }), shallowEqual)

  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])


  return (
    <AlbumDiv>
      <TabControl title={'新碟上架'} router={'#/discover/album/'} />
      <div className={'disk'}>
        {
          recommend.newAlbum.length && (
            <Carousel className={'swiper'} ref={swiperRef} dots={false}>
              <div className={'swiperPage'} style={contentStyle}>
                {
                  recommend.newAlbum.filter((item, index) => index <5).map((item, index) => {
                    return <AlbumItem theme={1} message={item} key={item.id}/>
                  })
                }
              </div>
              <div className={'swiperPage'} style={contentStyle}>
                {
                  recommend.newAlbum.filter((item, index) => index>4&&index<10).map((item, index) => {
                    return <AlbumItem theme={1} message={item} key={item.id}/>
                  })
                }
              </div>

            </Carousel>
          )
        }
        <span
          className={'btn prev'}
          onClick={ e => swiperRef.current.prev()}
        />
        <span
          className={'btn next'}
          onClick={ e => swiperRef.current.next()}
        />
      </div>
    </AlbumDiv>
  )
})
export default NewAlbum;
