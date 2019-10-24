<template>
  <div>
      <Head title="商品列表">
         <i class="el-icon-arrow-left icon" @click="huitui"></i>
      </Head>
     <dl>
       <dt>
           <ul>
               <li>
                 综合
               </li>
               <li @click="xpai" :class="{active:flg==true}">
                 销量
               </li>
               <li :class="{actv:n==0}" @click="jpai">
                 价格
               </li>
               <li>
                  筛选
               </li>
           </ul>
       </dt>
       <dd>
         <ul>
           <li v-for="(item,index) in arr" v-if="item.name==name">
             <router-link :to="`/xq/?name=${item.pingpai}&url=${item.url}&price=${item.price}`">
               <img :src="`/static/img/${item.url}`">
               <p>{{item.pingpai}}</p>
               <span>￥{{item.price}}</span>
              </router-link> 
           </li>
         </ul>
       </dd>
     </dl>
  </div>
</template>

<script>
import Head from "@/components/Head"  
import {mapState} from "vuex"  
export default {
    components: {
       Head
    },
  data () {
      return {
        name:"",
        flg:false,
        n:1,
        m:false,
      }
  },
  methods: {
    //回退的分类页面
    huitui(){
      this.$router.push("/fenlei")
    },
    //销量排序
    xpai(){
      this.n=1;
      this.flg=true
      this.$store.dispatch("xpai")
    },
    //价格排序
    jpai(){
      this.n=0;
      this.flg=false
      this.m=!this.m;
      this.$store.dispatch("jpai",this.m)
    }
  },
  created () {
     this.name=this.$route.query.name
     
  },
  computed: {
    ...mapState(["arr"])
  }
}
</script>

<style lang="scss" scoped>
dl{
  
  dt{
    padding:0.1rem 0rem;
    border-top:0.01rem solid gray;
    ul{
      display: flex;
      width: 100%;
      li{
        width: 25%;
        font-size: 0.25rem;
        text-align: center;
        height: 0.4rem;
        line-height: 0.4rem;
        border-right:0.01rem solid gray; 
      }
    }
  }
  dd{
    ul{
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li{
        width: 48%;
        margin-top: 0.15rem;
        a{
          width: 100%;
          color:black;
          img{
            width: 100%;
            height: 3rem;
          }
          p{
            font-size: 0.25rem;
          }
          span{
            display: block;
            font-size: 0.3rem;
            color: red;
          }
        }
      }
    }
  }
}
.icon{
  font-size: 0.43rem;
  display: block;
  margin: auto 0;
}
.active,.actv{
  color: red;
}
</style>
