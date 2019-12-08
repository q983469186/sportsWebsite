import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        headerIndex : 'square'
    },
    mutations:{
        /* 定义方法：test(state){
            state为自带参数指向state
        }
        其他页面使用公共方法：
        this.$store.commit('方法名'',参数) */
    },
    getters:{

    }
})
export default store