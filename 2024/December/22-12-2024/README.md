 [Go To Problem](https://www.geeksforgeeks.org/problems/search-in-a-matrix17201720/1)
# Search in a Row-Column sorted matrix

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center"> 
               <p>Points: 2</p>
</div>
Given a 2D integer matrix <strong>mat</strong>[][] of size <strong>n x m</strong>, where every row and column is sorted in increasing order and a number <strong>x</strong>, the task is to find whether element <strong>x</strong> is present in the matrix.
### 💡Example 1:
<pre>
<strong>Input:</strong>
   mat[][] = [[3, 30, 38],[20, 52, 54],[35, 60, 69]], x = 62
<strong>Output:</strong> 
  false
<strong>Explanation:</strong>62 is not present in the matrix, so output is false. 

</pre>

### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[18, 21, 27],[38, 55, 67]], x = 55
<strong>Output:</strong>
  true
<strong>Explanation:</strong>  55 is present in the matrix.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  mat[][] = [[1, 2, 3],[4, 5, 6],[7, 8, 9]], x = 3
<strong>Output:</strong>
   true
<strong>Explanation:</strong> 3 is present in the matrix.
  
</pre>

## Expected Time Complexity:

```  O(n + m)```

## Expected Space Complexity: 
```O(1)```

## Constraints: 
```1 <= n, m <=1000```

```1 <= mat[i][j] <= 10^9```

```1<= x <= 10^9```

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Paytm"><img src="https://img.shields.io/badge/Paytm-100000?style=flat&logo=Paytm&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Accolite"><img src="https://img.shields.io/badge/Accolite-100000?style=flat&logo=Accolite&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Amazon"><img src="https://img.shields.io/badge/Amazon-100000?style=flat&logo=Amazon&logoColor=F7F7F7&labelcolor=FF9900&color=FF9900" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-100000?style=flat&logo=Microsoft&logoColor=F7F7F7&labelcolor=0078D4&color=0078D4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Snapdeal"><img src="https://img.shields.io/badge/Snapdeal-100000?style=flat&logo=Snapdeal&logoColor=F7F7F7&labelcolor=FF5A00&color=FF5A00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-100000?style=flat&logo=MakeMyTrip&logoColor=F7F7F7&labelcolor=0055FF&color=0055FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Ola Cabs"><img src="https://img.shields.io/badge/Ola_Cabs-100000?style=flat&logo=Ola&logoColor=F7F7F7&labelcolor=FFD700&color=FFD700" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Oracle"><img src="https://img.shields.io/badge/Oracle-100000?style=flat&logo=Oracle&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Visa"><img src="https://img.shields.io/badge/Visa-100000?style=flat&logo=Visa&logoColor=F7F7F7&labelcolor=1A1F71&color=1A1F71" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Goldman Sachs"><img src="https://img.shields.io/badge/Goldman_Sachs-100000?style=flat&logo=GoldmanSachs&logoColor=F7F7F7&labelcolor=004B87&color=004B87" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Directi"><img src="https://img.shields.io/badge/Directi-100000?style=flat&logo=Directi&logoColor=F7F7F7&labelcolor=000000&color=000000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Adobe"><img src="https://img.shields.io/badge/Adobe-100000?style=flat&logo=Adobe&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=SAP Labs"><img src="https://img.shields.io/badge/SAP_Labs-100000?style=flat&logo=SAP&logoColor=F7F7F7&labelcolor=0FAAFF&color=0FAAFF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Groupon"><img src="https://img.shields.io/badge/Groupon-100000?style=flat&logo=Groupon&logoColor=F7F7F7&labelcolor=53A318&color=53A318" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=InMobi"><img src="https://img.shields.io/badge/InMobi-100000?style=flat&logo=InMobi&logoColor=F7F7F7&labelcolor=0014FF&color=0014FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=One97"><img src="https://img.shields.io/badge/One97-100000?style=flat&logo=One97&logoColor=F7F7F7&labelcolor=005BBB&color=005BBB" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Polycom"><img src="https://img.shields.io/badge/Polycom-100000?style=flat&logo=Polycom&logoColor=F7F7F7&labelcolor=A020F0&color=A020F0" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=TinyOwl"><img src="https://img.shields.io/badge/TinyOwl-100000?style=flat&logo=TinyOwl&logoColor=F7F7F7&labelcolor=FF4500&color=FF4500" /></a>
</p>


## Complete Code [Links]:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/22-12-2024/Search%20in%20a%20Row-Column%20sorted%20matrix(C%20%2B%2B%20Code%20).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/22-12-2024/Search%20in%20a%20Row-Column%20sorted%20matrix(Java%20Code%20).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/22-12-2024/Search%20in%20a%20Row-Column%20sorted%20matrix(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/22-12-2024/Search%20in%20a%20Row-Column%20sorted%20matrix(JavaScript%20Code).js)


## Main Code :


### C++ Code:
```
class Solution {
  public:
    bool matSearch(vector<vector<int>> &mat, int x) {
        // your code here
        int n = mat.size();
        int m = mat[0].size();
        int row = 0, col = m - 1;
        
        while (row < n && col >= 0) {
            if (mat[row][col] == x) {
                return true;
            } else if (mat[row][col] > x) {
                col--;
            } else {
                row++;
            }
        }
        
        return false;
    }
};
```

### Java Code:

```
class Solution {
    public static boolean matSearch(int mat[][], int x) {
        int n = mat.length; 
        int m = mat[0].length;
        int row = 0, col = m - 1;
        
        while (row < n && col >= 0) {
            if (mat[row][col] == x) {
                return true; 
            } else if (mat[row][col] > x) {
                col--;
            } else {
                row++;
            }
        }
        return false; 
    }
}
```

### Python Code:

```
class Solution:
	def matSearch(self, mat, x):
        n = len(mat) 
        m = len(mat[0])
        row, col = 0, m - 1
        
        while row < n and col >= 0:
            if mat[row][col] == x:
                return True
            elif mat[row][col] > x:
                col -= 1 
            else:
                row += 1 
        return False
```
### JavaScript Code:

```
class Solution {
    matSearch(mat, x) {
        let n = mat.length; 
        let m = mat[0].length;
        let row = 0, col = m - 1;
        while (row < n && col >= 0) {
            if (mat[row][col] === x) {
                return true;
            } else if (mat[row][col] > x) {
                col--; 
            } else {
                row++; 
            }
        }
        return false; 
    }
}
```
