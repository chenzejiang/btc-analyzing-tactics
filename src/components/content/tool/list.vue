<template>
    <div class="tool_box w1000">
        <div class="page_profile_info">
            <div class="page_profile_info_inner">
                <div class="profile_info_area">
                    <div class="profile_info_group">
                            <span class="radius_avatar profile_avatar">
                                <img src="http://wx.qlogo.cn/mmhead/Q3auHgzwzM5eticqejUQicN179kYvlJXjQwxrMhOVVYzzT2FIFPreh0w/0">
                            </span>
                        <div class="profile_info">
                            <strong class="profile_nickname">
                                王团长区块链日记
                            </strong>
                        </div>
                    </div>
                    <ul class="profile_desc">
                        <li>
                            <label class="profile_desc_label" for="">公众号介绍:</label>
                            <div class="profile_desc_value" title="王团长写的区块链投资日记都在这里">王团长写的区块链投资日记都在这里</div>
                        </li>
                    </ul>
                    <div class="profile_opr" style="display:none">
                        <a href="javascript:void(0);" id="copyBt" class="weui_btn weui_btn_plain_primary">复制微信号</a>
                    </div>
                </div>
                <div class="weui_category_title">最近10条群发</div>
                <div class="weui_msg_card_list" id="history">

                    <div class="weui_msg_card" v-for="item in list">
                        <div class="weui_msg_card_hd">{{ new Date(item.time).format("yyyy年MM月dd日")}}</div>
                        <router-link target="_blank" class="weui_msg_card_bd"  :to="{path:'/tool/article',query: {id: item.link}}">
                            <div class="weui_media_box appmsg">
                                <span class="weui_media_hd" v-show="item.pic != '' " :style="{backgroundImage : `url(${item.pic})`}"></span>
                                <div class="weui_media_bd">
                                    <h4 class="weui_media_title">
                                        <span class="icon_original_tag">原创</span>{{item.title}}</h4>
                                    <p class="weui_media_desc">{{item.abstract}}</p>
                                    <p class="weui_media_extra_info">{{ new Date(item.time).format("yyyy年MM月dd日")}}<span class="icon_original_tag">原创</span></p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
                <!--<div class="msg_card_tips">仅显示最近10条</div>-->
                <div class="loadmore" v-if="next == 0" id="js_loading">
                    <div class="tips_wrp"><i class="icon_loading"></i><span class="tips">正在加载</span></div>
                </div>
                <div class="loadmore with_line" v-else="next == 1" id="js_nomore">
                    <div class="tips_wrp"><span class="tips">你已经抄底了</span></div>
                </div>
            </div>
            <div id="js_pc_qr_code" class="qr_code_pc_outer">
                <div class="qr_code_pc_inner">
                    <div class="qr_code_pc">
                        <img id="js_pc_qr_code_img" class="qr_code_pc_img" src="/static/images/gongzhonghao.png">
                        <p>微信扫一扫<br>关注该公众号</p>
                    </div>
                </div>
            </div>
        </div>

	</div>
</template>

<script>
    var that = null;
    export default {
        data () {
            return {
                wx_url:'https://mp.weixin.qq.com',
                list:[],
                page: 1,
                next: 0,
                loading: false
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
            onLink(){
//                alert(1);
            },
            onGetData(_page){
                that.loading = true;
                $.ajax({
                    type: "get",
                    url: 'http://wtz.bishuju.top/api/list.php',
                    data: {
                        page: _page
                    },
                    dataType:"json",
                    success: function (data) {
                        that.list = that.list.concat(data["data"]);
                        that.next = data["next"];
                        that.page = data["page"] + 1;
                        that.loading = false;
                    },
                    error: function (req, textStatus, err) {
                        that.loading = false;
                        console.log(err);
                    }
                });
            }
        },
        mounted: function () {
            that = this;
            $(window).scroll(function(){
                if ($(window).scrollTop() + $(window).height() == $(document).height() && that.next == 0 && that.loading == false) {
                    that.onGetData(that.page);
                }
            });
            that.onGetData(that.page);
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    @import './../../../assets/css/sougou.css';
    .tool_box{
        margin-top:40px;
        font-size:20px;
        .weui_media_title{
            color: #000;
        }
        .list-group-item-text{
            font-size: 14px;
            color: rgba(0,0,0,.5);
        }
        .panel-body{
            font-size: 14px;
            color: rgba(0,0,0,.5);
        }
        .weui_msg_card_bd{
            display: block;
            cursor: pointer;
            text-decoration: none;
        }
        .weui_msg_card_bd:hover{
            color: #000;
        }
    }
</style>