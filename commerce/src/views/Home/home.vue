<template>
  <div>
    <sort-price></sort-price>
    <goods-list></goods-list>
  </div>
</template>

<script>
import SortPrice from "@/views/Home/component/SortPrice.vue"
import GoodsList from "@/views/Home/component/goodsList.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    SortPrice:SortPrice,
    GoodsList:GoodsList
  }
}
</script>

<style>

</style>
