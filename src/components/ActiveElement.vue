<template>
    <div>
    <p> Active element </p>
    <input type="text" ref="goal"/>
    <button @click="setGoal">set Goal </button>
    <error-alert v-if="inputIsInvalid">
        <h2> input is invalid</h2>
        <p>try to type something</p>
        <button @click="confirmError">ok</button>
    </error-alert>
    </div>
</template>

<script>

import ErrorAlert from './season9/AlertError.vue'

export default {
    components:{
        ErrorAlert
    },

    data(){
        return{
            inputIsInvalid: false
        }
    },
    methods:{
        setGoal(){
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === ''){
                this.inputIsInvalid = true
            }
        },
        confirmError(){
            this.inputIsInvalid = !this.inputIsInvalid
        }
    }

}
</script>