<template>
    <div>
        <ul>
            <li v-for='(item,index) in list'>
                   
                <router-link to="">
                        <svg class="icon" aria-hidden="true">
                                <use :xlink:href="`#icon-${item.icon}`"></use>
                              </svg>
                      <span>{{item.name}}</span>
                      
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    data () {
        return {
            list:[
                {name:"木点主页",url:"",icon:"zhuye"},
                {name:"商品分类",url:"",icon:"fenlei"},
                {name:"居家分享",url:"",icon:"shu"},
                {name:"购物车",url:"",icon:"gouwuche"},
                {name:"我的工坊",url:"",icon:"ziyuan"},
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
ul{
    width: 100%;
    border-top:0.03rem solid #a9adb0; 
    margin-top: 0.05rem;
    display: flex;
    li{
        width:20%;
        padding:0.2rem 0rem 0.15rem;
        a{
            width: 100%;
            color: #b4b4b4;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .icon{
                display: block;
                width: 0.4rem;
                height: 0.4rem;
                margin:0 auto;
            }
            span{
                font-size:0.25rem;
                margin-top: 0.1rem;
            }
        }
    }
}

</style>