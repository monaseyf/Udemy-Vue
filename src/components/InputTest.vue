
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

        }
    },
    computed: {
   message: {
    get () {
      return this.$store.state.obj.message
    },
    set (value) {
      this.$store.commit('updateMessage', value)
       console.log('value')
    }
  }
  },
  methods:{
      //  submit() {
      //   if(this.message !== ''){
      //    eventBus.$emit('name', this.message);
      //   }
      // }
 
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
    submit(){
     console.log('message.value')
}
  },

}
</script>