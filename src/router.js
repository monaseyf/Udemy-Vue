import Vue from 'vue'
import VueRouter from 'vue-router';


export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //       path: "/",
    //       name: "home",
    //       component: Home,
    //   },
      {
          path: "/ProductTwo",
          name: "ProductTwo",
          component: () =>
              import ( /* webpackChunkName: "about" */ "./components/ProductTwo.vue"),
      },
    
  ],
});