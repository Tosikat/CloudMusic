import React, {memo, useState, useEffect, useRef, useCallback} from 'react'
import { Carousel } from 'antd';
import {useDispatch, useSelector, shallowEqual } from "react-redux";
import { getTopBannerAction } from './../../store/acitonCreators'
import {
  BannerDiv,
  SwiperItem
} from './style'

import './anchor.css';

const TopBanner = memo(function (props) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const recommend = useSelector(state => ({
    // topBanners: state.recommend.get('TopBanners') 因为总的reducer是一个immutable的数据类型
    topBanners: state.getIn(['recommend', 'TopBanners'])
  }), shallowEqual)

  const swiperRef = useRef();
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch]);

  const changeBanner = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])
  // 防止加载延迟报错

  const bgImage = recommend.topBanners[currentIndex] && recommend.topBanners[currentIndex].imageUrl+"?imageView&blur=40x20";


  return (
    <BannerDiv bgImage={bgImage}>
      <div className={'swiper-bg'} >
        <Carousel
          ref={swiperRef}
          autoplay effect={'fade'}
          beforeChange={changeBanner}
        >
          {
            recommend.topBanners.map(item => {
              return (
                <div key={item.targetId}>
                    <a href={'#/song?id='+item.encodeId}  className={'swiper-limit'}>
                      <SwiperItem src={item.imageUrl}  alt=""/>
                    </a>
                </div>
              )
            })
          }
        </Carousel>
        <div className={'downloadTip'}/>
        <span className={'btn preBtn'} onClick={ e => swiperRef.current.prev()}>{}</span>
        <span href="#/" className={'btn nextBtn'}  onClick={ e => swiperRef.current.next()}>{}</span>
      </div>
    </BannerDiv>
  )
})

export default TopBanner;


/*组件关联redux 1.请求数据 2.进行操作
* 从useDispatch中获取的就是 redux中的dispatch
* immutable 节省内存使用
* shallowEqual优化 useSelector 避免不必要的渲染
* */

//原先的方法
// const { getBanners } = props;
// useEffect(() => {
//   getBanners();
// }, [getBanners])
// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })
//
// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction());
//   }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(Recommend);
