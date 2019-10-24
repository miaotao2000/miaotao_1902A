<template>
  <div class="quan">
       <ul>
          <li v-show="show==false" @click="hide">编辑</li>
          <li v-show="show==true"  @click="hides">完成</li>
       </ul>
  </div>
</template>

<script>
 
import {mapState,mapGetters} from "vuex"  
export default {
  data () {
      return {
         
      }
  },
  methods: {
       //编辑
       hide(){
            this.$store.dispatch("hide")
        },
     //完成
     hides(){
      this.$store.dispatch("hides")
     },
  },
  computed: {
      ...mapState(["show"]),
     
  },
  
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    padding-right:0.2rem;
    box-sizing: border-box;
    justify-content: flex-end;
    li{
        font-size:0.25rem;
        height: 0.6rem;
        line-height:0.6rem;
    }
}
</style>
