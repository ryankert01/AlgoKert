# Binary Indexed Tree

## Intuition

In some problem, we have to gain quick access to the accumulate sum of certain range of an Array and update multiple values in an Array. Keep that in mind, if we use `dynamic array`, access to `sum` would be at linear and `manipulate values` would be at constant time. 

But in some problem, we want to access the sum in logarithmic time, that's when Binary Indexed Tree comes in mind. It enables accumulating sum in logarithmic time and increases the time of `add value to an existing value` values to logarithmic time.

Also, it's easy to code out.

## Implementation

### Storing Values

Assumption: constuct binary indexed tree with vector `nums`.

So, basically, if let `node`'s index is `i`, then it stored sum of values from `0 to i` at the same height or lower and your parent have to be the same.

> For example, 
> `8` stores `sumOf(1 to 7)`,
> `15` stores `value of 15`,
> `6` stores `value of 5 + 6`.

```
 0  
|  \   \      \             \
1   2   4      8             16 ... ,etc. (2^n)
    |   | \    | \  \         | \
    3   5 6    9 10 12        ... ,etc. (2^n + 2^m)
          |      |   |  \               // m < n
          7      11  13 14
                        |
                        15
```

### How to find which node is i's parent node?

get i's binary expression and filp its right most 1 to 0.

codewise:
```cpp
i -= i & -i
```

## Code

```cpp
class BIT {
    vector<int> data;
    BIT(int size = 0) { 
        data.resize(size + 1); 
    }
    
    // 0 ~ position 
    // equivalent to accumulate(data.begin(), data.begin() + position + 1, 0);
    int accumulateVal(int position) { // O(log(n))
        int sum = 0;
        for(int i = position; i ; i -= i & -i)
            sum += data[i];
        return sum;
    }

    // add value to nums[position]
    void add_to(int position, int value) { // O(log(n))
        for(int i = position; i < data.size(); i += i & -i) {
            data[i] += value;
        }
    }

    // return nums[position]
    // suggesting creat a vector for storing value only
    int at(int position) { // O(log(n))
        return accumulateVal(position) - accumulateVal(position - 1);
    }

    int SUM_ALL(){
        return accumulate(data.size()-1);
    }
};
```