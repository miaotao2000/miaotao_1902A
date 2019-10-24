<template>
  <div >
      <div class="header">
         <Head :title="obj.name">
                <i class="el-icon-arrow-left icon" @click="huitui"></i>
         </Head>
      </div>
      <div class="content">
          <img :src="`/static/img/${obj.url}`">
          <p>{{obj.name}}</p>
          <span>￥{{obj.price}}</span>
      </div>
      <div class="footer"> 
           <ul>
               <li>
                   <i class="el-icon-s-custom icon1"></i>
                   <span>客服</span>
               </li>
               <li>
                    <i class="el-icon-receiving icon1"></i>
                    <span>店铺</span>
                </li>
                 <li @click="cart">
                   <i class="el-icon-shopping-cart-2 icon1"></i>
                   <span>购物车</span>
               </li>
           </ul>
           <ol>
               <li @click="xian">
                   加入购物车
               </li>
               <li>
                   立即购买
               </li>
           </ol>
           <div class="red" v-if="zong>0">{{zong}}</div>
      </div>
      <div class="mtk" v-if="f==true">
          <Mtk :obj="obj" ></Mtk>
      </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'    
import Head from "@/components/Head1"  
import Mtk from "@/components/Mtk"
export default {
  name: 'App',
  components: {
    Head,
    Mtk  
  },
 data () {
     return {
         obj:{},
         name:'',
         url:'',
         price:0,
     }
 },
 methods: {
     //回退到列表页面
   huitui(){
       this.$router.push({path:"/list",query:{name:this.obj.name}})
   },
   //到购物车页面
   cart(){
       this.$router.push("/cart")
   },
   //模态框显示
   xian(){
       this.$store.dispatch("xian")
   }
 },
 created () {
      this.name=this.$route.query.name
     this.url=this.$route.query.url
     this.price=this.$route.query.price
     this.obj={name:this.name,url:this.url,price:this.price,num:1,ok:false}
    
 },
 computed: {
     ...mapState(["f"]),
     ...mapGetters(["zong"])
 }
 
}
</script>

<style lang="scss" scoped>
.red{
    width:0.25rem;
    height:0.25rem;
    background: red;
    border-radius:0.1rem; 
    position: fixed;
    bottom:0.5rem;
    left:2.55rem;
    font-size: 0.2rem;
    color: white;
    text-align: center;
    line-height: 0.25rem
}    
.header{
    background: #26b07c;
    position: fixed;
    top:0rem;
    width: 100%;
}
.icon{
  font-size: 0.43rem;
  display: block;
  margin: auto 0;
  color: white;
}
.content{
    width: 100%;
    img{
        display:block;
        width: 100%;
        height: 5rem;
    }
    p{
        font-size:0.25rem;
        padding:0.1rem 0rem 0rem 0.2rem;
    }
    span{
        font-size: 0.35rem;
        display:block;
        color: red;
        margin: 0.1rem 0rem 0rem 0.2rem;
    }
}
.footer{
    width: 100%;
    display:flex;
    
    background: white;
    position: fixed;
    bottom:0rem;
    ul{
        padding:0.1rem 0rem;
        width: 45%;
        box-sizing:border-box;
        display: flex;
        li{
            width:30%;
            font-size: 0.2rem;
            text-align: center;
            color: gray;
            span{
                display: block;
                margin-top:0.05rem;
            }
            .icon1{
                display: block;
                font-size: 0.3rem;
            }
        }
    }
    ol{
        width: 55%;
        display:flex;
        li{
            font-size:0.25rem;
            color: white;
            text-align: center;
            line-height:0.8rem;
        }
        li:nth-child(1){
            background:orangered;
            flex:6
        }
        li:nth-child(2){
            flex: 5;
            background: red;
        }
    }
}
.mtk{
    position: fixed;
    bottom: 0rem;
    width: 100%;
    
}
</style>
