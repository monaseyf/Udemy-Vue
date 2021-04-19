<template>
  <div id="product-one">
      <h2>Products</h2>

      <div v-for="group in groups" :key="group.name">
        <a @click="group.open = !group.open" v-text="group.name"></a>
          <ul v-show="group.open">
             <li v-for="item in group.items" 
             :key="item.name"
               v-text="item"
               v-on:click="openSubMenu">
             </li>
             <div > 
                    <ul>
                        <li v-for="item in group.items.item1" :key="item.name" > {{item.SubName}}</li>
                    </ul>

                </div> 
          </ul>
      </div>
      
        <!--<child-product-one/> -->
  </div>
  
</template>

<script>

import ChildProductOne from './ChildProductOne.vue'

export default {
  components: { ChildProductOne },
  data () {
    return {
      "subItem": [
          {name: "subitem1", open: false},
          {name: "subitem2", open: false},
          {name: "subitem3", open: false},
          {name: "subitem4", open: false},
          {name: "subitem5", open: false},
          {name: "subitem6", open: false},
          {name: "subitem7", open: false},
      ]
    }
  },
  computed: {
    groups(){
      return this.$store.state.groups
    },
    
    
  },
   methods: {
      openSubMenu(){
        console.log('test')
        this.subItem.open = true
      }
    }
}
</script>

<style scoped>
#product-one {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
h2 {
  justify-content: center;
  display: flex;
  background-color: bisque;
}
#product-one a{
  padding-left: 10px;
  color: rgb(83, 83, 85);
}
#product-one a :active{
 color: #e058f7;
}

</style>
