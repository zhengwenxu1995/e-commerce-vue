<template>
    <div class="cont">
        <headers></headers>
        <nav-cont></nav-cont>
        <order-step></order-step>
        <order-list></order-list>
        <foot></foot>
    </div>
</template>

<script>
import Headers from "@/components/header.vue";
import NavCont from "@/components/NavCont.vue";
import Foot from "@/components/foot.vue";
import OrderStep from "@/views/order/component/orerStep.vue"
import OrderList from "@/views/order/component/orderList.vue"
 export default {
     data(){
         return{

         }
     },
     components:{
         OrderStep,
         OrderList,
         Headers,
         NavCont,
         Foot
     }
 }
    
</script>

<style lang="stylus" scoped>

</style>
