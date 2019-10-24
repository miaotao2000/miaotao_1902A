<template>
  <div class="bjian">
      <button @click="cjia">+</button>
  </div>
</template>

<script>
export default {
    props: {
       index:{
           type:Number,
           default:"暂时没数据"
       }
    },
  data () {
      return {
         index:this.index
      }
  },
  methods: {
      //购物车++
      cjia(){
      this.$store.dispatch("cjia",this.index)
     } ,
  },
  
  
}
</script>

<style lang="scss" scoped>
 button{
            background: none;
            border: none;
            width: 0.3rem;
            display: block;
            height: 0.3rem;
            text-align: center;
            line-height: 0.3rem;
            }
</style>
