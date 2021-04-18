<template>
<base-card>
    <p>{{outPutGoal()}}</p>
    <input type="text" ref="userText"/>
    <button @click="setText">setText</button>
    <p>{{messege}}</p>
    <button @click="toggleFaviroute">toggle faviroute</button>
    <p>hi I am {{name}}{{isFaviroute === '1' ? '(Favorite)' : ''}}</p>
    <p>with a phone number {{phoneNumber}}</p>
</base-card>
   
</template>

<script>
export default {
props:[
    'name',
    'phoneNumber',
    'isFaviroute'
    ],

data() {
    return {
        messege: '',
        courseGoalA: 'thanks for completing this course',
        courseGoalB: 'you are really really welcome',
        friendFaviroute: this.isFaviroute,
    }
},

methods: {
    outPutGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 1) {
            return this.courseGoalA;
        } else {
            return this.courseGoalB;
        }
    },
    setText (){
        this.messege = this.$refs.userText.value
    },
    toggleFaviroute(){
        if (this.isFaviroute === '1'){
            this.isFaviroute = '0';
        } else {
            this.isFaviroute = '1';
        }
    },
   
    }
}
</script>