<template>
  <div >
      <table>
        <tr>
          <td>序号</td>
          <td>名称</td>
          <td>价钱</td>
          <td>操作</td>
        </tr>
        <tr v-for="(item,index) in list">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td><button @click="add(item)">加入购物车</button></td>
        </tr>
      </table>
  </div>
</template>

<script>
import axios from 'axios'  
import {mapActions,mapState} from 'vuex'
export default {
   data () {
     return {
       list:[]
     }
   },
   methods: {
     ...mapActions(["add"]),
     arr(){
        axios.get("/static/data.json").then((res)=>{
           console.log(res)
           this.list=res.data.list
           console.log(this.list)
        })
     }
   },
   created () {
      this.arr()
   },
   computed: {
      ...mapState([""])
   }
}
</script>

<style scoped>

</style>
