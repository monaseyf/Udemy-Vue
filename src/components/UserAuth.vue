<template>
<base-card>
      <p>{{value}}</p>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-if="isAuth">Log out</button>
</base-card>
    
</template>

<script>
export default {
    methods:{
        login(){
            this.$store.dispatch('login');
        },
        logout(){
            this.$store.dispatch('logout');
        }
    },
    computed:{
        isAuth(){
            return this.$store.getters.userIsAuthenticated;
        },
        value() {
        return this.$store.getters.value;
      }
    },
    
}
</script>