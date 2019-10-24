<template>
  <div>
      <slot></slot>
      <h1>{{title}}</h1>  
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
    width: 100%;
    height: 0.6rem;
    line-height: 0.6rem;
    display: flex;
    background: white;
    top:0rem;
    h1{
      font-size:0.3rem; 
      margin-left: 0.2rem;
  }
}    

</style>
