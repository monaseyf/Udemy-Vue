<template>
  <div>
    <header v-if="$slots.header">
      <slot name="header">
        <!-- <h2> The Defualt</h2> -->
      </slot>
    </header>
      <slot></slot>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$slots);
  }
}
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>