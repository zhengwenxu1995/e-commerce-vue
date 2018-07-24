<template>
 <div class="goods">
    <div class="good-cont">
        <div class="goods-price">
            <dl>
                <dt class="title">PRICE(单价范围):</dt>
                <dd><a class="select">All(全部):</a></dd>
                <dd><a>0.00 - 100.00</a></dd>
            </dl>
        </div>
        <div class="goods-list">
            <div class="goods-show">
                <a href="#">
                    <div class="goods-img">
                        <img src="static/img/zipai.jpg" alt="">
                    </div>
                    <div class="goods-info">
                        <h3 class="goods-title">自拍杆</h3>
                        <p>
                            <em class="rmb">￥</em>
                            <span class="money">93.00</span>
                        </p>
                        <div class="addShopCar">
                            加入购物车
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
export default {
  GoodsList: "GoodsList",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
.goods 
    background: #f5f7fc;
    width: 100%;
    height: 10rem;
    .good-cont 
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        .goods-price 
            flex: 1;
        .goods-list 
            flex: 4;
        .title 
            color: #333;
            margin-bottom: 0.6rem;
            font-weight: 700;
            letter-spacing: 0.05rem;
            font-size: 0.32rem;
        dd 
            margin: 0.4rem 0;
        dd a 
            line-height: 0.5rem;
            color: #333;
        dd .select 
            padding: 0.05rem 0.3rem;
            font-weight: 700;
            font-size: 0.28rem;
            color: #ee7a23;
            border-left: 2px solid #ee7a23;
        .goods-show
            width:4.65rem;
            border:2px solid #e9e9e9;
            height :8rem;
          .goods-show a
            color:#333;
            .goods-img img
                width 100%;
          
</style>

