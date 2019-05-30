<template>
    <div class="tool_box w1000">
        <div class="page-header">
            <h1>联系我们</h1>
        </div>
        <div class="contact">
            <div class="row">
                <div class="col-sm-4">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">微信公众号</h3>
                        </div>
                        <div class="panel-body">
                            <img src="/static/images/gongzhonghao.png">
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">商务合作:备注合作</h3>
                        </div>
                        <div class="panel-body">
                            <img style="width: 180px" src="/static/images/shangwu_wechat.jpg">
                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">王团长个人微信号</h3>
                        </div>
                        <div class="panel-body">
                            <img src="/static/images/wtz_wechat.jpeg">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        },
        computed: {
            lang() {
                return this.$store.state.lang;
            }
        },
        methods: {

        },
        mounted: function () {

        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    .tool_box{
        margin-top:40px;
		font-size:12px;
        .page-header{
            font-size: 40px;
        }
        .contact{
            img{
                width:180px;
            }
        }
        .panel{
            text-align: center;
        }
	}
</style>