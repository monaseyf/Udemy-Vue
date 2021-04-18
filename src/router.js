import Vue from 'vue'
import VueRouter from 'vue-router';

// let routes=[
//   {
//     path: 'ProductTwo',
//     name:'ProductTwo',
//     component: () => import ('./components/ProductTwo.vue')

//   },
  
// ];
// export default new VueRouter({ routes });

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
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () =>
              import ( /* webpackChunkName: "about" */ "./components/ProductTwo.vue"),
      },
    
  ],
});