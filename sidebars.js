// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Learning',
      collapsed: true,
      items: [
        'learning/week-1-2-fundamentals',
        'learning/week-3-4-figma-basics',
        'learning/week-5-6-components-autolayout',
        'learning/week-7-9-prototype-project',
      ],
    },
    {
      type: 'category',
      label: 'Design System',
      collapsed: true,
      items: [
        'design-system/color-palette',
        'design-system/typography',
        'design-system/components',
      ],
    },
    {
      type: 'category',
      label: 'Project',
      collapsed: true,
      items: [
        'project/overview',
        'project/user-flow',
        'project/auth-screens',
        'project/shopping-screens',
        'project/checkout-screens',
        'project/prototype',
      ],
    },
    {
      type: 'category',
      label: 'Evidence',
      collapsed: true,
      items: [
        'evidence/daily-log',
        'evidence/learnings-challenges',
      ],
    },
  ],
};

export default sidebars;