module.exports = {
  lang: 'zh-CN',
  title: "Website Title",
  description: "Just playing around.",
  base: '/blog/',
  head: createHead(),
  themeConfig: {
    search: true,
    repo: 'huoguanghua/blog',
    docsRepo: 'huoguanghua/blog',
    logo: '/logo.png',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '为此页提供修改建议',
    // nav: [
    //   {
    //     text: 'Home',
    //     link: '/'
    //   },
    //   {
    //     text: 'About',
    //     link: '/about/'
    //   },
    //   {
    //     text: 'Contact',
    //     link: '/contact/'
    //   },
    // ],
    sidebar: [
      { text: 'vue', link: '/vue'},
      { text: 'vue-router', link: '/vue-router'},
      { text: 'pinia', link: '/pinia'},
      { text: 'vite', link: '/vite'},
      { text: 'vitest', link: '/vitest'},
      { text: 'vitepress', link: '/vitepress'},
      { text: 'git', link: '/git'},
      
    ]
  }
}


function createHead() {
  return [
    ['meta', { name: 'author', content: 'Vbenjs Team' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'vben, vitejs, vite, ant-design-vue, vue',
      },
    ],
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'vue vben admin docs' }],
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
  ];
}