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
              collapsible: true,
              items: [
                { text: 'Getting Started', link: '/getting-started' },
                { text: 'Contribute Guidelines', link: '/contribute' },
                { text: 'Table of Content', link: '/table-of-content' },
              ]
            },

            {
                text: 'Sort',
                collapsible: true,
                items: [
                    { text: 'Merge Sort', link: '/sort/merge-sort'},
                    { text: 'Topological Sort', link: '/sort/topological-sort' }
                ]
            },

            {
                text: 'String Manipulations',
                collapsible: true,
                items: [
                    { text: 'Roman to Integer', link: '/string/13' },
                    { text: 'Number of Matching Subsequences', link: '/string/792' },
                    { text: 'KMP Problem', link : '/string/kmp' },
                ]
            },

            {
                text: 'Hash Table',
                collapsible: true,
                items: [
                    { text: 'Subarray Sum Equals K', link: '/hash-table/560' },
                    { text: 'Split Array into Consecutive Subsequences', link: '/hash-table/659' },
                    { text: 'Number of Submatrices That Sum to Target', link: '/hash-table/1074' },
                ]
            },

            {
                text: 'Depth-First Search (DFS)',
                collapsible: true,
                items: [
                    { text: 'Max Area of Island', link: '/dfs/695' },
                    { text: 'Amount of Time for Binary Tree to Be Infected', link: '/dfs/2385' },
                ]
            },
            
            {
                text: 'Dynamic Programming',
                collapsible: true,
                items: [
                    { text: 'Introduction', link: '/dynamic-programming/dp-intro' },
                    { text: 'Fibonacci Numbers', link: '/dynamic-programming/509' },
                    { text: 'Wiggle Subsequence', link: '/dynamic-programming/376' },
                    { text: 'Longest Palindromic Substring', link: '/dynamic-programming/5' },
                    { text: 'Out of Boundary Paths', link: '/dynamic-programming/576' },
                    { text: 'Decode Ways', link: '/dynamic-programming/91' },
                    { text: 'Longest Increasing Subsequence', link: '/dynamic-programming/300' },
                    { text: 'Maximal Rectangle', link: '/dynamic-programming/85' },
                ]
            },

            {
                text: 'Stack',
                collapsible: true,
                items: [
                    { text: 'Shortest Impossible Sequence of Rolls', link: '/stack/2350' },
                ]
            },

            {
                text: 'Tree',
                collapsible: true,
                items: [
                    { text: 'Invert Binary Tree', link: '/Tree/226' },
                    { text: 'Construct Binary Tree from Preorder and Inorder Traversal', link: '/Tree/105' },
                    { text: 'Binary Search Tree to Greater Sum Tree', link: '/Tree/1038' },
                    { text: 'Trie (Prefix Tree)', link: '/Tree/trie' },
                    { text: 'Minimum Spanning Tree', link: '/Tree/minimum-spanning-tree' },
                ]
            },
            
            {
                text: 'Bit Manipulation',
                collapsible: true,
                items: [
                    { text: 'Introduction', link: 'bits/intro' },
                    { text: 'Sum of Two Integers', link: 'bits/371' }
                ]
            },

            {
                text: 'Advanced Algorithms',
                collapsible: true,
                items: [
                    { text: 'Binary Indexed Tree', link: 'advanced-algo/bit' },
                    { text: 'Union Find', link: '/advanced-algo/union-find' }
                ]
            }
        ]
    }
});
  
