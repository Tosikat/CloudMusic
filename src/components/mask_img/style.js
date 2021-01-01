import styled from 'styled-components'
import mask from '@/assets/img/sprite_cover.png'
import sprite_icon from '@/assets/img/sprite_icon.png'

export const MaskCover = styled.div`
  .cover {
     width: 140px;
     height: 140px;
     position:relative; 
      img {
        width: 100%;
        height: 100%;
      }
      .mask {
        display: inline-block;
        width: 140px;
        height: 140px;
        position: absolute;
        left: 0;
        top: 0;
        background-image: url(${mask});
      }
      .bottom {
        width: 140px;
        height: 27px;
        position:absolute;
        top: 112px;
        left: 0;
        background-image: url(${mask});
        background-position: top 960px left 0;
        .headset {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin: 9px 5px 9px 10px;
          background-image: url(${sprite_icon});
          background-position: top -23px left 0;
        }
        .playCount {
          position:absolute;
          display: inline-block;
          width: 50px;
          height: 16px;
          color: #ccc;
          margin: 7px 0 0;
        }
        .playBtn {
          width: 16px;
          height: 17px;
          display: inline-block;
          position:absolute;
          right: 10px;
          top: 6px;
          background-image: url(${sprite_icon});
          background-position: top 0 left 0;
          &:hover {
            background-position: top -60px left 0;
          }
          
        }
      }
    }
`
