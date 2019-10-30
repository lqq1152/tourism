<template>
    <div>
        <z-header title="旅游投诉"/>
        <img src="../../static/yilong.jpg" style="width: 100%;height:180px;"/>
        <div style="height:30px;line-height: 30px;font-size: 18px;margin:20px 0 10px 15px;">1、请选择投诉类别</div>
        <van-radio-group v-model="type">
            <van-radio name="物价">物价</van-radio>
            <van-radio name="服务">服务</van-radio>
            <van-radio name="购物">购物</van-radio>
            <van-radio name="环境">环境</van-radio>
            <van-radio name="卫生">卫生</van-radio>
            <van-radio name="其他">其他</van-radio>
        </van-radio-group>

        <div style="height:30px;line-height: 30px;font-size: 18px;margin:20px 0 10px 15px;">2、请输入留言</div>
        <van-cell-group style="margin-top: 10px;">
            <van-field
                v-model="message"
                rows="2"
                autosize
                label="留言"
                type="textarea"
                maxlength="100"
                placeholder="请输入留言"
                show-word-limit
            />
            <van-field
                v-model="phone"
                label="联系方式"
                placeholder="请输入联系方式"
            />
        </van-cell-group>

        <div style="width: 100%;padding:0 20px;box-sizing: border-box;margin-top: 20px">
            <van-button type="info" size="large" @click="submit" style="background-color: rgb(0, 188, 212)">提交</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Feedback",
        data() {
            return {
                type: "",
                message: "",
                phone: ""
            }
        },

        methods: {
            submit() {
                if (this.type && this.message && this.phone) {
                    let param = [
                        {
                            "complaintContent": this.message,
                            "complaintTypeName": this.type,
                            "name": "游客",
                            "phone": this.phone
                        }
                    ];
                    this.$API.ComplaintAdd(param).then(res => {
                        if (res.code === 1001) {
                            this.$toast({message: '提交成功', icon: 'success'});
                            setTimeout(() => {
                                this.type = "";
                                this.message = "";
                                this.phone = "";
                                this.$router.push({path: "/"})
                            }, 3000)
                        } else {
                            this.$toast({message: '提交失败，请稍后再试', icon: 'fail'});
                        }
                    });


                } else {
                    this.$toast({message: '请完善信息', icon: 'info'});
                }
            }
        }
    }
</script>

<style scoped>
    .van-radio-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 2%;
    }

    .van-radio {
        width: 30%;
        margin: 10px 0;
    }
</style>