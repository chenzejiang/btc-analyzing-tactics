<template>
    <div class="tool_box w1000">
        <!--<iframe data-v-0394c4ee="" scrolling="no" frameborder="no" id="info" src="https://mp.weixin.qq.com/profile?src=3&timestamp=1540924435&ver=1&signature=edB3Q-1RHjm28WuGMCSJq0fDvsI20INczoYUIZZzKTZqsfNuOpcQ9ojp9-YywVePMzaUv0nG*cFqlDnUFVJqgw==" style="width: 100%; height: 650px;"></iframe>-->

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
                        <div class="weui_msg_card_hd">{{ new Date(item.comm_msg_info.datetime * 1000).format("yyyy年MM月dd日")}}</div>
                        <a class="weui_msg_card_bd" target="_blank" :href="wx_url + item.app_msg_ext_info.content_url.html()">
                            <div class="weui_media_box appmsg" msgid="1000000345">
                                <span class="weui_media_hd" :style="{backgroundImage : `url(${item.app_msg_ext_info.cover})`}"
                                      data-s="640" data-t="1540205940000"></span>
                                <div class="weui_media_bd">
                                    <h4 class="weui_media_title">
                                        <span class="icon_original_tag" v-show="item.app_msg_ext_info.copyright_stat == 11">原创</span>{{item.app_msg_ext_info.title}}</h4>
                                    <p class="weui_media_desc">{{item.app_msg_ext_info.digest}}</p>
                                    <p class="weui_media_extra_info">{{ new Date(item.comm_msg_info.datetime * 1000).format("yyyy年MM月dd日")}}<span v-show="item.app_msg_ext_info.copyright_stat == 11" class="icon_original_tag">原创</span></p>
                                </div>
                            </div>
                        </a>
                    </div>


                </div>
                <div class="msg_card_tips">仅显示最近10条</div>

                <div class="loadmore" style="display:none;" id="js_loading">
                    <div class="tips_wrp"><i class="icon_loading"></i><span class="tips">正在加载</span></div>
                </div>
                <div class="loadmore with_line" style="display:none;" id="js_nomore">
                    <div class="tips_wrp"><span class="tips">已无更多</span></div>
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
    export default {
        data () {
            return {
                wx_url:'https://mp.weixin.qq.com',
                list: [{
                    "app_msg_ext_info": {
                        "audio_fileid": 0,
                        "author": "王团长",
                        "content": "",
                        "content_url": "/s?timestamp=1540995114&amp;src=3&amp;ver=1&amp;signature=IB*m4gtZYHDZvx4JWSYOsqYy7zx2kYxYW6r0oZcm6bOMW1P1gTZZXA0Y9LQgu2vs7bcIHHbxsMoZUznCJFQjGqMO92HUpBxCNsAV*LQEwGsOL9suOmpqmRLU3jf4IsvI-QOx4GVHsI4K7767XwGSOXU91-wpB75RZKs-WxwmGPc=",
                        "copyright_stat": 11,
                        "cover": "http://mmbiz.qpic.cn/mmbiz_jpg/ZMhH0Iumpq22QaeqX4wZF8gicfexza9NuqXM9oj5CicBeo8cnyIzxOa5zzJcIBGNMqNbTaBUVft2IpW7FLibic7GcQ/0?wx_fmt=jpeg",
                        "del_flag": 1,
                        "digest": "最后我只好看着韩文菜单，我闭着眼睛点了一个：“this one”，老板把我信用卡拿过去，嘎嘎的刷了8000韩元。",
                        "duration": 0,
                        "fileid": 100001619,
                        "is_multi": 0,
                        "item_show_type": 0,
                        "malicious_content_type": 0,
                        "malicious_title_reason_id": 0,
                        "multi_app_msg_item_list": [],
                        "play_url": "",
                        "source_url": "",
                        "subtype": 9,
                        "title": "王团长日记第354篇：韩国炒币的人很多"
                    },
                    "comm_msg_info": {
                        "content": "",
                        "datetime": 1540983480,
                        "fakeid": "3552474556",
                        "id": 1000000357,
                        "status": 2,
                        "type": 49
                    }
                }]
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
            }
        },
        mounted: function () {
            console.log((this.list[0]));
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    @import './../../../assets/css/sougou.css';
    .tool_box{
        margin-top:40px;
        font-size:20px;
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