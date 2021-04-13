import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state() {
    return {
    counter:0,
    products: [
      { name: 'Tshirt', price: 20 },
      { name: 'skirt', price: 40 },
      { name: 'jeen', price: 50 },
      { name: 'shirt', price: 10 }
      ]
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
  getters: {
    finalgetter(state) {
      return state.counter * 3;
      }
    }
})
