 [Go To Problem](https://www.geeksforgeeks.org/problems/find-all-triplets-with-zero-sum/1)
# Find All Triplets with Zero Sum

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>

Given an array **arr[]**, find all possible triplets **i, j, k** in the **arr[]** whose sum of elements is equals to **zero**. 

Returned triplet should also be internally sorted i.e. **i<j<k.**

### 💡Example 1:
<pre>
<strong>Input:</strong>
  arr[] = [0, -1, 2, -3, 1]
<strong>Output:</strong> 
  [[0, 1, 4], [2, 3, 4]]
<strong>Explanation:</strong>Triplets with sum 0 are:
  arr[0] + arr[1] + arr[4] = 0 + (-1) + 1 = 0
  arr[2] + arr[3] + arr[4] = 2 + (-3) + 1 = 0

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  arr[] = [1, -2, 1, 0, 5]
<strong>Output:</strong>
  [[0, 1, 2]]
<strong>Explanation:</strong>  Only triplet which satisfies the condition is arr[0] + arr[1] + arr[2] = 1 + (-2) + 1 = 0
</pre>


### 💡Example 3:
<pre>
<strong>Input:</strong>
  arr[] = [2, 3, 1, 0, 5]
<strong>Output:</strong>
  [[]]
<strong>Explanation:</strong> There is no triplet with sum 0.
</pre>



## Expected Time Complexity:

```O(n^2)```

## Expected Space Complexity: 
```O(n^2)```

## Constraints: 
```3 <= arr.size() <= 10^3```

```-10^4 <= arr[i] <= 10^4```




## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=Hash&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Sorting"><img src="https://img.shields.io/badge/Sorting-100000?style=flat&logo=Sorting&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>

</p>



## Complete Code [Links]:
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/28-12-2024/Find%20All%20Triplets%20with%20Zero%20Sum(C%20%2B%2B%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/28-12-2024/Find%20All%20Triplets%20with%20Zero%20Sum(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/28-12-2024/Find%20All%20Triplets%20with%20Zero%20Sum(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/28-12-2024/Find%20All%20Triplets%20with%20Zero%20Sum(JavaScript%20Code).js)


## Main Code :


### C++ Code:
```cpp
//Time Complexity : O(n^3)
//Space Complexity : O(n^3)
class Solution {
  public:
    vector<vector<int>> findTriplets(vector<int> &arr) {
        // Code here
        int len = arr.size();
        std::vector<std::vector<int>> res;
        for (int i = 0; i < len - 2; i++) {
            for (int j = i + 1; j < len - 1; j++) {
                for (int k = j + 1; k < len; k++) {
                    if (arr[i] + arr[j] + arr[k] == 0) {
                        res.push_back({i, j, k});
                    }
                }
            }
        }
        return res;
    }
};
```

### Java Code:

```java
//Time Complexity : O(n^3)
//Space Complexity : O(n^3)
class Solution {
    public List<List<Integer>> findTriplets(int[] arr) {
        // Your code here
        int len=arr.length;
        List<List<Integer>> res = new ArrayList<>();
        for (int i = 0; i < len - 2; i++)
            for (int j = i + 1; j < len - 1; j++)
                for (int k = j + 1; k < len; k++)
                    if (arr[i] + arr[j] + arr[k] == 0) res.add(Arrays.asList(i, j, k));
        return res;
    }
    
}
```

### Python Code:

```python
#Space Complexity: O(n²) 
#Time Complexity: O(n²)
class Solution:
    def findTriplets(self, arr):
        n, result, pair_sum_map = len(arr), set(), {}

        for i in range(n):
            for j in range(i + 1, n):
                pair_sum_map.setdefault(arr[i] + arr[j], []).append((i, j))

        for i in range(n):
            for pair in pair_sum_map.get(-arr[i], []):
                if i not in pair:
                    result.add(tuple(sorted([i, *pair])))

        return [list(triplet) for triplet in sorted(result)]

```
### JavaScript Code:

```javascript
//Time Complexity : O(n^3)
//Space Complexity : O(n^3)
class Solution {
    findTriplets(arr) {
        const res = [];
        const len = arr.length;
        for (let i = 0; i < len - 2; i++) {
            for (let j = i + 1; j < len - 1; j++) {
                for (let k = j + 1; k < len; k++) {
                    if (arr[i] + arr[j] + arr[k] === 0) {
                        res.push([i, j, k]);
                    }
                }
            }
        }

        return res;
    }
}
```
