<template>
<base-card>
 <h2>{{finalCounter}}</h2>
</base-card>
   
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: { BaseCard },
    data() {
        return {
            
        }
    },
     computed:{
         ...mapGetters([
            'finalCounter',
        ]),
        // counter(){
        //      return this.$store.getters.finalCounter;
        //      return this.$store.getters.normalizedCounter;
        // }
    },
  
}
</script>