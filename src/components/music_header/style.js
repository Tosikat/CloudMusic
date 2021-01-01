import styled from 'styled-components'
import Logo from "@/assets/img/sprite_01.png";

export const HeaderDiv = styled.div`
  height: 70px;
  margin: 0 auto;
  background-color: #242424;
  &::after {
    content: "";
    width: 100%;
    height: 5px;
    display: block;
    background-color: #c20c0c;
  }
`

export const HeartDiv = styled.div`
  width: 1100px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  .logo {
    display: block;
    width: 177px;
    height: 69px;
    background-image: url(${Logo});
    
  }
  .nav {
    display: flex;
    justify-content: space-between;
    width: 508px;
    height: 70px;
    background-color: #242424;
    &::after{
      content: "";
      display: block;
      width: 28px;
      height: 19px;
      left: 805px;
      top: 21px;
      position:absolute;
      background-image: url(${Logo});
      background-position: top 0 right -20px;
    }
    .navItem {
     font-size: 14px;
     line-height: 70px;
     &:hover {
      background-color: #000;
      color: white;
     }
     &:hover em{
      color: white;
     }
     .item {
       display: block;
       padding: 0 19px;
       text-decoration: none;
       position:relative;
     }
     .item.active {
       background-color: #000;
       em {
        color: white;
       }
     }
      .item.active::after{
      content: '';
      display: block;
      width: 12px;
      height: 7px;
      left: 42%;
      bottom: 0;
      position: absolute;
      background-image: url(${Logo});
      background-position: bottom 147px right -12px;
    }
     em {
        display: block;
        height: 70px;
        color: #b6adad;
     }
    }
    
  }
`

export const InputDiv = styled.div`
  float: right;
  padding-top: 20px;
  width: 160px;
  margin-left: 67px;
  .searchLabel {
    display: block;
    width: 160px;
    border-radius: 18px;
    overflow: hidden;
    #search {
      font-size: 12px;
      color: #242424;
    }
    #search::placeholder {
      font-size: 12px;
    }
  }
`

export const CreaterCenter = styled.a`
  float: right;
  width: 90px;
  height: 32px;
  margin: 19px 0 0 12px;
  box-sizing: border-box;
  padding-left: 16px;
  border: 1px solid #4f4f4f;
  line-height: 33px;
  color: white;
  border-radius: 20px;
  &:hover {
    color: white;
    border: 1px solid white;
    text-decoration: none;
  }
`


