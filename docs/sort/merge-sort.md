---
title: Merge Sort
editLink: true
description: merge sort implementation
---

# {{ $frontmatter.title }}

## Assumption : Doing this Problem

[leetcode 912. Sort an Array](https://leetcode.com/problems/sort-an-array/)

Given an array of integers nums, sort the array in ascending order.

Example 1:

```
Input: nums = [5,2,3,1]
Output: [1,2,3,5]
```

Example 2:

```
Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
```

## Intuition

### What is merge?

Assume we have two ascending array and we want to merge them.

We can loop through them, and compare its peak.

```cpp
vector<int> merge(vector<int>& nums1, vector<int>& nums2) {
    vector<int> merged_nums;
    int i = 0, j = 0;
    while (i < nums1.size() && j < nums2.size())
        merged_nums.push_back(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
    while (i < nums1.size() || j < nums2.size())
        merged_nums.push_back(i < nums1.size() ? nums1[i++] : nums2[j++]);
    return merged_nums;
}
```

### What is Merge Sort

1. recursively view every number as a object. (in eg. step 1 to 3)
2. Use merge method merge them by order.

eg.

```
      [1,9,3,4],        [10,1,4]
        /   \            /    \
    [1,9], [3,4],     [10,4], [1]
    /  \    /  \       /  \    \
 [1], [9], [3], [4], [10], [4], [1]
   \   /    \   /      \   /    /
    [1,9], [3,4],      [4,10], [1]  (4 < 10, so add 4 first rather than 10)
      \     /            \     /
     [1,3,4,9],         [1,4,10]
          \             /
         [1,1,3,4,4,9,10]  (result)

```

## Code

### Iterative Approach

```cpp
vector<int> sortArray(vector<int>& nums) {
    mergeSort(nums,0, nums.size()-1);
    return nums;
}

void outPlaceMerge(vector<int> &nums, int low, int mid, int high) {
    if (low >= high) return;
    int l = low, r = mid + 1, k = 0, size = high - low + 1;
    vector<int> sorted(size, 0);
    while (l <= mid and r <= high)
        sorted[k++] = nums[l] < nums[r] ? nums[l++] : nums[r++];
    while (l <= mid)
        sorted[k++] = nums[l++];
    while (r <= high)
        sorted[k++] = nums[r++];
    for (k = 0; k < size; k++)
        nums[k + low] = sorted[k];
}

void mergeSort(vector<int> &nums, int low, int high) {
    if (low >= high) return;
    int mid = (high - low) / 2 + low;
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    outPlaceMerge(nums, low, mid, high);
}
```

### Iterator Approach

```cpp
#define iterator vector<int>::iterator
vector<int> sortArray(vector<int>& nums) {
    mergeSort(nums.begin(), nums.end());
    return nums;
}

void mergeSort(iterator a, iterator b) {
    int size = b-a;
    if(size == 1) return;

    int mid = size/2;
    iterator bstart, aend;
    aend = bstart = a+mid;

    mergeSort(a, aend);
    mergeSort(bstart, b);

    iterator start = a;
    vector<int>temp;
    while(a!=aend && bstart!= b) {
        if(*a < *bstart)
            temp.push_back(*a++);
        else
            temp.push_back(*bstart++);
    }


    while(a!=aend || bstart!= b)
        temp.push_back(a != aend ? *a++ : *bstart++);

    iterator it = temp.begin();
    while(start != b)
        *start++ = *it++;
}
```

## Complexity Analysis

**Time:** `O(n*log(n))`
**Space:** `O(n*log(n))`
