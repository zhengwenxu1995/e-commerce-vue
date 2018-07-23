<template>
  <div>
    <headers></headers>
    <nav-cont></nav-cont>
  </div>
</template>

<script>
import Headers from "@/views/Home/component/header.vue"
import NavCont from "@/views/Home/component/NavCont.vue"
export default {
  data(){
    return {

    }
  },
  components:{
    Headers:Headers,
    NavCont:NavCont
  }
}
</script>

<style>

</style>
