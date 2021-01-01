import styled from 'styled-components'

export const HotAlbumDiv = styled.div`
  width: 900px;
  height: 478px;
  margin: 0 auto;
  position:relative;
  .tab{
    width: 900px;
    height: 42px;
    border-bottom: 2px solid #c20c0c;
    h3 {
      font-size: 24px;
      color: #333;
      font-weight: normal;
      margin: 0;
    }
  }
`

export const ShowAlbum = styled.ul`
  width: 900px;
  height: 416px;
  margin: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
  align-content:space-between;
  flex-flow: row wrap;
  li {
    width: 153px;
    height: 178px;
    .cover {
      width: 100%;
      height: 130px;
      position:relative;
    }
    
  }
`
