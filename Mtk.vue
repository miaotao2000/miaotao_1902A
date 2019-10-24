<template>
  <div>
    <div class="mtk">
        <dl>
            <dt>
               <img :src="`/static/img/${obj.url}`">
               <ul>
                   <li>￥{{obj.price}}</li>
                   <li @click="xiaoshi">
                      <i class="el-icon-circle-close icon" ></i>
                   </li>
               </ul>
            </dt>
            <dd>
                <p>数量</p>
                <div>
                    <button @click="jian">-</button>
                    <span>{{obj.num}}</span>
                    <button @click="obj.num++">+</button>
                </div>
            </dd>
            <dd>
                <button @click="jia">确定</button>
            </dd>
        </dl>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      obj:{
          type:[Array,Object],
          default:"暂时没有数据"
      }
    },
    data () {
        return {
            obj:this.obj,
            
        }
    },
    methods: {
        //模态框消失
        xiaoshi(){
            this.$store.dispatch("xiao")
        },
        //加入购物车
        jia(){
            this.$set(this.obj,"ok",false)
            this.$store.dispatch("jia",this.obj)
        },
        //--
        jian(){
            if(this.obj.num==1){
                return false
            }
            this.obj.num--
        }
    }
}
</script>

<style lang="scss" scoped>
.mtk{
    width: 100%;
    height: 9.1rem;
    background: rgba(0, 0, 0,0.4);
   
    dl{
        box-sizing: border-box;
        width: 100%;
        height: 5.5rem;
        background: white;
        position:fixed;
        bottom:0rem;
     
        dt{
           display: flex;
           width: 96%;
           margin: 0 auto;
           padding-bottom:0.1rem;
           /* padding: 0rem 0.2rem 0.1rem; */
           border-bottom:0.02rem solid gray; 
           img{
               display:block;
               width:1.8rem;
               height:1.8rem;
               border: 0.03rem solid white;
               margin-top:-0.5rem;
           }
           ul{
               display:flex;
               /* justify-content:space-between; */
               height: 0.6rem;
               line-height:0.6rem;
               li:nth-child(1){
                   font-size:0.3rem;
                   color:red;
                   margin-left: 0.1rem;
               }
               li:nth-child(2){
                   font-size: 0.4rem;
                   color: gray;
                   margin-left: 3.8rem;
               }
           }
        }
        dd{
            font-size:0.25rem;
        }
        dd:nth-child(3){
            button{
                display:block;
                width: 100%;
                height: 0.6rem;
                border: none;
                background: red;
                color: white;
                text-align: center;
                line-height: 0.6rem;
                font-size: 0.25rem;
            }
        }
        dd:nth-child(2){
            padding: 0.2rem 0.2rem 0rem;
            height: 3.2rem;
            display: flex;
            justify-content: space-between;
            div{
                border: 0.01rem solid gray;
                height: 0.4rem;
                display: flex;
                button,span{
                    display:block;
                    text-align: center;
                    height: 0.4rem;
                    line-height: 0.4rem;
                }
                button{
                    background: none;
                    border: none;
                    width: 0.4rem;
                }
                span{
                    width: 0.6rem;
                    height: 0.39rem;
                    border-left:0.01rem solid gray;
                    border-right:0.01rem solid gray;
                    /* border: 0rem 0.01rem solid gray; */
                }
            }
        }
    }
}
</style>
