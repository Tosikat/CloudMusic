import styled from 'styled-components'

export const LoginDiv = styled.div`
  float: right;
  height: 45px;
  margin: 19px 0 0 20px;
  padding: 0 22px 0 0;
  background-position: right -47px;
  background-image: none;
 .loginBtn{
   display: block;
   width: 28px;
   margin-top: 7px;
   color: #787878;
 }
 .loginBtn:hover {
   color: white;
 }
 .alert_win {
  width: 530px;
  height: 336px;
  position:fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  box-shadow: 0 3px 4px 2px #2d2d2d;
  background-color: white;
  border-radius: 4px;
  overflow: hidden;
  .login_bar {
    width: 100%;
    height: 40px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: #2d2d2d;
    span {  
      display: inline-block;
      width: 40px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      margin-left: 10px;
      color: white;
      font-weight: bold;
    }
    span.close{
      cursor: pointer;
    }
  }
  .login-form{
    width: 280px;
    height: 180px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .login-form-forgot{
      position:relative;
      left: 120px;
    }
    .login-form-button{
      width: 280px;
      
    }
  }
 }
 .user_info {
  width: 30px;
  height: 30px;
  background-color: white;
 }
`
