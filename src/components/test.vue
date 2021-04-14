<template>
    <p>{{outPutGoal()}}</p>
</template>

<script>
export default {

data() {
    return {
        courseGoalA: 'thanks for completing this course',
        courseGoalB: 'you are really really welcome',
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
    }
    }
}
</script>