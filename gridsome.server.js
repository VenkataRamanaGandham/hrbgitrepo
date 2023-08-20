// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })

  
  // api.createManagedPages(async ({ createPage }) => {
  //   const { data } = await axios.get('http://hrbdev.localhost/posts')
  //   var pdata=''
  //   //data = [{ postTitle: '11111', postDescription: '2222222'}]
  //   console.log('data...',data)
  //   pdata = JSON.parse(data.replace(/&quot;/g,'"'))
  //   console.log('pdata...', pdata)
  //   createPage({
  //     path: `/post-details`,
  //     component: './src/pages/PostDetails.vue',
  //     context: {
  //       data: pdata
  //     }
  //   })
  // })
  
  api.loadSource(async actions => {
    const { data } = await axios.get('https://steady-cucurucho-85d3a2.netlify.app/posts')
    var posts
    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })
    
    posts = JSON.parse(data.replace(/&quot;/g,'"'))

    for (const post of posts) {
      collection.addNode({
        id: post.id,
        url: '/blog-posts/'+post.id,
        title: post.field_postTitle_vvkwtyfa,
        description: post.field_postDescription_xvzsvcef
      })
    }
  })

}
