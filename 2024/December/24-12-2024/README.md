 [Go To Problem](https://www.geeksforgeeks.org/problems/search-in-a-matrix-1587115621/1)
# Search in a sorted Matrix

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>

Given a strictly sorted 2D matrix <strong>mat</strong>[][] of size **n x m** and a number **x**. Find whether the number **x** is present in the matrix or not.

**Note:** In a strictly sorted matrix, each row is sorted in strictly increasing order, and the first element of the i<sup>th</sup> row (i!=0) is greater than the last element of the <strong>(i-1)<sup>th</sup></strong> row.


### 💡Example 1:
<pre>
<strong>Input:</strong>
   mat[][] = [[1, 5, 9], [14, 20, 21], [30, 34, 43]], x = 14
<strong>Output:</strong> 
  true
<strong>Explanation:</strong>14 is present in the matrix, so output is true.

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[1, 5, 9, 11], [14, 20, 21, 26], [30, 34, 43, 50]], x = 42
<strong>Output:</strong>
  false
<strong>Explanation:</strong>  42 is not present in the matrix.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  mat[][] = [[87, 96, 99], [101, 103, 111]], x = 101
<strong>Output:</strong>
   true
<strong>Explanation:</strong> 101 is present in the matrix.
  
</pre>

## Expected Time Complexity:

```  O(n + m)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 <= n, m <= 1000```

```1 <= mat[i][j] <= 10^9```

```1 <= x <= 10^9```

## Company Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Paytm"><img src="https://img.shields.io/badge/Paytm-100000?style=flat&logo=Paytm&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Accolite"><img src="https://img.shields.io/badge/Accolite-100000?style=flat&logo=Accolite&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-100000?style=flat&logo=MakeMyTrip&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Ola Cabs"><img src="https://img.shields.io/badge/Ola_Cabs-100000?style=flat&logo=Ola&logoColor=F7F7F7&labelcolor=FFD700&color=FFD700" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Oracle"><img src="https://img.shields.io/badge/Oracle-100000?style=flat&logo=Oracle&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Visa"><img src="https://img.shields.io/badge/Visa-100000?style=flat&logo=Visa&logoColor=F7F7F7&labelcolor=1A1F71&color=1A1F71" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Goldman Sachs"><img src="https://img.shields.io/badge/Goldman_Sachs-100000?style=flat&logo=GoldmanSachs&logoColor=F7F7F7&labelcolor=004B87&color=004B87" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Directi"><img src="https://img.shields.io/badge/Directi-100000?style=flat&logo=Directi&logoColor=F7F7F7&labelcolor=000000&color=000000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Groupon"><img src="https://img.shields.io/badge/Groupon-100000?style=flat&logo=Groupon&logoColor=F7F7F7&labelcolor=53A318&color=53A318" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=InMobi"><img src="https://img.shields.io/badge/InMobi-100000?style=flat&logo=InMobi&logoColor=F7F7F7&labelcolor=0014FF&color=0014FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=One97"><img src="https://img.shields.io/badge/One97-100000?style=flat&logo=One97&logoColor=F7F7F7&labelcolor=005BBB&color=005BBB" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Polycom"><img src="https://img.shields.io/badge/Polycom-100000?style=flat&logo=Polycom&logoColor=F7F7F7&labelcolor=A020F0&color=A020F0" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=TinyOwl"><img src="https://img.shields.io/badge/TinyOwl-100000?style=flat&logo=TinyOwl&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
</p>

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Searching"><img src="https://img.shields.io/badge/Searching-100000?style=flat&logo=Searching&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-100000?style=flat&logo=Matrix&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data Structures"><img src="https://img.shields.io/badge/Data Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=005BBB&color=005BBB" /></a>
   
</p>

## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/24-12-2024/Search%20in%20a%20sorted%20Matrix(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/24-12-2024/Search%20in%20a%20sorted%20Matrix(C%20%2B%2B%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/24-12-2024/Search%20in%20a%20sorted%20Matrix(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/24-12-2024/Search%20in%20a%20sorted%20Matrix(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/24-12-2024/Search%20in%20a%20sorted%20Matrix(JavaScript%20Code).js)


## Main Code :

### C Code:
```
bool searchMatrix(int** mat, int n, int m, int x) {
    // code here
     int l = 0, r = n * m - 1;
    while (l <= r) {
        int mid = (l + r) / 2;
        int val = mat[mid / m][mid % m];
        if (val == x) return true;
        if (val < x) l = mid + 1;
        else r = mid - 1;
    }
    return false;
}


```

### C++ Code:
```
class Solution {
  public:
    // Function to search a given number in row-column sorted matrix.
    bool searchMatrix(vector<vector<int>> &mat, int x) {
        // code here
         int l = 0, r = mat.size() * mat[0].size() - 1;
        while (l <= r) {
            int mid = (l + r) / 2;
            int val = mat[mid / mat[0].size()][mid % mat[0].size()];
            if (val == x) return true;
            if (val < x) l = mid + 1;
            else r = mid - 1;
        }
        return false;
    }
};
```

### Java Code:

```
class Solution {
    // Function to search a given number in row-column sorted matrix.
    public boolean searchMatrix(int[][] mat, int x) {
        // code here
        int n = mat.length, m = mat[0].length;
        int i = 0, j = m - 1; 
        while (i < n && j >= 0) {
            if (mat[i][j] == x) return true; 
            if (mat[i][j] > x) j--; 
            else i++;
        }
        return false;
    
    }
}
```

### Python Code:

```
class Solution:
    
    #Function to search a given number in row-column sorted matrix.
    def searchMatrix(self, mat, x): 
    	# code here 
    	n, m = len(mat), len(mat[0]) 
        i, j = 0, m - 1 
        while i < n and j >= 0:
            if mat[i][j] == x:
                return True 
            elif mat[i][j] > x:
                j -= 1  
            else:
                i += 1  
        return False 
```
### JavaScript Code:

```
class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchMatrix(mat, x) {
        // code here
        let n = mat.length, m = mat[0].length;
        let i = 0, j = m - 1; 
        while (i < n && j >= 0) {
            if (mat[i][j] === x) return true; 
            if (mat[i][j] > x) j--;        
            else i++;                       
        }
        return false;
    }
}
```
