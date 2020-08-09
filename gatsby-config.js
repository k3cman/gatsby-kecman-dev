module.exports = {
  siteMetadata: {
    name: "Kecman.dev | Nemanja Kecman | Front-end Developer",
    description:
      "Blog/Portfolio , for front-end developement done by Nemanja Kecman",
    keywords: [
      "tech",
      "blog",
      "javascript",
      "react",
      "angular",
      "vuejs",
      "nodejs",
    ],
    siteUrl: "https://kecman.dev",
    siteImage: "",
    profileImage: ``,
    lang: `en`,
    config: {
      sidebarWidth: 280,
    },
  },
  plugins: [
    {
      resolve: "@pauliescanlon/gatsby-theme-terminal",
      options: {
        source: ["posts", "projects"],
      },
    },
  ],
};
