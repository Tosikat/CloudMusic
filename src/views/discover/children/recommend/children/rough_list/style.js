import styled from 'styled-components'

import listBg from '@/assets/img/recommend-top-bg.png'
import glass from '@/assets/img/sprite_cover.png'
import icon from '@/assets/img/sprite_02.png'
import icon2 from '@/assets/img/sprite_icon2.png'

export const ListDiv = styled.div`
  width: 689px;
  height: 527px;
  margin: 35px auto 0;
  .listDetails{
    width: 689px;
    height: 472px;
    margin: 20px auto 0;
    background-image: url(${listBg});
    display: flex;
    .list{
      width: 230px;
      height: 100%;
      .listHead {
        width: 230px;
        height: 120px;
        position:relative;
        .cover {
          width: 80px;
          height: 80px;
          position:absolute;
          top: 20px;
          left: 20px;
          .mask {
            width: 80px;
            height: 80px;
            position:absolute;
            left: 0;
            background-image: url(${glass});
            background-position: top -71px left 121px;
          }
        }
       .listDes {
          width: 120px;
          height: 60px;
          position:absolute;
          top: 28px;
          right: 0;
          .title {
            font-size: 14px;
            color: #333;
            font-weight: bold;
          }
          .btn{
            width: 120px;
            position:absolute;
            bottom: 4px;
            .btnIcon {
              display: inline-block;
              width: 22px;
              height: 22px;
              margin:  0 10px 0 5px;
            }
            .play {
              background-image: url(${icon});
              background-position: top 260px left 146px;
              &:hover{
                background-position: top 230px left 146px;

              }
            }
            .collect {
              background-image: url(${icon});
              background-position: top 260px left 114px;
               &:hover{
                background-position: top 230px left 114px;
              }
            }
          }
       }
    }
      .listDetail {
        width: 230px;
        height: 352px;
        color: #333;
        ol{
          li {
            width: 202px;
            height: 32px;
            position:relative;
            margin: 0 auto;
            .ranking{
              display: inline-block;
              width: 35px;
              height: 32px;
              text-align: center;
              line-height: 32px;
              position:relative;
              top: -11px;
              font-size: 16px;
            }
            .symbol{
              color: #c20c0c;
            }
            .songName {
              font-size: 12px;
              width: 96px;
              height: 32px;
              display: inline-block;
              color: #000;
              line-height: 32px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
             &:hover > .open {
              width: 82px;
              height: 32px;
              position:absolute;
              top: 0;
              right: -12px;
              line-height: 32px;
              .btn {
                display: inline-block;
                width: 18px;
                height: 18px;
                margin: 6px 8px 0 0;
              }
              .play {
                background-image: url(${icon});
                background-position: top 198px left 146px;
                &:hover {
                  background-position: top 178px left 146px;
                }
              }
              .add {
                background-image: url(${icon2});
                background-position: top 410px left 3px;
                &:hover {
                background-position: top 410px left -19px;
                }
              }
              .collect {
                background-image: url(${icon});
                background-position: top 198px left 117px;
                &:hover {
                background-position: top 178px left 117px;                  
                }
              }
            }
          }
        }
        .more {
          width: 158px;
          height: 32px;
          float: right;
          a {
            display: inline-block;
            text-align: right;
            margin-left: 80px;
            margin-top: 8px;
          }
        }
      }
    }
   
   
  }
`
