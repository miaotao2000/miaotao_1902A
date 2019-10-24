<template>
  <div>
      <slot></slot>
      <p>{{title}}</p>  
  </div>
</template>

<script>
export default {
    props: ["title"],
  data () {
      return {
       
      }
  }
}
</script>

<style lang="scss" scoped>
div{
   position: fixed;
   top:0rem;
    width: 100%;
    height: 0.9rem;
    line-height: 0.9rem;
    display: flex;
    p{
      font-size:0.3rem; 
      margin-left: 0.2rem;
      color: white;
  }
}    

</style>
