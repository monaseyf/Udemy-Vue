<template>
  <div id="product-one">

      <h2>Products</h2>

      <div v-for="group in groups" :key="group.name">

        <a @click="group.open = !group.open" v-text="group.name"></a>

          <ul v-show="group.open">
            
             <li v-for="item in group.items" 
             :key="item.name"
               v-on:click="openSubMenu"  v-text="item">
                     <!-- <ul  type='I'>
                        <li v-for="item in SubName" :key="item.name"> </li>
                    </ul>  -->
              </li>
          </ul>
      </div>
      
  </div>
  
</template>

<script>



export default {

  data () {
    return {
      
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
  margin-top: 50px;
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
