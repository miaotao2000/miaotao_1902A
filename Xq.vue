<template>
    <div>
        <header>
            <svg class="icon" aria-hidden="true" @click="tiao">
                <use xlink:href="#icon-changyongicon-"></use>
              </svg>
        </header>
        <div class="content">
            <img :src='obj.img'>
            <div class="nei">
                <div class="left">
                        <h1>{{obj.name}}</h1>
                        <p>￥{{obj.price}}<small>￥{{obj.price1}}</small></p>
                </div>
                <div class="right">
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-fenxiang
                                "></use>
                              </svg>
                              <!-- <svg class="icon" aria-hidden="true">
                                    <use xlink:href="#icon-changyongicon-
                                    "></use>
                                  </svg>       -->
                        <p>分享</p>      
                </div>
            </div>
            <div class="zhifu">
                    <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-weixin"></use>
                          </svg>
                    <span>支持微信支付</span>      
            </div>
            <div class="pinglun">
                <dl>
                    <dt>
                            <svg class="iconfont" aria-hidden="true">
                                    <use xlink:href="#icon-pinglun"></use>
                                  </svg>
                            <p>顾客评论（0）</p>      
                    </dt>
                    <dd>
                        暂无评论
                    </dd>
                </dl>
            </div>
        </div>
        <footer>
            <ul>
                <li>
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-tubiaolunkuo-"></use>
                              </svg>
                </li>
                <li>
                        <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-3"></use>
                              </svg>
                </li>
            </ul>
            <ol>
                <li>加入购物车</li>
                <li>立即购买</li>
            </ol>
        </footer>
    </div>
</template>
<script>
export default{
   data () {
       return {
           obj:{}
       }
   },
   created () {
       let price=this.$route.query.price
    //    console.log(price)
       let price1=this.$route.query.price1
       let name=this.$route.query.name
       let img=this.$route.query.img
       this.obj={name:name,img:img,price:price,price1:price1}
   },
   methods: {
       tiao(){
           this.$router.push('')
       }
   }
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    height: 0.8rem;
    
   .icon{
       width:0.6rem;
       height:0.6rem;
       display: block;
       margin-top:0.1rem;
   }
}
.content{
    img{
    display: block;
    height: 6rem;
    width: 100%;
 }
 .nei{
     width: 100%;
     /* height: 3rem; */
     padding:0.45rem;
     display: flex;
     box-sizing: border-box;
     height: 100%;
     overflow: auto;
     .left{
         width: 80%;
        h1{
            font-size:0.35rem;
        }
        p{
            font-size:0.45rem;
            color: red;
            margin-top: 0.4rem;
            small{
                text-decoration: line-through;
                font-size:0.35rem;
                color:#a6abae;
            }
        }
     }
     .right{
         width: 20%;
         /* display: flex;
         flex-direction: column;
         justify-content: flex-end; */
         .icon{
             display:block;
             width:0.6rem;
             height:0.6rem;
             margin-left:0.8rem;
         }
         p{
             font-size:0.28rem;
             margin-top: 0.1rem;
             text-align: right;
         }
     }
 }
 .zhifu{
     width: 100%;
     height: 1.4rem;
     line-height: 1.4rem;
     background: #f4f4f4;
     font-size: 0.3rem;
     color: #a8a8a8;
     display: flex;
     .icon{
         width: 0.45rem;
         height: 0.35rem;
         fill: #a8a8a8;
         display: block;
         margin:auto 0.2rem auto 0.4rem;
     }
 }
 .pinglun{
    dl{
        font-size:0.35rem;
        padding:0rem 0.4rem;
        dt{
            display: flex;
            width: 100%;
            height: 1.3rem;
            font-size:0.35rem;
            line-height:1.3rem;
            border-bottom:0.03rem solid #a9a9a9; 
           .iconfont{
               display: block;
               width:0.4rem;
               height:0.4rem;
               margin:auto 0.2rem auto  0rem;
           }
        }
        dd{
            width: 100%;
            height: 1.5rem;
            text-align: center;
            line-height: 1.5rem;
            font-size: 0.4rem;
            color: #a9a9a9;
            padding-bottom:1rem;
        }
    }
 }
}
footer{
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    position: fixed;
    bottom: 0rem;
    display: flex;
    background: white;
    ul{
        width: 30%;
        display: flex;
        border-top:0.05rem solid #a5adb0;  
        li{
            width: 50%;
            display: flex;
            justify-content: center;
          .icon{
              width: 0.7rem;
              height: 0.7rem;
              margin:auto 0;
          }
        }
        li:nth-child(1){
            border-right:0.05rem solid #a5adb0;  
        }
    }
    ol{
        width: 70%;
        display: flex;
        li{
            width:50%;
            font-size:0.3rem;
            text-align: center;
            color:white;
        }
        li:nth-child(1){
            background:#51596c;
        }
        li:nth-child(2){
            background: #263147;
        }
    }
}
</style>