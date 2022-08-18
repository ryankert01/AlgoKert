---
title: KMP Algorithm
editLink: true
description: leetcode 1910. Remove All Occurrences of a Substring
problem_url: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
---

# {{ $frontmatter.title }}

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

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

```
p = "ababc"
lps = "000120" // index 0 is set to 0
```

One concise approach to construct lps:

```cpp
vector<int> lps(p.size()+1,0);
for(int i = 1, j = 0; i < p.size();) {
    if(p[i] == p[j])
        lps[++i] = ++j;
    else {
        i += j == 0;
        j = lps[j];
    }
}
```

## Code

/_ your code ac in oj _/

## Complexity Analysis

**Time:** `O()`
**Space:** `O()`
