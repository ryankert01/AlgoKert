# introduction

Dynamic Programming is a method to use extra memory to store some computed value you might want to use afterwards, so you'll not have to compute it one more time.

## Top-down Approach

### Intuition

Top-down Approach is a method of dp, when compute same thing, we don't want to compute two times right? Therefore, we store the compute value, and use it next time we encountered the exact problem.

### Code : fibonacci Numbers

[leetcode 509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

```cpp
int helper(vector<int> & arr, int n){
    if(n<=1){
        return n;
    }
    if(arr[n]!=-1){
        return arr[n];
    }

    int a=helper(arr,n-1);
    int b=helper(arr,n-2);
    arr[n]=a+b;
    return arr[n];
}

int fib(int n) {
    vector<int> arr(n+1,-1);
    int ans= helper(arr,n);
    return ans;
}
```

## Buttom-up Approach

### Intuition

Buttom-up Approach is a method of dp, use while you are able to use the value you just compute to generate new value.

### Code : fibonacci Numbers

[leetcode 509. Fibonacci Number](https://leetcode.com/problems/fibonacci-number/)

```cpp
int fib(int n) {
	if(n <= 1) return n;
	vector<int>F(n+1);
	F[0] = 0;
	F[1] = 1;
	for(int i = 2; i <= n; i++)
		F[i] = F[i-1] + F[i-2];
	return F[n];
}
```

## Dynamic Programming Patterns

:::tip
[Read this post for all patterns!](https://leetcode.com/discuss/study-guide/458695/Dynamic-Programming-Patterns#Decision-Making)
:::

Minimum (Maximum) Path to Reach a Target
Problem list: https://leetcode.com/list/55ac4kuc

Generate problem statement for this pattern

Statement
Given a target find minimum (maximum) cost / path / sum to reach the target.

Approach

```
Choose minimum (maximum) path among all possible paths before the current state, then add value for the current state.

routes[i] = min(routes[i-1], routes[i-2], ... , routes[i-k]) + cost[i]

Generate optimal solutions for all values in the target and return the value for the target.
```

Top-Down

```cpp
for (int j = 0; j < ways.size(); ++j) {
    result = min(result, topDown(target - ways[j]) + cost/ path / sum);
}
return memo[/*state parameters*/] = result;
```

Bottom-Up

```cpp
for (int i = 1; i <= target; ++i) {
   for (int j = 0; j < ways.size(); ++j) {
       if (ways[j] <= i) {
           dp[i] = min(dp[i], dp[i - ways[j]] + cost / path / sum) ;
       }
   }
}
return dp[target]
```
