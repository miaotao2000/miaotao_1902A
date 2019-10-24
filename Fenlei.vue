<template>
  <div>
      <Head title="全部分类"></Head>
        
      <keep-alive>
       <div class="content">
         <nav>
             <ul>
               <li v-for="(item,index) in info" @click="dressing(item.name,index)" :class="{active:index==n}">
                   {{item.name}}
               </li>
             </ul>
         </nav>
         <div>
              <ul>
                  <li v-for="(item,index) in list">
                      <router-link :to="`/list/?name=${item.name}`">
                          <img :src="`/static/img/${item.url}`">
                          <span>{{item.pingpai}}</span>
                     </router-link>
                   </li>
            </ul>     
         </div>
       </div> 
      </keep-alive>
      <Foot></Foot>  
  </div>
</template>

<script>
import Head from "@/components/Head"    
import Foot from "@/components/Foot"
import {mapState} from "vuex" 
export default {
    components: {
      Head,
      Foot  
    },
  data () {
      return {
        info:[
          {name:"推荐分类",url:"/open"},
          {name:"中秋节",url:"/open"},
          {name:"全国特产",url:"/open"},
          {name:"粮油调味",url:"/open"},
          {name:"零食小吃",url:"/open"},
          {name:"当季水果",url:"/open"},
          {name:"肉蛋禽类",url:"/open"},
          {name:"坚果干果",url:"/open"},
          {name:"微行街心选",url:"/open"},
         
        ],
        n:0
      }
  },
 created(){
    this.dre()
 },
  methods: {
    //筛选
    dressing(item,index){
        // console.log(item)
        this.n=index
        this.$store.dispatch("dressing",item)
    },
    dre(){
      let dres=this.info[0].name
      // console.log(dres)
      this.$store.dispatch("dre",dres)
    }
  },
  //获取数据
  computed: {
    ...mapState(["list"])
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
  
.content{
  display: flex;
  
  nav{
    flex:2;
    height: 100%;
    li{
      font-size: 0.25rem;
  color: black;
  text-align: center;
  height: 0.8rem;
  line-height: 0.8rem;
  cursor: pointer;
    }
  }
  div{
    flex:8;
    background: white;
    ul{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li{
        width: 33%;
        height: 2rem;
        margin-top: 0.4rem;
        a{
          width: 100%;
          text-align: center;
          img{
            width: 1.5rem;
            height: 1.5rem;
            display:block;
            margin: 0 auto;
          }
          span{
            font-size: 0.25rem;
            color: black;
            display: block;
            margin-top: 0.2rem;
          }
        }
      }
    }
  }
}
.active{
  border-left:0.03rem solid red;
  color: red !important; 
  background: white;
}
</style>
