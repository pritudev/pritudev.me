module.exports = {
  siteMetadata: {
    title: `Preet Suthar`,
    description: `Welcome to Preet's Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome`,
    siteUrl: `https://pritudev.me`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-anchor-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 540,
            },
          },
        ],
      },
      plugin: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 540,
          },

          resolve: 'gatsby-plugin-anchor-links',
          options: {
            offset: 540,
          },
        },
      ],
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content`,
    //     name: 'contents',
    //   },
    // },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_TRACKING,
        head: true,
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        background_color: '#1d1d1d',
        theme_color: '#7289DA',
        display: 'standalone',
        icon: 'src/img/nano-favicon.png',
        crossOrigin: `use-credentials`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //           }
    //         }
    //       }
    //     `,
    //   },
    // },

    `gatsby-transformer-json`,
  ],
}
