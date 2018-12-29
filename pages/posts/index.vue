<template>
  <div>
    <h1 class="display-1">List</h1>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      {{ post.title }}
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get('http://localhost:3333/posts')
    return { posts }
  }
}
</script>
