<template>
    <div>
        <div class="header">
           <Head title="商品分类"></Head>
        </div>
        <div class="content">
                <nav>
                    <ul>
                        <li v-for="(item,index) in list" :class="{active:n==index}" @click="shai(item,index)">
                            {{item}}
                        </li>
                    </ul>
                </nav>
                <div class="right">
                    <dl>
                        <dt>
                            <ul>
                                <li>
                                    <span @click="xiao(1)" :class="{xia:s==1}">销量</span>
                                </li>
                                <li>
                                    <span @click="xin(2)" :class="{xia:s==2}">新品</span>
                                </li>
                                <li>
                                    <span @click="price(3)" :class="{xia:s==3}">价格
                                        <b>
                                            <i class="el-icon-caret-top icon" :class="{color:v==2}"></i>
                                            <i class="el-icon-caret-bottom icon" :class="{color:v==1}"></i>
                                        </b>
                                    </span>
                                   
                                </li>
                            </ul>
                        </dt>
                        <dd v-for="(item,index) in info" @click="tiao(item)">
                             <img :src="item.img">
                             <div class="right1">
                                 <h1>{{item.name}}</h1>
                                 <p>￥{{item.price}}<small>￥{{item.price1}}</small></p>
                             </div>
                        </dd>
                    </dl>
                </div>
        </div>
        <div class="footer">
            <Foot></Foot>
        </div>
    </div>
</template>
<script>    
import Head from '@/components/Head'
import Foot from '@/components/Foot'
import {mapState} from 'vuex'
export default{
    components: {
        Head,
        Foot
    },
    data () {
        return {
            list:["全部","特拉丝木","美式古典","实木客制","批发生产","整屋定制","北欧风格","日式居家"],
            s:""
        }
    },
    methods: {
        //筛选
        shai(item,index){
            this.$store.dispatch("m",index)
             this.$store.dispatch("shai",item)
        },
        //获取数据
        getDate(){
            this.$http.get('data.json').then((res)=>{
                console.log(res.data)
                this.$store.dispatch("getdate",res.data.data)
            })
        },
        //销量排序
        xiao(i){
            this.s=i
            this.$store.dispatch("xiao")
        },
        //价格排序
        price(i){
            this.s=i
            this.$store.dispatch("price")
        },
        //新品排序
        xin(i){
            this.s=i
            this.$store.dispatch("xin")
        },
        //跳转到详情页
        tiao(item){
            console.log(item.img)
            this.$router.push({path:'/xq',query:{name:item.name,price:item.price,img:item.img,price1:item.price1}})
        }
    },
    created () {
        this.getDate()
    },
    computed: {
        ...mapState(["info","n","v"])
    }
}
</script>
<style lang="scss" scoped>
.content{
    /* height: 12rem; */
    font-size: 0.3rem;
    padding: 1.9rem 0rem;
    display: flex;
    position: fixed;
    left: 0;
    z-index: 5;
    width: 100%;
    height: 100%;
    overflow: auto;
    nav{
        width: 25%;
        background: #f3f3f3;
        ul{
            width: 100%;
            text-align: center;
            li{
                height: 0.85rem;
                line-height: 0.85rem;
            }
        }
    }
}
.active{
    background: white;
    border-left:0.05rem solid; 
}
.right{
    width: 75%;
    height: 100%;
    overflow: auto;
   
    dl{
        dt{
            ul{
                width: 100%;
                display: flex;
                li{
                    width: 34%;
                    display: flex;
                    justify-content: center;
                    span{
                        display: block;
                        height: 0.85rem;
                        line-height:0.85rem;
                        display: flex;
                        b{
                            display: block;
                            margin: 0.15rem 0rem 0rem 0.1rem;
                        }
                        .icon{
                            display:block;
                            margin-top: 0rem;
                            width: 0.2rem;
                            height:0.2rem;
                            color: gray;
                        }
                    }
                   
                }
            }
        }
        dd{
            display: flex;
            img{
                display:block;
                width:2.1rem;
                height:2rem;
            }
            .right1{
                h1{
                    font-size:0.35rem;
                }
                p{
                    font-size:0.4rem;
                    color: red;
                    small{
                        color:#a7acb0;
                        font-size:0.3rem;
                        text-decoration: line-through;
                    }
                }
            }
        }
    }
}
.footer{
    background: white;
    width: 100%;
    position: fixed;
    bottom:0rem;
    z-index: 10;
}
.xia{
    border-bottom:0.04rem solid; 
}
.color{
    color: black !important;
}
</style>