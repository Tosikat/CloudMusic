import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux";
import useParams from "../../../../../../hocks/useParams";
import {NavLink, useLocation} from "react-router-dom";
import {
  getCatListAction,
  getCategorySyboml
} from "../../store/actionCreator";
import {
  CatlistDiv
} from './style'
import url from "url";

const CatList = memo(function (props) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('全部');

  const hashUrl = url.parse(useLocation().search, true).query;
  console.log(hashUrl)
  const playlist = useSelector( state => ({
    catList: state.getIn(['playlist', 'CatList'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatListAction())
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCategorySyboml(category))
  }, [dispatch, category] )
  console.log(category)
  const url1 = window.location.hash
  const hash = useParams(url1,{order: 'hot'})

  return (
    <CatlistDiv>
      <div className={'top'}>
        <span className={'show_cate'}>{hashUrl.cat||'全部'}</span>
        <span className={'select'} onClick={ e => {setShow(!show)}}>
        选择分类
        <i className="fas fa-chevron-down"/>
        </span>
        <span
          className={'hot'}
          onClick={e => window.location.hash = hash}
        >热门</span>
      </div>

      {
        show && <div className={'show_cat_list'}>
          <h3>
            <NavLink
              to={{
                pathname: '/discover/songs/',
                search: 'index=1'
              }}
              className={'all'}
              onClick={
                e => {
                  setCategory('全部')
                  setShow(false)
                }
              }
            >全部风格</NavLink>
          </h3>
          {
            [0, 1, 2, 3, 4].map((itemz, indez) => {
              return (
                <dl key={itemz}>
                  <dt className={'icon'+indez}>{playlist.catList.categories[itemz]}</dt>
                  <dd>
                    {
                      playlist.catList.sub.filter((itemy, indey) => itemy.category === itemz).map((item, index) => {
                        return (
                          <NavLink
                             to={{
                               pathname: '/discover/songs/',
                               //转换带有特殊&/等的英文转化为可识别的十六进制
                               search: `cat=${encodeURIComponent(item.name)}&index=1`,
                             }}
                             key={item.name}
                             className={item.name===category||hashUrl.cat===item.name ? 'link-active' : ''}
                             onClick={ e => {setShow(!show); setCategory(item.name)}}
                          >
                            {item.name}
                            <span>|</span>
                          </NavLink>
                        )
                      })
                    }
                  </dd>
                </dl>
              )
            })
          }
        </div>
      }
    </CatlistDiv>
  )
})
export default CatList;
