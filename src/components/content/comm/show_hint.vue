<!-- 参数 可不传 有默认值 -->
<template>
    <div :class="[classModal.modal, classModal.fade, classModal.size(hintSize)]" :id="hintId" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div :class="[classModolDialog.ModolDialog, classModolDialog.size(hintSize)]" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <h4 class="modal-title" id="myModalLabel">{{hintTitle}}</h4>
                </div>
                <div class="modal-body">
                    {{hintContent}}
                    <slot></slot>
                </div>
                <!--<div class="modal-footer">-->
                <!--<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>-->
                <!--<button type="button" class="btn btn-primary">保存</button>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<style lang="less" rel="stylesheet/less" scoped>
    @import './../../base.less';
</style>

<script>
export default {
    name: 'btn',
    data () {
        return {
            classModal:{
                modal: 'modal',
                fade: 'fade',
                size: function(_size){
                    if(_size == 'big'){
                        return 'bs-example-modal-lg';
                    }else if(_size == 'small'){
                        return 'bs-example-modal-sm';
                    }else{
                        return '';
                    }
                }
            },
            classModolDialog:{
                ModolDialog: 'modal-dialog',
                size: function(_size){
                    if(_size == 'big'){
                        return 'modal-lg';
                    }else if(_size == 'small'){
                        return 'modal-sm';
                    }else{
                        return '';
                    }
                }
            },
            slotChildren: [],
        }
    },
    methods: {},
    props: {
        hintTitle: {
            type: String,
            default: "提示:"
        },
        hintContent: {
            type: String,
            default: ""
        },
        hintId: {
            type: String,
            default: "publicHint"
        },
        hintSize: {
            type: String,
            default: ""
        },
    },
//    props: ['hintTitle'],
    // 组件渲染完成执行
    mounted: function () {

    }
}
</script>

