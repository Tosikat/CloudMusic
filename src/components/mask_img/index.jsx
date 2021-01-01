import React, {memo} from 'react'
import LazyLoad from 'react-lazyload';
import { MaskCover } from './style'

const MaskImg = memo(function (props) {
  return (
    <MaskCover>
      <div className={'cover'}>
        <LazyLoad height={140}>
          <img
            src={ props.message.picUrl||props.message.coverImgUrl+'?param=140y140'}
            alt=""/>
        </LazyLoad>
        <a href={'#/playlist?id='+props.message.id} className={'mask'} title={props.message.name}>{}</a>

        <div className={'bottom'}>
          <span className={'headset'}/>
          <span className={'playCount'}>{Math.round(props.message.playCount/10000)+'万'}</span>
          <a href='#/' className={'playBtn'} title={'播放'}>{}</a>
        </div>
      </div>
    </MaskCover>
  )
})
export default MaskImg;
