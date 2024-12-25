 [Go To Problem](https://www.geeksforgeeks.org/problems/key-pair5616/1)
# Two Sum - Pair with Given Sum

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center"> 
               <p>Points: 2</p>
</div>

Given an array **arr**[] of positive integers and another integer **target**. Determine if there exists two distinct indices such that the sum of there elements is equals to **target**.

### 💡Example 1:
<pre>
<strong>Input:</strong>
  arr[] = [1, 4, 45, 6, 10, 8], target = 16
<strong>Output:</strong> 
  true
<strong>Explanation:</strong>arr[3] + arr[4] = 6 + 10 = 16.

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  arr[] = [1, 2, 4, 3, 6], target = 11
<strong>Output:</strong>
  false
<strong>Explanation:</strong>  None of the pair makes a sum of 11.
</pre>

### 📊Optimized Approach for Set Matrix Zeroes🧠 🚀

  1. **Create a Set for Tracking**:
     - Use a data structure to keep track of numbers already encountered while iterating through the array.
  2. **Iterate Through the Array**:
     - For each number in the array, calculate the complement by subtracting the current number from the target value.
  3. **Check for Complement**:
     - Look for the complement in the set. If it exists, it means a pair has been found that adds up to the target.
  4. **Add the Current Number to the Set**:
     - If the complement is not found, store the current number in the set for future reference.
  5. **Return Result**:
     - If the loop completes without finding a pair, return `false`.


## Expected Time Complexity:

```O(n)```

## Expected Space Complexity: 
```O(n)```

## Constraints: 
```1 ≤ arr.size ≤ 10^5```

```1 ≤ arr[i] ≤ 10^5```

```1 ≤ target ≤ 2*10^5```

## Company Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Zoho"><img src="https://img.shields.io/badge/Zoho-100000?style=flat&logo=Zoho&logoColor=F7F7F7&labelcolor=00A859&color=00A859" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-100000?style=flat&logo=Flipkart&logoColor=F7F7F7&labelcolor=0058CC&color=0058CC" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Morgan Stanley"><img src="https://img.shields.io/badge/Morgan%20Stanley-100000?style=flat&logo=MorganStanley&logoColor=F7F7F7&labelcolor=005A9C&color=005A9C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Accolite"><img src="https://img.shields.io/badge/Accolite-100000?style=flat&logo=Accolite&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Amazon"><img src="https://img.shields.io/badge/Amazon-100000?style=flat&logo=Amazon&logoColor=F7F7F7&labelcolor=FF9900&color=FF9900" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-100000?style=flat&logo=Microsoft&logoColor=F7F7F7&labelcolor=0078D7&color=0078D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=FactSet"><img src="https://img.shields.io/badge/FactSet-100000?style=flat&logo=FactSet&logoColor=F7F7F7&labelcolor=00B4A0&color=00B4A0" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Hike"><img src="https://img.shields.io/badge/Hike-100000?style=flat&logo=Hike&logoColor=F7F7F7&labelcolor=0288D1&color=0288D1" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Adobe"><img src="https://img.shields.io/badge/Adobe-100000?style=flat&logo=Adobe&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Google"><img src="https://img.shields.io/badge/Google-100000?style=flat&logo=Google&logoColor=F7F7F7&labelcolor=4285F4&color=4285F4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Wipro"><img src="https://img.shields.io/badge/Wipro-100000?style=flat&logo=Wipro&logoColor=F7F7F7&labelcolor=FB641B&color=FB641B" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=SAP Labs"><img src="https://img.shields.io/badge/SAP%20Labs-100000?style=flat&logo=SAPLabs&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=CarWale"><img src="https://img.shields.io/badge/CarWale-100000?style=flat&logo=CarWale&logoColor=F7F7F7&labelcolor=0040FF&color=0040FF" /></a>
</p>


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=Hash&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data Structures"><img src="https://img.shields.io/badge/Data Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>

</p>



## Complete Code [Links]:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/26-12-2024/Two%20Sum%20-%20Pair%20with%20Given%20Sum(C%2B%2B%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/26-12-2024/Two%20Sum%20-%20Pair%20with%20Given%20Sum(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/26-12-2024/Two%20Sum%20-%20Pair%20with%20Given%20Sum(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/26-12-2024/Two%20Sum%20-%20Pair%20with%20Given%20Sum(JavaScript%20Code).js)


## Main Code :



### C++ Code:
```cpp
class Solution {
  public:
    bool twoSum(vector<int>& arr, int target) {
        // code here
        unordered_set<int> seen;
        for (int num : arr) {
            int complement = target - num;
            if (seen.count(complement)) {
                return true; 
            }
            seen.insert(num);
        }
        return false;
    }
};
```

### Java Code:

```java
class Solution {
    boolean twoSum(int arr[], int target) {
        // code here
        HashSet<Integer> seen = new HashSet<>();
        for (int num : arr) {
            int complement = target - num;
            if (seen.contains(complement)) {
                return true; 
            }
            seen.add(num);
        }
        return false;
    }
}
```

### Python Code:

```python
class Solution:
	def twoSum(self, arr, target):
		# code here
        seen = set()
        for num in arr:
            comp = target - num
            if comp in seen:
                return True
            seen.add(num)
        return False
```
### JavaScript Code:

```javascript
class Solution {
    twoSum(arr, target) {
        const seen = new Set();
        for (let num of arr) {
            const complement = target - num;
            if (seen.has(complement)) {
                return true;
            }
            seen.add(num);
        }
        return false;
    }
}
```
