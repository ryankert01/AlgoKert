import { defineConfig } from 'vitepress'

const ogImage = 'https://raw.githubusercontent.com/ryankert01/AlgoKert/main/docs/img/icon.png'
const ogDescription = 'An algorithm website, with leetcode, and with nice comments and answer'
const ogTitle = 'AlgoKert'
const ogUrl = 'https://ryankert.cc/AlgoKert'

export default defineConfig({
    lang: 'en-US',
    title: 'AlgoKert',
    
    head: [

        ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://raw.githubusercontent.com/ryankert01/AlgoKert/744b53f88fc30c037f9cd303f7809737ca15739f/docs/img/icon.svg' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:title', content: ogTitle }],
        ['meta', { property: 'og:image', content: ogImage }],
        ['meta', { property: 'og:url', content: ogUrl }],
        ['meta', { property: 'og:description', content: ogDescription }],
    ],
    
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
        
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2020-present Ryan'
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
                text: 'Sort',
                items: [
                    { text: 'Merge Sort', link: '/sort/merge-sort'},
                ]
            },

            {
                text: 'String Manipulations',
                items: [
                    { text: 'Number of Matching Subsequences', link: '/string/792' },
                ]
            },

            {
                text: 'Hash Table',
                items: [
                    { text: 'Subarray Sum Equals K', link: '/hash-table/560' },
                    { text: 'Number of Submatrices That Sum to Target', link: '/hash-table/1074' },
                ]
            },

            {
                text: 'Depth-First Search (DFS)',
                items: [
                    { text: 'Max Area of Island', link: '/dfs/695'}
                ]
            },
            
            {
                text: 'Dynamic Programming',
                items: [
                    { text: 'Introduction', link: '/dynamic-programming/dp-intro' },
                    { text: 'Fibonacci Numbers', link: '/dynamic-programming/509' },
                    { text: 'Wiggle Subsequence', link: '/dynamic-programming/376' },
                    { text: 'Longest Palindromic Substring', link: '/dynamic-programming/5' },
                    { text: 'Out of Boundary Paths', link: '/dynamic-programming/576' },
                    { text: 'Decode Ways', link: '/dynamic-programming/91' },
                    { text: 'Longest Increasing Subsequence', link: '/dynamic-programming/300' },
                ]
            },

            {
                text: 'Stack',
                items: [
                    { text: 'Shortest Impossible Sequence of Rolls', link: '/stack/2350' },
                ]
            },

            {
                text: 'Tree',
                items: [
                    { text: 'Invert Binary Tree', link: '/Tree/226' },
                    { text: 'Construct Binary Tree from Preorder and Inorder Traversal', link: '/Tree/105' },
                    { text: 'Binary Search Tree to Greater Sum Tree', link: '/Tree/1038' },
                    
                ]
            },
            
            {
                text: 'Bit Manipulation',
                items: [
                    { text: 'Introduction', link: 'bits/intro' },
                    { text: 'Sum of Two Integers', link: 'bits/371' }
                ]
            }
        ]
    }
});
  
