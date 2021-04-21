<template>
  <div id="menu">

      <h2>Products</h2>

      <div v-for="group in groups" :key="group.name">

        <a @click="group.open = !group.open" v-text="group.name"></a>

          <ul v-show="group.open">
            
             <li v-for="item in group.items" 
             :key="item.name"
               v-on:click="openSubMenu"  v-text="item">
                    <!-- <ul  type='I'>
                        <li v-for="item in item.SubItems" :key="item.name">{{item}} </li>
                    </ul>   -->
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
        this.item.open = true
      }
    }
}
</script>

<style scoped>
#menu {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-top: 50px;
}
h2 {
  justify-content: center;
  display: flex;
  background-color: bisque;
}
#menu a{
  padding-left: 10px;
  color: rgb(83, 83, 85);
}
#menu a :active{
 color: #e058f7;
}

</style>
