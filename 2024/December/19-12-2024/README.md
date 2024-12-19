 [Go To Problem](https://www.geeksforgeeks.org/problems/kth-missing-positive-number-in-a-sorted-array/1)
# Kth Missing Positive Number in a Sorted Array
<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>
Given a sorted array of distinct positive integers <strong>arr[]</strong>, we need to find the <strong>kth</strong> positive number that is missing from arr[].  


### 💡Example 1:
<pre>
<strong>Input:</strong>
 arr[] = [2, 3, 4, 7, 11], k = 5
<strong>Output:</strong> 
  9
<strong>Explanation:</strong> Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  arr[] = [1, 2, 3], k = 2
<strong>Output:</strong>
  5
<strong>Explanation:</strong>  
    Missing are 4, 5, 6… and 2nd missing number is 5.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  arr[] = [3, 5, 9, 10, 11, 12], k = 2
<strong>Output:</strong>
  Missing are 1, 2, 4, 6… and 2nd missing number is 2.
</pre>

## Expected Time Complexity:

``` O(log n)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 <= arr.size() <= 10^5```

```1 <= k <= 10^5```

```1 <= arr[i]<= 10^6```
## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Binary Search"><img src="https://img.shields.io/badge/Binary Search-100000?style=flat&logo=Binary Search&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=00FFFF&labelcolor=00FFFF&color=00FFFF" /></a>
   
## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/19-12-2024/Kth%20Missing%20Positive%20Number%20in%20a%20Sorted%20Array(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/19-12-2024/Kth%20Missing%20Positive%20Number%20in%20a%20Sorted%20Array(C%2B%2B%20Code%20).cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/19-12-2024/Kth%20Missing%20Positive%20Number%20in%20a%20Sorted%20Array(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/19-12-2024/Kth%20Missing%20Positive%20Number%20in%20a%20Sorted%20Array(Python%20Code%20).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/19-12-2024/Kth%20Missing%20Positive%20Number%20in%20a%20Sorted%20Array(JavaScript%20Code).js)


## Main Code :

### C Code:
```
int kthMissing(int* arr, int n, int k) {
    // code here
    int l = 0, h = n - 1, mis;
    while (l <= h) {
        int mid = l + (h - l) / 2;
        mis = arr[mid] - (mid + 1); 
        
        if (mis < k) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return l+ k;
}

```
### C++ Code:
```
class Solution {
  public:
    int kthMissing(vector<int> &arr, int k) {
        // Your code goes here
        int n = arr.size();
        int l = 0, h = n - 1, mis;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            mis = arr[mid] - (mid + 1); 
            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1; 
            }
        }
        return l + k;
    }
};
```

### Java Code:

```
class Solution {
    public int kthMissing(int[] arr, int k) {
        // code here
       int n = arr.length; 
        int l = 0, h = n - 1, mis;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            mis = arr[mid] - (mid + 1); 
            
            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1;
            }
        }
        return l + k;
    }
}

```

### Python Code:

```
class Solution:
    def kthMissing(self, arr, k):
        # code here
        l, h = 0, len(arr) - 1
        while l <= h:
            mid = l + (h - l) // 2
            mis = arr[mid] - (mid + 1)
            
            if mis< k:
                l = mid + 1 
            else:
                h = mid - 1 
        
        return l + k
```
### JavaScript Code:

```
class Solution {
    kthMissing(arr, k) {
        // code here
        let l = 0, h = arr.length - 1;
        while (l <= h) {
            let mid = Math.floor(l + (h - l) / 2);
            let mis = arr[mid] - (mid + 1); 

            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1; 
            }
        }
        return l + k;
    }
}


```
