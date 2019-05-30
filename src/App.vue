<template>
    <div id="app">
        <div class="main">
            <v-header></v-header>
            <v-content></v-content>
            <v-hint></v-hint>
            <v-contact></v-contact>
            <v-alert></v-alert>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
// import $ from 'jquery'
import show_hint from './components/content/comm/show_hint.vue'
import alert from './components/content/comm/hint.vue'
import service_contact from './components/content/comm/service_contact.vue'
import header from './components/header/header.vue'
import content from './components/content/content.vue'
import footer from './components/footer/footer.vue'

import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  name: 'app',
  data(){
    return {
      
    }
  },
  components: {
    'v-header':header,
    'v-content':content,
    'v-footer':footer,
    'v-hint': show_hint,
    'v-contact': service_contact,
    'v-alert': alert
  },
  methods:{
    onClickMe:function(){
      console.log(1);
    }
  },
  // 组件渲染完成执行
  mounted:function(){

  }
}
</script>

<style lang="less" rel="stylesheet/less">
html,body{
  background: #f6f4f8;
  height: 100%;
}
#app {
  font-family:'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100%;
  min-height: 100%;
  position: relative;
}
.main{
    padding-bottom: 60px;
}
@media screen and (max-width: 1179px) {
    body {
        width:1180px;
    }
}

.w1000{
  width: 1180px;
  margin: 0 auto;
  position: relative;
}
.fix{
    #app{
        padding-top:60px;
    }
    .header{
        position: fixed;
        top:0;
        left:0;
        z-index: 999;
    }
}

</style>
