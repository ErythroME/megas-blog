const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Megas Liu - my blog", // <title>
  shortSiteTitle: "Megas Liu", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "http://megasliu.com/",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "megas liu",
  authorTwitterAccount: "MegasLiu",
  // info
  infoTitle: "megas liu",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Megas Liu - my blog",
  manifestShortName: "Megas Liu", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/ErythroME" },
    { name: "twitter", url: "https://twitter.com/MegasLiu" },
    { name: "facebook", url: "https://www.facebook.com/liu.megas.31" }
  ]
};
