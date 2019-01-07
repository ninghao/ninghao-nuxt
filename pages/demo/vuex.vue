<template>
  <div class="container">
    <h1 class="display-1 my-5">{{ pageName }}</h1>
    <span
      class="badge badge-pill badge-primary"
      @click="addAction">Count {{ count }}</span>
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
  },
  methods: {
    add() {
      this.$store.commit('demo/add', 2)
    },
    addAction() {
      this.$store.dispatch('demo/addAction', 3)
    }
  }
}
</script>
