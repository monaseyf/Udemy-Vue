<template>
    <!-- <div id="app">
  <ul>
    <li v-for="question in questions" :key="question.id">
      <ul>
        <li v-for="subject in question.subjects" :key="subject.name">
          {{ subject }}
        </li>
      </ul> 
    </li>
  </ul>
</div> -->

<div id='app'>

  <ol>
    <li v-for="subjects, index in questions" :key="index.id">
      {{ index }}
      <ol type='I'>
        <li v-for="question in subjects" :key="question.name">
          {{ question }}
        </li>
      </ol>
    </li>
  </ol>
</div>
</template>

<script>
export default {
     data() {
         return{
    questions: [
        {
          subjects: ['question 1.1', 'question 1.2'], id:1
        },
        {
          subjects: ['question 2.1', 'question 2.2'], id:2
        }
      ]
         }
     
    }
}
</script>

