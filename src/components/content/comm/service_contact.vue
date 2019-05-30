<template>
    <!--<div class="contact">-->
        <!--<div class="w1000">-->
            <!--<div class="contactBox">-->
                <!--<span class="icon icon-mixi"></span>-->
                <!--<p>联系客服</p>-->
            <!--</div>-->
        <!--</div>-->
    <!--</div>-->

    <div>
        <div class="elevator">
            <a href="javascript:void(0)" @click="showHint()" class="elevator-weixin" id="js-elevator-weixin">
                <i class="icon icon-wechat"></i>
                <span class="">站长微信</span>
            </a>
        </div>
        <v-hint hintId="customerHint" class="customerBox" hintTitle="合作联系:" hintSize="small">
            <img src="static/images/kefu_wechat.jpg" />
            <p>扫一扫添加微信~</p>
        </v-hint>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    .contact{
        position: fixed;
        bottom: 50%;
        right: 0;
        height:1px;
        width:100%;
        .contactBox{
            position: absolute;
            top:0;
            right:-100px;
            text-align: center;
            .icon{
                font-size: 40px;
                color: @mainColor;
            }
            p{
                font-size: 16px;
                color: @mainColor;
            }
        }
    }

    .elevator {
        position: fixed;
        padding: 0 16px;
        top: 300px;
        right: 0;
        z-index: 899;
        background-color: #fff;
        box-shadow: 0 4px 12px 0 rgba(7,17,27,.1);
        a{
            display: block;
            width: 26px;
            padding: 16px 0;
            font-size: 22px;
            line-height: 20px;
            color: #b5b9bc;
            box-sizing: border-box;
            text-align: center;
            border-bottom: 1px solid #edf1f2;
            text-decoration: none;
            position: relative;
        }
    }

    .customerBox{
        text-align: center;
        img{
            width:200px;
            margin:0 auto;
        }
        p{
            line-height: 24px;
            margin-top:10px;
            text-align: center;
            font-size: 16px;
            color: @fontColor;
        }
    }
    .elevator a:hover {
        color: @mainColor
    }

    .elevator a:hover i{
        display: none;
    }

    .elevator a:hover span{
        display: block;
    }

    .elevator a i {
        font-size: 24px;
        color: #D9DDE1
    }
    .elevator a i.icon-wechat{
        color: #5cb85c;
    }

    .elevator a i:hover {
        color: @mainColor
    }

    .elevator a span {
        display: none;
        font-size: 12px;
        color: @mainColor;
        line-height: 12px
    }

    .elevator .no-goto {
        border-bottom: none
    }
</style>

<script>
import show_hint from './show_hint.vue'
export default {
    data () {
        return {}
    },
    methods: {
        btnEvent:function(){

        },
        showHint:function(){
            $('#customerHint').modal();
        }
    },
    components: {
        'v-hint': show_hint
    },
    props: {
        btnText: {
            type: String,
            default: "test"
        }
    },
    // 组件渲染完成执行
    mounted: function () {

    }
}
</script>

