<template>
  <div id="app">
    <v-app >
     
    <v-main >
       <Nav/>
       <v-row>
         <v-col class="col-lg-6">
           <course-goals>
             <template #default="slotProps">
                <h2>{{slotProps.item}}</h2>
                <p>{{slotProps['another-prop']}}</p>
             </template>
           </course-goals>
           <input-test/>
             <UserAuth/>
            <the-counter v-if="isAuth"/>
            <product-two v-if="isAuth"/> 
         </v-col>
       </v-row>
      
        
        <!-- <NewFriend @add-contact="addContact"/>  -->
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
    </v-main>
 
  </v-app>

    
  </div>
</template>

<script>

import FriendContact from './components/season8/FriendContact.vue'
import NewFriend from './components/season8/NewFriend.vue'
import ProductMenu from './components/ProductMenu.vue'
import Product from './components/Product.vue'
import ProductTwo from './components/ProductTwo.vue'
import TheCounter from './components/TheCounter.vue'
import UserAuth from './components/UserAuth.vue'
import Nav from './components/shopping/nav.vue'
import ProductForShop from './components/shopping/productForShop.vue'
import InputTest from './components/InputTest.vue'
import CourseGoals from './components/CourseGoals.vue'
// import myFilter from './components/myFilter.vue'

export default {
  name: 'App',
  components: {
    ProductTwo,
    FriendContact,
    NewFriend,
    ProductMenu,
    Product,
    TheCounter,
    UserAuth,
     Nav,
    ProductForShop,
    InputTest,
    CourseGoals,
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
        productShop: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
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
},
computed:{
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
        }
    }
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
/* #app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
} */
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


</style>
