import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_02.png'

export const TabContent = styled.div`
  width: 689px;
  height: 35px;
  .tabControl {
    width: 100%;
    height: 100%;
    line-height: 35px;
    background-color: #fff;
    border-bottom: 2px solid #c20c0c;
    .topTitle {
      font-size: 20px;
      color: #333;
      margin-left: 35px;
      position:relative;
      text-decoration: none;
      &::before {
        content: "";
        width: 32px;
        height: 32px;
        left: -32px;
        top: -5px;
        position:absolute;
        display: block;
        background-image: url(${sprite_02});
        background-position: top 310px left 186px;
      }
    }
     .more {
        font-size: 12px;
        float: right;
        margin-right: 30px;
        position:relative;
        margin-top: 3px;
        &::after {
          content: "";
          width: 12px;
          height: 12px;
          display: block;
          position:absolute;
          right: -16px;
          top: 9px;
          background-image: url(${sprite_02});
          background-position: left 412px top 692px;
      }
    }
  }
`
