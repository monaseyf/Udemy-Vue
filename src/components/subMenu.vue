<template>
    <div class="container vue">
  <div v-for="(group) in groups" :key="group.name">
    <a @click="group.open = !group.open" v-text="group.name"></a>
    <ul v-show="group.open">
      <li v-for="item in group.items" v-text="item" :key="item.name"></li>
    </ul>
    <hr>
  </div>
</div>
</template>

<script>
export default {
    
}
</script>