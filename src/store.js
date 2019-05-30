import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 状态对象
var state = {
  ajax_len: 0, // 当前请求的
  menu: false, // 菜单栏是否打开 ~ 默认不打开,
  loading_show: false, // 是否显示loading 默认不显示
  hint_show: false, // 是否显示提示语,
  hint_text: "hint_text",
  menu_login_show: localStorage.getItem("login_info") == null ? true : false,
  menu_type: 'vote',
  menu_title: '首页',

  lang: localStorage.getItem('lang') == null ? 'gb' : localStorage.getItem('lang'),
  select_num_1: 1, // 默认 交换数量 10
  select_num_2: 0,
  select_type_1: 'BTC', // 默认交换货币类型
  select_type_2: 'ETH' // 默认交换货币类型
};

// 触发状体  这个单词不能随便起
const mutations = {
  ajaxMinus(state){
    state.ajax_len --;
  },
  ajaxAdd(state){
    state.ajax_len ++;
  },
  changeMenu(state,obj){
    state.menu_title = obj.text;
    state.menu_type = obj.name;
  },
  changeHint(state,obj){
    state.hint_text = obj.text;
    state.hint_show = obj.show;
  },
  changeLoading(state, val){
    state.loading_show = val;
  },
  changeLang(state, val){
    state.lang = val;
  },
  changeHint(state,obj){
    state.hint_text = obj.text;
    state.hint_show = obj.show;
  },

  changeSelect(state,obj){
    state.select_num_1 = obj.select_num_1;
    state.select_num_2 = obj.select_num_2;
    state.select_type_1 = obj.select_type_1;
    state.select_type_2 = obj.select_type_2;
  }
};

// 计算属性
const getters = {
  count:function(state){
    return state.count += 1000;
  }
}

const actions = {
  jiaplus(content){
    content.commit('add',{a:10});
  },
  jianplus({commit}){
    commit('minus');
  },
  changeMenu(content, obj){
    content.commit('changeMenu', obj);
  },
  changeHint(content, obj){
    content.commit('changeHint', obj);
  },
  ajaxMinus(content){
    content.commit('ajaxMinus');
  },
  ajaxAdd(content){
    content.commit('ajaxAdd');
  },
  changeLoading(content, val){
    content.commit('changeLoading', val);
  },
  changeLang(content, val){
    content.commit('changeLang', val);
  },
  changeSelect(content, obj){
    console.log(obj);
    // alert(222);
    content.commit('changeSelect', obj);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})