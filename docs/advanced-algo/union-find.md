---
title: Union Find
editLink: true
description: leetcode 2382. Maximum Segment Sum After Removals # leetcode problem number and title
problem_url: https://leetcode.com/problems/maximum-segment-sum-after-removals/ # leetcode problem url
---

# {{ $frontmatter.title }}

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

## Intuition

### Union find Operations:

1. find: find where its value is stored (`log(n)`)
2. merge: merge neighboring groups (`log(n)`)

### Explanations:

In this problem, because all `nums` will eventually be removed, we reverse the operations that this problem provide, so that we can use Union-Find.

So, we can start from no segments, add elements in the reverse (of the removal) order, and create/merge segments.

1. initialize `ds` array with `INT_MAX`, we will store `nums` value in `-nums` (nagative), and store index value `>= 0` (positive).
2. insert per `i in removeQueries`, if there's already values besides it, join/merge it.

## Code

```cpp
#define ll long long
int find(int j, vector<ll>& ds) { // log(n)
    return ds[j] < 0 ? j : ds[j] = find(ds[j] , ds);
}
void merge(int s1, int s2, vector<ll>& ds) { // contains find() // log(n)
    int p1 = find(s1, ds), p2 = find(s2, ds);
    ds[p2] += ds[p1];
    ds[p1] = p2;
}
vector<long long> maximumSegmentSum(vector<int>& nums, vector<int>& rq) {
    int n = nums.size();
    vector<ll> res(n), ds(n, INT_MAX);
    for (int i = n-1; i > 0; --i) { // n*log(n)
        int j = rq[i];
        ds[j] = -nums[j];
        if(j > 0 && ds[j-1] != INT_MAX)
            merge(j, j-1, ds);
        if(j+1 < n && ds[j+1] != INT_MAX)
            merge(j, j+1, ds);
        res[i-1] = max(res[i], -ds[find(j, ds)]);
    }
    return res;
}
```

## Complexity Analysis

**Time:** `O(n*log(n))`

**Space:** `O(n)`

## Another Solution

### Prefix Sum + Map + Priority Queue

**Intuition:**

Firstly, Create a vector dp contains `dp[i] = nums[0] + ... + nums[i-1]`, so we can use `dp[j+1] - dp[i]` to find range sum in constant time.

We use map to mark every range that haven't been removed for every element, and update it in every `removeQueries`.

Hence, we use `priority_queue` to find the maximum, since we have already updated range in `map`, if we encounters those with different range with current range, discard that.

### Code

```cpp
#define ll long long
vector<long long> maximumSegmentSum(vector<int>& nums, vector<int>& rmQueries) {
	int n = nums.size();
	vector<ll> dp(n+1);
	ll acc = 0;
	for(int i = 0; i < n; i++)
		dp[i+1] = acc += nums[i];

	vector<ll> res;
	map<int,int> ran;
	priority_queue<array<ll,3>> pq;
	pq.push({dp.back(), 0, n-1});
	ran[0] = n-1;
	for(int i = 0; i < n; i++) {
		auto it = --ran.upper_bound(rmQueries[i]);

		if(rmQueries[i]+1 < n && ran.find(rmQueries[i]+1) == ran.end()) {
			ran[rmQueries[i]+1] = it->second;
			pq.push({dp[it->second+1] - dp[rmQueries[i]+1], rmQueries[i]+1, it->second});
		}

		if(rmQueries[i] == it->first)
			ran.erase(rmQueries[i]);
		else {
			it->second = rmQueries[i]-1;
			pq.push({dp[it->second+1] - dp[it->first], it->first, it->second});
		}

		while(!pq.empty() && (ran.find(pq.top()[1]) == ran.end() || pq.top()[2] != ran[pq.top()[1]]))
			pq.pop();

		if(pq.empty())
			res.push_back(0);
		else
			res.push_back(pq.top()[0]);

	}

	return res;
}
```

### Complexity Analysis

**Time:** `O(n*log(n))`

**Space:** `O(n)`
