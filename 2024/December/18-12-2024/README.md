 [Go To Problem](https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1)
# Allocate Minimum Pages
<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>
You are given an array arr[] of integers, where each element arr[i] represents the number of pages in the ith book. You also have an integer k representing the number of students. The task is to allocate books to each student such that:

  - Each student receives <strong>atleast</strong> one book.
  - Each student is assigned a contiguous sequence of books.
  - No book is assigned to more than one student.

The objective is to minimize the maximum number of pages assigned to any student. In other words, out of all possible allocations, find the arrangement where the student who receives the most pages still has the smallest possible maximum.

<strong>Note:</strong> Return <strong>-1</strong> if a valid assignment is not possible, and allotment should be in contiguous order (see the explanation for better understanding).

### 💡Example 1:
<pre>
<strong>Input:</strong>
  arr[] = [12, 34, 67, 90], k = 2
<strong>Output:</strong> 
  113
<strong>Explanation:</strong> Allocation can be done in following ways:

  [12] and [34, 67, 90] Maximum Pages = 191
  [12, 34] and [67, 90] Maximum Pages = 157
  [12, 34, 67] and [90] Maximum Pages = 113.
Therefore, the minimum of these cases is 113, which is selected as the output.
  
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  arr[] = [15, 17, 20], k = 5
<strong>Output:</strong>
  -1
<strong>Explanation:</strong>  
    Allocation can not be done.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  arr[] = [22, 23, 67], k = 1
<strong>Output:</strong>
  112
</pre>

## Expected Time Complexity:

``` O(n log n)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 <=  arr.size() <= 10^6```

```1 <= arr[i] <= 10^3```

```1 <= k <= 10^3```
## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Searching"><img src="https://img.shields.io/badge/Searching-100000?style=flat&logo=Searhing&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Divide and Conquer"><img src="https://img.shields.io/badge/Divide and Conquer-100000?style=flat&logo=Divide and Conquer&logoColor=00FFFF&labelcolor=00FFFF&color=00FFFF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Complete Code [Links]:
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/18-12-2024/Allocate%20Minimum%20Pages(C%2B%2B%20Code).cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/18-12-2024/Allocate%20Minimum%20Pages(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/18-12-2024/Allocate%20Minimum%20Pages(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/18-12-2024/Allocate%20Minimum%20Pages(Javascript%20Code).js)


## Main Code :


### C++ Code:
```
class Solution {
  public:
   bool isFea(vector<int>& arr, int k, int maxPages) {
        int s = 1;
        int currSum = 0;

        for (int pages : arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                s++; 
                currSum = pages; 
                if (s > k) return false; 
            } else {
                currSum += pages;
            }
        }
        return true;
    }

    int findPages(vector<int>& arr, int k) {
        int n = arr.size();
        if (k > n) return -1; 
        int l = *max_element(arr.begin(), arr.end()); 
        int h = accumulate(arr.begin(), arr.end(), 0); 
        int res = -1;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (isFea(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
};
```

### Java Code:

```

class Solution {
    private boolean isFeasible(int[] arr, int k, int maxPages) {
        int stu = 1; 
        int currSum = 0;

        for (int pages : arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                stu++;
                currSum = pages; 
                if (stu > k) return false;
            } else {
                currSum += pages;
            }
        }
        return true;
    }
    public int findPages(int[] arr, int k) {
        int n = arr.length;
        if (k > n) return -1;

        int l = Arrays.stream(arr).max().getAsInt(); 
        int h = Arrays.stream(arr).sum(); 
        int res = -1;

        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (isFeasible(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1; 
            }
        }
        return res;
    }
}

```

### Python Code:

```

class Solution:
    def is_feasible(self, arr, k, max_pages):
        stu = 1 
        currsum = 0

        for pages in arr:
            if pages > max_pages:
                return False 
            if currsum + pages > max_pages:
                stu += 1  
                currsum = pages 
                if stu > k:
                    return False
            else:
                currsum += pages
        return True
    def findPages(self, arr, k):
        n = len(arr)
        if k > n:
            return -1 
        l = max(arr) 
        h = sum(arr)
        res = -1

        while l <= h:
            mid = l + (h - l) // 2
            if self.is_feasible(arr, k, mid):
                res = mid 
                h = mid - 1 
            else:
                l = mid + 1
        return res
```
### JavaScript Code:

```
class Solution {
    isFeasible(arr, k, maxPages) {
        let stu = 1;
        let currSum = 0;

        for (let pages of arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                stu++; 
                currSum = pages; 
                if (stu > k) return false; 
            } else {
                currSum += pages;
            }
        }
        return true;
    }
    findPages(arr, k) {
        let n = arr.length;
        if (k > n) return -1; 

        let l = Math.max(...arr); 
        let h = arr.reduce((a, b) => a + b, 0); 
        let res = -1;
        while (l <= h) {
            let mid = Math.floor(l + (h - l) / 2);
            if (this.isFeasible(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1; 
            }
        }
        return res;
    }
}

```
