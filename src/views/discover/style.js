import styled from 'styled-components'
import R from '@/assets/img/white-r-icon@3x.png'

export const DiscoverWrapper = styled.div`
  width: 100%;
  height: 35px;
  background-color: #c20c0c;
  .nav {
    width: 744px;
    height: 34px;
    margin: 0 auto;
    display: flex;
    position:relative;
    
    .discoverTag {
      height: 34px;
      text-align: center;
      &:nth-child(3)::after {
        content: "";
        display: block;
        width: 8px;
        height: 8px;
        top: 9px;
        right: 502px;
        position:absolute;
        background-image: url(${R});
        background-size: cover;
        background-position: center;
    }
      a {
        display: inline-block;
        text-decoration: none;
        color: white;
        em {
          display: inline-block;
          height: 20px;
          padding: 0 13px;
          margin: 7px 17px 0;
          border-radius: 20px;
          line-height: 21px;
        }
        &.active em {
          background-color: #9b0909;
        }
        &:hover em{
          background-color: #9b0909;
        }
      }
    }
  }
`
