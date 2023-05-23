// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dev Links 7',
  tagline: 'Links for Devs',
  url: 'https://dev-links-seven.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebar: {
            hideable: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          sidebarCollapsible: false,
          editUrl:
            'https://github.com/luizrosalba/dev-links/tree/master/',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId:'79S46UXZK0',
        indexName:'dev-links-seven',
        apiKey:'03bb3227d199a6d1bcf770dc0a886ac6',
        contextualSearch: true,
        externalUrlRegex: 'external\\.com|domain\\.com',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
        searchParameters: {},
        searchPagePath: 'search',
      },
      navbar: {
        title: 'Dev Links 7',
        logo: {
          alt: 'Dev Links Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Links',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://www.buymeacoffee.com/luizrosalba', label: '☕', position: 'left'},
          {
            href: 'https://github.com/luizrosalba',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `Did I help ? Buy me a
                <a href="https://www.buymeacoffee.com/luizrosalba" target="_blank" rel="noreferrer noopener" aria-label="Buy me a coffe">
                   ☕
                </a>
              `,
          },
        ],
        copyright: `Created at ${new Date().getFullYear()} Maintained by luizrosalba@gmail.com - Dev Links 7 Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
