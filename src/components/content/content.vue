<template>
    <div class="content clearfix">
        <router-view class="contBox"></router-view>
    </div>
</template>
<script>
    export default {
        name: 'content',
        data () {
            return {}
        },
        // 组件渲染完成执行
        mounted: function () {

        }
    }
</script>

<!-- 这里特地去掉 scoped私有 -->
<style lang="less" rel="stylesheet/less">
@import './../base.less';
@li_bg: #6dc0ff;
.content{
    width:100%;
    font-size: 0;
    height: 100%;
    overflow: hidden;
}
.inputBoxText{
    background: #36324a;
    position: relative;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    color: #fff;
}
.inputBoxSelect{
    background: #36324a;
}
.exBox *{
    box-shadow: none !important;
    outline: none;
}
.select2-selection--single{
    background: #36324a!important;
    border: none!important;
    color: #fff!important;
}
.select2-selection__rendered{
    color: #fff!important;
}

/* 无限旋转 哔哔哔->奥特曼 */
.spin {
    -webkit-transform: rotate(360deg);
    -webkit-animation: spin 1s linear infinite;
    -webkit-transform-origin:center center;
    display: inline-block;
}
@-webkit-keyframes spin {
    from {-webkit-transform: rotate(0deg);}
    to {-webkit-transform: rotate(360deg);}
}
.spin {
    transform: rotate(360deg);
    animation: spin 1s linear infinite;
    transform-origin:center center;
}
@keyframes spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
}

.lds-dual-ring {
    display: inline-block;
    width: 28px;
    height: 28px;
}
.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 28px;
    height: 28px;
    margin: 1px;
    border-radius: 50%;
    border: 2px solid @mainColor;
    border-color: @mainColor transparent @mainColor transparent;
    animation: lds-dual-ring 1s linear infinite;
}
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loadingBox{
    position: relative;
}

.loadingInputBox{
    position: absolute;
    top:12px;
    left:6px;
    z-index: 99;
    height:30px;
    width:100px;
    background: @inputColor;
}

/*.loading{*/
    /*width:30px;*/
    /*height:30px;*/
    /*display: none;*/
    /*background: #f99;*/
/*}*/

.image-package .image-container {
    z-index: 100;
    position: relative;
    background-color: #eee;
    transition: background-color .1s linear;
    margin: 0 auto
}

.image-package .image-container .image-container-fill {
    z-index: 50
}

.image-package .image-container .image-view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden
}

.image-package .image-container .image-view img.image-loading {
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: .3
}

.image-package .image-container .image-view img {
    display: block;
    transition: all .15s linear;
    z-index: 100;
    -webkit-filter: blur(0);
    filter: blur(0);
    opacity: 1
}

.image-package {
    padding-bottom: 25px;
    width: 700px;
    margin: 0 auto;
    text-align: center
}

.image-package img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
    cursor: -webkit-zoom-in;
    transition: all .25s ease-in-out
}

.image-package .image-caption {
    min-width: 20%;
    max-width: 80%;
    min-height: 22px;
    display: inline-block;
    padding: 10px;
    margin: 0 auto;
    border-bottom: 1px solid #d9d9d9;
    font-size: 14px;
    color: #969696;
    line-height: 1.7
}

.image-package .image-caption:empty {
    display: none
}



</style>
