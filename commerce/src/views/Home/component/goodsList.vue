<template>
 <div class="goods">
    <div class="good-cont">
        <div class="goods-price">
            <dl>
                <dt class="title">PRICE(单价范围):</dt>
                <dd><a>All(全部):</a></dd>
                <dd><a>0.00 - 100.00</a></dd>
            </dl>
        </div>
        <div class="goods-list">
        烧给你
        </div>
    </div>
 </div>
</template>

<script>
export default {
    GoodsList:"GoodsList",
    data(){
      return{

      }
    }
}
</script>

<style lang="stylus" scoped>
    .goods
        background:#f5f7fc;
        width:100%;
        height:10rem;
        .good-cont
            width:80%;
            margin:0 auto;
            display:flex;
            flex-direction:row;
            .goods-price
                border:1px solid #f00;
                flex:1;
            .goods-list
                border:1px solid #888;
                flex:4;
</style>

