<template>
  <div @click="xuan" :class="{active:obj.ok==true}">
     <i class="el-icon-check icon" v-show="obj.ok==true" ></i>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  props: {
     obj:{
         type:Object,
         default:"暂时没有数据"
     }
  },  
 data () {
     return {
        obj:this.obj
     }
 },
 methods: {
     //单选
     xuan(){
         this.$store.dispatch("xuan",this.obj.index)
     }
 },
 computed: {
     ...mapState(["cflg"])
 },
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
