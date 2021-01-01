import styled from 'styled-components'

import sprite_02 from '@/assets/img/sprite_02.png'

export const AlbumDiv = styled.div`
  width: 689px;
  height: 243px;
  margin: 0 auto ;
  margin-top: 35px ;
  position:relative;
  .disk {
    width: 687px;
    height: 188px;
    border: 1px solid #d3d3d3;
    position:absolute;
    background-color: #f5f5f5;
    bottom: 0;
    .swiper {
      width: 634px;
      height: 180px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      .swiperPage {
        width: 100%;
        height: 180px;
        display: flex !important;
        justify-content: space-between;
        align-items: center;
        .kvOJOV {
          position:relative;
          top: 10px;
        }
      }
    }
    .btn {
      display: inline-block;
      width: 17px;
      height: 17px;
      position:absolute;
      top: 48%;
      cursor: pointer;
    }
    .prev {
      top: 68px;
      left: 0;
      background-image: url(${sprite_02});
      background-position: top 388px left 154px;
      &:hover { 
        background-position: top 388px left 134px;        
      }
    }
    .next {
      top: 68px;
      right: 0;
      background-image: url(${sprite_02});
      background-position: top 388px left 111px;
      &:hover{
        background-position: top 388px left 91px;
      }
    }
  }
`
export const contentStyle = {
  width: '118px',
  height: '150px',
  color: '#fff',
};
