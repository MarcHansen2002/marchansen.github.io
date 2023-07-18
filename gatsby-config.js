module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://marchansen2002.github.io`,
    // Your Name
    name: 'Marc Hansen',
    // Main Site Title
    title: `Marc Hansen | Game Developer`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: `@MarcHansen2002`,
    // Optional: Github account URL
    github: `https://github.com/MarcHansen2002`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/marc-hansen-7549a5206/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'SMFL Minesweeper',
        description:
          'Remake of the well known game "Minesweeper" using SFML and C++',
        link: 'https://github.com/MarcHansen2002/sfml-minesweeper',
      },
      {
        name: 'Coming Soon',
        description:
          'Something will be made here soon',
        link: 'https://marchansen2002.github.io',
      },
      {
        name: 'Coming Soon',
        description:
          'Something will be made here soon too',
        link: 'https://marchansen2002.github.io',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C++, C#',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Unity, Unreal Engine',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
