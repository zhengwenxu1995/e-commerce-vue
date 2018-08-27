<template>
    <div class="parent-frame">
        <div class="child-frame">
            <div class="step-cont">
                <ul>
                    <li class="Order"><span>aa</span></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="address-list">
aa 
            </div>
            <div class="method-list">
aa
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
    padding:1rem 0 2rem 0;
    .child-frame
        width :80%;
        height :5rem;
        margin :0 auto;
        border :1px solid #f00;
        .Order:before
            content :"";
            height :5px;
            background :#dc4f47;
            width :200px;

</style>