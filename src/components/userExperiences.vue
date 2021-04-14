<template>
    <section>
        <base-card>
        <h2>Submitted Experiences</h2>
        <div>
            <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
        </div>
        <p v-if="isLoading">loading...</p>
        <p v-else-if="!isLoading && error">{{error}}</p>
        <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found. Start adding some survey results first  
        </p>
        <ul v-else>
            <survey-result
            v-for="result in results"
            :key= "result.id"
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
        loadExperiences() {
            this.isLoading = true;
            this.error = null;
             fetch('https://myvuerequest-default-rtdb.firebaseio.com/surveys.json').
             then(function(response){
                 if (response.ok) {
                     return response.json();
                 }
             })
             .then(function(data){
                 console.log(data);
             })
        }
    }
}
</script>