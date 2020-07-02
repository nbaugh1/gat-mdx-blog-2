require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `NPB Dev Blog`,
    siteTitleAlt: `Dev Blog | Nick Baughman`,
    siteHeadline: `Minimal Blog - Gatsby Theme from @lekoarts`,
    siteUrl: `https://npb-dev-blog.com`,
    siteDescription: `A software development blog written by Nick Baughman`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@nbaugh1`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Portfolio`,
            url: `https://nbaugh1.github.io`
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/nickbaughman/`
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/nbaugh1`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/nbaugh1/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NPB Dev Blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `NPB Dev Blog`,
        description: `A blog written by Nick Baughman focusing on software development`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
