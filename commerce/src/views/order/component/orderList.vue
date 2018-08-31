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
                <li class="order-item">
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export  default {
        OrderList:"OrderList",
        data(){
            return{

            }
        },
        methods:{

        },
        mounted() {
            
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
</style>
