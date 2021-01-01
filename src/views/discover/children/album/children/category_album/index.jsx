import React, {memo, useEffect, useState} from 'react'
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {useHistory} from 'react-router-dom'
import {Pagination} from 'antd';

import {AlbumMenu} from "../../../../../../common/tabbar_data";
import {getTopAlbumAction} from "../../store/actionCreators";
import AlbumItem from "../../../../../../components/album_item";
import {
  CategoryDiv,
  ShowDiv,
  PageDiv
} from './style'
import {NavLink} from "react-router-dom";

const CategoryAlbum = memo(function (props) {
  const [area, setArea] = useState('ALL');
  const [offset, setOffset] = useState(0);
  const his = useHistory()
  console.log(his)

  const album = useSelector(state => ({
    topAlbum: state.getIn(['album', 'TopAlbum'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopAlbumAction(area, offset))
  }, [dispatch, area, offset])

  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
    setOffset((pageNumber - 1) * 35);
  }

  return (
    <CategoryDiv>
      <div className={'title'}>
        <span className={'topic'}>全部新碟</span>
        <ul className={'cateName'}>
          {
            AlbumMenu.map((item, index) => {
              return (
                <li key={item.title}>
                  <NavLink
                    to={'?area=' + item.area}
                    onClick={e => setArea(item.area)}
                  >{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
      <ShowDiv className={'showItem'}>
        {
          album.topAlbum.albums && album.topAlbum.albums.map((item, index) => {
            return (
              <li key={item.id}>
                <AlbumItem theme={0} message={item}/>
              </li>
            )
          })
        }
      </ShowDiv>
      <PageDiv>
        <Pagination defaultCurrent={1}
                    showSizeChanger={false}
                    defaultPageSize={35}
                    total={500}
                    onChange={onChange}/>
      </PageDiv>
    </CategoryDiv>
  );

})
export default CategoryAlbum;
