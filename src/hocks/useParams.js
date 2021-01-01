
const qs = require('querystring')

function useParams (str, obj) {
  let flag = true;
  if(str.indexOf('?')===-1){
    str = str + '?'
    for (const strKey in obj) {
      if(flag && str.indexOf(strKey)===-1){
        str = str + strKey + '=' + obj[strKey]
        flag = false;
      }else {
        if(str.indexOf(strKey)===1){
          let str1 = str.split('?')
          str = str + '&' +strKey + '=' + obj[strKey]
          console.log(str1)
        }
      }
    }
    return str;
  }else {
    let flag = false
    let strObj = str.split('?')
    let str0 = strObj[0]+"?"
    // console.log(strObj[1])
    // console.log(strObj)
    const str2 = qs.parse(strObj[1])
    const str3 = {...str2, ...obj}
    // console.log(str2)
    // console.log(str3)

    for (const strKey in str3) {
      if (!flag){
        str0 = str0 + strKey + '=' + str3[strKey]
        flag = true
      }else {
        str0 = str0 + '&'+strKey+'='+str3[strKey]
      }
    }
    return str0;
  }
}
export default useParams;
// const obj = {
//   age: 10,
//   name: 'lijun',
// }
// const obj1 = {
//   age: 11,
//   name: 'Tosikat',
//   index: 3
//
// }
// for (const objKey in obj) {
//   if(obj1[objKey]){
//     console.log(objKey, obj1[objKey])
//   }
//   console.log(objKey, obj[objKey])
// }

// console.log(useParams('https://zhidao.baidu.com', obj));
// console.log(useParams('https://zhidao.baidu.com?age=10&name=lijun&index=1&gender=0',obj1))
// useParams('https://zhidao.baidu.com?age=10&name=lijun',obj1)
// const str = 'https://zhidao.baidu.com?age=10name=abc'
// console.log(url.parse(str, true).query)
// console.log(str.indexOf('='));
