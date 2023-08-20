<template>
  <Layout>
    <h1>Blog Posts</h1>
    <strong>
        <ul>
          <li v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="edge.node.url">{{ edge.node.title }}</g-link>:- {{ edge.node.description }} 
          </li>
        </ul>
      </strong>
  </Layout>
</template>

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
