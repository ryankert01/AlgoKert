---
title: Minimum Spanning Tree # leetcode problem title
editLink: true
description: leetcode 1584. Min Cost to Connect All Points # leetcode problem number and title
problem_url: https://leetcode.com/problems/min-cost-to-connect-all-points/ # leetcode problem url
---

# {{ $frontmatter.title }}


## Kruskal's Algorithm

1. Sort all edges in increasing order of their edge weights.
2. Pick the smallest edge.
3. Check if the new edge creates a cycle or loop in a spanning tree.
4. If it doesn't form the cycle, then include that edge in MST. Otherwise, discard it.
5. Repeart from 2. until it includes `|v|-1` edges in MST.

equiped with this presudocode

::: warning
We are using disjoint set to find if the edge added will form a cycle or not.
:::

```
Kruskal()
	solve all edges in ascending order of their weight in an array e
	ans = 0
	for i = 1 to m
		v = e.first
		u = e.second
		w = e.weight
		if merge(v,u) // there will be no cycle
			then ans += w
```


## Prim's Algorithm

to be continued...


## Practice Problem 1 :

<a href="{{ $frontmatter.problem_url }}" target="_blank" rel="noopener noreferrer">{{ $frontmatter.description }}</a>

```cpp
vector<int> d, rank;
int minCostConnectPoints(vector<vector<int>>& pts) {
    int m = pts.size();
    d.resize(m, -1);
    rank.resize(m,0);
    vector<tuple<int,int,int>> v;
    for(int i = 0; i < m; i++) 
        for(int j = i+1; j < m; j++) 
            v.push_back({abs(pts[i][0]-pts[j][0])+abs(pts[i][1]-pts[j][1]),i,j});
    sort(v.begin(), v.end());
    int res = 0;
    for(int i = 0; i < v.size(); i++) {
        if(merge(get<1>(v[i]), get<2>(v[i]))) {
            res += get<0>(v[i]);
        }
    }
    return res;
}

int find(int i) {
    return d[i] == -1 ? i : find(d[i]);
}

bool merge(int i, int j) {
    int a = find(i), b = find(j);
    if(a != b) {
        if(rank[a] > rank[b]){
            d[b] = a;
        } else {
            d[a] = b;
            if(rank[a] == rank[b]) rank[b]++;
        }
        return true;
    }
    return false;
}
```

## Practice Problem 2 :

[1489. Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/)

```cpp
class unionFind {
public:
    unionFind(int n) {
        d.resize(n, -1);
        rank.resize(n, 0);
    }
    
    int find(int i) {
        return d[i] < 0 ? i : find(d[i]);
    }
    
    bool merge(int i, int j) {
        int a = find(i), b = find(j);
        if(a != b) {
            if(rank[a] > rank[b]) {
                d[a] += d[b];
                d[b] = a;
            } else {
                d[b] += d[a];
                d[a] = b;
                if(rank[a] == rank[b])
                    rank[b]++;
            }
            return true;
        }
        return false;
    }
private:
    vector<int> d, rank;
};


class Solution {
public:
    vector<int> d, rank;
    vector<vector<int>> findCriticalAndPseudoCriticalEdges(int n, vector<vector<int>>& edges) {
        vector<vector<int>> res(2);
        for(int i = 0; i < edges.size(); i++)
            edges[i].push_back(i);
        sort(edges.begin(), edges.end(), [&](vector<int>& a, vector<int>& b) {
            return a[2] < b[2];
        });
        int normal = kruscal(n,edges,-1,-1);
        for(int i = 0; i < edges.size(); i++) {
            if(normal < kruscal(n,edges,i,-1))
                res[0].push_back(edges[i][3]);
            else if(normal == kruscal(n,edges,-1,i))
                res[1].push_back(edges[i][3]);
        }

        return res;
    }
    
    int kruscal(int n, vector<vector<int>>& edges, int exclude, int include) {
        unionFind uf(n);
        int weight = 0;
        if(include != -1) {
            weight += edges[include][2];
            uf.merge(edges[include][0], edges[include][1]);
        }
        for(int i = 0; i < edges.size(); i++) {
            if(i != exclude && i != include) {
                if(uf.merge(edges[i][0], edges[i][1]))
                    weight += edges[i][2];
            }
        }
        for(int i = 0; i < n; i++)
            if(uf.find(i) != uf.find(0))
                return INT_MAX;
        return weight;
    }
};
```

### Credits

[Codeforce: Gym::Graph Algorithm](https://codeforces.com/blog/entry/16221)