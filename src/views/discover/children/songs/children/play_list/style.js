import styled from 'styled-components'
import icon from '@/assets/img/sprite_icon2.png'
export const PlayListDiv = styled.div`
  width: 950px;
  min-height: 218px;
  margin-top: 30px;
  position:relative;
  left: -48px;
  display: flex;
  flex-flow: row wrap;
  li {
    width: 190px;
    height: 218px;
    position:relative;
    .list_item{
      width: 140px;
      height: 190px;
      background-color: white;
      margin-left: 48px;
      .mask_cover {
      width: 140px;
      height: 140px;
    }
      .dec {
        width: 140px;
        height: 19px;
        line-height: 32px;
        margin-top: 4px;
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          line-height: 19px;
          font-size: 14px;
          color: #000;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
      .creator {
        width: 140px;
        height: 19px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        span {
          color: #999;
          font-size: 12px;
        }
        a {
          display: inline-block;
          max-width: 106px;
          height: 16px;
          line-height: 16px;
          color: #666;
          margin-left: 2px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        img {
        width: 13px;
        height: 13px;
        margin-left: 2px;
      }
    }
  }    
}
`;

export const PageDiv = styled.div`
  .ant-pagination {
    width: max-content;
    margin: 0 auto;
  }
`

export const NoData = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    span {
      display: inline-block;
      width: 64px;
      height: 50px;
      background-image: url(${icon});
      background-position: top -347px left 85px;
      margin-right: 20px;
    }
  }
`;
