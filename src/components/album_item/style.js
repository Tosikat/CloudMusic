import styled from 'styled-components'

import Cover from '@/assets/img/sprite_cover.png'
import Play from '@/assets/img/sprite_icon.png'

export const AlbumDes = styled.div`
  width: 118px;
  height: 150px;
  position:relative;
  .album-top {
     img{
      box-shadow: 0px 4px 5px #ccc;
    }
    .mask {
      position:absolute;
      width: 118px;
      height: 100px;
      top: 0;
      left: 0;
      background-image: url(${Cover});
      background-position: top 925px left 0;
    }
    &:hover .playBtn {
      position:absolute;
      width: 20px;
      height: 20px;
      top: 75px;
      right: 25px;
      border-radius: 50%;
      background-image: url(${Play});
      background-position: top -87px left -1px;
      &:hover {
        background-position: top -112px left -1px;
      }
    }
  }
  .albumName {
    width: 110px;
    height: 18px;
    margin-top: 4px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    a {
      color: #333;
    }
  }
  .playist {
    margin-top: 8px;
    font-size: 12px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
`

export const AlbumDes2 = styled.div`
  width: 153px;
  height: 178px;
  position:relative;
  .album-top {
    .mask {
      position:absolute;
      width: 153px;
      height: 130px;
      top: 0;
      left: 0;
      background-image: url(${Cover});
      background-position: top 650px left 0;
    }
     &:hover .playBtn {
      position:absolute;
      width: 26px;
      height: 26px;
      top: 100px;
      right: 30px;
      border-radius: 50%;
      background-image: url(${Play});
      background-position: top -142px left -2px;
      &:hover {
        background-position: top -172px left -2px;
      }
     }
   }
  .albumName {
    width: 110px;
    height: 18px;
    margin: 8px 0 6px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    a {
      color: #000;
      font-size: 14px;
    }
  }
  .playist {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    a {
      font-size: 12px;
    }
  }
  
`
