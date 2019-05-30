<template>
  <div class="header clearfix" id="header">
    <div class="w1000">
      <!--<h1><router-link to="/index">WTZ</router-link></h1>-->
        <router-link class="logo" to="/index">
            <!--<img src="static/images/logo.png">-->
            <img src="http://wtzxt.oss-cn-shanghai.aliyuncs.com/uploads/WTZ_chain/2018/08/微信图片_20180818113734.png">
            <!--<span>王团长区块链日记</span>-->
        </router-link>
      <!--<span class="version">V1.0.0</span>-->
        <!--<div class="btn-group langBox">-->
            <!--<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{langArr[this.$store.state.lang]}}-->
                <!--<span class="caret"></span>-->
            <!--</button>-->
            <!--<ul class="dropdown-menu" role="menu">-->
                <!--<li><a href="#" @click="() => onChangeLang('gb')">中文</a></li>-->
                <!--<li><a href="#" @click="() => onChangeLang('en')">English</a></li>-->
            <!--</ul>-->
        <!--</div>-->
        <ul class="menu" id="demo">
          <li v-for="(item, index) in this.config.menu_list"  v-show="item.nav_show">
            <router-link :to="item.path" v-if="item.path.indexOf('http') == -1">{{item.text[lang]}}</router-link>
            <a :href="item.path" target="_blank" v-else>{{item.text[lang]}}</a>
          </li>
        </ul>
    </div>

    <!--<div class="userBox">-->
      <!--<img src="static/images/logo.png" class="userLogo" alt="userName">-->
      <!--<span class="userName">webJ</span>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
        name: 'header',
        data () {
            return {
                langArr:{
                    'gb': '中文',
                    'en': 'English'
                }
            }
        },
        computed: {
            lang() {
                return this.$store.state.lang;
            }
        },
        methods:{
            onChangeLang(_lang){
                localStorage.setItem('lang', _lang);
                this.$store.dispatch('changeLang', _lang);
            }
        },
        // 组件渲染完成执行
        mounted: function () {
            $('.dropdown-menu').dropdown();
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
 @import './../base.less';
 .header{
  font-size: 0;
  width:100%;
  background: @bg;
  height: 70px;
  line-height: 70px;
  /*overflow: hidden;*/
   .logo{
       vertical-align: top;
       float: left;
       img{
           vertical-align: top;
           /*width: 70px;*/
           height: 50px;
           margin-top:10px;
           /*border-radius: 70px;*/
       }
       span{
           vertical-align: top;
           font-size: 18px;
           color: #fff;
           font-weight: bold;
           padding-left:20px;
       }
   }
   h1{
      font-size: 22px;
      float: left;
      a{
        text-decoration: none;
        color: #fff;
        text-shadow: 0 0 2px #f0f0f0;
      }
   }
   .version{
     float: right;
     color:#fff;
     font-size: 12px;
   }
   .userBox{
     float: right;
     background: #262626;
     height: 100%;
     text-align: center;
     width:200px;
     .userLogo{
        width:30px;
        height: 30px;
        border-radius: 30px;
        vertical-align: middle;
        border: 1px solid #fff;
     }
     .userName{
       color: #dfdfdf;
       font-size: 16px;
       margin: 0 10px;
       vertical-align: middle;
       position: relative;
     }
     .userName:after{
      content: '';
      width: 0;
      height: 0;
      position: absolute;
      top:50%;
      right: -15px;
      transform:translate(0%,-30%);
      border-style: solid;
      border-width: 8px 5px 0 5px;
      border-color: #dfdfdf transparent transparent transparent;
     }
   }
     .langBox{
         float: right;
         color: #fff;
         display: inline-block;
         font-size: 12px;
         z-index:999;
         margin-top: 18px;
     }
     .menu{
         float: right;
         display: inline-block;
         margin-bottom: 0;
         height:70px;
         li{
             display: inline-block;
             height:100%;
             position: relative;
             margin-right: 40px;
             a{
                 text-decoration: none;
                 display: inline-block;
                 color: #FFFFFF;
                 height: 100%;
                 width:100%;
                 font-size: 16px;
                 vertical-align: top;
                 white-space:nowrap;
                 overflow: hidden;
                 border-bottom: 4px solid rgba(0,0,0,0);
             }
             a.router-link-active{
                 color: @mainColor;
                 border-bottom: 4px solid @mainColor;
                 span{
                     color: @mainColor
                 }
             }
             span{
                 vertical-align: middle;
                 display:inline-block;
                 padding-right:8px;
                 font-size: 20px;
                 color: rgb(125, 149, 182);
             }
         }
         li:hover{
             a{
                 color: @mainColor;
                 border-bottom:4px solid @mainColor;
             }
             span{
                 color: @mainColor;
             }
         }
     }
     .contBox{
         font-size: 16px;
         background: #fff;
         border: 1px solid @lineColor;
         border-radius: 4px;
         height: 100%;
         vertical-align: top;
         word-break:break-all;
         padding:20px;
         h1{
             font-size: 20px;
             border-bottom:1px solid @lineColor;
             color: #646464;
             line-height: 30px;
             padding:5px 0;
             margin-bottom: 20px;
             position: relative;
             .icon{
                 margin-right: 10px;
             }
         }
         textarea {
             width:100%;
             height: 50px;
             font-size: 16px;
             padding: 5px;
             display: block;
         }
     }
 }
</style>
