<template>
    <v-card class="mx-auto mt-5">
        <v-card-title>
            <h1>Login</h1>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field
                label="UserName"
                prepend-icon="mdi-account-circle"/>
                <v-text-field
                 :type="showPassword ? 'text' : 'password'"
                 label="Password"
                 prepend-icon="mdi-lock"
                 append-icon="mdi-eye"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
             <v-btn color="info">Login</v-btn>
        </v-card-actions>
        <div>{{recievedMessage}}</div>
    </v-card>
</template>

<script>
import {eventBus} from '../../main'; 
export default {
    data(){
        return{
            showPassword: false,
            recievedMessage:''
        }
    },
     created() {
          eventBus.$on('name', this.eventHandlerMethod)
        },
    methods:{
        
          eventHandlerMethod (message) {
             this.recievedMessage = message;
        }
 
    }
}
</script>