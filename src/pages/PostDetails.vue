<template>
  <Layout>
    <h1>About us!!!</h1>
    <strong>
        <ul>
          <li v-for="post in filteredPosts" :key="post.id">
            {{ post.node.title }}(#:{{ post.node.id }}):- {{ post.node.description }} 
          </li>
        </ul>
      </strong>
  </Layout>
</template>
<script>
export default {
  computed: {
    filteredPosts() {
      const id = this.$route.query.id;
      if (id) {
        return this.$page.posts.edges.filter(post => post.node.id === id);
      } else {
        return this.$page.posts.edges;
      }
    }
  }
};
</script>
<page-query>
query {
  posts: allBlogPosts {
    edges{
      node{
        id
        url
        title
        description
      }
    }
  }
}
</page-query>
