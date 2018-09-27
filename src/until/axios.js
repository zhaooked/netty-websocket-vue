import axios from 'axios';
// import { Message } from 'element-ui';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';


//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    // config.data = JSON.stringify(config.data);
    config.headers = {
      // 'Content-Type':'application/json'
      // 'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.errCode ==2){
      router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      withCredentials:true,
      params:params
    })
    .then(response => {
      console.log(response.data)
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url,data = {}){
   console.log(data)
   return new Promise((resolve,reject) => {
      axios.post(url,data,{
        withCredentials:true
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
   })
 }

export function postFile(url, data = {}){
  console.log(data)
  let config = { headers:{'Content-Type': 'multipart/form-data'}}
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url,data = {}){
  return new Promise((resolve,reject) => {
     axios.put(url,data)
     .then(response => {
       resolve(response.data);
     },err => {
       reject(err)
     })
  })
}

window.addEventListener('unhandledrejection', event =>
{
console.log(event.reason); // 打印"Hello, Fundebug!"
});

window.addEventListener('rejectionhandled', event =>
{
console.log('rejection handled'); // 1秒后打印"rejection handled"
});
