// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UI/UX Training Phase 2',
  tagline: 'Figma learning and E-commerce App project at Nirvana Lab, Lucknow',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // TODO: replace with your GitHub Pages / Vercel URL when deploying
  url: 'https://your-username.github.io',
  baseUrl: '/',

  // TODO: replace with your GitHub username and repository name
  organizationName: 'your-username',
  projectName: 'ui-ux-training',

  onBrokenLinks: 'warn',

  // Missing images show a warning instead of stopping the build
  markdown: {
    hooks: {
      onBrokenMarkdownImages: 'warn',
    },
  },

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
          // Docs live under /docs; the custom home page is served at /
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'UI/UX Training',
        items: [
          {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            // TODO: replace with your Figma file link
            href: 'https://www.figma.com/design/GF4jfDlW3p7lztv7w1uAwm/figma-learning?node-id=0-1&t=FvQpJZToJu4PSSmN-1',
            label: 'Figma',
            position: 'right',
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Introduction', to: '/docs/intro'},
              {label: 'Learning', to: '/docs/learning/week-1-2-fundamentals'},
              {label: 'Design System', to: '/docs/design-system/color-palette'},
              {label: 'Project', to: '/docs/project/overview'},
              {label: 'Evidence', to: '/docs/evidence/daily-log'},
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                // TODO: replace with your GitHub profile
                label: 'GitHub',
                href: 'https://github.com/Tripathi-Ashu',
              },
              {
                // TODO: replace with your LinkedIn profile
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/ashutosh-web-developer/',
              },
              {
                label: 'Learning Posts on LinkedIn',
                to: 'https://lnkd.in/p/gBdmv5Jr',
              },
            ],
          },
          {
            title: 'Training Team',
            items: [
              {label: 'Trainer: Deepika Sharma', to: '/docs/intro#training-team'},
              {label: 'Project Manager: Virendra Gupta', to: '/docs/intro#training-team'},
              {label: 'Nirvana Lab, Lucknow', to: '/docs/intro#training-details'},
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Ashutosh Tripathi · UI/UX Training Phase 2`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
