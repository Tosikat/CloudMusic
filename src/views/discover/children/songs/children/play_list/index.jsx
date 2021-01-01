import React, {memo, useEffect, useState, Fragment} from 'react'
import url from 'url'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {NavLink, useLocation} from "react-router-dom";
import addIndex from '../../../../../../hocks/useParams'
import {Pagination} from 'antd';
import MaskImg from "../../../../../../components/mask_img";
import {
  PlayListDiv,
  PageDiv,
  NoData
} from "./style";
import {
  getCategorySyboml,
  getPlayListAction
} from '../../store/actionCreator'

const PlayList = memo(function (props) {
  // eslint-disable-next-line
  const [offset, setOffset] = useState(0)
  const [page, setPage] = useState(1);
  const [title] = useState('全部')

  //获取地址栏的参数并转化成对象形式
  const hashUrl = url.parse(useLocation().search, true).query;
  console.log(hashUrl)

  const playlist = useSelector(state => ({
    category: state.getIn(['playlist', 'Category']),
    topList: state.getIn(['playlist', 'TopList'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategorySyboml())
  }, [dispatch])

  useEffect(() => {
    dispatch(getPlayListAction(hashUrl.cat, (Number(hashUrl.index || 0) - 1) * 35))
  }, [dispatch, hashUrl.cat, hashUrl.index])

  useEffect(() => {
    document.title = (hashUrl.cat||title)+'歌单-歌单-网易云音乐';
    return () => {
      document.title = 'React App';
    }
  }, [hashUrl.cat, title])

  function onChange(pageNumber) {
    console.log('Page: ', pageNumber)
    console.log(hashUrl)
    hashUrl.index = pageNumber;
    hashUrl.cat = encodeURIComponent(hashUrl.cat)
    if (!hashUrl.cat){
      hashUrl.cat = '全部'
    }
    console.log(encodeURIComponent(hashUrl.cat))
    console.log(hashUrl)
    const hash = addIndex(window.location.hash, hashUrl)
    window.location.hash = hash
    console.log(Number(hashUrl.index))
    setPage(pageNumber)
    setOffset((pageNumber - 1) * 35);
  }

  //返回的数据中有more属性 返回的数组长度不为0则more: true否则为false
  if (playlist.topList.more || (playlist.topList.playlists && playlist.topList.playlists.length>0)) {
    return (
      <Fragment>
        {
          playlist.topList.playlists && <Fragment>
            <PlayListDiv>
              {
                playlist.topList.playlists.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <div className={'list_item'}>
                        <MaskImg message={item}/>
                        <p className={'dec'}>
                          <NavLink
                            to={{
                              pathname: '/discover/singer',
                              search: `id=${item.id}`
                            }}
                            title={item.name}>{item.name}</NavLink>
                        </p>
                        <p className={'creator'}>
                          <span>by</span>
                          <a href="#/" title={item.creator.nickname}>{item.creator.nickname}</a>
                          <img
                            src={item.creator.avatarDetail || 'https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4761340168/ccce/35dd/ab2d/1a7c8ee0f6bb1fc2760cbb570dfee34f.png'}
                            alt=""/>
                        </p>
                      </div>
                    </li>
                  )
                })
              }
            </PlayListDiv>
            <PageDiv>
              <Pagination defaultCurrent={1}
                          current={Number(hashUrl.index || page)}
                          showSizeChanger={false}
                          defaultPageSize={35}
                          total={playlist.topList.total}
                          onChange={onChange}/>
            </PageDiv>
          </Fragment>
        }
      </Fragment>
    )
  } else {
    return (
      <NoData>
        <h3>
          <span/>
          暂无数据
        </h3>
      </NoData>
    )
  }
})

export default PlayList;
