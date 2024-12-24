 [Go To Problem](https://www.geeksforgeeks.org/problems/set-matrix-zeroes/1)
# Set Matrix Zeroes

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>

You are given a 2D matrix **mat**[][] of size **n×m**. The task is to modify the matrix such that if **mat**[i][j] is 0, all the elements in the **i**-th row and **j**-th column are set to 0 and do it in **constant space complexity**.

### 💡Example 1:
<pre>
<strong>Input:</strong>
  mat[][] =  [[1, -1, 1],
              [-1, 0, 1],
              [1, -1, 1]]
<strong>Output:</strong> 
  [[1, 0, 1],
   [0, 0, 0],
   [1, 0, 1]]
<strong>Explanation:</strong>mat[1][1] = 0, so all elements in row 1 and column 1 are updated to zeroes.


</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[0, 1, 2, 0],
             [3, 4, 5, 2],
             [1, 3, 1, 5]]
<strong>Output:</strong>
  [[0, 0, 0, 0],
   [0, 4, 5, 0],
   [0, 3, 1, 0]]
<strong>Explanation:</strong>  mat[0][0] and mat[0][3] are 0s, so all elements in row 0, column 0 and column 3 are updated to zeroes.
</pre>


### 📊Optimized Approach for Set Matrix Zeroes🧠 🚀



1. **Initial Check for First Row and First Column**:
   - Check if the first row contains any zeros. If yes, set a flag `firstRowZero` to `true`.
   - Check if the first column contains any zeros. If yes, set a flag `firstColZero` to `true`.

2. **Marking Zeroes in the Matrix**:
   - Traverse the rest of the matrix (starting from the second row and second column).
   - For each element `mat[i][j]` that is zero, mark the first element of its row (`mat[i][0]`) and the first element of its column (`mat[0][j]`) as zero.
   - This uses the first row and column as markers to keep track of which rows and columns should be set to zero.

3. **Setting the Zeroes**:
   - After marking, traverse the matrix again (starting from the second row and second column).
   - For each element `mat[i][j]`, if `mat[i][0]` or `mat[0][j]` is zero, set `mat[i][j]` to zero. This applies the zeroing based on the previously set markers.

4. **Handle First Row and First Column**:
   - If `firstRowZero` is `true`, set all elements in the first row to zero.
   - If `firstColZero` is `true`, set all elements in the first column to zero.


## Expected Time Complexity:

``` O(n * m)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 ≤ n, m ≤ 500```

```- 2^31 ≤ mat[i][j] ≤ 2^31 - 1```



## Complete Code [Links]:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/25-12-2024/Set%20Matrix%20Zeroes(C%20%2B%2B%20Code).cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/25-12-2024/Set%20Matrix%20Zeroes(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/25-12-2024/Set%20Matrix%20Zeroes(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/25-12-2024/Set%20Matrix%20Zeroes(JavaScript%20Code).js)


## Main Code :

### C++ Code:
```cpp
class Solution {
  public:
    void setMatrixZeroes(vector<vector<int>> &mat) {
        // code here
        int n = mat.size();
        int m = mat[0].size();
        bool firstRowZero = false, firstColZero = false;
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) firstColZero = true;
        }
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) firstRowZero = true;
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = mat[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }
        if (firstRowZero) {
            fill(mat[0].begin(), mat[0].end(), 0);
        }
        if (firstColZero) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
};
```

### Java Code:

```java
class Solution {
    public void setMatrixZeroes(int[][] mat) {
        int n = mat.length;
        int m = mat[0].length;
        
        boolean firstRowZero = false, firstColZero = false;
        for (int i = 0; i < n; i++) {
            if (mat[i][0] == 0) {
                firstColZero = true;
                break;
            }
        }
        for (int j = 0; j < m; j++) {
            if (mat[0][j] == 0) {
                firstRowZero = true;
                break;
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][j] == 0) {
                    mat[i][0] = 0;
                    mat[0][j] = 0;
                }
            }
        }
        for (int i = 1; i < n; i++) {
            for (int j = 1; j < m; j++) {
                if (mat[i][0] == 0 || mat[0][j] == 0) {
                    mat[i][j] = 0;
                }
            }
        }
        if (firstRowZero) {
            for (int j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }
        if (firstColZero) {
            for (int i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}
```

### Python Code:

```python
class Solution:
    def setMatrixZeroes(self, mat):
        n = len(mat)
        m = len(mat[0])
        
        firstRowZero = False
        firstColZero = False
        
        for i in range(n):
            if mat[i][0] == 0:
                firstColZero = True
                break
                
        for j in range(m):
            if mat[0][j] == 0:
                firstRowZero = True
                break
        
        for i in range(1, n):
            for j in range(1, m):
                if mat[i][j] == 0:
                    mat[i][0] = 0
                    mat[0][j] = 0
        
        for i in range(1, n):
            for j in range(1, m):
                if mat[i][0] == 0 or mat[0][j] == 0:
                    mat[i][j] = 0
        
        if firstRowZero:
            for j in range(m):
                mat[0][j] = 0
        
        if firstColZero:
            for i in range(n):
                mat[i][0] = 0  
```
### JavaScript Code:

```javascript
class Solution {
    /**
     * @param {number[][]} mat
     */
    setMatrixZeroes(mat) {
        // your code here
        const n = mat.length;
        const m = mat[0].length;
        
        let firstRowZero = false;
        let firstColZero = false;
        for (let i = 0; i < n; i++) {
            if (mat[i][0] === 0) {
                firstColZero = true;
                break;
            }
        }
        for (let j = 0; j < m; j++) {
            if (mat[0][j] === 0) {
                firstRowZero = true;
                break;
            }
        }
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                if (mat[i][j] === 0) {
                    mat[i][0] = 0;
                    mat[0][j] = 0;
                }
            }
        }
        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                if (mat[i][0] === 0 || mat[0][j] === 0) {
                    mat[i][j] = 0;
                }
            }
        }
        if (firstRowZero) {
            for (let j = 0; j < m; j++) {
                mat[0][j] = 0;
            }
        }
        if (firstColZero) {
            for (let i = 0; i < n; i++) {
                mat[i][0] = 0;
            }
        }
    }
}
```
