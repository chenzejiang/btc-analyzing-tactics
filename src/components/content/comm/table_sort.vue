<template>
    <div :class="[sortClass.sort]" @click="onSortEvent($event)">
        <span class="icon icon-triangle-up"></span>
        <span class="icon icon-triangle-down"></span>
    </div>
</template>

<script>
export default {
    data () {
        return {
            sortClass:{
                "sort":"tableSort",
            },
        }
    },
    methods: {
        onSortEvent:function(event){
            var $target = $(event.currentTarget);
            $target.parent().siblings("th").find(".tableSort").removeClass('up').removeClass('down');
            if($target.hasClass('up') == false && $target.hasClass('down') == false){
                $target.addClass('up');
                this.onEmit('up');
                return false;
            }
            if($target.hasClass('up') == true){
                $target.removeClass('up').addClass('down');
                this.onEmit('down');
            }else if($target.hasClass('down') == true){
                $target.removeClass('down').addClass('up');
                this.onEmit('up');
            }
        },
        /* 向父组件传递参数 */
        onEmit:function(_direction){
            var obj = {
                field: this.field,
                type: _direction
            }
            this.$emit('onChildSort', obj);
        }
    },
    props: {
        field: {
            type: String,
            default: ""
        }
    },
    mounted: function () {

    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
    .tableSort{
        display: inline-block;
        position: relative;
        vertical-align: middle;
        top:0;
        right:0;
        width:12px;
        height:24px;
        span{
            font-size:14px;
            color: rgba(0,0,0,0.2);
        }
        .icon-triangle-up{
            position: absolute;
            top:0;
            left:0;
        }
        .icon-triangle-down{
            position: absolute;
            bottom:2px;
            left:0;
        }
    }
    .up{
        span.icon-triangle-up{
            color:@mainColor;
        }
    }
    .down{
        span.icon-triangle-down{
            color:@mainColor;
        }
    }
</style>
