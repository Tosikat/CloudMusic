
import {
  getLoginInfo
} from '../../../network/login'
import * as constant from "./constant";
const changeLoginInfo = res => ({
  type: constant.CHANGE_LOGIN_INFO,
  userInfo: res
})


export const getLoginInfoAction = (phone, password) => {
  return dispatch => {
    getLoginInfo(phone, password).then(res => {
      console.log(res)
      const { token } = res.data;
      localStorage.setItem('csrf_token',token)
      console.log(token);
      dispatch(changeLoginInfo(res))
    })
  }
}
