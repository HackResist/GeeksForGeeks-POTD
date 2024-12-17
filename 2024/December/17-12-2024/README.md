 [Go To Problem](https://www.geeksforgeeks.org/problems/aggressive-cows/1)
# Aggressive Cows
<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>
You are given an array with unique elements of stalls[], which denote the position of a <strong>stall</strong>. You are also given an integer <strong>k</strong> which denotes the number of aggressive cows. Your task is to assign <strong>stalls</strong> to <strong>k</strong> cows such that the <strong>minimum distance</strong> between any two of them is the <strong>maximum</strong> possible.

### 💡Example 1:
<pre>
<strong>Input:</strong>
  stalls[] = [1, 2, 4, 8, 9], k = 3
<strong>Output:</strong> 
  3
<strong>Explanation:</strong> 
    The first cow can be placed at stalls[0], 
    the second cow can be placed at stalls[2] and 
    the third cow can be placed at stalls[3]. 
    The minimum distance between cows, in this case, is 3, which also is the largest among all possible ways.
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  stalls[] = [10, 1, 2, 7, 5], k = 3
<strong>Output:</strong>
  4
<strong>Explanation:</strong>  
    The first cow can be placed at stalls[0],
    the second cow can be placed at stalls[1] and
    the third cow can be placed at stalls[4].
    The minimum distance between cows, in this case, is 4, which also is the largest among all possible ways.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  stalls[] = [2, 12, 11, 3, 26, 7], k = 5
<strong>Output:</strong>
  1
<strong>Explanation:</strong>  
    Each cow can be placed in any of the stalls, as the no. of stalls are exactly equal to the number of cows.

    The minimum distance between cows, in this case, is 1, which also is the largest among all possible ways.
</pre>

## Expected Time Complexity:

```O(n log m)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```2 <= stalls.size() <= 10^6```

```0 <= stalls[i] <= 10^8```

```1 <= k <= stalls.size()```
## Topic Tags:
<p align="left">

   <a href="https://www.geeksforgeeks.org/explore/?category[]=Binary Search"><img src="https://img.shields.io/badge/Binary Search-100000?style=flat&logo=Binary Search&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/17-12-2024/Aggressive%20Cows(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/17-12-2024/Aggressive%20Cows(C%2B%2B%20Code).cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/17-12-2024/Aggressive%20Cows(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/17-12-2024/Aggressive%20Cows(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/17-12-2024/Aggressive%20Cows(Javascript%20Code).js)


## Main Code :

### C Code:
```
int comp(const void *a, const void *b) {
    return (*(int *)a) - (*(int *)b);
}
bool cancowplace(int *stalls, int n, int k, int dist) {
    int count = 1; 
    int last = stalls[0]; 

    for (int i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            count++;
            last = stalls[i]; 
        }
        if (count >= k) {
            return true; 
        }
    }
    return false;
}
int aggressiveCows(int *stalls, int n, int k) {
  
    qsort(stalls, n, sizeof(int), comp);
    int l = 1,h = stalls[n - 1] - stalls[0],res = 0;
    while (l <= h) {
        int mid = l + (h - l) / 2;
        if (cancowplace(stalls, n, k, mid)) {
            res = mid; 
            l = mid + 1;
        } else {
            h = mid - 1; 
        }
    }

    return res;
}
```

### C++ Code:
```
class Solution {
  public:
    bool cancowplace(vector<int> &stalls, int k, int dist) {
        int count = 1;
        int end = stalls[0]; 

        for (int i = 1; i < stalls.size(); i++) {
            if (stalls[i] - end >= dist) {
                count++;
                end = stalls[i]; 
            }
            if (count >= k) return true; 
        }
        return false;
    }
    int aggressiveCows(vector<int> &stalls, int k) {
        sort(stalls.begin(), stalls.end());

        int l = 1,h = stalls.back() - stalls.front(),res = 0;
        while (l <= h) {
            int mid = l + (h - l) / 2;
            if (cancowplace(stalls, k, mid)) {
                res = mid; 
                l = mid + 1;
            } else {
                h = mid - 1; 
            }
        }
        return res;
    }
};
```

### Java Code:

```

class Solution {
    public boolean cancowplace(int[] stalls, int k, int dist) {
        int count = 1; 
        int last = stalls[0]; 

        for (int i = 1; i < stalls.length; i++) {
            if (stalls[i] - last >= dist) {
                count++;
                last = stalls[i]; 
            }
            if (count >= k) {
                return true;
            }
        }
        return false;
    }
    public int aggressiveCows(int[] stalls, int k) {
        Arrays.sort(stalls);

        int low = 1,high = stalls[stalls.length - 1] - stalls[0],res = 0;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (cancowplace(stalls, k, mid)) {
                res = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return res;
    }
}

```

### Python Code:

```

class Solution:
    def cancowplace(self, stalls, k, dist):
        count = 1
        last = stalls[0] 
        for i in range(1, len(stalls)):
            if stalls[i] - last >= dist:
                count += 1
                last = stalls[i] 
            if count >= k:
                return True
        return False

    def aggressiveCows(self, stalls, k):
        stalls.sort()
        low = 1;high = stalls[-1] - stalls[0];res = 0
        while low <= high:
            mid = low + (high - low) // 2

            if self.cancowplace(stalls, k, mid):
                res = mid
                low = mid + 1 
            else:
                high = mid - 1 

        return res
```
### JavaScript Code:

```

class Solution {
    cancowplace(stalls, k, dist) {
        let count = 1;
        let last = stalls[0];

        for (let i = 1; i < stalls.length; i++) {
            if (stalls[i] - last >= dist) {
                count++;
                last = stalls[i];
            }
            if (count >= k) {
                return true;
            }
        }
        return false;
    }
    aggressiveCows(stalls, k) {
        stalls.sort((a, b) => a - b);
        let low = 1,high = stalls[stalls.length - 1] - stalls[0],res = 0;
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            if (this.cancowplace(stalls, k, mid)) {
                res = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return res;
    }
}

```
