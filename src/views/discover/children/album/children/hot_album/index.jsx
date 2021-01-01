import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import AlbumItem from "../../../../../../components/album_item";
import {
  getNewAlbumAction
} from "../../store/actionCreators";

import {
  HotAlbumDiv,
  ShowAlbum
} from './style'
const HotAlbum = memo(function () {

  const album = useSelector( state => ({
    newAlbum: state.getIn(['album', 'NewAlbum'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])
  console.log('hot_album渲染')
  return (
       <HotAlbumDiv>
            <div className={'tab'}>
              <h3>热门新碟</h3>
            </div>
            <ShowAlbum>
              {
                 album?.newAlbum?.albums?.filter((item, index) => index < 10).map((item, index) =>{
                  return (
                    <li key={item.id}>
                      <AlbumItem message={item} theme={0}/>
                    </li>
                  )
                })
              }
            </ShowAlbum>
          </HotAlbumDiv>
  )
})
export default HotAlbum;
