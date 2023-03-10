// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ABC Bill ",
  tagline: "health happy and strong nation with bicycles",
  url: "https://www.nammacycle.in",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "NAMMACYCLE", // Usually your GitHub org/user name.
  projectName: "nammacycle", // Usually your repo name.
  plugins: [

 
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'demo',
        path: 'demo',
        routeBasePath: 'demo',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
        // ... other options
      },
    ],


    
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'research',
        path: 'research',
        routeBasePath: 'research',
        sidebarPath: require.resolve('./sidebarsDemo.js'),
        // ... other options
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "ABC Bill",
        logo: {
          alt: "Nammacycle Logo",
          src: "img/namma.jpg",
        },
        items: [
        
          { to: "/strategy", label: "Strategy", position: "left" },
         { to: "/vision", label: "Vision", position: "left" },
          { to: "/impact", label: "Impact", position: "left" },
          { to: "/sme", label: "Support Us", position: "left" },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Bill',
          },
          {
            to: '/demo/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Success',
            activeBaseRegex: `/demo/`,
          },
          {
            to: '/research/intro',   // To highlight the navbar item, you must link to a document, not a top-level directory
            position: 'left',
            label: 'Research',
            activeBaseRegex: `/research/`,
          },
       
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          
          {
            title: "Community",
            items: [
             
              {
                label: "Twitter",
                href: "https://twitter.com/nammacycle",
              },
            ],
          },
          {
            title: "More",
            items: [
               
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Namma Cycle .`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
