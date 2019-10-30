<template>
    <div class="modal-bg" v-if="show2">
        <div class="modal-container">
            <div class="modal-header">
                <span class="line"></span>
                <span class="txt">建议</span>
                <span class="line"></span>
            </div>

                <textarea name="" id="" cols="50" rows="12" placeholder="请输入内容" class="modal-main"></textarea>
                <span > 您的手机联系方式：</span>
               <input type="number" placeholder="请输入手机号" class="modal-main">
            <div class="modal-footer">
                <img src="../assets/img/提交.png" alt="" @click="hideModal1">
            </div>
        </div>
        <img src="../assets/img/退出.png" alt="" style="margin-top: 15px" @click="submit1">
    </div>
</template>

<script>
    export default {
        name: 'modal2',
        props: {
            show2: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
        },
        methods: {
            hideModal1() {
                this.$emit('hideModal1')
            },

            submit1() {
                this.$emit('submit1')
            },
        }
    }
</script>

<style scoped>

.modal-bg {

    background:rgba(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.modal-container {
    border-radius: 5px;
    padding: 0 19px;
    width: 256px;
    height: 387px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    opacity: 1;
    z-index: 3

}
.modal-header{
    line-height: .8rem;
    background: #fff;
    font-size: 16px;
    text-indent: .2rem;
    color: #212121;
    text-align : center;

}
.modal-header .line{
    display: inline-block;
    width: 10px;
    border-top: 1px solid #ccc
}
.modal-header .txt{
    vertical-align: -8%;
    font-family: PingFang-SC-Bold
}
.modal-main{
    background-color: #F5F5F5;
    padding: 5px ;
    border-radius: 5px;
}
.modal-footer{
    margin-left: 70px;
    touch-action: none;
}
.btn {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid blue;
    padding: 4px 12px;
}
</style>