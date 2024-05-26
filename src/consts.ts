import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "DSFA",
  DESCRIPTION: "Welcome to DSFA official blog.",
  AUTHOR: "Souichiro Tsujimoto",
}

// Work Page
// export const WORK: Page = {
//   TITLE: "Work",
//   DESCRIPTION: "Places I have worked.",
// }

// About Page
export const ABOUT: Page = {
  TITLE: "About",
  DESCRIPTION: "About us.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
// export const PROJECTS: Page = {
//   TITLE: "Projects",
//   DESCRIPTION: "Recent projects I have worked on.",
// }

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "About", 
    HREF: "/about", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "未定",
    HREF: "mailto:未定",
  },
  // { 
  //   NAME: "Github",
  //   ICON: "github",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://github.com/markhorn-dev/astro-sphere"
  // },
  // { 
  //   NAME: "LinkedIn",
  //   ICON: "linkedin",
  //   TEXT: "markhorn-dev",
  //   HREF: "https://www.linkedin.com/in/markhorn-dev/",
  // },
  // { 
  //   NAME: "Twitter",
  //   ICON: "twitter-x",
  //   TEXT: "markhorn_dev",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
]

