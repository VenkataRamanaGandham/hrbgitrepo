<template>
  <Layout>
    <h1 v-html="$page.blogPosts.title" />
    <strong>
        <ul>
          <li>ID: {{ $page.blogPosts.id }}
            <div v-html="$page.blogPosts.description" />
          </li>
        </ul>
      </strong>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  blogPosts(id: $id) {
    id
    title
    description
  }
}
</page-query>