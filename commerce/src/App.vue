<template>
  <div id="app">
    <headers></headers>
    <nav-cont></nav-cont>
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
import  Headers from "@/components/header.vue"
import  NavCont from "@/components/NavCont.vue"
import  Foot from "@/components/foot.vue"
export default {
  name: 'App',
  components:{
    Headers,
    NavCont,
    Foot
  }
}
</script>

<style>

</style>

