import styled from 'styled-components'
import Btn from '@/assets/img/banner_sprite.png'
import Download from '@/assets/img/download.png'

export const BannerDiv = styled.div`
  width: 100%;
  height: 285px;
  position:relative;
  background-image: url(${props => props.bgImage}) ;
    .downloadTip {
        width: 254px;
        height: 285px;
        position: absolute;
        top: 0;
        right: 184px;
        background-image: url(${Download});
        background-position: top 0;
        &::after {
          content: "PC 安卓 iPhone WP iPad Mac 六大客户端";
          position: absolute;
          display: block;
          width: 254px;
          height: 16px;
          color: #8d8d8d;
          margin: 10px 0;
          bottom: 0;
          left: 14px;
          cursor: text;
          }
      }
    .swiper-bg {
      position:relative;
     
      .btn {
        position: absolute;
        display: block;
        width: 37px;
        height: 63px;
        cursor: pointer;
        &:hover {
          background-color: #303234;
          opacity: 0.4;
        }
       } 
      .preBtn {
        top: 110px;
        left: 116px;
        background-image: url(${Btn});
        background-position: bottom -236px left 0;
        
      }
      .nextBtn {
        top: 111px;
        right: 107px;
        background-image: url(${Btn});
        background-position: bottom -90px left 0;
      }
      .slick-dots{
        position:relative;
        left: -125px;
      }
      }
   
`

export const SwiperItem = styled.img`
  width: 730px;
  height: 284px;
  margin-left: 185px;
  .z-slt {
        background-color: #9b0909;
      }
  
`
