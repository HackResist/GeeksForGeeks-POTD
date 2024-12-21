 [Go To Problem](https://www.geeksforgeeks.org/problems/rotate-by-90-degree-1587115621/1)
# Rotate by 90 degree

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>
Given a square matrix <strong>mat</strong>[][] of size <strong>n x n</strong>. The task is to rotate it by <strong>90 degrees</strong> in an <strong>anti-clockwise</strong> direction without using any extra space. 
### 💡Example 1:
<pre>
<strong>Input:</strong>
   mat[][] = [[1, 2, 3],
                [4, 5, 6]
                [7, 8, 9]]
<strong>Output:</strong> 
   Rotated Matrix:
                  [3, 6, 9]
                  [2, 5, 8]
                  [1, 4, 7]
</p>
<div align='left'>
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[1, 2],
             [3, 4]]
<strong>Output:</strong>
  Rotated Matrix:
                [2, 4]
                [1, 3]

</pre>


## Expected Time Complexity:

``` O(n^2)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 ≤ n ≤ 10^2```

```0 <= mat[i][j] <= 10^3```

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Paytm"><img src="https://img.shields.io/badge/Paytm-100000?style=flat&logo=Paytm&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-100000?style=flat&logo=Microsoft&logoColor=F7F7F7&labelcolor=0078D4&color=0078D4" /></a>
   <a href="https://www.geeksforgeeks.org/explore?company[]=Samsung"><img src="https://img.shields.io/badge/Samsung-100000?style=flat&logo=Samsung&logoColor=F7F7F7&labelcolor=F58F00&color=F58F00" /></a>  
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Adobe"><img src="https://img.shields.io/badge/Adobe-100000?style=flat&logo=Adobe&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>

</p>

## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/21-12-2024/Rotate%20by%2090%20degree(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/21-12-2024/Rotate%20by%2090%20degree(C%20%2B%2B%20%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/21-12-2024/Rotate%20by%2090%20degree(Java%20Code%20).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/21-12-2024/Rotate%20by%2090%20degree(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/21-12-2024/Rotate%20by%2090%20degree(JavaSccript%20Code).js)


## Main Code :

### C Code:
```
void rotateby90(int n, int mat[][n]) {
    // code here
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            int temp = mat[i][j];
            mat[i][j] = mat[j][i];
            mat[j][i] = temp;
        }
    }
    for (int j = 0; j < n; j++) {
        for (int i = 0, k = n - 1; i < k; i++, k--) {
            int temp = mat[i][j];
            mat[i][j] = mat[k][j];
            mat[k][j] = temp;
        }
    }
}
```
### C++ Code:
```
class Solution {
  public:
    // Function to rotate matrix anticlockwise by 90 degrees.
    void rotateby90(vector<vector<int>>& mat) {
        // code here
      int n = mat.size();
      for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                swap(mat[i][j], mat[j][i]);
            }
        }
        for (int j = 0; j < n; j++) {
            int top = 0, bottom = n - 1;
            while (top < bottom) {
                swap(mat[top][j], mat[bottom][j]);
                top++;
                bottom--;
            }
        }
    }
};
```

### Java Code:

```
class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    static void rotateby90(int mat[][]) {
        // code here
    int n = mat.length;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = mat[i][j];
                mat[i][j] = mat[j][i];
                mat[j][i] = temp;
            }
        }
        for (int j = 0; j < n; j++) {
            int top = 0, bottom = n - 1;
            while (top < bottom) {
                int temp = mat[top][j];
                mat[top][j] = mat[bottom][j];
                mat[bottom][j] = temp;
                top++;
                bottom--;
            }
        }
    }
}

```

### Python Code:

```
class Solution:
    
    #Function to rotate matrix anticlockwise by 90 degrees.
    def rotateby90(self, mat): 
        # code here
        n = len(mat)
        for i in range(n):
            for j in range(i + 1, n):
                mat[i][j], mat[j][i] = mat[j][i], mat[i][j]
        for j in range(n):
            top, bottom = 0, n - 1
            while top < bottom:
                mat[top][j], mat[bottom][j] = mat[bottom][j], mat[top][j]
                top += 1
                bottom -= 1
```
### JavaScript Code:

```
class Solution {
    // Function to rotate matrix anticlockwise by 90 degrees.
    rotateby90(mat) {
      const n = mat.length;
        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
            }
        }
        for (let j = 0; j < n; j++) {
            let top = 0, bottom = n - 1;
            while (top < bottom) {
                [mat[top][j], mat[bottom][j]] = [mat[bottom][j], mat[top][j]];
                top++;
                bottom--;
            }
        }
    }
}
```
