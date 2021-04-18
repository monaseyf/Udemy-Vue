<template>
    <div class="container ">
  <div v-for="group in groups" :key="group.name">
    <a @click="group.open = !group.open" v-text="group.name"></a>
    <ul v-show="group.open">
      <li v-for="item in group.items" :key="item.name" v-text="item.name"></li>
    </ul>
    <hr>
  </div>
</div>
</template>

<script>

var groups = {
  "GROUP A": {
    "name": "GROUP A",
    "open": false,
    "items": [
      "item 1"
    ]
  },
  "GROUP B": {
    "name": "GROUP B",
    "open": false,
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7"
    ]
  },
  "GROUP C": {
    "name": "GROUP C",
    "open": false,
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5"
    ]
  },
  "GROUP D": {
    "name": "GROUP D",
    "open": false,
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5",
      "item 6",
      "item 7"
    ]
  },
  "GROUP E": {
    "name": "GROUP E",
    "open": false,
    "items": [
      "item 1",
      "item 2",
      "item 3",
      "item 4",
      "item 5"
    ]
  }
}

export default {
    data() {
        return {
    //          Group: [
    //     { name: 'GroupA', open: false},
    //     { name: 'GroupB', open: false},
    //     { name: 'GroupC', open: false},
    //     { name: 'GroupD', open: false},
    //   ],
    //   GroupItem: [
    //     { name: 'item1', id: 1},
    //     { name: 'item2', id: 2},
    //     { name: 'item3', id: 3},
    //     { name: 'item4', id: 4},
    //     { name: 'item5', id: 5},
    //     { name: 'item6', id: 6},
    //      { name:'item7', id: 7},
    //     { name: 'item8', id: 8},
    //     { name: 'item9', id: 9},
    //     { name: 'item10',  id: 10},
    //     { name: 'item11',  id: 11},
    //     { name: 'item12',  id: 12},
    //   ],

        }
    },
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 20px auto;
  line-height: 24px;
}
a {
  display: block;
  cursor: pointer;
  color: #44f;
}
</style>