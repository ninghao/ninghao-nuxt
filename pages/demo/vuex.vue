<template>
  <div class="container">
    <h1 class="display-1 my-5">{{ pageName }}</h1>
    <span class="badge badge-pill badge-primary">Count {{ count }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    pageName() {
      return this.$store.state.demo.pageName
    },
    count() {
      return this.$store.state.demo.count
    }
  }
}
</script>
