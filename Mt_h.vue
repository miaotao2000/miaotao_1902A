<template>
  <div>
      <ul>
          <li>
             <p @click='show=!show'>新建</p> 
              <span v-if="show==true" @click="flag=!flag">日记</span>
          </li>
          <li>
              <span >全部</span>
             
          </li>
          <li>
            <span @click="ok=!ok">分类</span>
              <ul class="u" v-if="ok">
                <li v-for="item in info" @click="shai(item)">{{item}}</li>
            </ul>
          </li>
      </ul>
      <div v-if="flag==true">
          <div>
                <input type="text" v-model="inp" />
                <select v-model="sec">
                   <option value="生活">生活</option>
                   <option value="学习">学习</option>
                   <option value="工作">工作</option>
                </select>
                <button @click="add">保存</button>
          </div>
      
          <textarea v-model="tex">

          </textarea>
      </div>
  </div>
</template>

<script>
import bus from "@/bus"    
import {mapActions} from 'vuex'
export default {
   
    data () {
        return {
            //控制日记显示
            show:false,
            //控制弹框显示
            flag:false,
            //标题内容
            inp:"",
            //下拉框内容
            sec:"生活",
            //textarea 内容
            tex:"",
            n:0,
            info:["全部","工作","学习","生活"],
            ok:false,
            list:[],
          
        }
    },
    methods: {
    //    ...mapActions(["add"]),
       // 添加内容
        add(){
            this.show=false;
            this.flag=false;
            let obj={inp:this.inp,sec:this.sec,tex:this.tex,time:new Date().getTime()}
            this.$store.dispatch('add',obj)
            this.inp=""
            this.tex=""
            this.sec=""
        },
        shai(item){
            console.log(item)
            this.ok=false
           this.$store.dispatch("shai",item)
        }
    }
}
</script>

<style scoped>
ul{
    display: flex;
    margin: 0;
    padding: 0;
}
li{
    margin-left: 20px;
}
p,span{
  cursor: pointer;
}
textarea{
    width: 300px;
    height: 300px;
}
.u{
    display: flex;
    flex-direction: column;
}
.u li{
    text-align: left;
    cursor: pointer;
}
</style>
