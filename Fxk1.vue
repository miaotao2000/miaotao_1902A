<template>
  <div  :class="{active:qflg==true}" @click="qu">
     <i class="el-icon-check icon" v-show="qflg==true" ></i>
  </div>
</template>

<script>
import {mapState} from "vuex"    
export default {
 data () {
     return {
         flag:false,
     }
 },
 methods: {
     //全选
   qu(){
       this.$store.dispatch("qu")
   }
 },
 computed: {
     ...mapState(["qflg"])
 }
}
</script>

<style lang="scss" scoped>
div{
    width: 0.4rem;
    height: 0.4rem;
    border-radius:50%;
    border: 0.01rem solid gray; 
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
   .icon{
       display:block;
       font-size:0.3rem;
       margin:auto 0;
   }
}
.active{
    background: red;
   
    .icon{
        color: white;
    }
}
</style>
