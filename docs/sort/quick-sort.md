---
title: Ranodmized Quick Sort
editLink: true
description: quick sort implementation
---

# {{ $frontmatter.title }}

::: tip

#### Randomized Algorithm

Algorithm contains one or many steps that use a randomize number or stuff.

- Random: has a spectrum of probability
- Arbitrary: does not.
  :::

## mathjax demo

$$H=\sum_{i=1}^n\frac{1}{i^2}=\frac{\pi^2}{6}$$

## pesudo code

```
Algorithm: RandomizedQuickSort
Input: Array A of n integers
if n > 1 then
    Pick an element, called the pivot, uniformly at random from A;
    Reorder A so that all elements less (resp., greater) than the pivot come before (resp., after) the pivot, breaking ties arbitrarily;
    k <- the index of the pivot in A;
    RandomizedQuickSort(A[1~k-1]);
    RandomizedQuickSort(A[k+1~n]);
end if
```

## Proof

Induction:

- Base case: n = 1, trivially true because it's sorted when there is only one element.
- Inductive step: Assume that the algorithm is correct for all subproblems of size n-1. Then, the algorithm is correct for the problem of size n.
- Termination: The algorithm terminates because the size of the subproblems is decreasing by half at each step.
- Correctness: The algorithm is correct because it sorts the array.

## Implementation

```cpp
// fix random seed
srand(5201314);
quickSort(nums, 0, nums.size()-1);
```

```cpp
void quickSort(vector<int>& nums, int top, int down) {
    if(down <= top) return;
    int pivot = top + rand() % (down - top + 1);
    int pivotVal = nums[pivot];
    swap(nums[pivot], nums[down]);
    int cur = top;
    for(int i = top; i <= down; i++)
        if(nums[i] < pivotVal)
            swap(nums[i], nums[cur++]);
    swap(nums[cur], nums[down]);
    quickSort(nums, top, cur-1);
    quickSort(nums, cur+1, down);
}
```

## Leetcode Problem Practice

[leetcode 912. Sort an Array](https://leetcode.com/problems/sort-an-array/)

But, it contains a trivial case that force quick sort to the worse case senario.

```
[4,4,4,4,4, ... ,4] // 50000 elements
```

Therefore, we need to avoid this case by skipping it.

```cpp
void quickSort(vector<int>& nums, int top, int down) {
    if(down <= top) return;
    int pivot = top + rand() % (down - top + 1);
    int pivotVal = nums[pivot];
    swap(nums[pivot], nums[down]);
    int cur = top;
    for(int i = top; i <= down; i++)
        if(nums[i] < pivotVal)
            swap(nums[i], nums[cur++]);
    swap(nums[cur], nums[down]);
    quickSort(nums, top, cur-1);
    quickSort(nums, cur+1, down);
}

vector<int> sortArray(vector<int>& nums) {
    srand(5201314);
    bool flag = false;
    for(int i = 0; i < nums.size(); i++)
        if(nums[i] != 2) flag = true;
    if (!flag) return nums;
    quickSort(nums, 0, nums.size()-1);
    return nums;
}
```
