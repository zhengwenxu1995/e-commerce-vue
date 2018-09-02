<template>
    <div class="parent-frame">
        <div class="child-frame">
            <div class="step-cont">
                <ul class="step-list">
                    <li class="current-step"><h2 class="current-title">邮寄地址</h2></li>
                    <li class="after-step"><h2 class="after-title">查看订单</h2></li>
                    <li class="after-step"><h2 class="after-title">付款</h2></li>
                    <li class="after-step"><h2 class="after-title">订单确认</h2></li>
                </ul>
            </div>
            <div class="address-cont">
                <h1 class="address-title">地址列表</h1>
                <div class="address-frame">
                    <ul class="address-list">
                        <li class="address-item" v-bind:class="{select:index==selectNow}"  v-for="(item,index) of addressListFilter" :key="item.addressId" @click="setSelect(index)">
                            <dl class="address-cont">
                                <dt class="user-name">{{item.userName}}</dt>
                                <dd class="user-address">{{item.postCode+item.srteetName}}</dd>
                                <dd class="user-tel">{{item.tel}}</dd>
                            </dl>
                            <div class="default-select">
                                <span class="default-select-cur" v-if="item.isDefault">默认选择</span>
                                <span class="default-select-set" v-if="!item.isDefault" @click="setDefault(item.addressId)">设置默认</span>
                                <i class="iconfont del" @click="showWin(item.addressId)">&#xe613;</i>
                            </div>
                        </li>
                       

                        <li class="add-address">
                            <div class="add-address-cont">
                                <i class="add">
                                    <svg id="icon-add" viewBox="0 0 31 32" width="100%" height="100%"><title>add</title> <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path></svg>
                                </i>
                                <p class="add-msg">添加新地址</p>
                            </div>
                        </li>
                    </ul>
                    <div class="more-segm">
                        <a href="javascript:;" @click="expandAddress">
                            <span class="more-cont">more</span>
                            <i v-if="more" class="iconfont more">&#xe60b;</i><i v-if="!more" class="iconfont more">&#xe60b;</i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="method-list">
                <h1 class="method-title">邮寄方式</h1>
                <div class="method-cont">
                    <dl class="method-cont-list">
                        <dt class="stand">标准运输</dt>
                        <dl class="free">自由</dl>
                        <dl class="note">一旦发货，订单应在1-7个工作日内到达目的地。</dl>
                    </dl>
                </div>
            </div>

            <div class="next-cont">
                <!-- <a href="javascript:;" class="next-btn">下一步</a> -->
                <router-link :to="{path:'/orderview',query:{'addressId':this.selectAddressId}}" class="next-btn">下一步</router-link>
            </div>

        </div>
        
        <transition name="windows">
            <windows v-if="delShowFrame" @closeWin="closeWin">
                <div slot="cont" class="delMsg-cont">
                    <p class="delMsg">确定要删除此项商品！</p>
                    <a href="JavaScript:void(0)" class="delSubmit" @click="delAddress">确定</a>
                    <a href="JavaScript:void(0)" class="delClose" @click="showWin">取消</a>
                </div>
            </windows>
        </transition>
    </div>
</template>

<script>
import axios from "axios"
import windows from "@/components/windows.vue" 
export default {

    AddressList:"AddressList",
    data(){
        return {
            limit:3,
            defaultShow:true,
            more:true,
            addressList:[{addressId:""}],
            selectNow:0,
            delShowFrame:false,
            deladdressId:''
        }
    },
    methods:{
        init(){
            axios.get("/users/address").then((res)=>{
                let data =res.data;
                if(data.status=="500"){
                    console.log(data.msg)
                }else{
                    this.addressList=data.result;
                    // console.log(data.result)
                }
            })
        },
        expandAddress(){
            if(this.limit===3){
                this.limit=this.addressList.length;
            }else{
                this.limit=3;
            }
        },
        setSelect(index){
            this.selectNow=index;
            // this.selectAddressId=selectAddressId;
            // console.log(this.selectAddressId+"FF")
        },
        setDefault(addressId){
            let params={
                addressId:addressId
            }
            axios.post("/users/setdefault",params).then((res)=>{
                // console.log(res)
                let data=res.data;
                if(data.status==200){
                    console.log("删除成功！");
                    //重新加载数据
                    this.init();
                }
            })
        },
        //现实删除框
        showWin(addressId){
           if(this.delShowFrame){
               this.delShowFrame=false;
               this.deladdressId="";
           }else{
               this.deladdressId=addressId;
               this.delShowFrame=true;
           }
            
        },
        //关闭删除框
        closeWin(val){
            this.delShowFrame=val;
        },
        delAddress(){
            let params= {
                addressId:this.deladdressId
            }
            axios.post("/users/deldefault",params).then((res)=>{
                // console.log(res);
                let data=res.data;
                if(data.status=200){
                    this.init();
                    console.log("删除地址成功！")
                    this.delShowFrame=false;
                }else{
                    console.log("删除地址失败");
                }
                
            })
        }
    },
    computed:{
        addressListFilter(){
            return this.addressList.slice(0,this.limit)
        },
        selectAddressId(){
            // console.log(this.addressList[this.selectNow].addressId)
            return this.addressList[this.selectNow].addressId;
        }
    },
    components:{
        windows
    },
    mounted(){
        this.init()
    }
}
</script>

<style lang="stylus" scoped>
.parent-frame
    width :100%;
    background :#f5f7fc;
    padding:0.8rem 0 2rem 0;
    .child-frame
        width :80%;
        margin :0 auto;
        .step-cont
            padding : 1rem 0;
            .step-list
                display :flex;
            .step-list li
                flex :1;
                height :0;
                position :relative;
               // text-align :center;
            .current-step:after 
                content :"";
                display:inline-block;
                position :absolute;
                top:-0.15rem;
                height :0.3rem;
                width :0.3rem;
                background:#d1434a;
                border-radius :100%;
                z-index :2;
                left :50%;
                margin-left :-0.15rem;
            .after-step:after
                content :"";
                display:inline-block;
                position :absolute;
                top:-0.15rem;
                height :0.3rem;
                width :0.3rem;
                background:#ccc;
                border-radius :100%;
                z-index :2;
                left :50%;
                margin-left :-0.15rem;
            .step-list li h2
                position :absolute;
                font-size:0.3rem;
                top:-0.7rem;
                width :100%;
                text-align :center;
            .after-step
                background :#ccc;
                border:0.02rem solid #ccc;
            .current-step
                background :#d1434a;
                border:0.02rem solid #d1434a;
            .after-step h2
                color:#999;
            .current-step h2
                color:#d1434a;
        .address-cont
            padding : 0.3rem 0 0 0;
            .address-title
                font-size :0.5rem;
                padding-bottom :0.4rem;
                color :#333;
    .address-frame
        width :100%;
        .address-list
            width :100%;
            overflow :hidden;
        .address-list li
            float :left;
            height :2rem;
            width :5.2rem;
            padding:0.5rem 0.6rem 0.9rem 0.6rem;
            border:0.04rem solid #e9e9e9;
            margin :0 1.3rem 0.3rem 0 ;
            position :relative;
            cursor :pointer;
            background :#fff;
        .address-list .select
            border :0.04rem solid #ee7a23;
        .address-cont
            padding : 0;
        .address-cont .user-name
            font-size :0.34rem;
            padding-bottom : 0.1rem;
            color:#333;
        .address-cont .user-address
            font-size :0.3rem;
            color:#333;
            padding-top :0.1rem
            margin-bottom :0.2rem;
        .address-cont .user-tel
            font-size:0.3rem;
            padding-top :0.4rem;
        .default-select
            position :absolute;
            width :5.5rem;;
            bottom :0.3rem;
            font-size :0.32rem;
            line-height :0.6rem;
            .default-select-cur
                float:left;
                color :#ee7a23
            .default-select-set
                float:left;
                color :#ee7a23
                display :none;
        .address-item:hover .default-select-set
            display :inline;
        .del
            display :inline-block;
            float:right;
            font-size :.6rem;
            .del:hover
                color :#ee7a23;
        .add-address
            text-align :center;
         .address-list .add-address:hover
            border:0.04rem solid #ee7a23;
        .add
            display :inline-block;
            height :1rem;
            width :1rem;
            margin-top :0.3rem;
            #icon-add
                fill:#605f5f;
        .add-msg
            margin-top:0.4rem;
            color:#605f5f; 
            line-height :0.7rem;
        .more-segm
            width :100%;
            text-align :center;
            .more-cont
                font-size :0.34rem;
                color:#ee7a23;
                display :inline-block;
                line-height :0.7rem;
                cursor :pointer;
            .more
                color:#ee7a23;
                display :inline-block;
                font-size :0.2rem;
                line-height :0.7rem;
                cursor :pointer;
    .method-list
        width :100%;
        .method-title
            font-size: 0.5rem;
            padding: 0.4rem 0;
        .method-cont
            height :2rem;
            width :5.2rem;
            padding:0.5rem 0.5rem 0.8rem 0.5rem;
            border:0.04rem solid #ee7a23;
            margin :0 0.3rem 0.3rem 0 ;
            position :relative;
            cursor :pointer;
            background :#fff;
            .stand
                font-size :0.35rem;
                padding-bottom :0.2rem;
            .free
                font-size :0.3rem;
                margin-bottom :0.6rem;
                font-weight :600;
            .note
                font-size :0.3rem;
    .next-cont
        overflow :hidden;
        margin-top :1rem;
        .next-btn
            display :inline-block;
            float :right;
            padding : 0.3rem 0.9rem;
            font-size:0.32rem;
            color:#fff;
            font-weight :600;
            background:#d1434a;
.windows-enter-active 
        transition: all .3s ease;
    .windows-leave-active 
        transition: all .8s ease;
    .windows-enter, .windows-leave-to 
        transform :translateY(0.12rem);
        opacity :0;
 .delMsg-cont
    padding :0.5rem 1rem 0 1rem;
    margin-top:0.6rem;
    text-align :center;
    .delMsg
        text-align :center;
        font-size :0.36rem;
        padding-bottom:0.5rem;
        letter-spacing :0.05rem;
        margin-bottom :0.8rem;
        font-family :Microsoft YaHei;
    .delClose
        display :inline-block;
        margin-left  :0.5rem;
        line-height :0.8rem;
        height :0.8rem;
        border:0.02rem solid #d1434a;
        padding:0 1.5rem;
        color:#fff;
        cursor :pointer;
        font-weight: 600;
        background :#db4f45;
    .delSubmit
        display :inline-block;
        margin-right :0.5rem;
        line-height :0.8rem;
        height :0.8rem;
        border:0.02rem solid #d1434a;
        padding:0 1.5rem;
        color:#dd7479;
        cursor :pointer;
        font-weight: 600;
        background :#fff;
        margin-left :0.3rem;

</style>