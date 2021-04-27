<template>
  <div id="app">
    <v-app>
    <v-app-bar app color="blue-gray" >
      <v-toolbar-title>Online Shop!</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content >
       <NewFriend @add-contact="addContact"/> 
      <v-row class="mainBody">
        <product-two/>
        </v-row>
        <!-- <v-col class="col-lg-3 col-md-6 col-sm-12">
      
      </v-col>
        <v-col class="col-lg-9 col-md-6 col-sm-12">
      
      </v-col> -->
        <!-- <v-col class="col-lg-3 col-md-6 col-sm-12">
        <ProductMenu/>

      </v-col>
        <v-col class="col-lg-9 col-md-6 col-sm-12">
        <Product/>
      </v-col> -->
      <!-- <FriendContact v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFaviroteStatus"/> -->
      <router-view ></router-view>
    </v-content>
 
  </v-app>

    
  </div>
</template>

<script>

import FriendContact from './components/season8/FriendContact.vue'
import NewFriend from './components/season8/NewFriend.vue'
import ProductMenu from './components/ProductMenu.vue'
import Product from './components/Product.vue'
import ProductTwo from './components/ProductTwo.vue'

// import myFilter from './components/myFilter.vue'

export default {
  name: 'App',
  components: {
    ProductTwo,
    FriendContact,
    NewFriend,
    ProductMenu,
    Product,

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
  },
  addContact(){

  }
   
}
</script>

<style>

#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app input {
  font: inherit;
  padding: 0.15rem;
  border-style: solid;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app button {
  cursor: pointer;
  border: 1px solid palevioletred;
  background-color: palevioletred;
  color: white;
  padding: 0.5rem 0.5rem;
  box-shadow:1px 1px 1px rgba(0, 0, 0, 0.26);
  border-radius: 4px;
}
#app button:hover,
#app button:active {
  background-color: palevioletred;
}
.innerPart{
  margin:2rem auto;
}
</style>
