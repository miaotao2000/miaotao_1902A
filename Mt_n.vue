<template>
  <div>
     <div v-for="(item,index) in list">
         <p>{{item.inp}}<button @click="del(index)">删除</button><button @click="bj(index)">编辑</button></p>
         <span>{{item.time | tiems}}</span>  分类：{{item.sec}}
         <div>
             {{item.tex}}
         </div>
     </div>
     <div v-if="flag==true">
            <div>
                    <input type="text" v-model="inp" />
                    <select v-model="sec">
                       <option value="生活">生活</option>
                       <option value="学习">学习</option>
                       <option value="工作">工作</option>
                    </select>
              </div>
              <textarea v-model="tex">
    
              </textarea><br>
              <button @click="wancheng">完成</button>
     </div>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
   data () {
       return {
           flag:false,
           inp:"",
           tex:"",
           sec:"",
           n:""
       }
   },
   methods: {
       //删除
       del(i){
           this.$store.dispatch('del',i)
       },
       //编辑
       bj(i){
           this.flag=true
           this.n=i
           this.inp=this.list[i].inp
           this.tex=this.list[i].tex
           this.sec=this.list[i].sec
           
       },
       //完成
       wancheng(){
           console.log(this.n)
           let obj={inp:this.inp,tex:this.tex,sec:this.sec}
           this.$set(obj,"n",this.n)
           this.$store.dispatch("wan",obj)
           this.flag=false
       }  
   },
   computed: {
       ...mapState(["list"])
   },
   filters: {
      times:function(val){
          return moment(val).format('MMMM Do YYYY, h:mm:ss a')
      }
   }
}
</script>

<style scoped>
textarea{
    width: 300px;
    height: 300px;
}
</style>
