<template>
    <div class="cont">
        <div class="commodity-list">
            <div class="commoditys" v-for="item of shopCar" :key="item.productId">
                <ul class="commodity-one">
                    <li class="commodity-cont">
                        <div class="commodity-show">
                           <a href="javascript:viod(0)"><i class="iconfont check"  v-if="item.checked">
                                &#xe617;
                            </i>
                            <i class="iconfont not-check" v-if="!item.checked">
                                &#xe61a;
                            </i></a>
                        <div class="commodity-infor">
                            <img :src="item.productImage" alt="" style="width:80px;height:80px;">
                            <span class="commodity-name">{{item.productName}}</span>
                        </div>
                        </div>
                    </li>
                    <li class="price"><span>{{item.productPrice}}.00</span></li>
                    <li class="number">
                        <a href="javascript:void(0);" class="plus">-</a><span class="now-comm-number">{{item.productNum}}</span><a href="javascript:void(0);" class="less">+</a>
                    </li>
                    <li class="sum">
                        <span class="sum-number">{{item.productPrice*item.productNum}}.00</span>
                    </li>
                    <li class="del-btn">
                        <a href="javascript:void(0)" @click="showWin">
                            <i class="iconfont delete-btn">&#xe613;</i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="select-all">
            <ul class="menu-list">
                <li class="all-btn"><i class="iconfont icon-all" v-if="allCheck">&#xe61a;</i><i class="iconfont icon-del" v-if="!allCheck">&#xe617;</i></li>
                <li class="all-del">
                    <span class="all-intord">全选</span><span class="del-intord">删除全选</span>
                </li>
                <li class="tatal-cont">
                    <span class="total-word">总价:</span>
                    <em class="total-money">6900.00</em>
                </li>
                <li class="total">
                    <a href="javasrcipt:void(0)" class="total-btn">结算</a>
                </li>
            </ul>
        </div>
        <transition name="windows">
            <windows v-if="delShowFrame" @closeWin="closeWin">
                <div slot="cont">
                    <p>确定要删除此项商品！</p>
                    <a href="JavaScript:voed(0)" @click="delconfirm">确定</a>
                    <a href="JavaScript:void(0)" @click="showWin">取消</a>
                </div>
            </windows>
        </transition>
    </div>
</template>

<script>
import windows from "@/components/windows.vue"
import axios from "axios";
export default {
    ShopCarList:"ShopCarList",
    components:{
        windows
    },
    data(){
        return {
            check:false,
            allCheck:false,
            shopCar:[],
            delShowFrame:false
        }
    },
    methods:{
        //确认删除
         delconfirm(){

         },
        //显示删除框
       showWin(){
           if(this.delShowFrame){
               this.delShowFrame=false;
           }else{
               this.delShowFrame=true;
           }
            
        },
        //关闭删除框
        closeWin(val){
            this.delShowFrame=val;
        },
        getShopCar(){
            //使用vue-cookie
            // let params={
            //     userId:this.$cookie.get("userId")
            // }
            axios.get("/users/shopcar").then(
                (res)=>{
                    let data=res.data;
                    if(data.status==200){
                        this.shopCar=data.relute;
                    }
                }
            )
        },
        delShopCarCommerce(commerceId){
            let params={
                productId:commerceId
            }
            axios.post("/users/delcommerce",params).then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.getShopCar()
    },
}
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl";
.cont
    background :#f5f7fc;
    width:100%;
    padding:0.7rem 0 2rem 0;
    .select-all
        margin:0 auto;
        width :80%;
        background:#fff;
    .commodity-list
        margin:0 auto;
        width :80%;
        padding-bottom:0.6rem;
    .commoditys
        height :2.5rem;
        width :100%;
        padding-bottom :0.6rem;
    .commodity-one
        width :100%;
        display :flex;
        height :2.5rem;
        background :#fff;
        li
            font-family:Microsoft YaHei; 
            text-align:center;
            padding:0;
            font-size :0.35rem;
            color:#333;
            height :2.5rem;
            line-height :2.5rem;
            font-font-family :Microsoft YaHei;
        .commodity-cont
            text-align:left;
            flex:2.5;
        .price
            flex:1;
        .number
            flex:1.5;
        .sum
            flex:1;
        .del-btn
            flex:1;
        .commodity-show
                padding-left:0.5rem;
                height :2.5rem;
            .commodity-infor
                margin-left :0.1rem;
                line-height :2.5rem;
                display :inline-block;
            .check
                font-size :0.5rem;
                color :#f40;
            .not-check
                font-size :0.5rem;
                color :#f40;
                .commodity-name
                    display :inline-block;
                    margin-left :0.5rem;
            .sum-number
                color :#dc4f47;
            .delete-btn
                font-size:0.5rem;
                color :#333;
            .delete-btn:hover
                color :#F40;
            .plus
                border:0.02rem solid #aaa;
                border-right :0;
                padding:0.05rem 0.25rem;
                border-radius :0.1rem 0 0 0.1rem;
                color:#333;
                background :#f0f0f0;
            .now-comm-number
                display :inline;
                background:#fff;
                border-top:0.02rem solid #aaa;
                border-bottom :0.02rem solid #aaa;
                padding :0.05rem 0.3rem;
                overflow :hidden;
            .less
                border:0.02rem solid #aaa;
                border-left :0;
                padding:0.05rem 0.25rem;
                border-radius :0 0.1rem 0.1rem 0;
                color:#333;
                background :#f0f0f0;
    .menu-list
        display :flex;
        li 
            line-height :1.2rem;
            font-size :0.4rem;
            box-sizing :border-box;
        .all-btn
            flex:0.2;   
            padding-left:0.5rem;
        .all-btn i
            font-size :0.6rem;
            color :#f40;
        .tatal-cont
            flex:4.2;
            text-align:right; 
            padding-right:0.2rem;
            .total-money
                color:#dc4f47;
                font-weight:600;
                padding :0 0.4rem 0 0.2rem;
        .total
            flex:0.6;
            line-height :0;
            .total-btn
                display :inline-block;
                background :#dc4f47;
                color:#fff;
                font-weight :600;
                height :100%;
                line-height :1.2rem;
                text-align:center;
                box-sizing :border-box;
                border :1px solid #f00;
                width :100%;
        .all-del
            flex:1;
            .all-intord
                padding:0 0.4rem 0 0.3rem;
            .del-intord
                padding:0 0.2rem 0 0.3rem;
    .windows-enter-active 
        transition: all .3s ease;
    .windows-leave-active 
        transition: all .8s ease;
    .windows-enter, .windows-leave-to 
        transform :translateY(0.12rem);
        opacity :0;
</style>
