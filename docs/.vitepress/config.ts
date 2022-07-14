import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'en-US',
    title: 'AlgoKert',
    titleTemplate: 'An algorithm website driven by leetcode examples', // otherwise false
    description: 'An algorithm website, with leetcode, and with nice comments and answer',
    appearance: true, // dark mode enabled
    base: '/AlgoKert/',
    lastUpdated: true,
    // markdown
    // https://vitepress.vuejs.org/config/app-configs.html#markdown
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    },

    themeConfig: {
        nav: [
            { text: 'My Blog', link: 'https://blog.ryankert.cc'},
            { text: 'Contribute Guide', link: '/contribute'}
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ryankert01' },
            //{ icon: 'linkedin', link: 'https://www.linkedin.com/in/ryankert01/'}
        ],
        editLink: {
            pattern: 'https://github.com/ryankert01/AlgoKert/edit/main/docs/:path'
        },
        sidebar: [
            {
              text: 'Guide',
              items: [
                { text: 'Getting Started', link: '/getting-started' },
                { text: 'Contribute Guidelines', link: '/contribute' },
              ]
            },
            {
                text: 'Dynamic Programming',
                items: [
                    { text: 'Introduction', link: '/dynamic-programming/dp-intro'},
                    { text: '376. Wiggle Subsequence', link: '/dynamic-programming/376'},
                    { text: '5. Longest Palindromic Substring', link: '/dynamic-programming/5'},
                ]
            }
        ]
    }
});
  
