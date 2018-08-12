<template>
  <div>
    <headers></headers>
    <nav-cont><span slot="navShow">Goods</span></nav-cont>
    <sort-price></sort-price>
    <goods-list :goodsList="goodsList"></goods-list>
    <foot></foot>
  </div>
</template>

<script>
import  Headers from "@/components/header.vue"
import  NavCont from "@/components/NavCont.vue"
import  Foot from "@/components/foot.vue"
import SortPrice from "@/views/Home/component/SortPrice.vue"
import GoodsList from "@/views/Home/component/goodsList.vue"
import axios from "axios"
export default {
  data(){
    return {
      goodsList:[],
    }
  },
  methods:{
    homeInfo(){
      axios.get("/goods").then(this.success);
    },
    success(res){
      console.log(res)
      let resl=res.data;
      if(resl.status=="200" && resl.result!=null){
          this.goodsList=resl.result;
          // console.log(this.goodsList)
      }
    }     
  },
  mounted() {
    this.homeInfo();
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
