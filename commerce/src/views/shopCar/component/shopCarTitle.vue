<template>
    <div class="header-shopCar">
       <div class="cont">
            <div class="title">
                <h1 class="title-cont">
                    我的购物车
                </h1>
            </div>
            <div class="menu-cont">
                <ul class="menu-list">
                    <li class="items">商品</li>
                    <li class="price">单价</li>
                    <li class="quantity">数量</li>
                    <li class="subtotal">小计</li>
                    <li class="del">移除</li>
                </ul>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    ShopCarTitle:"ShopCarTitle",
    data(){
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
.header-shopCar
    background:#f5f7fc;
    width :100%;
    .cont
        margin :0 auto ;
        width :80%;
        .title .title-cont
            padding:0.5rem 0 0.3rem 0;
            font-family:Microsoft YaHei; 
            font-size:0.5rem;
            font-weight:600;
            color:#333;
        .menu-cont
            background :#5f5f5f;
        .menu-list
            display :flex;
            li
                text-align:center;
                font-size :0.35rem;
                padding:0.2rem 0;
                color:#fff;
                font-font-family :Microsoft YaHei;
            .items
                flex:3;
            .price
                flex:1;
            .quantity
                flex:1;
            .subtotal
                flex:1;
            .del
                flex:1;
</style>
