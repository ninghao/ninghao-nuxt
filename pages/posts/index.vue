<template>
  <div>
    <h1 class="display-1 my-5">List</h1>
    <div class="row justify-content-center">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-md-6"
      >
        <div class="card my-3">
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">
            <img
              :src="post.imageUrl"
              :alt="post.title"
              class="card-img-top"
            >
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <h6 class="card-subtitle mb-2 text-black-50">{{ post.author }}</h6>
            </div>
          </nuxt-link>
          <div class="card-footer">
            <button 
              class="btn btn-link"
              @click="destroyAction(post.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // async asyncData({ $axios }) {
  //   const posts = await $axios.$get('http://localhost:3333/posts')
  //   return { posts }
  // },
  async fetch({ $axios, store }) {
    const response = await $axios.get('http://localhost:3333/posts')
    store.commit('posts/setList', response.data)
  },
  computed: {
    posts() {
      return this.$store.state.posts.list
    }
  },
  methods: {
    destroyAction(id) {
      this.$store.dispatch('posts/destroyAction', id)
    }
  },
  head() {
    return {
      title: 'Posts'
    }
  }
}
</script>
