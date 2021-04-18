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
          "item 1"
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
          "item 5",
          "item 6",
          "item 7"
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
          "item 4",
          "item 5",
          "item 6",
          "item 7"
        ]
      },
      "GROUP E": {
        "name": " BEAUTY",
        "open": false,
        "items": [
          "item 1",
          "item 2",
          "item 3",
          "item 4",
          "item 5"
        ]
      }
    }
    };
  }, 
  getters: {
    saleProducts: (state) => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**' + product.name + '**',
          price: product.price / 2
        }
      })
      return saleProducts
    },
    finalgetter(state) {
      return state.counter * 3;
      }
    },
    mutations: {
      reducePrice: state => {
            state.products.forEach( product => {
                product.price -= 1
            });
      },
      increment: state => {
        state.counter = state.counter + 2;
      },
      increase(state, payload) {
        state.counter = state.counter + payload.value;
      }
  },
  
  // actions: {
  //   increment(context) {
  //     setTimeout(function () {
  //       context.commit('increment');
  //     }, 2000);
  //   },
  //   increase(context, payload) {
  //     context.commit('increase', payload);
  //   }
  //     }
    
})
