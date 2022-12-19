const { description } = require('../../package')

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vuepress site",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#fffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      "link",
      {
        rel: "icon",
        href: "",
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    logo: "",
    nav: [
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Normal',
          collapsable: true,
          children:[
            ['introduction', 'Introduction'],
          ],
          initialOpenGroupIndex: -1
        },
        {
          title: 'Test Nested 1',
          collapsable: true,
          children: [
            ['develop/test-nested/normal', 'Normal'],
            ['develop/test-nested/nested-1', 'Nested 1'],
              ]
          },
        {
          title: 'Test Nested > 1',
          collapsable: true,
          children: [
            {
            title: 'Test nested',
            collapsable: true,
            path: '/guide/develop/nested-more-1/1',
              children: [
                {
                 title: 'Nested 1',
                 collapsable: true,
                 path: '/guide/develop/nested-more-1/1',
                 children: [
                   'develop/nested-more-1/1',
                   'develop/nested-more-1/2',
                  ]
                }
              ]
            },
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    //["@maginapp/vuepress-plugin-code-copy", {
      ////selector: String,
      //color: "#ffffff",
      //backgroundColor: "#ffffff",
      //backgroundTransition: false,
      //successText: "Copied",
      //duration: 350,
      //iconVisible: true,
      //showInMobile: false,
      //align: { bottom: '7px', right: '12px' },
    //}],
  ]
}
