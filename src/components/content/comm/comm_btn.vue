<template>
    <button :class="btnType" @click="btnEvent">{{btnText}}</button>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    button{
		/*min-width:150px;*/
        width:100%;
		height: 54px;
        /*padding:0 20px;*/
		font-size: 18px;
        margin-top: 35px;
		line-height: 40px;
		text-align: center;
        cursor:pointer;
        border-radius: 6px;
		border:none;
		font-family:"Microsoft YaHei";
	}
    .default{
        color: #fff;
        background: @mainColor;
    }
    .disabled{
        color: #fff;
        background: rgba(0,0,0,.4);
    }
    .default:hover{
        background-color: #3BDF10;
        transition:all 0.55s ease 0s;
    }
</style>

<script>
export default {
    name: 'btn',
    data () {
        return {}
    },
    methods: {
        btnEvent:function(){
            if(this.btnType == 'disabled'){
                return false;
            }else{
                this.btnClick();
            }
        }
    },
    props: {
        btnText: {
            type: String,
            default: "test"
        },
        btnType: {
            type: String,
            default: "default"
        },
        btnClick: {
            default: function(){
            }
        }
    },
    // 组件渲染完成执行
    mounted: function () {
    }
}
</script>

