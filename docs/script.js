window.$docsify = {
  name: "<span class='name'>&nbsp;BLC BIT Notes&nbsp;</span>",
  repo: "blc-bit/notes",
  el: "#app",
  auto2top: true,
  coverpage: false,
  executeScript: true,
  loadSidebar: true,
  autoHeader: true,
  loadNavbar: false,
  mergeNavbar: false,
  maxLevel: 4, // toc level
  subMaxLevel: 3,
  // logo: "/_media/favicon.png",
  formatUpdated: "{MM}/{DD} {HH}:{mm}",
  notFoundPage: true,
  notFoundPage: "_404.md",
  search: {
    // maxAge: 86400000, // Expiration time, the default one day
    paths: "auto",
    placeholder: "Type to search",
    noData: "No Results!",
    depth: 6, // 1-6
    hideOtherSidebarContent: false, // whether or not to hide other sidebar content
  },
};
