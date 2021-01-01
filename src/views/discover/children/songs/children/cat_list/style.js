import styled from 'styled-components'
import Bg from '@/assets/img/sprite_button.png'
import icon from '@/assets/img/sprite_icon2.png'
export const CatlistDiv = styled.div`
  width: 900px;
  height: 42px;
  background-color: white;
  position:relative;
  border-bottom: 2px solid #c20c0c;
  .top {
    display: flex;
    position:relative;
    .show_cate {
      display: inline-block;
      color: #333;
      font-size: 24px;
      min-width: 48px;
      height: 31px;
    }
  .select {
    display: inline-block;
    width: 90px;
    height: 30px;
    border: 1px solid #d3d3d3;
    position:relative;
    bottom: -2px;
    text-align: center;
    line-height: 30px;
    margin-left: 14px;
    text-decoration: none;
    border-radius: 4px;
    background-color: #f4f4f4;
    background-image: url(${Bg});
    background-position: top -60px left -3px;
    color: #0c73c2;
    cursor: pointer;
    &:hover {
      border: 1px solid #e7e6e6;
      background-color: white ;
    }   
    .fas  {
      color: #333;
      margin-left: 4px;
    }
  }
  .hot {
    display: inline-block;
    width: 46px;
    height: 29px;
    font-size: 12px;
    position:absolute;
    right: 0;
    line-height: 29px;
    text-align: center;
    background-color: #d20c0d;
    color: white;
    border-radius: 4px;
  }
  }
  .show_cat_list {
    width: 700px;
    min-height: 420px;
    border: 1px solid #d3d3d3;
    position:absolute;
    background-color: white;
    top: 47px;
    border-radius: 4px;
    box-shadow: 0 3px 4px 4px #d3d3d3;
    z-index: 1000;
    &::before {
      content: "";
      width: 15px;
      height: 15px;
      position:absolute;
      display: block;
      background-color: white;
      border-bottom: 1px solid #d3d3d3;
      border-left: 1px solid #d3d3d3;
      transform: rotate(135deg);
      top: -8px;
      left: 88px;
    }
    h3 {
      width: 700px;
      height: 38px;
      margin-top: 20px;
      border-bottom: 1px solid #d3d3d3;
      a{
        display: block;
        width: 75px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 12px;
        margin-left: 30px;
        background-image: url(${Bg});
        background-position:top -60px left -3px ;
        border: 1px solid #d3d3d3;
        border-radius: 4px;
      }
    }
    dl {
      width: 700px;
      min-height: 64px;
      padding-left: 30px;
      display: flex;
      position:relative;
      .icon0::before {
        content: "";
        display: block;
        width: 23px;
        height: 23px;
        position:absolute;
        top: 7px;
        left: -6px;
        background-image: url(${icon});
        background-position: top -735px right 43px;
      }
      
      .icon1::before {
        content: "";
        display: block;
        width: 23px;
        height: 23px;
        position:absolute;
        top: 7px;
        left: -6px;
        background-image: url(${icon});
        background-position: top -61px right 22px;
      }
      
      .icon2::before {
        content: "";
        display: block;
        width: 23px;
        height: 23px;
        position:absolute;
        top: 7px;
        left: -6px;
        background-image: url(${icon});
        background-position: top -89px right 24px;
      }
      
      .icon3::before {
        content: "";
        display: block;
        width: 23px;
        height: 23px;
        position:absolute;
        top: 7px;
        left: -6px;
        background-image: url(${icon});
        background-position: top -118px right 22px;
      }
      
      .icon4::before {
        content: "";
        display: block;
        width: 23px;
        height: 23px;
        position:absolute;
        top: 7px;
        left: -6px;
        background-image: url(${icon});
        background-position: top -140px right 22px;
      }
      dt {
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        position:relative;
        top: 10px;
      }
      dd {
        width: 580px;
        min-height: 30px;
        border-left: 1px solid #d3d3d3;
        position:relative;
        left: 10px;
        display: flex;
        justify-content: start;
        flex-flow: row wrap;
        padding-left: 10px;
        border-left: 1px solid #d3d3d3;
        padding-top: 12px;
        padding-bottom: 30px;
        a {
          display: inline-block;
          width: max-content;
          height: 14px;
          margin-right: 24px;
          margin-top: 10px;
          position:relative;
          &.link-active {
            background-color: #a7a7a7;
            color: white;
            line-height: 16px;
            font-weight: 900;
            padding:0 2px;
          }
          span {
            position:absolute;
            right: -15px;
            color: #d8d8d8;
          }
        }
      }
     
    }
  }
`;
