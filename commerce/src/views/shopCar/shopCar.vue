<template>
    <div>
      <headers></headers>
      <nav-cont>
        <span slot="navShow">
           购物车
        </span>
      </nav-cont>
      <shop-car-title></shop-car-title>
      <shop-car-list></shop-car-list>
      <foot></foot>
    </div>
</template>

<script>
import ShopCarTitle from "./component/shopCarTitle.vue";
import ShopCarList from "./component/shopcarlist.vue";
import Headers from "@/components/header.vue";
import NavCont from "@/components/NavCont.vue";
import Foot from "@/components/foot.vue";
export default {
  data(){
      return{

      }
  },
  components:{
    ShopCarTitle,
    ShopCarList,
    Headers,
    NavCont,
    Foot
  }
}
</script>

<style lang="stylus" scoped >


</style>

