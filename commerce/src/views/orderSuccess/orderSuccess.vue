<template>
    <div class="cont">
        <headers></headers>
        <nav-cont><span slot="navShow">购买成功</span></nav-cont>
        <order-success-step></order-success-step>
        <success-cont></success-cont>
        <foot></foot>
    </div>
</template>

<script>
import Headers from "@/components/header.vue";
import NavCont from "@/components/NavCont.vue";
import Foot from "@/components/foot.vue";
import OrderSuccessStep from "@/views/orderSuccess/components/orderSuccessStep.vue"
import SuccessCont from "@/views/orderSuccess/components/successCont.vue"
export default {
    OrderSuccess:"OrderSuccess",
    data(){
        return{

        }
    },
    components:{
        Headers,
        NavCont,
        Foot,
        OrderSuccessStep,
        SuccessCont
    }
}
</script>

<style lang="stylus" scoped>

</style>
