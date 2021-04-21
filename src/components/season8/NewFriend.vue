<template>

    <form @submit.prevent="">
        <div class="innerPart">
            <label>name</label>
            <input type="text" v-model="enteredName"/>
        </div>
        <div class="innerPart">
            <label>phone</label>
            <input type="text" v-model="enteredPhone"/>
        </div>
       <div class="innerPart">
            <label>email</label>
            <input type="text" v-model="enteredEmail"/>
       </div>
       
        <button>Submit</button>
    </form>

</template>

<script>
import BaseCard from '../../UI/BaseCard.vue'
export default {
    emits:['add-contact'],
  components: { BaseCard },
    data() {
        return {
          enteredName:'',
          enteredPhone:'',
          enteredEmail:'',  
        }
    },
    methods:{

    }
}
</script>