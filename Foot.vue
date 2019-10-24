<template>
  <div>
      <ul>
          <li v-for="(item,index) in list">
              <router-link :to="item.url">
                <i :class="`${item.url1}`" class="icon"></i>
                <span>{{item.name}}</span>
              </router-link>
          </li>
      </ul>
      <p></p>
  </div>
</template>

<script>
export default {
  data () {
      return {
        list:[
          {name:"全部分类",url:"/fenlei",url1:"el-icon-menu"},
          {name:"购物车",url:"/cart",url1:"el-icon-shopping-cart-1"},
        ]
      }
  }
}
</script>

<style lang="scss" scoped>
ul{
  display: flex;
  width: 100%;
  background: white;
  position:fixed;
  bottom:0rem;
  li{
    width: 25%;
   
    width: 25%;
    a{
      width: 100%;
      height: 100%;
      padding-top:0.2rem;
      text-align: center;
     line-height: 0.6rem;
     font-size: 0.25rem;
     background:white;
      color: gray;
      .icon{
           display: block;
           font-size: 0.3rem;
      }
      span{
        display: block;
      }
    }
  }
}
.router-link-exact-active{
  color: green;
}
</style>
