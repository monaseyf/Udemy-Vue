<template>
  <div id="app">
    <product-three/>
    <learning-exp/>
    <!-- <function/>
    <ProductOne/>
    <ProductTwo/>
     -->
    
  </div>
</template>

<script>
import Function from './components/function.vue'
import learningExp from './components/learningExp'
import LearningExp from './components/learningExp.vue'
import ProductOne from './components/ProductOne.vue'
import ProductThree from './components/ProductThree.vue'
import ProductTwo from './components/ProductTwo.vue'

export default {
  name: 'App',
  components: {
    ProductOne,
    ProductTwo,
    ProductThree,
    Function,
    LearningExp,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
