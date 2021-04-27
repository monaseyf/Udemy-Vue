import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state() {
    return {
    counter:0,
   
    // products: [
    //   { name: 'Tshirt', price: 20 },
    //   { name: 'skirt', price: 40 },
    //   { name: 'jeen', price: 50 },
    //   { name: 'shirt', price: 10 }
    //   ],
   
    };
  }, 
  
  getters: {
    // enteredName: (state) => {
    //     return state.enteredName
    //   },
    },
    mutations: {
      // SET_MESSAGE: (state, newValue) => {
      //   state.enteredName = newValue
      // },
  },
  actions: {
    // setMessage: ({commit, state}, newValue) => {
    //   commit('SET_MESSAGE', newValue)
    //   return state.message
    // },
  }
})
