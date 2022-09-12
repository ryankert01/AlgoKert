---
title: KMP Algorithm
editLink: true
description: leetcode 1910. Remove All Occurrences of a Substring
problem_url: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
---

# {{ $frontmatter.title }}


## Intuition

Hey, want to find a substring that matches some sort of pattern string? In some naive solution, it takes `O(n*m)` time. Using KMP, we can minimize that to `O(n+m)`, linear time. That's the power of KMP.

## Explanation

Assume that we want to find `p` in `s`. Look at this match:

```
s = "aaaaaaaab",
p = "aab"
```

Why don't we just skip those annoying `a`s, and reach `"aab"` faster.

How might we be able to achieve that?

**Attemp to go linear time**

What is stopping us from achieving linear time complexity?

look at my attemp to go linear time:

```
s = "abababc"
p = "ababc"

Explain:
First Not match:
    index: 4
    "a" != "c"
restart:
    remaining "abc" != "ababc"
    return -1; (doesn't exist)
```

It's definitly not the answer, right?

You might already see that the problem is that we have already count "ab" we need at `First not match`.

**Introducing LPS**

One main idea of this algorithm is LPS, and it's all about if its not matching we can jump back to not the beginning, but the position it should at.

For Example, at last example, if will point to "c" when `First Not match` occurs. Which is totally correct since there's already "abab" at the front.

**build**

lps is all about if mismatched, pointer should point back to what position.

Basically, to build `lps` you have to find `0 ~ i` greatest prefix that is also suffix.

```
p = "ababc"
lps = "00120" 
```

One concise approach to construct lps:

```cpp
vector<int> lps(p.size(),0);
for(int i = 1, j = 0; i < p.size();) {
    if(p[i] == p[j]) {
        lps[i++] = ++j;
    } else {
        if(j == 0) i++;
        else j = lps[j-1];
    }
}
```

## Code

```cpp
int kmpfind(string& p, string& s) {
    // build lps
    vector<int> lps(p.size(),0);
    for(int i = 1, j = 0; i < p.size();) {
        if(p[i] == p[j]) {
            lps[i++] = ++j;
        } else {
            if(j == 0) i++;
            else j = lps[j-1];
        }
    }
    
    // string match
    for(int i = 0, j = 0; i < s.size();) {
        if(s.size() < p.size()) return -1;
        if (s[i] != p[j]) {
            if(j == 0) i++;
            else j = lps[j-1];
        } else {
            j++, i++;
            if(j == p.size()) 
                return i - p.size();
        }
    }
    
    return -1;
}
```

## Complexity Analysis

**Time:** `O(m+n)`
**Space:** `O(n)`

## Example 1

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

:::warning
Since all pattern is the same aka. `string b`, so we only compute `lps` once.
:::

```cpp
vector<int> lps;
int repeatedStringMatch(string a, string b) {
    string temp;
    int count = 0;
    
    // build lps
    lps.resize(b.size(), 0);
    for(int i = 1, j = 0; i < b.size();) {
        if(b[i] == b[j]) {
            lps[i++] = ++j;
        } else {
            if(j == 0) i++;
            else j = lps[j-1];
        }
    }
    
    while(temp.size() < b.size() + a.size() * 2) {
        temp += a;
        count++;
        if(temp.find(b) != string::npos)
            return count;
    }
    return -1;
}

```cpp
int kmpfind(string& p, string& s) {
    
    for(int i = 0, j = 0; i < s.size();) {
        if(s.size() < p.size()) return -1;
        if (s[i] != p[j]) {
            if(j == 0) i++;
            else j = lps[j-1];
        } else {
            j++, i++;
            if(j == p.size()) 
                return i - p.size();
        }
    }
    
    return -1;
}
```

## Example 2

[1910. Remove All Occurrences of a Substring](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/)

```cpp
string removeOccurrences(string s, string p) {
    // construct commom lps
    vector<int> lps(p.size(), 0), idx(s.size(),0);
    for (int i = 1, j = 0; i < p.size();) {
        if(p[i] == p[j]) {
            lps[i++] = ++j;
        } else {
            if(j == 0) i++;
            else j = lps[j-1];
        }
    }
    int n = p.size(), d = 0;
    
    for (int i = 0, j = 0; i < s.size(); ) {
        s[i-d] = s[i];
        if(s[i-d] == p[j]) {
            idx[i-d] = j + 1;
            i++, j++;
            if(j == n) {
                d += n;
                j = i > d ? idx[i-d-1] : 0;
            }
        } else {
            idx[i-d] = 0;
            if(j == 0) i++;
            else j = lps[j-1];
        }
    }
    
    return s.substr(0, s.size() - d);
}
```

