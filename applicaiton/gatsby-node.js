/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 module.exports = {
   plugins: [
     {
       resolve: `gatsby-plugin-create-client-paths`,
       options: { prefixes: [`/app/*`] },
     },
     {
       resolve: `gatsby-plugin-netlify-identity`,
       options: {
         url: "https://healthy-queues.netlify.com",
       },
     },
   ],
 }
