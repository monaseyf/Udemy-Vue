<template>
  <div>
    <h2>{{this.s}}</h2>
    <button v-on:click='addSome'>add me please</button>
  </div>
</template>

<script>
export default {
methods: {
        addSome: function(){
          
            this.$store.commit('increase',{value:10});
        }
    }
}
</script>

<style>

</style>