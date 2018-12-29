<template>
  <div class="container">
    <h1 class="display-1">
      {{ post.title }}
    </h1>
    <div>
      {{ post.description }}
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },

  async asyncData({ $axios, params }) {
    const post = await $axios.$get(`http://localhost:3333/posts/${params.id}`)
    return { post }
  }
}
</script>
