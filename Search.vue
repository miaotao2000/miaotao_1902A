<template>
    <div>
      <div class="seach">
          <router-link to="/search">
                <input type="text" placeholder="搜索商品和文章"/>
          </router-link>
         
      </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.seach{
  
   a{
      
       input{
           display: block;
           width: 100%;
           height: 0.6rem;
           background: #51596c;
           border:none;
           font-size: 0.25rem;
           padding-left:0.5rem;
           box-sizing: border-box;
           border-radius:0.05rem; 
       }
   }
}
</style>