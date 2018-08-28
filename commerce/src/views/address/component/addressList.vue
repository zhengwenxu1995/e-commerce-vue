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
                        <li class="address-item">
                            <div class="address-item-cont">
                                <em class="address-user">姓名</em>
                                <strong class="address-mail">朝阳公园</strong>
                                <span class="tel">15932387701</span>
                                <span class="default">默认</span>
                                <i class="iconfont del"></i>
                            </div>
                        </li>
                        <li class="address-item">
                            <div class="address-item-cont">
                                <em class="address-user">姓名</em>
                                <strong class="address-mail">朝阳公园</strong>
                                <span class="tel">15932387701</span>
                                <span class="default">默认</span>
                                <i class="iconfont del"></i>
                            </div>
                        </li>
                        <li class="address-item">
                            <div class="address-item-cont">
                                <em class="address-user">姓名</em>
                                <strong class="address-mail">朝阳公园</strong>
                                <span class="tel">15932387701</span>
                                <span class="default">默认</span>
                                <i class="iconfont del"></i>
                            </div>
                        </li>
                        <li class="address-item">
                            <div class="address-item-cont">
                                <em class="address-user">姓名</em>
                                <strong class="address-mail">朝阳公园</strong>
                                <span class="tel">15932387701</span>
                                <span class="default">默认</span>
                                <i class="iconfont del"></i>
                            </div>
                        </li>
                        <li class="address-item">
                            <div class="address-item-cont">
                                <em class="address-user">姓名</em>
                                <strong class="address-mail">朝阳公园</strong>
                                <span class="tel">15932387701</span>
                                <span class="default">默认</span>
                                <i class="iconfont del"></i>
                            </div>
                        </li>

                        <li class="add-address">
                            <div class="add-address-cont">
                                <div class="add-address"></div>
                                <p class="add-">添加新地址</p>
                            </div>
                        </li>
                    </ul>
                    <div >
                        <span>more<i class="iconfont more"></i></span>
                    </div>
                </div>
            </div>
            <div class="method-list">
                <h1>邮寄方式</h1>
                <div class="method-cont">
                    <span>标准运输</span>
                    <h2>自由</h2>
                    <p>帆帆帆帆</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    AddressList:"AddressList",
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{

    },
    components:{

    },
    mounted(){

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
                text-align :center;
            .current-step:after 
                content :"";
                display:inline-block;
                margin-top :-0.25rem;
                height :0.5rem;
                width :0.5rem;
                background:#d1434a;
                border-radius :100%;
                z-index :2;
            .after-step:after
                content :"";
                display:inline-block;
                margin-top :-0.25rem;
                height :0.5rem;
                width :0.5rem;
                background:#e0e0e0;
                border-radius :100%;
                z-index :2;
            .step-list li h2
                position :absolute;
                font-size:0.4rem;
                top:-0.8rem;
                width :100%;
                text-align :center;
            .after-step
                border:0.03rem solid #e0e0e0;
            .current-step
                 border:0.03rem solid #d1434a;
            .after-step h2
                color:#e0e0e0;
            .current-step h2
                color:#d1434a;
        .address-cont
            padding : 0.3rem 0 0 0;
            .address-title
                font-size :0.5rem;
                padding-bottom :0.4rem;
    .address-frame
        width :100%;
        border :1px solid #f00;
        .address-list
            width :100%;
            display :flex;
            flex-warp:warp;
        .address-list li
            width :25%;
            border:1px solid #f005;
</style>