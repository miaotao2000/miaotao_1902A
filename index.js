import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    list:[],
    n:0,
    //销量
    flag:false,
    //价格
    flg:false,
    //新品
    fl:false,
    v:""
  },
  mutations: {
    //获取数据
    GETDATE(state,res){
       state.info=res
       state.list=res
      //  console.log(state.list)
    },
    //筛选
    SHAI(state,item){
        if(item=="全部"){
           state.info=state.list
        }else{
          state.info=state.list.filter((val)=>{
               return val.leixing==item
           })
          //  console.log(arr)
          //  state.info=arr
        }
    },
    //改变n的值
    M(state,index){
       state.n=index
    },
    //销量排序
    XIAO(state){
      // state.v=""
      state.flag=!state.flag
      if(state.flag==true){
        state.info.sort((a,b)=>{
          return b.xiaoliang-a.xiaoliang
       })
      }else{
        state.info.sort((a,b)=>{
          return a.xiaoliang-b.xiaoliang
       })
      }
    },
    //价格排序
    PRICE(state){
       state.flg=!state.flg
       if(state.flg==true){
         state.v=1
        state.info.sort((a,b)=>{
          return a.price-b.price
         })
       }else{
        state.v=2
        state.info.sort((a,b)=>{
          return b.price-a.price
       })
       }
    },
    //新品排序
    XIN(state){
      // state.v=""
       state.fl=!state.fl
       if(state.fl==true){
        state.info.sort((a,b)=>{
          return a.time-b.time
         })
       }else{
        state.info.sort((a,b)=>{
          return b.time-a.time
       })
       }
    }
  },
  actions: {
    //获取数据
    getdate({commit},res){
       console.log(res)
       commit("GETDATE",res)
    },
    //筛选
    shai({commit},item){
      commit("SHAI",item)
    },
    //改变n的值
    m({commit},index){
       commit("M",index)
    },
    //销量排序
    xiao({commit}){
      commit("XIAO")
    },
    //价格排序
    price({commit}){
      commit("PRICE")
    },
    //新品排序
    xin({commit}){
      commit("XIN")
    }
  },
  modules: {
  },
  // plugins:[createPersistedState({
  //    reducer(val){
  //      return{
  //        info:val.info,
  //        n:val.n
  //      }
  //    }
  // })]
})
