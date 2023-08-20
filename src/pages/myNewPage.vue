<template>
  <Layout>
    <h1>About us!!!</h1>
    <strong>
        {{ $context.title }}
        {{ $context.title }}<br>
        {{ $context.content }}
      </strong>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime! Iusto.</p>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
}
</script>
