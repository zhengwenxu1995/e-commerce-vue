<template>
    <div class="order-frame">
        <div class="order-child-frame">
            <h1 class="order-title">订购内容</h1>
            <ul class="order-header">
                <li class="order-header-cont"><h1 class="item-title">订单内容</h1></li>
                <li class="order-header-price"><h1 class="item-title">单价</h1></li>
                <li class="order-header-quantity"><h1 class="item-title">数量</h1></li>
                <li class="order-header-subtotal"><h1 class="item-title">小计</h1></li>
            </ul>
            <ul class="order-list">
                <li class="order-item" v-for="item of orderList" :key="item.productId">
                    <div class="commerce">
                        <img class="commerce-img" :src="item.productImage" alt="">
                        <span class="commerce-name">{{item.productName}}</span>
                    </div>
                    <div class="price">
                        <span class="price-money">
                           {{item.productPrice | currency("￥",2)}}
                        </span>
                    </div>
                    <div class="number">
                        <span class="number-x">x{{item.productNum}}</span>
                        <em class="stock">有货</em>
                    </div>
                    <div class="sub-total">
                        <span class="sub-money">{{item.productNum*item.productPrice | currency("￥",2)}}</span>
                    </div>
                </li>
            </ul>
            <div class="order-details">
                <ul class="details-cont">
                    <li class="details-item"><span class="details-title">商品小计:</span><em class="details-money">{{subTotal | currency("￥",2)}}</em></li>
                    <li class="details-item"><span class="details-title">运费:</span><em class="details-money">{{shipping | currency("￥",2)}}</em></li>
                    <li class="details-item"><span class="details-title">折扣:</span><em class="details-money">{{discount | currency("￥",2)}}</em></li>
                    <li class="details-item"><span class="details-title">税:</span><em class="details-money">{{tax |currency("￥",2)}}</em></li>
                    <li class="details-item"><span class="details-title">订单合计:</span><em class="details-money total-order">{{totalPrice | currency("￥",2)}}</em></li>
                </ul>
            </div>
            <div class="btn-frame">
                <router-link to="/address" class="btn-pre">返回</router-link>
                <a href="javascript:;" class="btn-pay" @click="orderSubmit">继续付款</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export  default {
        OrderList:"OrderList",
        data(){
            return{
                orderList:[],
                shipping:10,
                subTotal:0,
                discount:200,
                tax:100
            }
        },
        methods:{
            init(){
                axios.get("/users/order").then((res)=>{
                    let data=res.data;
                    if(data.status==200){
                        this.orderList=data.result;
                        this.orderList.forEach((item)=>{
                            this.subTotal+=item.productNum*item.productPrice;
                        })
                    }
                })
            },
            orderSubmit(){
                let params={
                    addressId:this.$route.query.addressId,
                    totalPrice:this.totalPrice
                }
                axios.post("/users/addorder",params).then((res)=>{
                     let data=res.data;
                     console.log(data)
                     if(data.status==200){
                        // this.$router.push({ name: 'user', params: { userId: 123 }})
                         this.$router.push({ 
                             path:'/ordersuccess',
                             query: { 
                                 orderId:data.result.orderId,
                                 orderTotal:data.result.orderTotal
                                }
                             })
                             console.log(data.result.orderId+ ""+data.result.orderTotal)
                     }
                 })
            }
        },
        mounted() {
            this.init()
        },
        computed:{
            totalPrice(){
                return this.subTotal+this.shipping-this.discount+this.tax;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.order-frame
    background :#f5f7fc;
    width :100%;
    padding-bottom :1.5rem;
    .order-child-frame
        width :80%;
        margin :0 auto;
        .order-title
            font-size :0.5rem;
            padding-bottom :0.4rem;
            color :#333;
        .order-header
            display :flex;
            padding :0 0.64rem;
            background:#605f5f;
            .order-header-cont
                flex :3;
                text-align:center;
            .order-header-price
                flex :1;
                text-align:center;
            .order-header-quantity
                flex :1;
                text-align:center;
            .order-header-subtotal
                flex :1;
                text-align:center;
            .item-title
                color:#fff;
                font-size :0.34rem;
                padding :0.25rem 0;
        .order-list
            background :#fff;
            .order-item
                padding:0.64rem 0.64rem;
                border :1px solid #e9e9e9;
                border-top :0;
                display :flex
                .commerce
                     flex :3;
                    .commerce-img
                        height :1.5rem;
                        width :1.5rem;
                        border:1px solid #e9e9e9
                    .commerce-name
                        font-size :0.38rem;
                        font-weight :600;
                        color:#333;
                        padding-left :0.4rem;
                        
                .price
                    flex :1;
                    line-height :1.5rem;
                    text-align :center;
                    .price-money
                        font-size :0.34rem;
                        color:#333;
                .number
                    flex :1;
                    text-align :center;
                    .number-x
                        font-size :0.34rem;
                        color:#333;
                        display :inline-block;
                        padding :0.1rem  0.2rem;
                        border:1px solid #e9e9e9;
                        border-radius :0.08rem;
                    .stock
                        font-size :0.25rem;
                        display :block;
                        color:#f00;
                        padding-top:0.2rem;
                        text-spaing:0.1rem;
                .sub-total
                    flex :1;
                    line-height :1.5rem;
                    text-align :center;
                    .sub-money
                        font-size :0.34rem;
                        color:#333;
        .order-details
            padding :0.6rem 0;
            overflow :hidden;
            .details-cont
                float :right;
                width :4.5rem;
                .details-item
                    padding:0.15rem 0;
                    overflow :hidden;
                .details-title
                    color:#333;
                    display :inline-block;
                    width :2rem;
                    text-align :right;
                    font-size :0.45rem;
                .details-money
                    font-size :0.45rem;
                    float:right;
                .total-order
                    color :#d1434a;
                    font-weight :600;
        .btn-frame
            width :100%;
            padding :0.3rem 0;
            overflow :hidden;
            .btn-pre
                padding :0.2rem 0.7rem;;
                border:1px solid #d1434a;
                font-size:0.34rem;
                font-weight :600;
                color :#d1434a;
                background :#fff;
                letter-spacing :0.1rem;
                transition: all 0.5s;
                float :left;
            .btn-pre:hover
                background :#ffe5e6;
            .btn-pay
                padding :0.2rem 0.7rem;;
                border:1px solid #d1434a;
                font-size:0.34rem;
                font-weight :600;
                color :#fff;
                background :#d1434a;
                letter-spacing :0.1rem;
                transition: all 0.5s;
                float :right;
            .btn-pay:hover
                background :#f16f75;
                border:1px solid #f16f75;
</style>
