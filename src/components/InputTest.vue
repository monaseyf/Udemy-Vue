
<template>
  <base-card>
    <input type="text" :value="value" @input="updateValue"/>
    <p>{{value}}</p>
  </base-card>
</template>

<script>
import {eventBus} from '../main';
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: { BaseCard },
    data(){
        return{

        }
    },
    computed: {
      value() {
        return this.$store.getters.value;
      }
  //  message: {
  //   get () {
  //     return this.$store.state.obj.message
  //   },
  //   set (value) {
  //     this.$store.commit('updateMessage', value)
  //      console.log('value')
  //   }
  // }
  },
  methods:{
    updateValue(event){
      this.$store.dispatch('updateValue', event.target.value);
    }
  },

}
</script>