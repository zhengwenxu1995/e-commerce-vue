<template>
    <div class="win-background">
        <div class="win-frame">
            <i class="iconfont win-off" @click="closeWin">&#xe60f;</i>
            <slot name="cont"></slot>
        </div>
    </div>

</template>
<script>
//import axios from "axios";
export default {
    Windows:"Windows",
    data(){
        return{
            showWin:""
        }
    },
    methods:{
        closeWin(){
            this.showWin=false;
            this.$emit("closeWin",this.showWin);
        }
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';
 .win-background
    height :100%;
    width :100%;
    background :rgba(0,0,0,.5);
    position :fixed;
    z-index:10;
    top:0;
    left :0;
    .win-frame
        top:50%;
        left :50%;
        height :5.2rem;
        width :12rem;
        padding :0.5rem;
        box-sizing :border-box;
        margin-left :-6rem;
        margin-top :-3.625rem;
        background :#fff;
        position :fixed;
        z-index:3;
        .win-off
            font-size:0.5rem
            position :absolute;
            right :0.2rem;
            top:0.2rem;
            color:$fontColor;
            cursor :pointer;
            transition :transform 0.4s;
        .win-off:hover
            transform :rotate(-90deg);
</style>
