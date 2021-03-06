module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        color: '#ead358',
        staticIcon: true
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'note',
        defaultTitle: {
          '/': 'NOTE'
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-106613728-6'
      }
    ],
    [
      'sitemap',
      { hostname: 'https://docs.apostrophecms.com' }
    ]
  ]
};
