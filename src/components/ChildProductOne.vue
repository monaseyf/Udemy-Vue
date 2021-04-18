<template>
   <!-- <div @click="subItem.open = !subItem.open"> 
       <ul v-show="subItem.open">
           <li v-for="item in subItem" :key="item.name" > {{item.name}}</li>
       </ul>
   </div> -->
<div> 
    <ul>
        <li v-for="item in subItem" :key="item.name" > {{item.name}}</li>
    </ul>

</div>

</template>

<script>
export default {
     data () {
    return {
    // "itemOne": {
    //     "name": "itemOne",
    //     "open": false,
        "subItem": [
          {name: "subitem1", open: false},
          {name: "subitem2", open: false},
          {name: "subitem3", open: false},
          {name: "subitem4", open: false},
          {name: "subitem5", open: false},
          {name: "subitem6", open: false},
          {name: "subitem7", open: false},
      ]
    // },
    }
  },
  computed: {

    
  },
}
</script>