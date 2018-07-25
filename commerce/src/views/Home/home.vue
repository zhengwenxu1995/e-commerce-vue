<template>
  <div>
    <headers></headers>
    <nav-cont><span slot="navShow">Goods</span></nav-cont>
    <sort-price></sort-price>
    <goods-list></goods-list>
    <foot></foot>
  </div>
</template>

<script>
import  Headers from "@/components/header.vue"
import  NavCont from "@/components/NavCont.vue"
import  Foot from "@/components/foot.vue"
import SortPrice from "@/views/Home/component/SortPrice.vue"
import GoodsList from "@/views/Home/component/goodsList.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    SortPrice:SortPrice,
    GoodsList:GoodsList,
    Headers,
    NavCont,
    Foot
  }
}
</script>

<style>

</style>
