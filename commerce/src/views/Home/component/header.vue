<template>
 <div class="header">
    <div class="header-cont">
        <div class="left">
            <img src="http://imooc.51purse.com/static/logo1.png" alt="">
        </div>
        <div class="right">
            <span class="userName">用户名</span>
            <span class="login">Login</span>
            <i class="number">
                    1
            </i>
            <span class="iconfont shopCar">
               &#xe603;
            </span>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  Headers:Headers,
  data(){
      return{

      }
  }
}
</script>

<style lang="stylus" scoped >
    .header
        background:#fff;
        width :100%;
        padding-bottom :1.2rem;
        height :0;
        overflow :hidden
        display :flex;
        justify-content :center;
        .header-cont
            height :1.2rem;
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
                line-height :1.2rem;
                font-size :0.32rem;
                font-weight :500;
            .right .login
                cursor:pointer;
                color :#333;
                line-height :1.2rem;
                font-size :0.32rem;
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
                top:0.25rem;
                right :-0.15rem;

</style>

