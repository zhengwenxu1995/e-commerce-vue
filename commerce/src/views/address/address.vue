<template>
    <div>
        <headers></headers>
        <nav-cont>
            <span slot="navShow">地址</span>
        </nav-cont>
        <address-list></address-list>
        <foot></foot>
    </div>
</template>

<script>
import Headers from "@/components/header.vue";
import NavCont from "@/components/NavCont.vue";
import Foot from "@/components/foot.vue";
import AddressList from "@/views/address/component/addressList.vue"
export default {
    Address:"Address",
    data(){
        return{
            //参数
        } 
    },
    methods:{
        //方法
    },
    mounted(){   //beforeCreate  created  beforeMount   mounted   beforeUpdata   updated    beforeDestory  destoryed
        //生命周期函数
    },
    components:{
        //组件
        Headers,
        NavCont,
        Foot,
        AddressList
    },
    computed:{
        //计算属性
    },
    filters:{
        //过滤器
    },
    watch:{
        //侦听器
    },
    props:{
        //接受子组件传至
    }
}
</script>

<style lang="stylus" scoped>


</style>

