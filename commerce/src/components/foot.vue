<template>
 <div class="foot">
        <div class="foot-cont">
            <ul class="notice">
                <li>
                About&nbsp;US(关于我们)
                </li>
                <li>
                About&nbsp;US(关于我们)
                </li>
                <li>
                Privacyt&nbsp;Policy(隐私政策)
                </li>
                <li>
                Terms&nbsp;&#38;&nbsp;Conditions(条款和条件)
                </li>
            </ul>
            <p class="copy">
            Copyright&nbsp;&#169;&nbsp;2018&nbsp;ZWX&nbsp;Rights&nbsp;Reserved
            </p>
        </div>
    </div>
</template>

<script>
export default {
  foot: "foot",
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/assets/style/varibles.styl" 
.foot
  background: #f5f7fc;
  width:100%;
  height:2.5rem;
  .foot-cont
    border-top:1.5px solid $notice;
    width:80%;
    margin:0 auto;
    .notice
      padding-top:0.8rem
      display:flex;
      flex-direction:row;
      justify-content:space-around;
    .notice li
      color:$notice;
      font-szie:0.26rem;
    .copy
      margin-top:0.4rem;
      text-align:center;
      font-szie:0.27rem;
      color:#888;
</style>

