---
title: Union Find
editLink: true
description: leetcode 2382. Maximum Segment Sum After Removals # leetcode problem number and title
problem_url: https://leetcode.com/problems/maximum-segment-sum-after-removals/ # leetcode problem url
---

# {{ $frontmatter.title }}



## Intuition

Union find, aka. disjoint set, is a data structure to group a set of indexes together. To know if it's in a same group, we only need to check if they use the same representative node.

Namely, it is a vector that stores values that can either be a pointer to other node or its a group representative node storing value.

To find a representative node, you just need to follows the pointer until it reaches a representative node.

### Union find Operations:

1. find: find where its value is stored (`log(n)`)
2. merge: merge neighboring groups (`log(n)`)

::: tip
### Merge `O(log(n))` tips, introducing `rank`
We use rank to store the height of a disjoint set tree.
Join the less height tree to higher tree, to lower the result tree, to let the search speed always at `O(N)`.
:::

## Example Union find code

```cpp
class UnionFind {
    private:
        vector<int> id, rank;
        int cnt;
    public:
        UnionFind(int cnt) : cnt(cnt) {
            id = vector<int>(cnt);
            rank = vector<int>(cnt, 0);
            for (int i = 0; i < cnt; ++i) id[i] = i;
        }
        int find(int p) {
            if (id[p] == p) return p;
            return id[p] = find(id[p]);
        }
        int getCount() { 
            return cnt; 
        }
        bool connected(int p, int q) { 
            return find(p) == find(q); 
        }
        void connect(int p, int q) {
            int i = find(p), j = find(q);
            if (i == j) return;
            if (rank[i] < rank[j]) {
                id[i] = j;  
            } else {
                id[j] = i;
                if (rank[i] == rank[j]) rank[j]++;
            }
            --cnt;
        }
};
```

## Example Problem 1 :

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

### Explanations

In this problem, because all `nums` will eventually be removed, we reverse the operations that this problem provide, so that we can use Union-Find.

So, we can start from no segments, add elements in the reverse (of the removal) order, and create/merge segments.

1. initialize `ds` array with `INT_MAX`, we will store `nums` value in `-nums` (nagative), and store index value `>= 0` (positive).
2. insert per `i in removeQueries`, if there's already values besides it, join/merge it.

### Code

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

### Complexity Analysis

**Time:** `O(n*log(n))`

**Space:** `O(n)`


## Example Problem 2:

[2421. Number of Good Paths](https://leetcode.com/problems/number-of-good-paths/)

```cpp
class Solution {
public:
    vector<int> d, rank; // disjoint set
    vector<vector<int>> adj; // adjacency list
    map<int,vector<int>> index;
    int numberOfGoodPaths(vector<int>& vals, vector<vector<int>>& edges) {
        // construct adjacency list & duplication map
        int m = vals.size();
        d.resize(m,INT_MIN), rank.resize(m,0);
        adj.resize(m);
        int res = m;
        for (auto& it : edges) {
            if(vals[it[0]] > vals[it[1]]) {
                adj[it[0]].push_back( it[1] );
            } else {
                adj[it[1]].push_back( it[0] );
            }
        }
        
        for(int i = 0; i < m; i++) 
            index[vals[i]].push_back(i);
        
        for (auto& it : index) {
            for(int& j : it.second) {
                for(auto& i : adj[j]) {
                    merge(j, i);
                }                
            }
            unordered_map<int,int> st;
            for(int& i : it.second) {
                int idx = find(i);
                res += st[idx]++;
            }
        }
        return res;
    }
    
    int find(int i) {
        return d[i] < 0 ? i : find(d[i]);
    }
    
    void merge(int i, int j) {
        int p1 = find(i), p2 = find(j);
        if(rank[p1] < rank[p2]) {
            d[p1] = p2;
        } else {
            d[p2] = p1;
            if(rank[p1] == rank[p2]) rank[p1]++;
        }
    }
};
```