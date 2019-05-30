module.exports = {
  plugins: [
    require('./plugin.js')
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VPluginDemo',
      description: 'VPluginDemo for Vue.js'
    }
  },
  themeConfig: {
    repo: 'David Royer/v-plugin-demo',
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [{
          text: 'Release Notes',
          link: 'https://github.com/David Royer/v-plugin-demo/releases'
        }],
        sidebar: [
          '/installation.md',
          '/started.md',
        ]
      }
    }
  }
}
