<template>
  <div id="app">
       <Mt_h ></Mt_h>
       <Mt_n ></Mt_n>   
  </div>
</template>

<script>
import Mt_h from '@/components/Mt_h'  
import Mt_n from '@/components/Mt_n' 
export default {
  name: 'App',
  data () {
    
  },
  components: {
    Mt_h,
    Mt_n
  },
  created () {
     this.list=JSON.parse(localStorage.getItem("list"))||[]
  },
  methods: {
     add(val){
          this.list.push(val)
          this.arr.push(val)
          localStorage.setItem("list",JSON.stringify(this.list))
     },
     shai(item){
          console.log(item)
          let res=this.arr.filter((val,index)=>{
            return val.sec===item
          })
          console.log(1)
          this.list=res
     }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
ol{
  display: flex;
}
li{
  display: flex;
}
</style>
