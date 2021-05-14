<template>
    <section>
        <base-card>
        <!-- <router-link class="nav-link" to="/ProductTwo">ProductTwo</router-link> -->
        <h2>How was your learning experiences?</h2>
        <form @submit.prevent="submitSurvey">
            <div class="form-control">
                <label for="name">Your name</label>
                <input type="text" id="name" name="name" v-model="enteredName"/>
            </div>
            <h3>My learning experiences are ...</h3>
            <div class="form-control">
                <input type="radio"
                 id="rating-poor"
                  value="poor" name="rating"
                   v-model="chooseRating"/>

                <label for="rating-poor">poor</label>
            </div>
             <div class="form-control">
                <input type="radio"
                 id="rating-average"
                  value="average" name="rating"
                   v-model="chooseRating"/>
                   
                <label for="rating-average">Average</label>
            </div>
             <div class="form-control">
                <input type="radio"
                 id="rating-great"
                  value="great" name="rating"
                   v-model="chooseRating"/>
                   
                <label for="rating-great">Great</label>
            </div>
            <p v-if="invalidInput">One or more input fields are invalid.
                 Please check your provided data.</p>
                  <p v-if="error">{{ error }}</p>
            <div>
                <base-button>Submit</base-button>
            </div>
        </form>
        </base-card>
    </section>
</template>

<script>
export default {
    data() {
        return {
            enteredName: '',
            chooseRating: null,
            invalidInput: false,
            error: null,
        }
    },
    methods: {
        submitSurvey(){
            if (this.enteredName === '' || !this.chooseRating){
                this.invalidInput = true;
                return;
            }
            this.invalidInput = false;

            fetch('https://vue-http-request-444ed-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json',{
                method: 'post',
                headers : {
                    'Content-Type': 'application/json',
                },
                body:{
                    name: this.enteredName,
                    rating: this.chooseRating,
                }
                })
                .then(Response => {
                    if (Response.ok){
                        //...
                    } else {
                        throw new Error(' Could not save any data')
                    }
                }).catch((error) => {
                    this.error = error.message;
                })
            
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin: 0.5rem auto;
}
</style>