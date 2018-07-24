<template>
  <div>
    <headers></headers>
    <nav-cont></nav-cont>
    <sort-price></sort-price>
    <goods-list></goods-list>
  </div>
</template>

<script>
import Headers from "@/views/Home/component/header.vue"
import NavCont from "@/views/Home/component/NavCont.vue"
import SortPrice from "@/views/Home/component/SortPrice.vue"
import GoodsList from "@/views/Home/component/goodsList.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    Headers:Headers,
    NavCont:NavCont,
    SortPrice:SortPrice,
    GoodsList:GoodsList
  }
}
</script>

<style>

</style>
