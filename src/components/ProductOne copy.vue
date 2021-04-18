<template>
  <div id="product-one">
      <h2>menu</h2>

      <div v-for="group in groups" :key="group.name">
    <a @click="group.open = !group.open" v-text="group.name"></a>
    <ul v-show="group.open">
      <li v-for="item in group.items" :key="item.name" v-text="item.name"></li>
    </ul>
    <hr>
  </div>

      <!-- <ul>
          <li v-for="product in products" :key="product.name" >
              <span class="name">{{product.name}}</span>
              <span class="price">{{product.price}}</span>
          </li>
      </ul> -->
      <!-- <button v-on:click="reducePrice">ReducePrice</button> -->
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    saleProducts () {
      return this.$store.getters.saleProducts
    },
    groups(){
      return this.$store.state.groups
    }
  },
   methods: {
        reducePrice: function(){
            /* this.$store.state.products.forEach( product => {
                product.price -= 1
            }); */
            this.$store.commit('reducePrice');
        }
    }
}
</script>

<style scoped>
/* #product-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-one ul{
    padding: 0;
}
#product-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
} */
</style>
