<template>
    <div class="parent-frame">
        <div class="child-frame">
            <div class="step-cont">
                <ul class="step-list">
                    <li class="current-step"><h2 class="current-title">邮寄地址</h2></li>
                    <li class="current-step"><h2 class="current-title">查看订单</h2></li>
                    <li class="current-step"><h2 class="current-title">付款</h2></li>
                    <li class="after-step"><h2 class="after-title">订单确认</h2></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    OrderStep:"OrderStep",
    data(){
        return {

        }
    },
    methods:{
       
    },components:{

    },
    mounted(){
       
    }
}
</script>

<style lang="stylus" scoped>
.parent-frame
    width :100%;
    background :#f5f7fc;
    padding:0.8rem 0 0rem 0;
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
</style>