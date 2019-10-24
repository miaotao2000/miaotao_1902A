<template>
  <div class="quan">
    <ul>
        <li>
          <div class="fx">
             <Fxk1></Fxk1>
          </div>
          <p>全选</p>
        </li>
        <li v-show="show==false">
           <p>合计：<span>{{zongjia}}元</span></p>
           <p>不含运费</p>
        </li>
        <li  v-show="show==true" :class="{orange:zongshu>0}">
          移到关注
        </li>
      </ul>
      <div class="jie">
        <p  :class="{red:zongshu>0}" v-show="show==false">结算({{zongshu}})</p>
        <p  :class="{red:zongshu>0}" v-show="show==true" @click="del">删除</p>
      </div>
  </div>
</template>

<script>
import Fxk1 from "@/components/Fxk1"  
import {mapState,mapGetters} from "vuex"  
export default {
    components: {
      Fxk1  
    },
  data () {
      return {
         
      }
  },
  methods: {
       //删除
     del(){
       if(this.zongshu>0){
          this.$store.dispatch("del")
       }
      
     }
  },
  computed: {
      ...mapState(["show"]),
      ...mapGetters(["zongjia","zongshu"])
  },
  
}
</script>

<style lang="scss" scoped>
.quan{
    display: flex;
    font-size: 0.25rem;
    height: 0.8rem;
    width: 100%;
    ul{
     display: flex;
     justify-content: space-between;
     width: 80%;
      li{
          width: 30%;
      }
      li:nth-child(1){
          display:flex;
          line-height: 0.8rem;
          .fx{
              margin:auto 0.2rem auto 0.35rem;
          }
      }
      li:nth-child(2){
          width: 35%;
          padding-right: 0.1rem;
          box-sizing: border-box;
          text-align: right;
          p:nth-child(1){
              margin-top:0.1rem;
          }
          p:nth-child(2){
              font-size: 0.2rem;
          }
      }
      li:nth-child(3){
          width: 30%;
          text-align: center;
          line-height: 0.8rem;
          background: gray;
          color: white;
      }
 }
 .jie{
     width: 20%;
     text-align: center;
     line-height: 0.8rem;
     background: gray;
     color: white;
 }
}    
 .red{
     background: red;
 }
 .orange{
     background: orangered !important;
 }
</style>
