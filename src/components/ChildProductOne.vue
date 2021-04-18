<template>
   <div > 
       <ul>
           <li v-for="item in itemOne" :key="item.name"  v-text="item">  helooooooo</li>
       </ul>
   </div>
</template>

<script>
export default {
     data () {
    return {
    "itemOne": {
        "name": "itemOne",
        "open": false,
        "subItem": [
          "subitem1",
          "subitem2",
          "subitem3",
          "subitem4",
          "subitem5",
          "subitem6",
          "subitem7",
      ]
    },
    }
  },
  computed: {

    
  },
}
</script>