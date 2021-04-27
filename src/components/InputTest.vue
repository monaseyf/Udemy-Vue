
<template>

         <!-- <div class="innerPart">
            <h2>How Vue Works</h2>
      <input type="text"  v-model="currentUserInput">
      <button @click="setText">Set Text</button>
     
      <p>{{ message }}</p>
        </div> -->
<div>
    <input type="text" v-model="message" />
    <button type="button" @click="submit">Submit</button>
  </div>
</template>

<script>
import {eventBus} from '../main';

export default {
    data(){
        return{
            currentUserInput:'',
            message: ''
        }
    },
    computed: {
    // get () {
    //   return this.$store.state.enteredName
    // },
    // set (newValue) {
    //   return this.$store.commit('setMessage', newValue)
    // }
  },
  methods:{
       submit() {
        if(this.message !== ''){
         eventBus.$emit('name', this.message);
        }
      }
 
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    // setText() {
    //    this.message = this.currentUserInput;
    //     eventBus.$emit('showInput', this.message);
      // this.message = this.enteredName.value;
      // console.dir(this.$refs.userText);
    // },
    // edit(){
    //     eventBus.$emit('showInput', this.message);
       
    // }
  },

}
</script>