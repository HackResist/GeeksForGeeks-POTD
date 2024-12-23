 [Go To Problem](https://www.geeksforgeeks.org/problems/search-in-a-row-wise-sorted-matrix/1)
# Search in a row-wise sorted matrix


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center"> 
               <p>Points: 2</p>
</div>
Given a row-wise sorted 2D matrix <strong>mat</strong>[][] of size <strong>n x m</strong> and an integer <strong>x</strong>, find whether element <strong>x</strong> is present in the matrix.

 <strong>Note:</strong>In a row-wise sorted matrix, each row is sorted in itself, i.e. for any i, j within bounds, mat[i][j] <= mat[i][j+1].

### 💡Example 1:
<pre>
<strong>Input:</strong>
   mat[][] = [[3, 4, 9],[2, 5, 6],[9, 25, 27]], x = 9
<strong>Output:</strong> 
  true
<strong>Explanation:</strong>9 is present in the matrix, so the output is true.


</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[19, 22, 27, 38, 55, 67]], x = 56
<strong>Output:</strong>
  false
<strong>Explanation:</strong>  56 is not present in the matrix, so the output is false.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  mat[][] = [[1, 2, 9],[65, 69, 75]], x = 91
<strong>Output:</strong>
   false
<strong>Explanation:</strong> 91 is not present in the matrix.
  
</pre>

## Expected Time Complexity:

```  O(n log m)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 <= n, m <= 1000```

```1 <= mat[i][j] <= 10^5```

```1 <= x <= 10^5```

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Binary Search"><img src="https://img.shields.io/badge/Binary Search-100000?style=flat&logo=Binary Search&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=Arrays&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-100000?style=flat&logo=Matrix&logoColor=F7F7F7&labelcolor=FF9900&color=FF9900" /></a>
</p>


## Complete Code [Links]:

 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/23-12-2024/Search%20in%20a%20row-wise%20sorted%20matrix(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/23-12-2024/Search%20in%20a%20row-wise%20sorted%20matrix(C%2B%2B%20Code).cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/23-12-2024/Search%20in%20a%20row-wise%20sorted%20matrix(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/23-12-2024/Search%20in%20a%20row-wise%20sorted%20matrix(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/23-12-2024/Search%20in%20a%20row-wise%20sorted%20matrix(JavaScript%20Codes).js)


## Main Code :

### C Code:
```
bool binarySearch(int* row, int m, int x) {
    int low = 0, high = m - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (row[mid] == x) {
            return true;
        } else if (row[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}

bool searchRowMatrix(int** mat, int n, int m, int x) {
    // code here
        for (int i = 0; i < n; i++) {
        if (binarySearch(mat[i], m, x)) {
            return true;
        }
    }
    return false;
}
```
### C++ Code:
```
class Solution {
  public:
    // Function to search a given number in row-column sorted matrix.
    bool searchRowMatrix(vector<vector<int>> &mat, int x) {
        // code here
            return any_of(mat.begin(), mat.end(), [&](const auto& row) {
            return binary_search(row.begin(), row.end(), x);
        });
    }
    
};
```

### Java Code:

```
class Solution {
    // Function to search a given number in row-column sorted matrix.
    public boolean searchRowMatrix(int[][] mat, int x) {
        // code here

   return Arrays.stream(mat).anyMatch(row -> Arrays.binarySearch(row, x) >= 0);
    }
}
```

### Python Code:

```
class Solution:
    
    #Function to search a given number in row-column sorted matrix.
    def searchRowMatrix(self, mat, x): 
    	# code here 
    	 return any(x in row for row in mat)
```
### JavaScript Code:

```
class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchRowMatrix(mat, x) {
        // code here
        return mat.some(row => row.includes(x));
    }
}
```
