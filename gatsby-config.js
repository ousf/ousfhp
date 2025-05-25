/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `./.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:100i,100,300,300i,500", "Noto Sans JP:400,500"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/posts/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `book`,
        path: `${__dirname}/posts/book`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          },
        }, ],
      },
    },
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-layout`,
    //   options: {
    //     component: require.resolve("./src/components/layout.jsx"),
    //   },
    // },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: process.env.SITE_URL,
        policy: [{
          userAgent: "*",
          disallow: process.env.ROBOTS_POLICY_DISALLOW,
          allow: process.env.ROBOTS_POLICY_ALLOW
        }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `大阪大学SF研究会公式サイト`,
        short_name: `阪大SF研`,
        description: `大阪大学SF研究会の公式サイトです`,
        lang: `jp`,
        icon: `static/logo1.jpg`,
        start_url: `/`,
        background_color: `#edeef1`,
        theme_color: `#21B7F8`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: process.env.GA_ID
    //   }
    // }
  ],
}