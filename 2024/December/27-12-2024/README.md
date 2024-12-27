 [Go To Problem](https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1)
# Count pairs with given sum

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center"> 
               <p>Points: 2</p>
</div>

Given an array **arr[]** and an integer **target**. You have to find numbers of pairs in array **arr[]** which sums up to given **target.**

### 💡Example 1:
<pre>
<strong>Input:</strong>
  arr[] = [1, 5, 7, -1, 5], target = 6 
<strong>Output:</strong> 
  3
<strong>Explanation:</strong>Pairs with sum 6 are (1, 5), (7, -1) and (1, 5). 

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  arr[] = [1, 1, 1, 1], target = 2 
<strong>Output:</strong>
  6
<strong>Explanation:</strong>  Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1), (1, 1).
</pre>


### 💡Example 3:
<pre>
<strong>Input:</strong>
  arr[] = [10, 12, 10, 15, -1], target = 125
<strong>Output:</strong>
  0
</pre>



### 📊Optimized Approach for Count Pairs with Target Sum🧠 🚀


1. **Use a Frequency Map (Hashing)**:
   - Maintain a frequency map (hash table) to store the count of elements encountered so far.
   - This ensures constant-time lookup and insertion operations.

2. **Single Pass Iteration**:
   - Traverse the array once.
   - For each element, compute its complement as `target - current_element`.

3. **Count Pairs Efficiently**:
   - If the complement exists in the frequency map, add its frequency to the pair count.
   - This avoids the need for nested loops, reducing the complexity.

4. **Update Frequency Map**:
   - Increment the count of the current element in the frequency map after checking for pairs.
   - This ensures that every element is processed only once.

5. **Handle Negative Numbers**:
   - To handle negative values in the array, the frequency map must support negative keys.



## Expected Time Complexity:

```O(n)```

## Expected Space Complexity: 
```O(n)```

## Constraints: 
```1 ≤ arr.size ≤ 10^5```

```-10^4 <= arr[i] <= 10^4```

```1 <= target <= 10^4```



## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=Hash&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data Structures"><img src="https://img.shields.io/badge/Data Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>

</p>



## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/27-12-2024/Count%20pairs%20with%20given%20sum(C%20code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/27-12-2024/Count%20pairs%20with%20given%20sum(C%2B%2B%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/27-12-2024/Count%20pairs%20with%20given%20sum(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/27-12-2024/Count%20pairs%20with%20given%20sum(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/27-12-2024/Count%20pairs%20with%20given%20sum(JavaScript%20Code).js)


## Main Code :

### C Code:
```c
int countPairs(int arr[], int n, int target) {
    // Code here

    int freq[200001] = {0};
    int count = 0;
    for (int i = 0; i < n; i++) {
        int comp = target - arr[i];
        count += freq[comp + 10000]; 
        freq[arr[i] + 10000]++;     
    }

    return count;
}
```
### C++ Code:
```cpp
class Solution {
  public:
    int countPairs(vector<int> &arr, int target) {
        // Code here
        int freq[200001] = {0}; 
        int count = 0;

        for (int i = 0; i < arr.size(); i++) {
            int comp = target - arr[i];
            count += freq[comp + 10000]; 
            freq[arr[i] + 10000]++;   
        }

        return count;
    }
};
```

### Java Code:

```java
class Solution {

    int countPairs(int arr[], int target) {
        int[] freq = new int[200001];
        int count = 0;
        for (int i = 0; i < arr.length; i++) {
            int comp = target - arr[i];
            count += freq[comp + 10000];
            freq[arr[i] + 10000]++;
        }

        return count;
    }
}
```

### Python Code:

```python
class Solution:
    #Complete the below function
    def countPairs(self,arr, target):
        freq = {}
        count = 0

        for num in arr:
            comp = target - num
            count += freq.get(comp, 0)
            freq[num] = freq.get(num, 0) + 1

        return count
```
### JavaScript Code:

```javascript
class Solution {
    countPairs(arr, target) {
        const freq = {};
        let count = 0;

        for (const num of arr) {
            const comp = target - num;
            if (freq[comp] !== undefined) {
                count += freq[comp];
            }
            freq[num] = (freq[num] || 0) + 1;
        }
        return count;
    }
}
```
