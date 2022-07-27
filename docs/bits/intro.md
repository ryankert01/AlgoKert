---
title: Introduction
editLink: true
description: Introduction to Bits Manipulation
---

# {{ $frontmatter.title }}

## Basics: Common C++ bitwise operator

| operator | usage       |
| -------- | ----------- |
| `&`      | AND         |
| `⎮`      | OR          |
| `^`      | XOR         |
| `~`      | NOT         |
| `<<`     | right shift |
| `>>`     | left shift  |

## Common Usage

1. Set union `A | B`
2. Set intersection `A & B`
3. Set subtraction `A & ~B`
4. Set negation `ALL_BITS ^ A or ~A`
5. Set bit `A |= 1 << bit`
6. Clear bit `A &= ~(1 << bit)`
7. Test bit `(A & 1 << bit) != 0`
8. Extract last bit `A&-A or A&~(A-1) or x^(x&(x-1))`
9. Remove last bit `A&(A-1)`
10. Get all 1-bits `~0`
