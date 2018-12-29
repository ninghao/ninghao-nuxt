<template>
  <div class="my-5">
    <h1 class="display-1 my-5">
      {{ post.title }}
    </h1>
    <img
      :src="post.imageUrl"
      :alt="post.title"
      class="rounded w-100 mb-3"
    >
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

  async asyncData({ $axios, params, error }) {
    try {
      const post = await $axios.$get(`http://localhost:3333/posts/${params.id}`)
      return { post }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found.' })
    }
  },

  head() {
    return {
      title: this.post.title
    }
  }
}
</script>
