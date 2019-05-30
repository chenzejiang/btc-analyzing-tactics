import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'

import axios from 'axios';
import common from './common/index.js';  // 公共方法
Vue.use(common);

import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard)

Date.prototype.format = function(format){
  var o = {
    "M+" : this.getMonth()+1, //month
    "d+" : this.getDate(),    //day
    "h+" : this.getHours(),   //hour
    "m+" : this.getMinutes(), //minute
    "s+" : this.getSeconds(), //second
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
    "S" : this.getMilliseconds() //millisecond
  };
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
    (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  for(var k in o){
    if(new RegExp("("+ k +")").test(format))
      format = format.replace(RegExp.$1,RegExp.$1.length==1 ? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
  }
  return format;
};
String.prototype.html = function(encode) {
  var replace =["&#39;", "'", "&quot;", '"', "&nbsp;", " ", "&gt;", ">", "&lt;", "<", "&yen;", "¥", "&amp;", "&"];
  var replaceReverse = ["&", "&amp;", "¥", "&yen;", "<", "&lt;", ">", "&gt;", " ", "&nbsp;", '"', "&quot;", "'", "&#39;"];
  var target;
  if (encode) {
    target = replaceReverse;
  } else {
    target = replace;
  }
  for (var i=0,str=this;i< target.length;i+= 2) {
    str=str.replace(new RegExp(target[i],'g'),target[i+1]);
  }
  return str;
};

// 带cookie请求
// axios.defaults.withCredentials = true;
// 设置默认请求头

axios.defaults.headers = {
   "Content-Type": "application/json;"
}
axios.defaults.timeout = 10000;
axios.defaults.crossDomain = true;
//添加请求拦截器
axios.interceptors.request.use(function(config){
  store.dispatch('changeLoading', true);
  store.dispatch('ajaxAdd');
  return config;
},function(error){
  store.dispatch('changeLoading', false);
  store.dispatch('ajaxMinus');
  return Promise.reject(error);
});

//添加响应拦截器
axios.interceptors.response.use(function(response){
  store.dispatch('ajaxMinus');
  if(store.state.ajax_len == 0){
    store.dispatch('changeLoading', false);
  }
  return response;
},function(error){
  store.dispatch('changeLoading', false);
  store.dispatch('ajaxMinus');

  // let hintObj = {
  //     "vue":Vue,
  //     "text":"系统繁忙"
  // }
  // this.common.hint(hintObj);
  // console.log(this);
  return Promise.reject(error);
});

Vue.prototype.$axios = axios;


// 引入bootstrap
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
import './assets/css/iconFont.css'

// import vuex from './vuex.vue'
/* 工具组件 */

import index from './components/content/tool/index'
import school from './components/content/tool/school'
import article from './components/content/tool/article'
import list from './components/content/tool/list'
import contact from './components/content/tool/contact'

// 公共按钮 蓝色
import comm_btn from './components/content/comm/comm_btn.vue'

// 安装 Vue.js 插件
Vue.use(VueRouter);
import App from './App'

let app = Vue.extend(App);

// 然后定义路由(routes)，components还可以是Vue.extend()创建的
const routes = [
  {path:'/',component:index, redirect: '/index'},
  {path:'/index',component:index},
  {path:'/tool/school',component:school},
  {path:'/tool/list',component: list},
  {path:'/tool/article',component: article},
  {path:'/tool/contact',component: contact}
];

// 创建 实例 router
const router = new VueRouter({
    // mode:'history', 
    // https://router.vuejs.org/zh-cn/essentials/history-mode.html
    // 配置 history 需要去 配置后端环境 ，让用户去访问一个地址，映射到我这个地址

    // server {
    //         listen       80;
    //         server_name  www.m-example.com;
    //         root   "E:/UED/eagle/branch/eagle201510/m-example";
    //         location / {
    //             try_files $uri $uri/ /index.html =404;
    //         }
    // }
    base:__dirname,
    routes:routes
});


// 启动应用 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  el: '#app',
  store,
  router,
  render:h=>h(app)
}).$mount('#app')
