<template>
  <div id="app">
    
    <v-app>
    <v-app-bar app color="blue-gray" >
      <v-toolbar-title>Online Shop!</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
    <v-content >
      <v-row class="mainBody">
        <v-col class="col-lg-3 col-md-6 col-sm-12">
        <ProductMenu/>

      </v-col>
        <v-col class="col-lg-9 col-md-6 col-sm-12">
        <Product/>
      </v-col>
      </v-row>
      
      <router-view ></router-view>
    </v-content>
 
  </v-app>

    
  </div>
</template>

<script>


import ProductMenu from './components/ProductMenu.vue'
import Product from './components/Product.vue'

// import myFilter from './components/myFilter.vue'

export default {
  name: 'App',
  components: {
    ProductMenu,
    Product,

  },
data() {
    return {
  
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
.mainBody{
  justify-content: center;
}
</style>
