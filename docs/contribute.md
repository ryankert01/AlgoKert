# Contribute Guidelines

## Modify Request

If you think there's something wrong or if there are some explaination is nice to have.

send us a `issue` or `PR`, we will look into it.

## New Post

If you want to submit a new post, we have a format that is nice to follow.

```md
---
title: # leetcode problem title
editLink: true
description: leetcode # leetcode problem number and title
problem_url: # leetcode problem url
---

# {{ $frontmatter.title }}

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

## Intuition

/_ your thinking process _/

## Code

/_ your code ac in oj _/

## Complexity Analysis

**Time:** `O()`

**Space:** `O()`
```

If you finish, send us a PR!
