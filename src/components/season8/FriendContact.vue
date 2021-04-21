<template>
<base-card>
    <div>
        <h2>{{name}} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">Toggle Details</button>
        <ul v-if="detailAreVisible">
            <li>
                {{ phoneNumber }}
            </li>
            <li>
                {{ emailAddress }}
            </li>
        </ul>
    </div>
</base-card>
</template>

<script>
import BaseCard from '../../UI/BaseCard.vue';
export default {
  components: { BaseCard },
  props : {
       id:{
        //   type: string,
          required: true,
      },
      name:{
        //   type: string,
          required: true,
      },
      phoneNumber:{
        //   type: string,
          required: true,
      },
      emailAddress:{
        //   type: string,
          required: true,
      },
       isFavorite:{
          type: Boolean,
          required: true,
      },
  }, 
  data() {
      return {
           detailAreVisible : false,
        //    FriendIsFavorite: this.isFavorite,
      }
  },
  
  methods:{
      toggleDetails(){
          this. detailAreVisible = !this.detailAreVisible;
      },
      toggleFavorite(){
          this.$emit('toggle-favorite', this.id)
        //   this.FriendIsFavorite = !this.FriendIsFavorite;
      }
  }
}
</script>