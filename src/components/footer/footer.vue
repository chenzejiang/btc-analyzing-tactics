<template>
  <div class="footer" id="footer">
    Copyright © {{this.year}} <a :href="origin" target="_blank">{{host.toLocaleUpperCase()}}</a> All Rights Reserved
  </div>
</template>

<script>
    export default {
        name: 'footer',
        data () {
            return {
                origin: window.location.origin,
                host: window.location.host,
                year: new Date().getFullYear()
            }
        }
    }
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../base.less';
    .footer {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: @bg;
        color: #fff;
        font-size: 14px;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        a {
            text-decoration: none;
            color: #ababab;
        }
    }
</style>
