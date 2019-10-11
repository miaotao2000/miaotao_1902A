<template>
  <div >
      <div v-if="list.length>0">
          <table > 
              <tr v-for="(item,index) in list">
                <td><input type="checkbox" v-model="item.ok"/></td>
                <td>序号：{{item.id}}</td>
                <td>名称：{{item.name}}</td>
                <td>价钱：{{item.price}}</td>
                <td>数量：<button @click="jia(index)">+</button>{{item.num}}<button @click="jian(index)">-</button></td>
                <td><button @click="del(index)">删除</button></td>
              </tr>
            </table>
            <ul>
              <li>
                <input type="checkbox" v-model="flag" @click="qu()"/>全选
              </li>
              <li>
                总价：0
              </li>

            </ul>
      </div>
     
        <div v-else>暂时没有商品<br><span  @click="jaa">去添加</span></div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'  
export default {
   data () {
     return {
       flag:false
     }
   },
   computed: {
     ...mapState(["list"])
   },
   methods:{
       jaa(){
          this.$router.push("/home")
       },
      ...mapActions(["jia","jian","del"]),
      qu(){
         if(this.flag==false){
           for(let i in this.list){
              this.list[i].ok=true
           }
          
         }else{
          for(let i in this.list){
              this.list[i].ok=false
           }
         }
      }
   }

}
</script>

<style scoped>
span{
  cursor: pointer;
}
ul{
  display: flex;
  width: 100%;
}
li{
  width: 50%;
}
</style>
