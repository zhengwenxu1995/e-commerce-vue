<template>
 <div class="nav">
    <div class="nav-cont">
        <div class="nav-list">
            <router-link class="home" to="">Home</router-link> / <router-link class="goodList" to=""><slot name="navShow"></slot></router-link>
        </div>
    </div>
 </div>
</template>

<script>
export default {
    NavCont:"NavCont",
    data(){
      return{

      }
    }
}
</script>

<style lang="stylus" scoped>
.nav
    width :100%;
    background :#f0f0f0;
    .nav-cont
        width :80%;
        margin :0 auto;
        padding :0.3rem 0.6rem;
        font-size :0.28rem;
        color:#999;
        .home
            color :#999;
        .goodList
            color:#d1434a;
        .home:hover,.goodList:hover
            color :#d1434a;
</style>

