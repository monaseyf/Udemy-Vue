<template>
  <div id="app">
    <v-app>
    <v-app-bar app color="blue-gray" >
      <v-toolbar-title>Online Shop!</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content >
      <v-row class="mainBody">
        <!-- <v-col class="col-lg-3 col-md-6 col-sm-12">
        <ProductOne/>
      </v-col>
        <v-col class="col-lg-9 col-md-6 col-sm-12">
        <ProductThree/>
      </v-col> -->
      </v-row>
      <FriendContact v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFaviroteStatus"/>

      <NewFriend/>

      <router-view ></router-view>
    </v-content>
 
  </v-app>

    
  </div>
</template>

<script>

import ProductOne from './components/ProductOne.vue'
import ProductThree from './components/ProductThree.vue'
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

// import myFilter from './components/myFilter.vue'

export default {
  name: 'App',
  components: {
    ProductOne,
    ProductThree,
    FriendContact,
    NewFriend,
  },
data() {
    return {
       friends :[
          { id:'test',
         name:'mona seyf',
         phone:'0912 493 4606',
         email:'monaseyf25@gmail.com',
         isFavorite:true},
         { id:'test1',
         name:'mobin seyf',
         phone:'0935 43 65 170',
         email:'mobin@gmail.com',
         isFavorite:true}
       ]
        

    };
  },
  methods:{
   toggleFaviroteStatus(friendId){
     const identifiedFriend =
      this.friends.find((friend) => friend.id === friendId );
       identifiedFriend.isFavorite = !identifiedFriend.isFavorite
   }
  }
   
}
</script>

<style>
    UserExperiencesapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainBody{
  justify-content: center;
}
</style>
