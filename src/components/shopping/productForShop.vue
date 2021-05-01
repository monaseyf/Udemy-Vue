<template>
   <div>
        <v-card
         v-for="item in productShop" 
         :key="item.id" 
         class="myCard">
            <v-card-title>{{item.title}}</v-card-title>
            <v-card-text>{{item.description}}
                <span>{{item.price}}</span>
            </v-card-text>
            <button>add to cart</button>
        </v-card>
   </div>  
</template>

<script>

export default {
 props:['productShop'],

    data(){
        return{

        }
    }
}
</script>

<style scoped>
.myCard{
 margin: 1.5rem auto;;
}
</style>