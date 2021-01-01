import React, {memo, useEffect, Fragment} from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux";
import TabControl from "../../../../../../components/tab_control";
import { getTopListAction } from "../../store/acitonCreators";
import {
  ListDiv
} from './style'
const RoughList = memo(function () {

  const recommend = useSelector( state => ({
    upRanking: state.getIn(['recommend', 'UpRanking']),
    newRanking: state.getIn(['recommend', 'NewRanking']),
    originRanking: state.getIn(['recommend', 'OriginRanking'])
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(3))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(0))
  }, [dispatch])

  return (
    <Fragment>
      {
        (recommend.upRanking.tracks&&recommend.originRanking.tracks&&recommend.newRanking.tracks) && <ListDiv>
          <TabControl title={'榜单'} router={'#/discover/ranking'}/>
          <div className={'listDetails'}>
            {
              [recommend.upRanking,recommend.newRanking,recommend.originRanking].map((itemz) =>{
              // console.log(itemz)
              return (
                <dl className={'list'} key={itemz.id}>
                  <dt className={'listHead'}>
                    <div className={'cover'}>
                      <img src={itemz.coverImgUrl+'?param=80y80'} alt=""/>
                      <a href={"#/discover/ranking?id="+itemz.id} className={'mask'}>{}</a>
                    </div>
                    <div className={'listDes'}>
                      <a href={"#/discover/ranking?id="+itemz.id} className={'title'}>{itemz.name}</a>
                      <div className={'btn'}>
                        <a href="#/" className={'btnIcon play'}>{}</a>
                        <a href="#/" className={'btnIcon collect'}>{}</a>
                      </div>
                    </div>
                  </dt>
                  <dd className={'listDetail'}>
                    <ol>
                      {
                        itemz.tracks.filter((item, index) => index < 10).map((item, index) =>{
                          return (
                            <li key={item.id}>
                              <span className={'ranking ' + (index-2<=0? 'symbol':'')}>{index + 1}</span>
                              <a href={"#/song?id="+item.id} className={'songName'} title={item.name}>{item.name}</a>
                              <div className={'open'}>
                                <a href="#/" className={'btn play'} title={'播放'}>{}</a>
                                <a href="#/" className={'btn add'} title={'添加到播放列表'}>{}</a>
                                <a href="#/" className={'btn collect'} title={'收藏'}>{}</a>
                              </div>
                            </li>
                          )
                        })
                      }
                    </ol>
                    <div className={'more'}>
                      <a href={"#/discover/ranking?id="+recommend.upRanking.id}>查看全部></a>
                    </div>
                  </dd>
                </dl>
              )
            }
            )}
          </div>
        </ListDiv>
      }
    </Fragment>
  )
})
export default RoughList;
