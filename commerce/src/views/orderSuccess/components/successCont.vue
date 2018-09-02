<template>
    <div class="cont">
        <div class="success-cont">
            <div class="suc-img">
                <img src="/static/img/ok-2.png" alt="">
            </div>
            <div class="suc-details">
                <h1 class="suc-title">您已经购买成功！</h1>
                <h1 class="suc-title">您的订单正在处理中！</h1>
                <p class="order-suc"><span class="order-id">订单编号:</span><em class="id-cont">7201809021336469</em><span class="order-total">订单金额:</span><em class="order-money">￥448.00</em></p>
            </div>
            <dir class="order-suc-btn">
                <router-link class="shop-car" to="/shopcar">购物车</router-link>
                <router-link class="goods" to="/">商品列表</router-link>
            </dir>
        </div>
    </div>
</template>

<script>
// import SuccessCont from "@/views/orderSuccess/successCont.vue"
import axios from "axios"
export default {
    SuccessCont:"SuccessCont",
    data(){
        return{

        }
    },
    methods:{
        init(){
            axios.post().then((res)=>{

            })
        }
    },
    props:{

    },
    mounted(){

    }
}
</script>

<style lang="stylus" scoped>
.cont
    background :#f5f7fc;
    width :100%;
    padding-bottom :1rem;
    .success-cont
        width :80%;
        margin :0 auto;
        .suc-img
            width :100%;
            text-align :center;
            padding : 1.5rem 0;
        .suc-img img
            width :2.6rem;
        .suc-details
            text-align :center;
            .suc-title
                font-size :0.5rem;
                padding-bottom :0.35rem;
                color :#333;
            .order-suc
                text-align :center;
                .order-id
                    font-size :0.4rem;
                    color :#999;
                    padding-right :0.2rem;
                .id-cont
                    padding :0.1rem;
                    font-size :0.4rem;
                    color :#999;
                .order-total
                    padding :0 0.2rem;
                    font-size :0.4rem;
                    color :#999;
                .order-money
                    padding :0 0.1rem;
                    font-size :0.4rem;
                    color :#999;
        .order-suc-btn
            padding-top:0.5rem;
            width :100%;
            text-align :center;
            padding-left :0;
            .shop-car
                display :inline-block;
                color :#d1434a;
                background :#fff;
                border :1px solid #d1434a;
                font-size :0.34rem;
                padding : 0.25rem 1.5rem;
                letter-spacing :0.1rem;
                font-weight :600;
                margin-right:0.5rem;
            .goods
                margin-left:0.5rem;
                display :inline-block;
                font-size :0.34rem;
                border 1px solid #d1434a;
                background :#d1434a;
                padding : 0.25rem 1rem;
                font-weight :600;
                color:#fff;
                letter-spacing :0.1rem;
            .shop-car:hover
                background :#ffe5e6;
</style>        
