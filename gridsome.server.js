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
    //const { data } = await axios.get('http://hrbdev.localhost/posts')
    var posts
    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })
    
    var data = '[{&quot;id&quot;:20,&quot;canonicalId&quot;:null,&quot;fieldLayoutId&quot;:2,&quot;uid&quot;:&quot;664f2b88-8e2b-4476-9ee2-0d6a773a3a6f &quot;,&quot;enabled&quot;:1,&quot;archived&quot;:0,&quot;dateLastMerged&quot;:null,&quot;dateCreated&quot;:&quot;2023-08-26 16:46:45 &quot;,&quot;dateUpdated&quot;:&quot;2023-08-26 17:44:15 &quot;,&quot;siteSettingsId&quot;:20,&quot;slug&quot;:&quot;fifth-entry &quot;,&quot;siteId&quot;:1,&quot;uri&quot;:&quot;posts\/fifth-entry &quot;,&quot;enabledForSite&quot;:1,&quot;sectionId&quot;:1,&quot;typeId&quot;:2,&quot;authorId&quot;:1,&quot;postDate&quot;:&quot;2023-08-26 16:47:00 &quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:20,&quot;title&quot;:&quot;5. Fifth entry &quot;,&quot;field_postDescription_bzjcptdz&quot;:&quot;5. Fifth entry5. Fifth entry5. Fifth entry5. Fifth entry5. Fifth entry &quot;,&quot;field_postid_bdvaakdg&quot;:5,&quot;field_postTitle_tckhrwve&quot;:&quot;5. Fifth entry &quot;,&quot;root&quot;:1,&quot;lft&quot;:4,&quot;rgt&quot;:5,&quot;level&quot;:1,&quot;structureId&quot;:1},{&quot;id&quot;:3,&quot;canonicalId&quot;:null,&quot;fieldLayoutId&quot;:2,&quot;uid&quot;:&quot;e7b09dfe-0dd1-4f78-928f-5b7ccaa03637 &quot;,&quot;enabled&quot;:1,&quot;archived&quot;:0,&quot;dateLastMerged&quot;:null,&quot;dateCreated&quot;:&quot;2023-08-23 20:34:39 &quot;,&quot;dateUpdated&quot;:&quot;2023-08-23 20:35:06 &quot;,&quot;siteSettingsId&quot;:3,&quot;slug&quot;:&quot;my-first-entry &quot;,&quot;siteId&quot;:1,&quot;uri&quot;:&quot;posts\/my-first-entry &quot;,&quot;enabledForSite&quot;:1,&quot;sectionId&quot;:1,&quot;typeId&quot;:2,&quot;authorId&quot;:1,&quot;postDate&quot;:&quot;2023-08-23 20:35:00 &quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:3,&quot;title&quot;:&quot;My first entry &quot;,&quot;field_postDescription_bzjcptdz&quot;:&quot;My first entry My first entry My first entry My first entry My first entry My first entry &quot;,&quot;field_postid_bdvaakdg&quot;:1,&quot;field_postTitle_tckhrwve&quot;:&quot;My first entry &quot;,&quot;root&quot;:1,&quot;lft&quot;:6,&quot;rgt&quot;:7,&quot;level&quot;:1,&quot;structureId&quot;:1},{&quot;id&quot;:5,&quot;canonicalId&quot;:null,&quot;fieldLayoutId&quot;:2,&quot;uid&quot;:&quot;b5f29800-2473-4471-985e-ffa3012c54b8 &quot;,&quot;enabled&quot;:1,&quot;archived&quot;:0,&quot;dateLastMerged&quot;:null,&quot;dateCreated&quot;:&quot;2023-08-23 20:35:18 &quot;,&quot;dateUpdated&quot;:&quot;2023-08-23 20:35:43 &quot;,&quot;siteSettingsId&quot;:5,&quot;slug&quot;:&quot;my-second-entry &quot;,&quot;siteId&quot;:1,&quot;uri&quot;:&quot;posts\/my-second-entry &quot;,&quot;enabledForSite&quot;:1,&quot;sectionId&quot;:1,&quot;typeId&quot;:2,&quot;authorId&quot;:1,&quot;postDate&quot;:&quot;2023-08-23 20:35:00 &quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:5,&quot;title&quot;:&quot;My Second entry &quot;,&quot;field_postDescription_bzjcptdz&quot;:&quot;My second entry My second entry My second entry My second entry My second entry &quot;,&quot;field_postid_bdvaakdg&quot;:2,&quot;field_postTitle_tckhrwve&quot;:&quot;My second entry &quot;,&quot;root&quot;:1,&quot;lft&quot;:8,&quot;rgt&quot;:9,&quot;level&quot;:1,&quot;structureId&quot;:1},{&quot;id&quot;:7,&quot;canonicalId&quot;:null,&quot;fieldLayoutId&quot;:2,&quot;uid&quot;:&quot;9fc7bb7a-69e0-4397-9160-49eefa5dab87 &quot;,&quot;enabled&quot;:1,&quot;archived&quot;:0,&quot;dateLastMerged&quot;:null,&quot;dateCreated&quot;:&quot;2023-08-23 20:35:57 &quot;,&quot;dateUpdated&quot;:&quot;2023-08-26 17:07:43 &quot;,&quot;siteSettingsId&quot;:7,&quot;slug&quot;:&quot;my-third-entry &quot;,&quot;siteId&quot;:1,&quot;uri&quot;:&quot;posts\/my-third-entry &quot;,&quot;enabledForSite&quot;:1,&quot;sectionId&quot;:1,&quot;typeId&quot;:2,&quot;authorId&quot;:1,&quot;postDate&quot;:&quot;2023-08-23 20:36:00 &quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:7,&quot;title&quot;:&quot;3. My third entry &quot;,&quot;field_postDescription_bzjcptdz&quot;:&quot;My third entry My third entry My third entry My third entry My third entry My third entry &quot;,&quot;field_postid_bdvaakdg&quot;:3,&quot;field_postTitle_tckhrwve&quot;:&quot;3. My third entry &quot;,&quot;root&quot;:1,&quot;lft&quot;:10,&quot;rgt&quot;:11,&quot;level&quot;:1,&quot;structureId&quot;:1},{&quot;id&quot;:11,&quot;canonicalId&quot;:null,&quot;fieldLayoutId&quot;:2,&quot;uid&quot;:&quot;70282605-18b5-47c5-8ad3-513a6d28c4cf &quot;,&quot;enabled&quot;:1,&quot;archived&quot;:0,&quot;dateLastMerged&quot;:null,&quot;dateCreated&quot;:&quot;2023-08-26 15:35:40 &quot;,&quot;dateUpdated&quot;:&quot;2023-08-26 15:36:01 &quot;,&quot;siteSettingsId&quot;:11,&quot;slug&quot;:&quot;fourth-entry &quot;,&quot;siteId&quot;:1,&quot;uri&quot;:&quot;posts\/fourth-entry &quot;,&quot;enabledForSite&quot;:1,&quot;sectionId&quot;:1,&quot;typeId&quot;:2,&quot;authorId&quot;:1,&quot;postDate&quot;:&quot;2023-08-26 15:36:00 &quot;,&quot;expiryDate&quot;:null,&quot;contentId&quot;:11,&quot;title&quot;:&quot;Fourth Entry &quot;,&quot;field_postDescription_bzjcptdz&quot;:&quot;Fourth EntryFourth EntryFourth EntryFourth EntryFourth EntryFourth EntryFourth EntryFourth Entry &quot;,&quot;field_postid_bdvaakdg&quot;:4,&quot;field_postTitle_tckhrwve&quot;:&quot;Fourth Entry &quot;,&quot;root&quot;:1,&quot;lft&quot;:12,&quot;rgt&quot;:13,&quot;level&quot;:1,&quot;structureId&quot;:1}]';

    posts = JSON.parse(data.replace(/&quot;/g,'"'))
    console.log('data ', data)
    console.log('posts ', posts)

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
