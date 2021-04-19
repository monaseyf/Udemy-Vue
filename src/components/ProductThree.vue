<template>
    <div id="productThree">
        <select v-model="selectedRole" class="option">
            <option  v-bind:value="null"> filter by type </option>
            <option :key="item.id" v-for="item in people" > {{ item.role }} </option>
        </select>   
      
     <v-row class="myAllCard">
      <v-card class="myCard"
       v-for="person in people" 
      :key="person.id" v-show="selectedRole === null || person.role === selectedRole">
      <v-card-title v-on:click="toggleDisplayDetails(person)">
          {{person.fullName}}
      </v-card-title>
      <v-img class="myPicture"
        v-bind:src="person.src"
      ></v-img>
      <v-card-text v-show="person.DisplayDetails">
          <br/>
          Type: {{person.role}}
      </v-card-text>
      </v-card>
      </v-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              //  image: { backgroundImage: `url(${require("@/images/porfolio/5.jpg")})` },
                people: [
                        { id: 1, fullName: `lipstick light`,  role: `beauty`, DisplayDetails: true,
                          src: require("../assets/lipstick.jpg")},

                        { id: 2, fullName: `face powder`,  role: `beauty`, DisplayDetails: true,
                          src: require("../assets/beauty.jpg")},

                        { id: 3, fullName: `lipstick pink`,  role: `beauty`, DisplayDetails: true,
                          src: require("../assets/lipstick1.png")},

                        { id: 4, fullName: `argan oil`,  role: `beauty`, DisplayDetails: true,
                          src: require("../assets/oil.jpeg")},

                        { id: 5, fullName: `rimel`,  role: `beauty`, DisplayDetails: true,
                          src: require("../assets/rimel 1.jpg")},

                        { id: 6, fullName: `shoes`,  role: `clothing`, DisplayDetails: true,
                          src: require("../assets/shoes 1.jpg") },

                        { id: 7, fullName: `shoes`,  role: `clothing`, DisplayDetails: true,
                          src: require("../assets/shoes.jpg") },

                        { id: 8, fullName: `skirt`,  role: `clothing`, DisplayDetails: true,
                          src: require("../assets/skirt.jpg") },
                    ],
                    picture:[
                        { backgroundImage: `url(${require("@/assets/lipstik.jpg")})` },
                    ],
                    selectedRole: null,
            }
        },

        props: {
            title: String
        },

        methods: {
             toggleDisplayDetails: function (person) {
                 person.DisplayDetails = !person.DisplayDetails
             },
        },

        
    }
</script>
<style scoped>
#productThree {
  margin-top: 50px;
}

.myCard{
  min-width: 200px;
  margin: 10px 10px;

}
.option{
 background-color: bisque;
 width:200px;
 border-radius: 2px;
 margin: 0px 0px 20px 0px ;
}
.myPicture{
 height:250px;
 width: 250px
}
</style>