<template>
  <div>
    <headers></headers>
    <nav-cont><span slot="navShow">Goods</span></nav-cont>
    <div class="sort">
      <div class="sort-cont">
          <div class="price-sort">
              <span>
                  排序方式：
              </span>
              <a href="#" class="default">
              &nbsp;默认
              </a>
              <a href="#" class="price"  @click="PriceSort">
                  单价
              </a><i v-if="arrowSort" class="iconfont">&#xe79d;</i>
              <i v-else class="iconfont">&#xe79e;</i>
          </div>
      </div>
    </div>


      <div class="goods">
          <div class="good-cont">
              <div class="goods-price">
                  <dl>
                      <dt class="title">PRICE(单价范围):</dt>
                      <dd><a v-bind:class="{select:checkPrice=='all'}" @click="checkPrice='all'" href="javascript:void(0)">All(全部):</a></dd>
                      <dd v-for="(items,index) of priceList"  :key="index"><a v-bind:class="{select:checkPrice==index}" href="javascript:void(0)"  @click="checkPrice=index">{{items.startPrice}} - {{items.endPrice}}</a></dd>
                  </dl>
              </div>
              <div class="goods-list">
                  <div class="goods-list-cont">
                      <div class="goods-pos" v-for="item of goodsList" :key="item.productId">
                          <div class="goods-show">
                              <a href="#">
                                  <div class="goods-img">
                                      <img v-lazy="item.product" alt="">
                                  </div>
                                  <div class="goods-info">
                                      <h3 class="goods-title">{{item.productName}}</h3>
                                      <p>
                                          <em class="rmb">￥</em>
                                          <span class="money">{{item.productPrice}}.00</span>
                                      </p>
                                      <div class="addShopCar">
                                          加入购物车
                                      </div>
                                  </div>
                              </a>
                          </div>
                      </div>     
                  </div> 
                  <div class="loadScroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
                      <img src="static/loading-svg/loading-bubbles.svg"  >
                  </div>
              </div>
          </div>
      </div>    

    <foot></foot>
  </div>
</template>

<script>
import Headers from "@/components/header.vue";
import NavCont from "@/components/NavCont.vue";
import Foot from "@/components/foot.vue";
import axios from "axios";
export default {
  data() {
    return {
      goodsList: [],
      sort: -1,
      page: 1,
      pageSize: 8,
      priceList: [
        {
          startPrice: "0.00",
          endPrice: "100.00"
        },
        {
          startPrice: "100.00",
          endPrice: "500.00"
        },
        {
          startPrice: "500.00",
          endPrice: "1000.00"
        },
        {
          startPrice: "1000.00",
          endPrice: "2000.00"
        }
      ],
      checkPrice: "all",
      arrowSort: false,
      busy:true
    };
  },
  methods: {
    //获取数据 
    homeInfo(flot){
      let param = {
        sort: this.sort,
        page: this.page,
        pageSize: this.pageSize
      };
      axios.get("/goods", {
          params: param
        }).then((res)=> {
          console.log(res.data)
          let resl = res.data;
          if (resl.status == "200" && resl.result != null) {
            if(true){
              this.goodsList=this.goodsList.concat(resl.result);
              this.busy=false;
              if(resl.count<8){
                this.busy=true;
              }else{
                this.busy=false;
              }
            }else{
              this.goodsList = resl.result;
              this.busy=false;
            }
          }else{
            this.goodsList=[];
          }
      })
    },

    //懒加载   事件
    loadMore() {
      this.busy = true;
      setTimeout(() => {
        this.page++;
        this.homeInfo(true)
      }, 1000);
    },
    //价钱排序
    PriceSort() {
      this.arrowSort = !this.arrowSort;
      if (this.arrowSort) {
        this.sort = 1;
      } else {
        this.sort = -1;
      }
      this.homeInfo();
    }
  },
  mounted() {
    this.homeInfo();
  },
  components: {
    Headers,
    NavCont,
    Foot
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/varibles.styl';

.sort {
  background: #f5f7fc;
  width: 100%;
  padding: 60px 0 30px 0;

  .sort-cont {
    display: flex;
    justify-content: flex-end;
    width: 80%;
    padding: 0 20px;
    margin: 0 auto;
    background: #fff;
    height: 1.01rem;
    line-height: 1.01rem;

    .default {
      color: #ee7a23;
    }

    .price {
      color: #333;
    }

    .price:hover {
      color: #ee7a23;
    }
  }
}

.goods {
  background: #f5f7fc;
  width: 100%;
  padding-bottom: 1.5rem;

  .good-cont {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;

    .goods-price {
      flex: 1;
    }

    .goods-list {
      flex: 5;
    }

    .title {
      color: #333;
      margin-bottom: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.05rem;
      font-size: 0.32rem;
    }

    dd {
      margin: 0.4rem 0;
      cursor: pointer;
    }

    dd a {
      -webkit-transition: padding 0.5s;
      padding: 0.05rem 0;
      font-size: 0.28rem;
      line-height: 0.5rem;
      color: #333;
    }

    dd a:hover {
      padding: 0.05rem 0.3rem;
      font-weight: 700;
      font-size: 0.28rem;
      color: #ee7a23;
      border-left: 2px solid #ee7a23;
    }

    dd .select {
      padding: 0.05rem 0.3rem;
      font-weight: 700;
      font-size: 0.28rem;
      color: #ee7a23;
      border-left: 2px solid #ee7a23;
    }
  }

  .goods-pos {
    position: relative;
    margin: 0 0.3rem 0.4rem 0;
    width: 4.65rem;
    height: 8rem;

    .goods-show {
      position: absolute;
      width: 4.65rem;
      border: 2px solid #e9e9e9;
      height: 8rem;
      top: 0;
      transition: top 0.5s;
      -webkit-transition: top 0.5s;
    }

    .goods-show:hover {
      top: -0.1rem;
      box-shadow: 0 0 0.5rem $notice;
      margin-top: 0rem;
      border: 2px solid $nowSelect;
    }

    .goods-show a {
      color: #333;

      .goods-img {
        height: 0;
        padding-bottom: 4.65rem;
        overflow: hidden;
      }

      .goods-img img {
        height: 4.65rem;
        width: 100%;
      }

      .goods-info {
        padding: 0.29rem 0.2rem;
        background: #fff;

        .goods-title {
          padding-bottom: 0.2rem;
          height: 0.92rem;
          font-weight: 600;
        }

        p {
          padding-bottom: 0.2rem;
        }

        p .rmb, .money {
          color: #d1434a;
          font-size: 0.4rem;
          line-height: 0.6rem;
        }

        .addShopCar {
          height: 0.8rem;
          padding: 0 0.2rem;
          border: 1px solid #d1434a;
          line-height: 0.8rem;
          text-align: center;
          font-weight: 600;
          color: #d1434a;
          letter-spacing: 0.1rem;
          -webkit-transition: background 0.5s;
        }

        .addShopCar:hover {
          background: #ffe5e6;
        }
      }
    }
  }

  .goods-list-cont {
    display: flex;
    flex-wrap: wrap;
  }

  .loadScroll {
    text-align: center;
  }

  .loadScroll img {
    height: 1.5rem;
    width: 1.5rem;
  }
}
</style>
