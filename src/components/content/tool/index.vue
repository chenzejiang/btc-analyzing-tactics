<!-- 首页 -->
<template>
    <div class="tool_box">
        <!-- 兑换盒子 -->
        <div class="ex">
            <!--<h3>{{this.txt['slogan'][lang]}}</h3>-->
            <div class="panel panel-default exBox">
                <div class="panel-heading">王团长区块链日记 {{new Date().format("yyyy年MM月dd日")}} 实盘持仓</div>
                <table class="table">
                    <thead>
                    <tr>
                        <th>名称</th>
                        <th>我的持仓 (个)</th>
                        <th>市价 (元/个)</th>
                        <th>合计/元</th>
                        <th>备注</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item in list" :class="{red : item.type.split('_')[0] == 'EOS' ? true : false }">
                        <td :class="{bgon : item.type.split('_')[0] == 'EOS' ? true : false }">{{item.type.split('_')[0]}}</td>
                        <td>{{item.num}}</td>
                        <td>{{Number((item.price * cny).toFixed(3))}}</td>
                        <td>{{parseInt(item.num * item.price * cny)}}</td>
                        <td>{{item.note}}</td>
                    </tr>
                    <tr>
                        <td>　</td>
                        <td>　</td>
                        <td class="bgon">总持仓</td>
                        <td class="bgon">{{this.onMoney()}}</td>
                        <td>　</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
        <!-- 介绍 -->
        <v-advantages></v-advantages>
    </div>
</template>

<script>
	var that = null;
    var socket = null;
    var ajax_time = null;
    var ws = null;
    var pong_time = null;
    import comm_btn from '../comm/comm_btn.vue';
    import advantages from '../comm/advantages.vue';
    export default {
        name: 'index',
        data () {
            return {
                cny: 0,
                all_money:100,
                speed: 5000, // 定时请求ajax的时间
                list:[
                    {
                        id:1,
                        type: "EOS_USDT",
                        price: 0,
                        num: 33857,
                        platform:'gate',
                        note:'helloworldwt'
                    },
                    {
                        id:3,
                        type: "HT_USDT",
                        price: 0,
                        num: 859,
                        platform:'gate',
                        note:''
                    },
                    {
                        id:4,
                        type: "BNB_USDT",
                        price: 0,
                        num: 836,
                        platform: 'gate',
                        note:''
                    },
                    {
                        id:6,
                        type: "QKC_USDT",
                        price: 0,
                        num: 1055,
                        platform: 'gate',
                        note:''
                    },
                    {
                        id:8,
                        type: "GT_USDT",
                        price: 0,
                        num: 3428,
                        platform:'gate',
                        note:''
                    }
                ]
            }
        },
        watch: {
//            list:{
//                deep: true, //深度监听
//                handler: function (newVal,oldVal) {
//                    let _result = 0;
//                    that.list.map(function(item, index){
//                        _result += parseInt(item.num * item.price * that.cny);
//                    });
//                    that.all_money = _result;
//                }
//            }
        },
        computed: {
            lang() {
                return this.$store.state.lang;
            }
        },
        components: {
            'v-btn': comm_btn,
            'v-advantages': advantages
        },
        methods: {
            onMoney:function(){
                let _result = 0;
                let cny = this.cny;
                this.list.map(function(item, index){
                    _result += parseInt(item.num * item.price * cny);
                });
                return _result;
            },
            /* 获取wtz其他币种的价格 */
            onGetOtherCoinPrice:function(){
                $.ajax({
                    type: "get",
                    url: 'http://wtz.bishuju.top/api/blockcc.php',
                    data: {
                        type:"price",
                        symbol:"oneroot-network,eon,metaverse"
                    },
                    dataType:"json",
                    success: function (data, textStatus) {
                        if(data.code == 0){
                            data.data.map(function(item,index){
                                that.list.map(function(item2,index2){
                                    if(item['name'] == item2["api_type"]){
                                        that.list[index2]['price'] = item.price;
                                    }
                                });
                            });
                        }
                        ajax_time = setTimeout(() => {
                            that.onGetOtherCoinPrice();
                        }, that.speed);
                    },
                    error: function (req, textStatus, err) {
                        console.log(err);
                    }
                });
            },
            onGetCNY(){
                $.ajax({
                    type: "get",
                    url: 'http://wtz.bishuju.top/api/blockcc.php',
                    data: {
                        type:"exchange_rate"
                    },
                    dataType:"json",
                    success: function (data, textStatus) {
                        that.cny = data.data.rates['CNY'];
                    },
                    error: function (req, textStatus, err) {
                        console.log(err);
                    }
                });
//                this.$axios.get('https://data.block.cc/api/v1/exchange_rate', {}).then(function (response) {
//                    console.log(response.data);
//                    alert(1);
//                }).catch(function (response) {
//                    console.log('error:',response);
//                });
            }
        },
        destroyed: function(){
            socket.close(); //关闭TCP连接
            clearTimeout(ajax_time);
            clearTimeout(pong_time);
        },
        // 组件渲染完成执行
        mounted: function () {
			that = this;

            this.onGetCNY();
            this.onGetOtherCoinPrice();

            function socket_send_cmd(socket, cmd, params, type_id = 648933) {
                if (!params)
                    params = [];
                var msg = {
//                    id: type_id,
                    id: 4126365,
                    method: cmd,
                    params: params
                };
                socket.send(JSON.stringify(msg));
            }
            socket = new WebSocket('wss://webws.gateio.live/v3');
//            socket = new WebSocket('wss://webws.gateio.io/v3');
            socket.onopen = function () {
                socket_send_cmd(socket, 'server.ping');
                var subscribe_list = function() {
                    var new_arr = [];
                    that.list.map(function(item,index){
                        if(item["platform"] == 'gate'){
                            new_arr.push(item.type);
                        }
                    });
                    return new_arr;
                };
                // ticker.subscribe = 订阅  ticker.query 查询
                socket_send_cmd(socket, 'ticker.subscribe', subscribe_list());

            };
            socket.onmessage = function (e) {
                var d = JSON.parse(e.data);
                if(d["result"] == 'pong'){
                    pong_time = setTimeout(()=>{
                        socket_send_cmd(socket, 'server.ping');
                    }, 15 * 1000);
                }else{
                    if(d["method"] == 'ticker.update'){
                        that.list.map(function(item,index){
                            if(d.params[0] == item["type"]){
                                that.list[index]['price'] = d.params[1]['last'];
                            }
                        });
                    }
                }
//                console.log(d);
            };
            socket.onerror = function(e) {
                alert("Gate.IO的 Socket 挂了,请刷新页面重试");
            };
            socket.onclose=function(e){
                console.log("socket 已关闭");
            };
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    .tool_box {
        font-size: 20px;
        background: #f6f4f8;
        color: #000;
        .ex{
            /*height:500px;*/
            padding: 40px 0;
            width: 100%;
            font-size: 0;
            background: @bg;
            h3{
                font-size: 24px;
                color:#fff;
                text-align: center;
                padding:40px 0 80px 0;
            }
            .exBox{
                width:600px;
                /*padding-top:20px;*/
                margin:0 auto;
                /*background: #f99;*/
                font-size: 14px;
                text-align: center;
                border:none;
                .panel-heading{
                    background: #4e80bf;
                    color:#fff;
                }
                th{
                    text-align: center;
                }
                tr{
                    text-align: center;
                    .bgon{
                        background: yellow;
                        color: #f00;
                    }
                    td{
                        padding: 5px;
                    }
                }
                .red{
                    color: #f00;
                }
            }
        }
    }
</style>

