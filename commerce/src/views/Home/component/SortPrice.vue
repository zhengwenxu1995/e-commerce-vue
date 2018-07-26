<template>
 <div class="sort">
    <div class="sort-cont">
        <div class="price-sort">
            <span>
                排序方式：
            </span>
            <a href="#" class="default">
            &nbsp;默认
            </a>
            <a href="#" class="price">
                单价
            </a><i class="iconfont">&#xe79d;</i>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    SortPrice:"SortPrice",
    data(){
      return{

      }
    }
    
}
</script>

<style lang="stylus" scoped>
    .sort
        background:#f5f7fc;
        width: 100%;
        padding:60px 0 30px 0;
        .sort-cont
            display:flex;
            justify-content:flex-end;
            width:80%;
            padding:0 20px;
            margin:0 auto;
            background: #fff;
            height:1.01rem;
            line-height:1.01rem;
            .default
                color:#ee7a23;
            .price
                color:#333;
            .price:hover
                color:#ee7a23;
</style>

