import React, {memo, Fragment} from 'react'
import { NavLink } from "react-router-dom";
import { AlbumDes, AlbumDes2 } from "./style";
import LazyLoad from 'react-lazyload';
const AlbumItem = memo(function (props) {
  // console.log(props)
  const artistName = names => {
    const name = []
    for (const artistNameKey of names) {
      name.push(artistNameKey.name);
    }
    return name.join(' / ')
  }

  const selectTheme = props => {
    if(props.theme) {
      return (
        <Fragment>{
          props.message && <AlbumDes>
            <div className={'album-top'}>
              <LazyLoad height={100}>
                <img
                  src={props.message.blurPicUrl+"?param=100y100"}
                  alt=""/>
              </LazyLoad>
              <a title={props.message.name} href={'#/album?id='+props.message.id} className={'mask'}>{}</a>
              <a title={'播放'} href="#/" className={'playBtn'}>{}</a>
            </div>
            <p className={'albumName'}>
              <a href={'#/album?id='+props.message.id} title={props.message.name} >{props.message.name}</a>
            </p>
            <p title={artistName(props.message.artists)} className={'playist'}>
              <a href="#/">{artistName(props.message.artists)}</a>
            </p>
          </AlbumDes>
        }</Fragment>
      )
    }else {
      return (
        <Fragment>{
          props.message && <AlbumDes2>
            <div className={'album-top'}>
              <LazyLoad height={130}>
                <img
                  src={props.message.blurPicUrl+"?param=130y130"}
                  alt=""/>
              </LazyLoad>
              <a title={props.message.name} href={'#/album?id='+props.message.id} className={'mask'}>{}</a>
              <a title={'播放'} href="#/" className={'playBtn'}>{}</a>
            </div>
            <p className={'albumName'}>
              <NavLink  to={'?id='+props.message.id} title={props.message.name} >{props.message.name}</NavLink>
            </p>
            <p title={artistName(props.message.artists)} className={'playist'}>
              <a href="#/">{artistName(props.message.artists)}</a>
            </p>
          </AlbumDes2>
        }
        </Fragment>
      )
    }
  }
  return selectTheme(props)

})
export default AlbumItem;
