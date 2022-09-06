---
title: Topological Sort
editLink: true
description: topological sort implementation
---

# {{ $frontmatter.title }}

## Prerequisites

Equiped with knowledge and confident of perform Depth-First-search, Hashmap, Vector.

## Intuition

Topological Sort is a graph algorithm that can only implement on a DAG(Directed Acyclic Graph). If it's not a DAG, it will therefore unable to sort.

It deals with problems that have given one-to-one relations, and use that information to sort.

Eg. a is at the right of b, c is at the right of b.
Therefore, there's two answers, one is `[b, a, c]`, and other is `[b, c, a]`.

## Implementation

1. Build an Ajacency List.
2. use DFS to find the end of this directed part of graph.
3. return false if the graph is asylic. (using hashmap, since if one node is visited twice in the same search, it's asylic.)
4. make sure all parts of graph is visited.
5. and you're all set.

## Example Problems 1: 

[210. Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)

```cpp
vector<vector<int>> prereq;
vector<bool> vis;
unordered_set<int> st;
vector<int> res;
vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
    prereq.resize(numCourses);
    vis.resize(numCourses, false);
    for(auto it : prerequisites){
        prereq[it[0]].push_back(it[1]);
    }
    for(int i = 0; i < numCourses; i++){
        st.clear();
        if(vis[i])continue;
        if(dfs(i)) res.push_back(i);
        else return {};
    }
    return res;
}

bool dfs(int num) {
    if(st.find(num) != st.end()) return false;
    st.insert(num);
    for(auto it : prereq[num]) {
        if(vis[it])continue;
        if(dfs(it)) res.push_back(it);
        else return false;
    }
    vis[num] = true;
    return true;
    
}
```

## Expample Problem 2:

[2392. Build a Matrix With Conditions](https://leetcode.com/problems/build-a-matrix-with-conditions/)

```cpp
vector<vector<int>> buildMatrix(int k, vector<vector<int>>& rowConditions, vector<vector<int>>& colConditions) {
	vector<int> row(topologicalSort(k, rowConditions));
	vector<int> col(topologicalSort(k, colConditions));
	if(row.size() != k || col.size() != k) return {};
	vector<vector<int>> rc(k+1, vector<int>(2,0));
	for(int i = 0; i < k; i++) {
		rc[row[i]][0] = i;
		rc[col[i]][1] = i;
	}
	vector<vector<int>> result(k, vector<int> (k, 0));
	for(int i = 1; i <= k; i++)
		result[rc[i][0]][rc[i][1]] = i;
	return result;
}

vector<int> res;
vector<int> topologicalSort(int k, vector<vector<int>>& conditions) {
	res.clear();
	vector<vector<int>> adj(k+1); // adjacency list
	for(auto i : conditions) {
		adj[i[0]].push_back(i[1]);
	}
	vector<bool> vis(k+1, false);
	unordered_set<int> st;
	for(int i = 1; i <= k; i++) {
		st.clear();
		if(!vis[i] && !dfs(i,adj,vis,st))
			return {};
	}
	reverse(res.begin(), res.end());
	return res;
}

bool dfs(int num, vector<vector<int>>& adj, vector<bool>& vis, unordered_set<int>& st) {
	if(st.find(num) != st.end()) return false;
	st.insert(num);
	for(int i : adj[num]) {
		if(!vis[i] && !dfs(i,adj,vis,st)) 
			return false;
	}
	vis[num] = true;
	res.push_back(num);
	return true;
}
```
