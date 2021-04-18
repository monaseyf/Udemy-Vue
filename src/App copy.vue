<template>
  <div id="app">
    <test/>
    <learning-exp/>
    <user-experiences/>
    <!-- <function/>
    <ProductOne/>
    <ProductTwo/>
    <product-three/>
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
import UserExperiences from './components/userExperiences.vue'
import test from './components/test.vue'

export default {
  name: 'App',
  components: {
    ProductOne,
    ProductTwo,
    ProductThree,
    Function,
    test,
    LearningExp,
    UserExperiences,

  },

  methods:{
    beforeCreate() {
        console.log('beforeCreated()')
    },
    created() {
        console.log('created()')
    },
    beforeMount() {
        console.log('beforeMount()')
    },
    mounted() {
        console.log('mounted()')
    },
    beforeUpdate() {
        console.log('beforeUpdate()')
    },
    updated() {
        console.log('updated()')
    },
  }
   
}
</script>

<style>
    UserExperiencesapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
