<template>
  <div>
    <headers></headers>
    <nav-cont></nav-cont>
    <sort-price></sort-price>
  </div>
</template>

<script>
import Headers from "@/views/Home/component/header.vue"
import NavCont from "@/views/Home/component/NavCont.vue"
import SortPrice from "@/views/Home/component/SortPrice.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    Headers:Headers,
    NavCont:NavCont,
    SortPrice:SortPrice
  }
}
</script>

<style>

</style>
