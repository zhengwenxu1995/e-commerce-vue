import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
export const store = new Vuex.Store({
    state:{
        shopCarCount:0
    },
    mutations:{
        addShopCarCount(state,quantity){
            state.shopCarCount+=quantity
        },
        backShopCarCount(state,quantity){
            state.shopCarCount-=quantity
        }
    }
})