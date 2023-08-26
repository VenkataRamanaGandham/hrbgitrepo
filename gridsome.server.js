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
    const { data } = await axios.get('http://hrbdev.localhost/posts')
    var posts
    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })
    console.log('data ', data)
    //var data = '[{&quot;id&quot;:&quot;2&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;9f49210c-ed3b-42f3-a75f-b6f9e8b9fe48&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:14:32&quot;,&quot;dateUpdated&quot;:&quot;2023-08-20 19:59:39&quot;,&quot;siteSettingsId&quot;:&quot;2&quot;,&quot;slug&quot;:&quot;first-entry&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/first-entry&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:14:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;2&quot;,&quot;title&quot;:&quot;First entry...&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;This is my first entry in craft CMS&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;My First entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;2&quot;,&quot;rgt&quot;:&quot;3&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;11&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;cf737712-29bd-42df-b2d3-30a12c6eabc2&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:51:40&quot;,&quot;dateUpdated&quot;:&quot;2023-08-19 15:23:59&quot;,&quot;siteSettingsId&quot;:&quot;11&quot;,&quot;slug&quot;:&quot;first-entry-2&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/first-entry-2&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:14:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;11&quot;,&quot;title&quot;:&quot;1. First entry&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;1. This is my first entry in craft CMS&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;1. My First entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;4&quot;,&quot;rgt&quot;:&quot;5&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;5&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;079b9c9b-2563-4ae7-ad8d-0f9761a7b630&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:41:38&quot;,&quot;dateUpdated&quot;:&quot;2023-08-17 19:41:57&quot;,&quot;siteSettingsId&quot;:&quot;5&quot;,&quot;slug&quot;:&quot;second-entry&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/second-entry&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:41:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;5&quot;,&quot;title&quot;:&quot;Second Entry&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;Second Entry  Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;Second Entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;6&quot;,&quot;rgt&quot;:&quot;7&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;13&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;ad86c332-d85b-4ea4-831c-5af704665eac&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:51:42&quot;,&quot;dateUpdated&quot;:&quot;2023-08-17 19:51:42&quot;,&quot;siteSettingsId&quot;:&quot;13&quot;,&quot;slug&quot;:&quot;second-entry-3&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/second-entry-3&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:41:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;13&quot;,&quot;title&quot;:&quot;Second Entry&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;Second Entry  Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry Second Entry&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;Second Entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;8&quot;,&quot;rgt&quot;:&quot;9&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;7&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;17b52aa4-e714-4ba2-8266-0fb5df424e91&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:42:20&quot;,&quot;dateUpdated&quot;:&quot;2023-08-17 19:42:44&quot;,&quot;siteSettingsId&quot;:&quot;7&quot;,&quot;slug&quot;:&quot;second-entry-2&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/second-entry-2&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:41:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;7&quot;,&quot;title&quot;:&quot;Third Entry&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;Third EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird Entry&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;Third Entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;10&quot;,&quot;rgt&quot;:&quot;11&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;},{&quot;id&quot;:&quot;15&quot;,&quot;fieldLayoutId&quot;:&quot;2&quot;,&quot;uid&quot;:&quot;6fa73bb4-d847-4800-95f9-63a14859e7ad&quot;,&quot;enabled&quot;:&quot;1&quot;,&quot;archived&quot;:&quot;0&quot;,&quot;dateCreated&quot;:&quot;2023-08-17 19:51:42&quot;,&quot;dateUpdated&quot;:&quot;2023-08-17 19:51:42&quot;,&quot;siteSettingsId&quot;:&quot;15&quot;,&quot;slug&quot;:&quot;second-entry-2-2&quot;,&quot;siteId&quot;:&quot;1&quot;,&quot;uri&quot;:&quot;posts\/second-entry-2-2&quot;,&quot;enabledForSite&quot;:&quot;1&quot;,&quot;canonicalId&quot;:null,&quot;dateLastMerged&quot;:null,&quot;sectionId&quot;:&quot;1&quot;,&quot;typeId&quot;:&quot;1&quot;,&quot;authorId&quot;:&quot;1&quot;,&quot;postDate&quot;:&quot;2023-08-17 19:41:00&quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:&quot;15&quot;,&quot;title&quot;:&quot;Third Entry&quot;,&quot;field_postDescription_xvzsvcef&quot;:&quot;Third EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird EntryThird Entry&quot;,&quot;field_postTitle_vvkwtyfa&quot;:&quot;Third Entry&quot;,&quot;root&quot;:&quot;1&quot;,&quot;lft&quot;:&quot;12&quot;,&quot;rgt&quot;:&quot;13&quot;,&quot;level&quot;:&quot;1&quot;,&quot;structureId&quot;:&quot;1&quot;}]';
  
    posts = JSON.parse(data.replace(/&quot;/g,'"'))

    for (const post of posts) {
      collection.addNode({
        id: post.id,
        url: '/blog-posts/'+post.id,
        title: post.field_postTitle_tckhrwve,
        description: post.field_postDescription_bzjcptdz
      })
    }
  })

}
