import styled from 'styled-components'
import sprite_02 from '@/assets/img/sprite_02.png'

export const RecommmendEnhance = styled.div`
  width: 689px;
  height: 523px;
  .topControl {
    width: 100%;
    height: 35px;
    border-bottom: 2px solid #C10D0C;
    .topTitle {
      float: left;
      color: #333;
      text-decoration: none;
      width: 80px;
      height: 28px;
      font-size: 20px;
      margin-left:35px ;
      position:relative;
      &::before {
        content: "";
        width: 32px;
        height: 32px;
        left: -32px;
        top: 0;
        position:absolute;
        display: block;
        background-image: url(${sprite_02});
        background-position: top 310px left 186px;
      }
    }
    .tabControl {
      float: left;
      display: flex;
      width: 240px;
      height: 16px;
      margin: 7px 0 0 20px;
      .tags {
        display: block;
        width: 35px;
        justify-content: space-between;
        text-decoration: none;
      }
      .line {
        margin-right: 14px;
        cursor: text;
      }
    }
    .more {
      font-size: 12px;
      float: right;
      margin-right: 30px;
      position:relative;
      margin-top: 10px;
      &::after {
        content: "";
        width: 12px;
        height: 12px;
        display: block;
        position:absolute;
        right: -16px;
        top: 2px;
        margin: 0 0 0 4px;
        background-image: url(${sprite_02});
        background-position: left 412px top 692px;
      }
    }
   }
`

export const RecommendList = styled.div`
  width: 100%;
  height: 490px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-content: space-around;
  .list-item {
    width: 140px;
    height: 205px;
    position:relative;
    .des {
      width: 140px;
      height: 57px;
      margin: 3px 0 3px;
      font-size: 14px;
      
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #333;
      }
    }
  }
`
