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
    groups : {
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
    }
    };
  }, 
  getters: {
    
    },
    mutations: {
     
  },

    
})
