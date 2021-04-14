<template>
   <div id="product-three">
     <h3>{{$store.state.counter}}</h3> 
     <button v-on:click="addOne">Add me please</button> 
     
  </div>
</template>

<script>

export default {

  data () {
    return {

    }
  },
  computed: {
    counters () {
      return this.$store.state.counter
    }
  },
  methods : {
      addOne: function(){
           this.$store.dispatch('increment');
      },
     
  },
}
</script>

<style>
#product-three{
    background: #f7d179;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
</style>