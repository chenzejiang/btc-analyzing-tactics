import store from './../store'
import txt from './txt.js'
exports.install = function (Vue, options) {
    var envTest = false; // 是否测试网络
    var config = {
        version:'1.0.0', // 版本
		    apiv1:'https://api.hex.bi/v1/',
        explorerPrev: envTest ? 'https://ropsten.etherscan.io/' : "https://etherscan.io/",
        skip_speed:1500,
        menu_list:[
          {
            nav_show:true,
            path:'/index',
            icon:'icon-home',
            text: txt['home']
          },
          {
            nav_show:true,
            path:'/tool/school',
            icon:'icon-new-message',
            text: txt['school']
          },
          {
            nav_show:true,
            path:'/tool/list',
            icon:'icon-new-message',
            text: txt['article']
          },
          {
            nav_show:true,
            path:'/tool/contact',
            icon:'icon-new-message',
            text: txt['contact']
          },
          {
            nav_show:false,
            path:'https://www.hex.bi',
            icon:'icon-new-message',
            text: txt['coin_exchange']
          },
          {
            nav_show:true,
            path:'https://www.ethbb.com',
            icon:'icon-new-message',
            text: txt['coin_tool']
          }
        ]
    };

    var common = {
        test:function(){
            console.log('common.text');
        },
        setStoreInfo(){
          store.dispatch('changeSelect', {
            "select_num_1": $("#inputBoxText1").val(),
            "select_num_2": $("#inputBoxText2").val(),
            "select_type_1": $("#inputBoxSelect1").val(),
            "select_type_2": $("#inputBoxSelect2").val()
          });
        },
        /**
         * 方法：判断苹果或安卓
         * 调用：common.mobileType();
         * @returns {string} '0' = iphone || '1' = android
         */
        mobileType:function() {
            var u = navigator.userAgent, app = navigator.appVersion;
            if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
                if (window.location.href.indexOf("?mobile") < 0) {
                    try {
                        if (/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)) {
                            return '0';
                        } else {
                            return '1';
                        }
                    } catch (e) { }
                }
            } else if (u.indexOf('iPad') > -1) {
                return '0';
            } else {
                return '1';
            }
        },
        /**
         * 格式化
         */
        format_number:function(_num){
            if(typeof(_num) == 'undefined'){
                return 0;
            }
            // var _num = 123456789;
            var num = _num.toString();
            var return_num = 0;
            if(num.length >= 9){
                return_num = Number((num / 100000000).toFixed(3)) + ' 亿';
            }else if(num.length >= 5){
                return_num = Number((num / 10000).toFixed(3)) + ' 万';
            }else{
                return_num = num;
            }
            return return_num;
        },
        /**
         * 根据url获取菜单信息
         * @param _str
         */
        getMenuInfo:function(_str){
            var obj = {};
            for (var i = 0; i < config.menu_list.length; i++) {
                if(config.menu_list[i].path == _str){
                    obj["text"] = config.menu_list[i].text;
                    obj["name"] = config.menu_list[i].name;
                }
            };
            return obj;
        },
        /**
         * 获取用户信息
         */
        getUserInfo:function(_key){
            if(localStorage.getItem("login_info") == null){
                return 0;
            }else{
                return JSON.parse(localStorage.getItem("login_info"))[_key];
            }
        },
        /**
         * 清除登录信息
         */
        clearLoginInfo:function(){

        },
        /**
         * 弹窗
         */
        hint: function (text) {
          store.dispatch('changeHint', {"text":text,"show":true});
            setTimeout(function(){
              store.dispatch('changeHint', {"text":text,"show":false});
            }, config.skip_speed);
        },
        /**
         * 获取星期
         */
        get_week:function(){
            var mydate=new Date();
            var myddy=mydate.getDay();//获取存储当前日期
            var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
            return weekday[myddy];
        },
        /**数组根据数组对象中的某个属性值进行排序的方法
         * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
         * @param attr 排序的属性 如number属性
         * @param rev true表示升序排列，false降序排序
         * */
        sortBy: function(attr,rev){
            //第二个参数没有传递 默认升序排列
            if(rev == null){
                rev = 1;
            }else{
                rev = (rev) ? 1 : -1;
            }

            return function(a,b){
                a = Number(a[attr]);
                b = Number(b[attr]);
                if(a < b){
                    return rev * -1;
                }
                if(a > b){
                    return rev * 1;
                }
                return 0;
            }
        }
    }

    Vue.prototype.formatMonney = function(src, pos){
        //var num = parseFloat(src).toFixed(pos);
        var num = src.toString().replace(/\$|\,/g,'');
        if(isNaN(num)) num = "0";
        var sign = (num == (num = Math.abs(num)));
        num = Math.floor(num*100+0.50000000001);
        //cents = num%100;
        num = Math.floor(num/100).toString();
        /*if(cents < 10){
         cents = "0" + cents;
         }*/
        for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++) {
            num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
        }
        //return (((sign)?'':'-') + num + '.' + cents);
        return (((sign)?'':'-') + num);
    };

    Vue.prototype.GetQueryString = function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return 'undefined';
    };

    Vue.prototype.common = common;
    Vue.prototype.txt = txt;
    Vue.prototype.envTest = envTest;
    Vue.prototype.config = config;
};


