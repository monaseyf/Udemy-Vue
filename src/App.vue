<template>
  <div id="app">
    
    <v-app>
    <v-app-bar app color="blue-gray" >
      <v-toolbar-title>Online Shop!</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-content >
      <v-col class="col-lg-3 col-md-6 col-sm-12">
      <ProductOne/>
     </v-col>
     <nested-loop/>
      <router-view ></router-view>
    </v-content>
 
  </v-app>
    <!-- <menu/> -->
    <!--<test name="mona" phoneNumber="44232931" isFaviroute="1"/>
    <test name="amir" phoneNumber="44232932" isFaviroute="0"/> -->
    <!-- <myFilter/> -->
    <!-- <learning-exp/>
    <user-experiences/> 
     <function/>-->
     
    <!--<ProductTwo/>
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
import menu from './components/menu.vue'
import NestedLoop from './components/nestedLoop.vue'


// import myFilter from './components/myFilter.vue'

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
    NestedLoop,
 
    // menu,
    // myFilter,

  },
data() {
    return {
      // links: [
      //   {
      //     label: " ProductTwo",
      //     url: "/ ProductTwo",
      //   },
      // ],
    };
  },
  methods:{
   
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
