<template>
    <div class="login-background">
        <div class="login-frame">
            <h1 class="login-title">用户登陆</h1>
            <i class="iconfont off"  @click="loginWinShow">&#xe60f;</i>
            <div class="input-cont">
                <div class="user-frame">
                    <i class="iconfont user-icon">&#xe851;</i><input  v-model="loginUser" class="user-input" placeholder="用户名" type="text">
                </div>
                <div class="pwd-frame">
                    <i class="iconfont pwd-icon">&#xe607;</i><input class="pwd-input" v-model="loginPwd" placeholder="密码" type="password">
                </div>
                <button class="login-btn" @click="userLogins">登陆</button>
            </div>
            
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    LoginWind:"LoginWind",
    data(){
        return{
            shows:false,
            loginUser:"",
            loginPwd:""
        }
    },
    methods:{
        loginWinShow(){
            this.shows=false;
            this.$emit("loginShow",this.shows)
        },
        userLogins(){
            //console.log(this.userLogin+"  "+this.pwd)
            let userParams={
                loginUser:this.loginUser,
                loginPwd:this.loginPwd
            }
            axios.post("userlogin",{
                userParams
            }).then((res)=>{
                if(res){
                    alert("错了")
                }else{
                    alert("对了");
                }
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
.login-background
    height :100%;
    width :100%;
    background :rgba(0,0,0,.5);
    position :fixed;
    z-index:2;
    .login-frame
        top:50%;
        left :50%;
        height :7.2rem;
        width :12rem;
        padding :0.5rem;
        box-sizing :border-box;
        margin-left :-6rem;
        margin-top :-3.625rem;
        background :#fff;
        position :fixed;
        z-index:3;
        .login-title
            text-align :center;
            font-size :0.5rem;
            font-color:$fontBlack;
        .off
            font-size:0.5rem
            position :absolute;
            right :0.2rem;
            top:0.2rem;
            color:$fontColor;
            cursor :pointer;
            transition :transform 0.4s;
        .off:hover
            transform :rotate(-90deg);
        .input-cont
            margin :0.8rem 1rem 1rem 1rem;
            text-align :center;
            .user-frame,.pwd-frame
                margin-bottom:0.4rem;
                padding :0.02rem;
                border:0.025rem solid $fontColor;
                position :relative;
                .user-input,.pwd-input
                    font-size:0.36rem;
                    padding:0.15rem  0.5rem 0.15rem 1rem;
                    box-sizing:border-box; 
                    width:100%;
                .user-icon,.pwd-icon
                    position :absolute;
                    display :block;
                    line-height :100%;
                    font-size:0.36rem;
                    padding :0.25rem;
            .login-btn
                margin-top:0.2rem;
                padding:0.1rem 0;
                font-weight:500;
                color:#fff;
                font-family:Microsoft YaHei;
                background:$loginBtnColor;
                font-size :0.36rem;
                width :100%;
                text-align :center;
</style>
