<template>
    <div class="tool_box w1000">
        <ul class="nav nav-tabs nav-justified">
            <li v-for="(item,index) in tabs" @click="tabsSwitch(index)" role="presentation" :class="{active:index == box_index ? true: false}">
                <a href="javascript:void(0)">{{item}}</a>
            </li>
        </ul>
        <div class="bs-example" data-example-id="thumbnails-with-custom-content">
            <div class="row" v-for="(item,index) in data" v-show="box_index == index">
                <div class="col-sm-3" v-for="(item2,index2) in data[index]" @click="onShowVideo(item2.video,item2.title)">
                    <div class="thumbnail">
                        <img class="lazy" :data-original="item2.img" :alt="item2.title" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzEwMCV4MjAwCkNyZWF0ZWQgd2l0aCBIb2xkZXIuanMgMi42LjAuCkxlYXJuIG1vcmUgYXQgaHR0cDovL2hvbGRlcmpzLmNvbQooYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jbwotLT48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWyNob2xkZXJfMTY2ZDYyNGU5ZWQgdGV4dCB7IGZpbGw6I0FBQUFBQTtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIE9wZW4gU2Fucywgc2Fucy1zZXJpZiwgbW9ub3NwYWNlO2ZvbnQtc2l6ZToxMnB0IH0gXV0+PC9zdHlsZT48L2RlZnM+PGcgaWQ9ImhvbGRlcl8xNjZkNjI0ZTllZCI+PHJlY3Qgd2lkdGg9IjI0MiIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSI4OS44NTkzNzUiIHk9IjEwNS4xIj4yNDJ4MjAwPC90ZXh0PjwvZz48L2c+PC9zdmc+">
                        <div class="caption center">
                            <h3>{{item2.title}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <v-hint hintId="videoHint" hintSize="big" :hintTitle="`正在播放:　${tabs[box_index]} - ${video_title}`">
            <video id="video_box" class="video_box" :src="video_src" controls="controls">
            </video>
        </v-hint>

    </div>
</template>

<script>
    import  "./../../../../static/js/jquery.lazyload";
    import show_hint from '../comm/show_hint.vue'
    var that = null;
    export default {
        data () {
            return {
                data:[],
                tabs: ['基础名词','进阶名词','交易常识','钱包知识','常用工具','玩转交易所'],
                box_index: 0,
                video_title: '',
                video_src: ''
            }
        },
        components: {
            'v-hint': show_hint
        },
        computed: {
            lang() {
                return this.$store.state.lang;
            }
        },
        methods: {
            onGetData(){
                that.loading = true;
                $.ajax({
                    type: "get",
                    url: 'http://wtz.bishuju.top/api/videos.php',
                    data: {
                    },
                    dataType:"json",
                    success: function (data) {
                        that.data = data;
                        setTimeout(()=>{
                            that.imgLoad();
                        }, 1000);
                    },
                    error: function (req, textStatus, err) {
                        that.loading = false;
                        console.log(err);
                    }
                });
            },
            tabsSwitch(_num){
                that.box_index = _num;
            },
            imgLoad(){
                $(".lazy").lazyload({
                    effect: "fadeIn", //渐现，show(直接显示),fadeIn(淡入),slideDown(下拉)
                    threshold: 100, //预加载，在图片距离屏幕180px时提前载入
//                    event: 'scroll', // 事件触发时才加载，click(点击),mouseover(鼠标划过),sporty(运动的),默认为scroll（滑动）
//                    container: $("#container"), // 指定对某容器中的图片实现效果
                    failure_limit: 2//加载2张可见区域外的图片,lazyload默认在找到第一张不在可见区域里的图片时则不再继续加载,但当HTML容器混乱的时候可能出现可见区域内图片并没加载出来的情况
                });
            },
            onShowVideo(_video, _title){
                this.video_src = _video;
                this.video_title = _title;
                $('#videoHint').modal();
            }
        },
        mounted: function () {
            that = this;
            this.onGetData();

            // 模态框关闭监听
            $('#videoHint').on('hidden.bs.modal', function(){
                $('#video_box')[0].pause(); // 暂停播放器
            });
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    .tool_box{
        padding:40px 40px;
		font-size:14px;
        background: #fff;
        .nav-tabs{
            margin-bottom: 40px;
        }
        .lazy{
            width:100%;height: 134px;  display: block;
        }
        .video_box{
            width: 100%;
            height: 500px;
            display: inline-block;

        }
	}
</style>