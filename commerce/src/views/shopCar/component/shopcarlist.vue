<template>
    <div class="cont">
        <div class="commodity-list">
            <div class="commoditys">
                <ul class="commodity-one">
                    <li class="commodity-cont">
                        <div class="commodity-show">
                            <i class="iconfont check"  v-if="check">
                                &#xe617;
                            </i>
                            <i class="iconfont not-check" v-if="!check">
                                &#xe61a;
                            </i>
                        <div class="commodity-infor">
                            <img src="static/img/1.jpg" alt="" style="width:80px;height:80px;">
                            <span class="commodity-name">xiaoni</span>
                        </div>
                        </div>
                    </li>
                    <li class="price"><span>2449</span></li>
                    <li class="number">
                        <a href="javascript:void(0);" class="plus">-</a><span class="now-comm-number">1</span><a href="javascript:void(0);" class="less">+</a>
                    </li>
                    <li class="sum">
                        <span class="sum-number">2499</span>
                    </li>
                    <li class="del-btn">
                        <a href="javascript:void(0)">
                            <i class="iconfont delete-btn">&#xe613;</i>
                        </a>
                    </li>
                </ul>
            </div>

            <div class="commoditys">
                <ul class="commodity-one">
                    <li class="commodity-cont">
                        <div class="commodity-show">
                            <i class="iconfont check"  v-if="check">
                                &#xe617;
                            </i>
                            <i class="iconfont not-check" v-if="!check">
                                &#xe61a;
                            </i>
                        <div class="commodity-infor">
                            <img src="static/img/1.jpg" alt="" style="width:80px;height:80px;">
                            <span class="commodity-name">xiaoni</span>
                        </div>
                        </div>
                    </li>
                    <li class="price"><span>2449</span></li>
                    <li class="number">
                        <a href="javascript:void(0);" class="plus">-</a><span class="now-comm-number">1</span><a href="javascript:void(0);" class="less">+</a>
                    </li>
                    <li class="sum">
                        <span class="sum-number">2499</span>
                    </li>
                    <li class="del-btn">
                        <a href="javascript:void(0)">
                            <i class="iconfont delete-btn">&#xe613;</i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
        <div class="select-all">
            <ul class="menu-list">
                <li class="all-btn"><i class="iconfont icon-all" v-if="allCheck">&#xe61a;</i><i class="iconfont icon-del" v-if="!allCheck">&#xe617;</i></li>
                <li class="all-del">
                    <span class="all-intord">全选</span><span class="del-intord">删除全选</span>
                </li>
                <li class="tatal-cont">
                    <span class="total-word">总价:</span>
                    <em class="total-money">6900</em>
                </li>
                <li class="total">
                    <a href="javasrcipt:void(0)" class="total-btn">结算</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    ShopCarList:"ShopCarList",
    data(){
        return {
            check:false,
            allCheck:false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl";
.cont
    background :#f5f7fc;
    width:100%;
    padding:0.7rem 0 2rem 0;
    .select-all
        margin:0 auto;
        width :80%;
        background:#fff;
    .commodity-list
        margin:0 auto;
        width :80%;
        padding-bottom:0.6rem;
    .commoditys
        height :2.5rem;
        width :100%;
        padding-bottom :0.6rem;
    .commodity-one
        width :100%;
        display :flex;
        height :2.5rem;
        background :#fff;
        li
            font-family:Microsoft YaHei; 
            text-align:center;
            padding:0;
            font-size :0.35rem;
            color:#333;
            height :2.5rem;
            line-height :2.5rem;
            font-font-family :Microsoft YaHei;
        .commodity-cont
            text-align:left;
            flex:2.5;
        .price
            flex:1;
        .number
            flex:1.5;
        .sum
            flex:1;
        .del-btn
            flex:1;
        .commodity-show
                padding-left:0.5rem;
                height :2.5rem;
            .commodity-infor
                margin-left :0.1rem;
                line-height :2.5rem;
                display :inline-block;
            .check
                font-size :0.5rem;
                color :#f40;
            .not-check
                font-size :0.5rem;
                color :#f40;
                .commodity-name
                    display :inline-block;
                    margin-left :0.5rem;
            .sum-number
                color :#dc4f47;
            .delete-btn
                font-size:0.5rem;
                color :#333;
            .plus
                border:0.02rem solid #aaa;
                border-right :0;
                padding:0.05rem 0.25rem;
                border-radius :0.1rem 0 0 0.1rem;
                color:#333;
                background :#f0f0f0;
            .now-comm-number
                display :inline;
                background:#fff;
                border-top:0.02rem solid #aaa;
                border-bottom :0.02rem solid #aaa;
                padding :0.05rem 0.3rem;
                overflow :hidden;
            .less
                border:0.02rem solid #aaa;
                border-left :0;
                padding:0.05rem 0.25rem;
                border-radius :0 0.1rem 0.1rem 0;
                color:#333;
                background :#f0f0f0;
    .menu-list
        display :flex;
        li 
            line-height :1.2rem;
            font-size :0.4rem;
            box-sizing :border-box;
        .all-btn
            flex:0.2;   
            padding-left:0.5rem;
        .all-btn i
            font-size :0.6rem;
            color :#f40;
        .tatal-cont
            flex:4.2;
            text-align:right; 
            padding-right:0.2rem;
            .total-money
                color:#dc4f47;
                font-weight:600;
                padding :0 0.4rem 0 0.2rem;
        .total
            flex:0.6;
            line-height :0;
            .total-btn
                display :inline-block;
                background :#dc4f47;
                color:#fff;
                font-weight :600;
                height :100%;
                line-height :1.2rem;
                text-align:center;
                box-sizing :border-box;
                border :1px solid #f00;
                width :100%;
        .all-del
            flex:1;
            .all-intord
                padding:0 0.4rem 0 0.3rem;
            .del-intord
                padding:0 0.2rem 0 0.3rem;
</style>
