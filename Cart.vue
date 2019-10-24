<template>
  <div class="cart">
      <Head title="购物车"></Head>
        <div class="bian">
           <Bjaji></Bjaji>
        </div>
        <div class="content">
             <dl>
               <dt>
                  <p>自营商店</p>
               </dt>
               <dd v-for="(item,index) in cart">
                 <div class="inp">
                    <Fxk :obj="{index:index,ok:item.ok}"></Fxk>
                 </div>
                 <img :src="`/static/img/${item.url}`"> 
                 <div class="right">
                    <p>{{item.name}}</p>
                    <ul>
                      <li>
                        ￥{{item.price}}
                      </li>
                      <li>
                          <Bjian :index="index"></Bjian>
                          <span>{{item.num}}</span>
                          <Bjia :index="index"></Bjia>
                      </li>
                    </ul>
                 </div> 
               </dd>
             </dl>
        </div>
        <div class="jiesuan">
           <Quan></Quan>
        </div>
      <Foot></Foot>  
  </div>
</template>

<script>
import Head from "@/components/Head"    
import Foot from "@/components/Foot" 
import Fxk from "@/components/Fxk"
import Quan from "@/components/Quan"
import Bjaji from "@/components/Biaji"
import Bjia from "@/components/Bjia"
import Bjian from "@/components/Bjian"
import {mapState,mapGetters} from "vuex"
export default {
    components: {
      Head,
      Foot,
      Fxk,
      Quan,
      Bjaji,
      Bjia,
      Bjian
    },
  data () {
      return {
        ok:false,
      }
  },
  methods: {
   
    
   
    
  },
  computed: {
    ...mapState(["cart","yflg","show"]),
    ...mapGetters(["zongjia","zongshu"])
  }
}
</script>

<style lang="scss" scoped>
.cart{
  background: #f3f3f3;
}  
.guan{
  background: orangered !important;
}  
.red{
  background: red !important;
}
.bian{
  width: 100%;
  height: 0.6rem;
  background: #f3f3f3;
}  
.content{
   overflow: auto;
   height: 100%;
}
dl{
  background: white;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  font-size: 0.25rem;
  dt{
    p{
      font-size:0.25rem;
      height: 0.6rem;
      line-height:0.6rem;
    }
  }
  dd:nth-child(1){
    margin-top: 0rem;
  }
  dd{
    width: 100%;
    height: 1.5rem;
    /* margin-top: 0.2rem; */
    padding-bottom:0.2rem; 
    display:flex;
    .inp{
       margin:auto;
    }
    img{
      display:block;
      width: 1.8rem;
      height: 1.5rem;
      /* margin-left: 0.2rem; */
    }
    .right{
      margin-left: 0.2rem;
      display: flex;
      height: 1.5rem;
      flex-direction: column;
      justify-content: space-between;
      ul{
        width: 4.5rem;
        display:flex;
        justify-content: space-between;
        li:nth-child(1){
          color: red;
        }
        li:nth-child(2){
          display: flex;
          border: 0.01rem solid gray;
          span{
            display: block;
            height: 0.3rem;
            text-align: center;
            line-height: 0.3rem;
          }
         
          span{
            width: 0.4rem;
            border-left: 0.01rem solid gray;
            border-right: 0.01rem solid gray;
          }
        }
      }
    }
  }
}
.jiesuan{
  display: flex;
  width: 100%;
  position:fixed;
  bottom: 1.1rem;
  background: white;
  border-bottom:0.01rem solid gray; 
 
}
</style>
