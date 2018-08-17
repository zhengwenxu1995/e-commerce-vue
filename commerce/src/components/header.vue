<template>
 <div class="header">
    <div class="header-cont">
        <div class="left">
            <router-link to="/">
                <img src="http://imooc.51purse.com/static/logo1.png" alt="">
            </router-link>
        </div>
        <div class="right">
            <span class="userName">用户名</span>
            <span class="login" @click="showLoginWin">Login</span>
            <i class="number">
                    1
            </i>
            <span class="iconfont shopCar">
               &#xe603;
            </span>
        </div>
    </div>
    <transition name="login-animation">
        <login-wind @loginShow="showLogin" v-if="show"/>
    </transition>
 </div>
</template>

<script>
import LoginWind from "./login.vue";
export default {
  Headers:Headers,
  data(){
      return{
          show:false
      }
  },
  components:{
    LoginWind:LoginWind
  },
  methods:{
      showLogin(val){
         this.show=val;
      },
      showLoginWin(){
          this.show=true;
      }
  }
}
</script>

<style lang="stylus" scoped >
@import '~@/assets/style/varibles.styl';
    .header
        background:#fff;
        width :100%;
        padding-bottom :1.6rem;
        height :0;
        overflow :hidden
        display :flex;
        justify-content :center;
        .header-cont
            height :1.6rem;
            width :80%;
            display :flex;
            justify-content :space-between;
            .left img
                height :100%;
            .right
                font-family: moderat,sans-serif;
                position :relative;
            .right .userName
                display :none;
                color :#333;
                line-height :1.6rem;
                font-size :0.32rem;
                font-weight :500;
            .right .login
                cursor:pointer;
                color :#333;
                line-height :1.6rem;
                font-size :0.36rem;
                font-family :Microsoft YaHei;
                font-weight :500;
            .right .shopCar
                cursor :pointer;
                font-size :0.45rem;
                color :#333;
                line-height :1.2rem;
                font-weight :500;
            .right .login:hover
                color:#d1434a;
            .number
                background :#d1434a;
                opacity :0.6;
                display :block;
                height :0.35rem;
                width :0.35rem;
                border-radius :100%;
                color :#fff;
                line-height :0.35rem;
                text-align :center;
                font-size :0.25rem;
                position :absolute;
                top:0.35rem;
                right :-0.15rem;
        .login-animation-enter-active 
            transition: all .3s ease;
        .login-animation-leave-active 
            transition: all .8s ease;
        .login-animation-enter, .login-animation-leave-to 
            transform :translateY(0.12rem);
            opacity :0;
</style>

