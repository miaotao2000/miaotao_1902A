<template>
  <div>
     <div class="mt_inpt">
         <input type="text" placeholder="待办事项" v-model="inp"
         @keyup.enter="add1"/><button @click="add">提交</button>
     </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
          inp:""
      }
  },
  methods: {
      //按钮添加
      add(){
          if(this.inp==""){
              return false;
          }
          let obj={inp:this.inp,ok:false,flag:false,time:new Date()}
          this.$store.dispatch("add",obj)
          this.inp=""
      },
      //回车添加
      add1(){
        if(this.inp==""){
              return false;
          }
          let obj={inp:this.inp,ok:false,flag:false}
          this.$store.dispatch("add1",obj)
          this.inp=""
      },
  }
}
</script>

<style scoped>
.mt_inpt{
    display: flex;
}
input,button{
    display: block;
    height: 60px;
    font-size: 25px;
}
input{
    width: 80%;
   
}
button{
    width: 20%;
    height: 65px;
}
</style>
