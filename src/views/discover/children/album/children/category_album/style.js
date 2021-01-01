import styled from 'styled-components'

export const CategoryDiv = styled.div`
  width: 900px;
  min-height: 600px;
  margin: 30px auto 0;
  .title {
    width: 100%;
    height: 42px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    .topic{
      display: inline-block;
      width: 96px;
      height: 31px;
      font-size: 24px;
      color: #333;
      font-weight: normal;
    }
    .cateName {
      display: flex;
      width: 226px;
      height: 16px;
      justify-content: space-between;
      position:relative;
      top: 14px;
      left: 20px;
      li {
        text-align: center;
        position:relative;
        &::after  {
          content: "|";
          display: inline-block;
          position:absolute;
          color: #ccc;
          left: 35px;
          top: -1px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
  }
`
export const ShowDiv = styled.ul`
  width: 940px;
  min-height: 390px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  li{
    width: 188px;
    height: 208px;
  }
`;
export const PageDiv = styled.div`
  width: 900px;
  height: 66px;
  .ant-pagination {
    margin: 40px auto;
    width: 600px;
    height: 32px;
    position:relative;
    top: -10px;
  }
`
