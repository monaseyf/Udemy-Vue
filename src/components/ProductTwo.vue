<template>
<base-card>
  <template v-slot:header>
  <h2>Product List Two</h2>
  </template>
      <template v-slot:default id="product-list-two">
      <ul>
          <li v-for="product in products" :key="product.name">
               <span class="name">{{product.name}}</span>
               <span class="price">{{product.price}}</span>
          </li>
      </ul>
      <p>{{counter}}</p>
      <button  @click="addOne">add me please</button>
  </template>
  </base-card>
  
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: { BaseCard },
  data () {
    return {

    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    counter() {
      return this.$store.state.counter;
    },
  },
  methods:{
    addOne(){
      // this.$store.commit('increment');
      this.$store.dispatch('increment')
    },
    addTwo(){
      console.log('what is happened')
      this.$store.getters.finalCounter;
    }
  }
}
</script>

<style scoped>
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
}
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
