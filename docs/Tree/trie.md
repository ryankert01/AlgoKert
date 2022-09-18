---
title: Trie (Prefix Tree)
editLink: true
description: Trie Prefix Tree
---

# {{ $frontmatter.title }}

## Prerequisites

Equiped with knowledge and confident of perform class, struct, tree and vector.

## Intuition

Assume we want to find a word in a dictionary. We can search it one-by-one, but it takes too long time to do so. (complexity: `O(n)`) Therefore, we use the prefix of words to construct the dictionary. If we want to search it later, only thing we have to do is search it by its' prefix. (complexity: `O(1)`)

## TrieNode

```cpp
class TrieNode {
    TrieNode* next[26]; // limit to only lowercase character
    int data; // store various of data you might want to store in this node
};
```

## Construct Trie

for example, we want to store data in the end Node of s1 and s2.

```cpp
void construct(string s, int data, TrieNode* root) {
    for(char c : s) {
        if(!root->next[c-'a'])
            root->next[c-'a'] = new TrieNode();
        root = root->next[c-'a'];
    }
    root->data = data;
}
```

```cpp
string s1 = "adc";
string s2 = "abc";
TrieNode* root = new TrieNode();
construct(s1, 1, root);
construct(s2, 2, root);
```

Results:

```
root
|
a
| \
d  b
|    \
c(1)  c(2)
```

## Example Problem 1:

[2416. Sum of Prefix Scores of Strings](https://leetcode.com/problems/sum-of-prefix-scores-of-strings/)

```cpp
class TrieNode {
public:
    TrieNode* next[26];
    int val = 0;
};

class Solution {
public:
    vector<int> sumPrefixScores(vector<string>& words) {
        TrieNode* ptr;
        TrieNode* root = ptr = new TrieNode();
        
        for(string word : words) {
            ptr = root;
            for(char c : word) {
                if(!ptr->next[c-'a']) {
                    ptr->next[c-'a'] = new TrieNode();
                }
                ptr = ptr->next[c-'a'];
                ptr->val++;
            }
        }
        vector<int> res;
        int count = 0;
        for(string word : words) {
            ptr = root;
            count = 0;
            for(char c : word) {
                ptr = ptr->next[c-'a'];
                count += ptr->val;
            }
            res.push_back(count);
        }
        return res;
    }
};
```

## Example Problem 2:

[336. Palindrome Pairs](https://leetcode.com/problems/palindrome-pairs/)

```cpp
class TrieNode {
public:
    TrieNode* next[26];
    int idx = -1;
    vector<int> data;
};


class Solution {
public:
    TrieNode* root;
    vector<vector<int>> palindromePairs(vector<string>& words) {
        root = new TrieNode();
        for (int i = 0; i < words.size(); i++) 
            insert(words[i], i);
        vector<vector<int>> res;
        for (int i = 0; i < words.size(); i++) {
            TrieNode* it = root;
            int j = 0;
            for (char c : words[i]) {
                if(it->idx != -1 && i != it->idx && isPalindrome(words[i], j, words[i].size()-1)) {
                    res.push_back({i, it->idx});
                }
                it = it->next[c-'a'];
                if(!it) break;
                j++;
            }
            if(!it) continue;
            for(int k : it->data) {
                if(i != k)
                    res.push_back({i,k});
            }
        }
        return res;
        
    }
    
    void insert(string& s, int idx) {
        int m = s.size();
        TrieNode* it = root;
        for(int i = m-1; i >= 0; i--) {
            if(!it->next[s[i]-'a'])
                it->next[s[i]-'a'] = new TrieNode();
            if(isPalindrome(s, 0, i)) 
                it->data.push_back(idx);
            it = it->next[s[i]-'a'];
        }
        it->data.push_back(idx);
        it->idx = idx;
    }
    
    bool isPalindrome(string& a, int i, int j) {
        while(i < j) 
            if(a[i++] != a[j--]) 
                return false;
        return true;
    }
};
```