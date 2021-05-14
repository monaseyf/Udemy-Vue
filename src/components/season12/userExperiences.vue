<template>
    <section>
       <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <button @click="LoadMyExp">Load Submitted Experiences</button>
      </div>
      <p v-if="isLoading">is Loading ...</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
          Load Submmited Experiences
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
    </section>
</template>

<script>

import SurveyResult from './SurveyResult'

export default {
    components: {
        SurveyResult,
    },
    data(){
        return {
            results: [],
            isLoading: false,
            error: null,
        };
    },
    methods: {

        LoadMyExp(){
           this.isLoading = true
           this.error = null
            console.log('what is happening')
                  fetch('https://vue-http-request-444ed-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
            this.isLoading = false
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
            console.log(error);
            this.isLoading = false;
            this.error = 'Failed to fetch data - please try again later'
        });
        }
    },
    mounted(){
        this.LoadMyExp();
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>