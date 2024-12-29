 [Go To Problem](https://www.geeksforgeeks.org/problems/intersection-of-two-arrays-with-duplicate-elements/1)
# Intersection of Two arrays with Duplicate Elements

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center"> 
               <p>Points: 2</p>
</div>

Given two integer arrays **a[]** and **b[]**, you have to find the **intersection** of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.


<strong>Note</strong>: The driver code will sort the resulting array in increasing order before printing.

### 💡Example 1:
<pre>
<strong>Input:</strong>
  a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
<strong>Output:</strong> 
  [1, 3]
<strong>Explanation:</strong>1 and 3 are the only common elements and we need to print only one occurrence of common elements.

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
<strong>Output:</strong>
  [1]
<strong>Explanation:</strong> 1 is the only common element present in both the arrays.
</pre>


### 💡Example 3:
<pre>
<strong>Input:</strong>
  a[] = [1, 2, 3], b[] = [4, 5, 6]
<strong>Output:</strong>
  []
<strong>Explanation:</strong> No common element in both the arrays.
</pre>


### Approach to `intersectionWithDuplicates` Function

- 🚀 **Initialize a frequency map:**  
  - Use a `HashMap` to store the frequency of each element in the first array `a`.  
  - The key is the element, and the value is its frequency.

- 🔄 **Populate the frequency map:**  
  - Iterate through array `a` and for each element:  
    - Update its count in the map using `getOrDefault` to handle missing keys.

- 📌 **Initialize a result set:**  
  - Use a `HashSet` to store the intersection elements without duplicates.

- 🔍 **Find intersection elements:**  
  - Iterate through array `b` and for each element:  
    - Check if it exists in the frequency map.  
    - If it does, add it to the result set.

- 📋 **Convert the result set to a list:**  
  - Create a new `ArrayList` from the `HashSet` to return the intersection.

- ✅ **Return the result:**  
  - The function returns the intersection of arrays `a` and `b` as an `ArrayList` without duplicates.


## Expected Time Complexity:

```O( a.size() + b.size() )```

## Expected Space Complexity: 
```O( a.size() )```

## Constraints: 
```1 ≤ a.size(), b.size() ≤ 10^5```

```1 ≤ a[i], b[i] ≤ 10^5```




## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays">
      <img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" alt="Arrays" />
   </a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Hash">
      <img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=Hash&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" alt="Hash" />
   </a><a href="https://www.geeksforgeeks.org/explore/?category[]=Sorting"><img src="https://img.shields.io/badge/Sorting-100000?style=flat&logo=Sorting&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" alt="Sorting" />
   </a><a href="https://www.geeksforgeeks.org/explore/?category[]=Two-Pointer"><img src="https://img.shields.io/badge/Two%20Pointer%20Algorithm-100000?style=flat&logo=Two-Pointer&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" alt="Two Pointer Algorithm" />
   </a>
</p>




## Complete Code [Links]:
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/29-12-2024/Intersection%20of%20Two%20arrays%20with%20Duplicate%20Elements(c%2B%2B%20code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/29-12-2024/Intersection%20of%20Two%20arrays%20with%20Duplicate%20Elements(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/29-12-2024/Intersection%20of%20Two%20arrays%20with%20Duplicate%20Elements(Python%20Code).py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/29-12-2024/Intersection%20of%20Two%20arrays%20with%20Duplicate%20Elements(C%20%23%20Code).cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/29-12-2024/Intersection%20of%20Two%20arrays%20with%20Duplicate%20Elements(JavaScript%20Code).js)


## Main Code :


### C++ Code:
```cpp
class Solution {
  public:
    vector<int> intersectionWithDuplicates(vector<int>& a, vector<int>& b) {
        unordered_map<int, int> freqMap;
        for (int num : a) {
            freqMap[num]++;
        }
        unordered_set<int> resSet;
        for (int num : b) {
            if (freqMap.find(num) != freqMap.end()) {
                resSet.insert(num);
            }
        }
        return vector<int>(resSet.begin(), resSet.end());
    }
};
```

### Java Code:

```java
class Solution {
    public ArrayList<Integer> intersectionWithDuplicates(int[] a, int[] b) {
        Map<Integer, Integer> freqMap = new HashMap<>();
        for (int num : a) {
            freqMap.put(num, freqMap.getOrDefault(num, 0) + 1);
        }
        Set<Integer> resSet = new HashSet<>();
        for (int num : b) {
            if (freqMap.containsKey(num)) {
                resSet.add(num);
            }
        }
        return new ArrayList<>(resSet);
    }
}
```

### Python Code:

```python
class Solution:
    def intersectionWithDuplicates(self, a, b):
        freq_map = {}
        for num in a:
            freq_map[num] = freq_map.get(num, 0) + 1
        result_set = set()
        for num in b:
            if num in freq_map:
                result_set.add(num)
        return list(result_set)

```

### C # Code:

```csharp
class Solution {
    public List<int> intersectionWithDuplicates(int[] a, int[] b) {
        Dictionary<int, int> freqMap = new Dictionary<int, int>();
        foreach (int num in a)
        {
            if (freqMap.ContainsKey(num))
                freqMap[num]++;
            else
                freqMap[num] = 1;
        }
        HashSet<int> resSet = new HashSet<int>();
        foreach (int num in b)
        {
            if (freqMap.ContainsKey(num))
            {
                resSet.Add(num);
            }
        }
        return new List<int>(resSet);
}
}
```
### JavaScript Code:

```javascript
class Solution {
    intersectionWithDuplicates(a, b) {
        const freqMap = new Map();
        for (const num of a) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        const resultSet = new Set();
        for (const num of b) {
            if (freqMap.has(num)) {
                resultSet.add(num);
            }
        }
        return Array.from(resultSet);
    }
}
```
