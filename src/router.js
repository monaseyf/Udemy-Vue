import Vue from 'vue'
import VueRouter from 'vue-router';


export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
          path: "/",
          redirect: "/teams"
      },
      {
          path: "/ProductTwo",
          name: "ProductTwo",
          component: () =>
              import ("./components/ProductTwo.vue"),
      },
      {
        path: "/cart",
        name: "cart",
        component: () =>
            import ("./components/shopping/cart.vue"),
      },
      {
        path: "/productForShop",
        name: "productForShop",
        component: () =>
            import ("./components/shopping/productForShop.vue"),
      },
      {
        path: "/teams",
        component: () =>
            import ("./components/season13/teams/TeamsList.vue"),
      },
      {
        path: "/users",
        component: () =>
            import ("./components/season13/users/UsersList.vue"),
      },
    {
      path: '/teams/:teamId',
      component: () =>
            import ("./components/season13/teams/TeamMembers.vue"), props: true
    },
    {
      path: '/:notFound(.*)',
      component: () =>
      import ("./components/season13/nav/NotFound.vue")
    },
  ],
});