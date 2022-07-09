import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'Algorithms',
    titleTemplate: 'An algorithm website driven by leetcode examples', // otherwise false
    description: 'An algorithm website, with leetcode, and with nice comments and answer',
    appearance: true, // dark mode enabled
    base: '/Algorithms/',
    lang: 'en-US',
    lastUpdated: true,
    // markdown
    // https://vitepress.vuejs.org/config/app-configs.html#markdown
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },

    themeConfig: {
        siteTitle: 'Algorithms',
        nav: [
            { text: 'My Blog', link: 'https://blog.ryankert.cc'}
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ryankert01' },
            //{ icon: 'linkedin', link: 'https://www.linkedin.com/in/ryankert01/'}
        ],
        sidebar: [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/introduction' },
                { text: 'Getting Started', link: '/getting-started' }
              ]
            },
            {
                text: 'Dynamic Programming',
                items: [
                    { text: 'Introduction', link: '/dynamic-programming/dp-intro'}
                ]
            }
        ]
    }
});
  