import axios from 'axios'
import qs from 'qs'
// import store from '../store/index'

axios.defaults.timeout = 5000; //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'; //配置请求头
axios.defaults.baseURL = process.env.NODE_ENV==="development"?' ':""; //配置接口地址


//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //在发送请求之前做某件事
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  //对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res);
  }
  return res;
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error);
});

//返回一个Promise(发送post请求)
 function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
//返回一个Promise(发送get请求)
 function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: param
      })
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
   let  jsonp= url=> {
          return new Promise((resolve, reject) => {
              // 这里的 "jsonCallBack" ，和调用的 jsonp 的 url 中的 callback 值相对应（见粗体字）
              window.jsonCallBack =(result) => {
                  resolve(result)
              }
              const JSONP = document.createElement('script');
              JSONP.type = 'text/javascript';
              JSONP.src = url;
              document.getElementsByTagName('head')[0].appendChild(JSONP);
              setTimeout(() => {
                  document.getElementsByTagName('head')[0].removeChild(JSONP)
              },500)
          })
      }


export default {
  post:fetchPost,
  get: fetchGet,
  jsonp
}














// // 创建 axios 实例
// const requests = axios.create({
//   baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
// 　　// baseURL: 'http://168.192.0.123',
//   timeout: 6000 // 请求超时时间
// })




// // 错误处理函数

// const err = (error) => {
//   if (error.response) {
//     const data = error.response.data
//     // const token = Vue.ls.get(ACCESS_TOKEN)
//     if (error.response.status === 403) {
//         Notify({ type: 'danger', message: data.message||data.msg });
//     }
//     if (error.response.status === 401) {
//         Notify({ type: 'danger', message: '你没有权限。' });
//       // if (token) {
//       //   store.dispatch('Logout').then(() => {
//       //     setTimeout(() => {
//       //       window.location.reload()
//       //     }, 1500)
//       //   })
//       // }
//     }
//   }
//   return Promise.reject(error)
// }




// // request interceptor(请求拦截器)
// requests.interceptors.request.use(config => {
// //   const token = Vue.ls.get(ACCESS_TOKEN)
//   const token = localStorage.getItem('token')
//   if (token) {
//     config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
//   }
//   return config
// }, err)




// // response interceptor（接收拦截器）
// requests.interceptors.response.use((response) => {
//   const res = response.data
//   if (res.code !== 0&&res.code!==200) { 
//     Notify({ type: 'danger', message: res.message||res.msg });
//     // 401:未登录;
//     if (res.code === 401||res.code === 403||res.code===999) {
//       Notify({ type: 'danger', message: '请登录'});
//     }
//     return Promise.reject('error')
//   } else {
//     return res
//   }
// }, err)




// export default {
//   requests
// }