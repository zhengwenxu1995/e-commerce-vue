<template>
    <div class="login-background">
        <div class="login-frame">
            <h1 class="login-title">用户登陆</h1>
            <i class="iconfont off"  @click="loginWinShow">&#xe60f;</i>
            <div class="input-cont">
                <p class="error" v-show="errorShow">{{errorMsg}}</p>
                <div class="user-frame">
                    <i class="iconfont user-icon">&#xe851;</i><input  v-model="userName" class="user-input" placeholder="用户名" type="text">
                </div>
                <div class="pwd-frame">
                    <i class="iconfont pwd-icon">&#xe607;</i><input class="pwd-input" v-model="userPwd" placeholder="密码" type="password" @keydown.enter="userLogins">
                </div>
                <button class="login-btn" @click="userLogins">登&nbsp;陆</button>
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
            userName:"",
            userPwd:"",
            errorShow:false,
            errorMsg:"",
            loginStatus:false,
        }
    },
    props:{

    },
    methods:{
        loginWinShow(){
            this.shows=false;
            this.$emit("loginShow",this.shows)
        },
        userLogins(){
            //console.log(this.userLogin+"  "+this.pwd)
            if(!this.userName || !this.userPwd){
                this.errorMsg="用户名或密码不能为空";
                this.errorShow=true;
                return ;
            }
            let userParams={
                userName:this.userName,
                userPwd:this.userPwd
            }
            axios.post("/users/userlogin",userParams).then((res)=>{
                let data=res.data;
                if(data.status=="500"){
                     this.errorMsg="用户名或密码不正确";
                    this.errorShow=true;
                    
                }else{
                    this.errorShow=false;
                    this.shows=false;
                    let loginIn={
                        loginStatus:true,
                        userNames:data.userNames
                    }
                    this.$emit("loginStatus",loginIn);
                    this.$emit("loginShow",this.shows);
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
    z-index:6;
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
            padding :0.1rem 0;
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
            .error
                position :absolute;
                top :1.2rem;
                left:1.5rem;
                color:#f00;
                font-size :0.25rem;
                padding : 0.15rem;
                z-index :4;
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
                cursor :pointer;
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
