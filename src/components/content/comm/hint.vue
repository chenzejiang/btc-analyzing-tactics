<template>
  <div :class="{hintBox:true,fadeIn:this.$store.state.hint_show}" style="-webkit-animation-duration: 3s; -moz-animation-duration: 3s; -ms-animation-duration: 3s; -o-animation-duration: 3s; animation-duration: 3s;" id="js_hintBox">
    <p>{{this.$store.state.hint_text}}</p>
  </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    /*淡入淡出*/
    @keyframes fadeIn {
        0% { opacity: 0; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-webkit-keyframes fadeIn {
        0% { opacity: 0; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-moz-keyframes fadeIn {
        0% { opacity: 0; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-o-keyframes fadeIn {
        0% { opacity: 0; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }
    @-ms-keyframes fadeIn {
        0% { opacity: 0; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }

    .fadeIn {
        display: block !important;
        -webkit-animation-name: fadeIn;
        -moz-animation-name: fadeIn;
        -ms-animation-name: fadeIn;
        -o-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: 5s;
        -moz-animation-duration: 5s;
        -ms-animation-duration: 5s;
        -o-animation-duration: 5s;
        animation-duration: 5s;
        -webkit-animation-fill-mode: both;
        -moz-animation-fill-mode: both;
        -ms-animation-fill-mode: both;
        -o-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .hintBox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100%;
        text-align: center;
    }

    .hintBox p {
        position: absolute;
        top: 50%;
        left: 50%;
        display: inline-block;
        vertical-align: top;
        font-size: 20px;
        line-height: 30px;
        color: #ffffff;
        padding: 14px 18px;
        border-radius: 8px;
        max-width: 70%;
        background: rgba(0, 0, 0, 0.8);
        /*background: @mainColor; */
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }

    .hintBox p i {
        color: #fee300;
    }
</style>

<script>
    export default {
        name: 'hint',
        data () {
            return {
                pop_show:false
            }
        },
        computed: {
            hint_text () {
                return this.$store.state.hint_text;
            },
            hint_show () {
              return this.$store.state.hint_show;
            }
        },
        methods: {

        },
        // 组件渲染完成执行
        mounted: function () {

        }
    }
</script>

