<template>
    <div>
        <header>
            <p>{{title}}</p>
            <Search></Search>
        </header>
    </div>
</template>
<script>
import Search from '@/components/Search'  
export default{
    components: {
      Search  
    },
    props:{
        title:{
            type:String,
        }
    },
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
header{
    width: 100%;
    height: 1.9rem;
    background: #263147;
    padding: 0rem 0.3rem;
    box-sizing: border-box;
   position: fixed;
   top:0rem;
    p{
        font-size:0.35rem;
        color: white;
        padding:0.3rem 0rem;
    }
}
</style>