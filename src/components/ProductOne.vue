<template>
  <div id="product-one">
      <h2>Products</h2>

      <div v-for="group in groups" :key="group.name">
        <a @click="group.open = !group.open" v-text="group.name"></a>
          <ul v-show="group.open">
             <li v-for="item in group.items" 
             :key="item.name"
              v-text="item">
             </li>
          </ul>
      </div>
      
        <child-product-one/> 
  </div>
  
</template>

<script>

import ChildProductOne from './ChildProductOne.vue'

export default {
  components: { ChildProductOne },
  data () {
    return {

    }
  },
  computed: {
    groups(){
      return this.$store.state.groups
    },
    itemOne(){
      return this.$store.state.itemOne
    }
    
  },
   methods: {
      
    }
}
</script>

<style scoped>
#product-one {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
#product-one a{
  padding-left: 10px;
  color: rgb(83, 83, 85);
}
#product-one a :active{
 color: #e058f7;
}

</style>
