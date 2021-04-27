<template>
  <div id="app">
    <v-app class="myTitle">
    <v-app-bar  app color="blue-gray" >
      <v-toolbar-title >فرم استخدام تخصصی
          </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content class="myContent">
  
    <input-test/>
    <login/>
 <!-- <input type="text"  v-model="currentUserInput">
      <button @click="setText">Set Text</button>
      <p>{{ message }}</p> -->
    
      <router-view ></router-view>
    </v-content>
 
  </v-app>

    
  </div>
</template>

<script>

// import Form from './components/safarayaneh/Form.vue'
// import FriendContact from './components/season8/FriendContact.vue'
// import NewFriend from './components/season8/NewFriend.vue'
// import ProductMenu from './components/ProductMenu.vue'
// import Product from './components/Product.vue'
// import ActiveElement from './components/ActiveElement.vue'
// import ProductTwo from './components/ProductTwo.vue'
import InputTest from './components/InputTest.vue'
import Login from './components/vuetify/Login.vue';
import {eventBus} from './main'; 

export default {
  name: 'App',
  components: {
    
    InputTest,
    Login
    // Form,
    // ProductTwo,
    // FriendContact,
    // NewFriend,
    // ProductMenu,
    // Product,
    // ActiveElement,

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
       ],
      ActiveComponent: 'active-element',
      message: 'Vue is great!',
      currentUserInput:'',
    };
  },
  methods:{
   toggleFaviroteStatus(friendId){
     const identifiedFriend =
      this.friends.find((friend) => friend.id === friendId );
       identifiedFriend.isFavorite = !identifiedFriend.isFavorite
   },
  
  addNewContact(name, phone, email){
     console.log('child Component')
    const newFriendContact = {
      id: new Date().toISOString(),
      name: name,
      phone: phone,
      email: email,
      isFavorite: false
    };
    this.friends.push(newFriendContact);
  },
  setActiveComponent(cpm){
    this.ActiveComponent = cpm;
  },
  // saveInput(event) {
  //     this.currentUserInput = event.target.value;
  //   },
  //   setText() {
  //      this.message = this.currentUserInput;
  //   },
  
  }, 
}
</script>

<style>
/* .myContent{
  margin: 0 auto;
} */
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
  /* border-style: solid; */
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

.myTitle{
  float: right;
  text-align: right;
}
</style>
