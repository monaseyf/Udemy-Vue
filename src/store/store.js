import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state() {
    return {
    counter:0,
    isLoggedIn: false,
      
      groups: {
        "GROUP A": {
          "name": "CLOTHING",
          "open": false,
          "items": [
            "item 1",
            "item 2",
            //  {name:"item 1",open:true,SubItems:[
            //   {name:'subItem1'},
            //   {name:'subItem2'}
            // ]},
      
          ]
        },
     

        "GROUP B": {
          "name": " SHOES & ACCESSORIES",
          "open": false,
          "items": [
            "item 1",
            "item 2",
            "item 3",
            "item 4",

          ]
        },
        "GROUP C": {
          "name": "DRESSES",
          "open": false,
          "items": [
            "item 1",
            "item 2",
            "item 3",
            "item 4",
            "item 5"
          ]
        },
        "GROUP D": {
          "name": "TOPS",
          "open": false,
          "items": [
            "item 1",
            "item 2",
            "item 3",
          ]
        },
        "GROUP E": {
          "name": " BEAUTY",
          "open": false,
          "items": [
            "item 1",
            "item 2",
            "item 3",

          ]
        }
      },
    products: [
      { name: 'Tshirt', price: 20 },
      { name: 'skirt', price: 40 },
      { name: 'jeen', price: 50 },
      { name: 'shirt', price: 10 }
      ],
   
    };
  }, 
  
  getters: {
    // enteredName: (state) => {
    //     return state.enteredName
    //   },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(state, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
    // normalizedCounter(state){
    //   const finalCounter = state.counter * 5;
    //   if (finalCounter < 0) {
    //         return 0;
    //       }
    //       if (finalCounter > 100) {
    //         return 100;
    //   }
    //   return finalCounter;
    // }
    },
    mutations: {
      // SET_MESSAGE: (state, newValue) => {
      //   state.enteredName = newValue
      // },
      increment(state) {
        state.counter = state.counter + 2;
      },
      setAuth(state, payload) {
        state.isLoggedIn = payload.isAuth;
      }
  },
  actions: {
    // setMessage: ({commit, state}, newValue) => {
    //   commit('SET_MESSAGE', newValue)
    //   return state.message
    // },
    increment(context) {
      setTimeout(function ()
      {
        context.commit('increment');
      }, 3000)
    },
    login(context) {
      context.commit('setAuth',{isAuth : true})
     },
    logout(context) {
      context.commit('setAuth',{isAuth : false})
    }
  }
     
        
  

    
})
