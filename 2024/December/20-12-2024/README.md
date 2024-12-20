 [Go To Problem](https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1)
# Spirally traversing a matrix

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center"> 
               <p>Points: 4</p>
</div>
You are given a rectangular matrix <strong>mat[][]</strong> of size <strong>n x m</strong>, and your task is to return an array while <strong>traversing</strong> the matrix in <strong>spiral</strong> form.

### 💡Example 1:
<pre>
<strong>Input:</strong>
   mat[][] = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
<strong>Output:</strong> 
  [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
<strong>Explanation:</strong> 
  <p align="left">
  <a href="https://www.geeksforgeeks.org/problems/spirally-traversing-a-matrix-1587115621/1"><img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/701264/Web/Other/blobid1_1734498654.png" alt="Geeksforgeeks"></a>
</p>
<div align='left'>
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  mat[][] = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]
<strong>Output:</strong>
  [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
<strong>Explanation:</strong>  
    Applying same technique as shown above.
</pre>

### 💡Example 3:
<pre>
<strong>Input:</strong>
  mat[][] = [[32, 44, 27, 23], [54, 28, 50, 62]]
<strong>Output:</strong>
  [32, 44, 27, 23, 62, 50, 28, 54]

<strong>Explanation:</strong>Applying same technique as shown above, output will be [32, 44, 27, 23, 62, 50, 28, 54].
</pre>

## Expected Time Complexity:

``` O(n * m)```

## Expected Space Complexity: 
```O(n * m)```

## Constraints: 
```1 <=  arr.size() <= 10^6```

```1 <= arr[i] <= 10^3```

```1 <= k <= 10^3```
## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Paytm"><img src="https://img.shields.io/badge/Paytm-100000?style=flat&logo=Paytm&logoColor=F7F7F7&labelcolor=FF7F00&color=FF7F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-100000?style=flat&logo=Flipkart&logoColor=F7F7F7&labelcolor=2874F0&color=2874F0" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Morgan Stanley"><img src="https://img.shields.io/badge/Morgan_Stanley-100000?style=flat&logo=MorganStanley&logoColor=F7F7F7&labelcolor=017F79&color=017F79" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-100000?style=flat&logo=Microsoft&logoColor=F7F7F7&labelcolor=0078D4&color=0078D4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=OYO Rooms"><img src="https://img.shields.io/badge/OYO_Rooms-100000?style=flat&logo=OYO&logoColor=F7F7F7&labelcolor=FF5B5B&color=FF5B5B" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Snapdeal"><img src="https://img.shields.io/badge/Snapdeal-100000?style=flat&logo=Snapdeal&logoColor=F7F7F7&labelcolor=FF5A00&color=FF5A00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=D-E-Shaw"><img src="https://img.shields.io/badge/D_E_Shaw-100000?style=flat&logo=D-E-Shaw&logoColor=F7F7F7&labelcolor=3B3B3B&color=3B3B3B" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-100000?style=flat&logo=MakeMyTrip&logoColor=F7F7F7&labelcolor=FF8000&color=FF8000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Oracle"><img src="https://img.shields.io/badge/Oracle-100000?style=flat&logo=Oracle&logoColor=F7F7F7&labelcolor=F80000&color=F80000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=MAQ Software"><img src="https://img.shields.io/badge/MAQ_Software-100000?style=flat&logo=MAQSoftware&logoColor=F7F7F7&labelcolor=4C94FF&color=4C94FF" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Adobe"><img src="https://img.shields.io/badge/Adobe-100000?style=flat&logo=Adobe&logoColor=F7F7F7&labelcolor=FF0000&color=FF0000" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=nearbuy"><img src="https://img.shields.io/badge/nearbuy-100000?style=flat&logo=nearbuy&logoColor=F7F7F7&labelcolor=F58F00&color=F58F00" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Nagarro"><img src="https://img.shields.io/badge/Nagarro-100000?style=flat&logo=Nagarro&logoColor=F7F7F7&labelcolor=017E84&color=017E84" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=BrowserStack"><img src="https://img.shields.io/badge/BrowserStack-100000?style=flat&logo=BrowserStack&logoColor=F7F7F7&labelcolor=F1C232&color=F1C232" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Salesforce"><img src="https://img.shields.io/badge/Salesforce-100000?style=flat&logo=Salesforce&logoColor=F7F7F7&labelcolor=00A1E0&color=00A1E0" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Zoho"><img src="https://img.shields.io/badge/Zoho-100000?style=flat&logo=Zoho&logoColor=F7F7F7&labelcolor=00B1E1&color=00B1E1" /></a>
</p>

## Complete Code [Links]:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/20-12-2024/Spirally%20traversing%20a%20matrix(C%20Code).c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/20-12-2024/Spirally%20traversing%20a%20matrix(C%20%2B%2B%20Code).cpp)
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/20-12-2024/Spirally%20traversing%20a%20matrix(Java%20Code).java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/20-12-2024/Spirally%20traversing%20a%20matrix(Python%20Code).py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/2024/December/20-12-2024/Spirally%20traversing%20a%20matrix(JavaScript%20Code).js)


## Main Code :

### C Code:
```
void spirallyTraverse(int** mat, int r, int c) {
    // code here
    int startRow = 0, startCol = 0, endRow = r - 1, endCol = c - 1, total = r * c, cnt = 0;
    while (cnt < total) {
        for (int i = startCol; i <= endCol && cnt < total; i++) {
            printf("%d ", mat[startRow][i]);
            cnt++;
        }
        startRow++;
        for (int i = startRow; i <= endRow && cnt < total; i++) {
            printf("%d ", mat[i][endCol]);
            cnt++;
        }
        endCol--;
        for (int i = endCol; i >= startCol && cnt < total; i--) {
            printf("%d ", mat[endRow][i]);
            cnt++;
        }
        endRow--;
        for (int i = endRow; i >= startRow && cnt < total; i--) {
            printf("%d ", mat[i][startCol]);
            cnt++;
        }
        startCol++;
    }
    printf("\n");
}
```
### C++ Code:
```
class Solution {
  public:
    vector<int> spirallyTraverse(vector<vector<int> > &mat) {
        // code here
        vector<int> res;
        int rows = mat.size(), cols = mat[0].size();
        int startRow = 0, startCol = 0, endRow = rows - 1, endCol = cols - 1;

        while (startRow <= endRow && startCol <= endCol) {
            for (int i = startCol; i <= endCol; i++) {
                res.push_back(mat[startRow][i]);
            }
            startRow++;
            for (int i = startRow; i <= endRow; i++) {
                res.push_back(mat[i][endCol]);
            }
            endCol--;
            if (startRow <= endRow) {
                for (int i = endCol; i >= startCol; i--) {
                    res.push_back(mat[endRow][i]);
                }
                endRow--;
            }
            if (startCol <= endCol) {
                for (int i = endRow; i >= startRow; i--) {
                    res.push_back(mat[i][startCol]);
                }
                startCol++;
            }
        }
        return res;
    }
};
```

### Java Code:

```
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    public ArrayList<Integer> spirallyTraverse(int mat[][]) {
        // code here
         int row_0 = 0, col_0 = 0, row_1 = mat.length - 1, col_1 = mat[0].length - 1;
        ArrayList<Integer> res = new ArrayList<>();
        
        while (row_0 <= row_1 && col_0 <= col_1) {
            for (int j = col_0; j <= col_1; j++) res.add(mat[row_0][j]);
            row_0++;
            for (int i = row_0; i <= row_1; i++) res.add(mat[i][col_1]);
            col_1--;
            if (row_0 <= row_1) {
                for (int j = col_1; j >= col_0; j--) res.add(mat[row_1][j]);
                row_1--;
            }
            if (col_0 <= col_1) {
                for (int i = row_1; i >= row_0; i--) res.add(mat[i][col_0]);
                col_0++;
            }
        }
        return res;
    }
}

```

### Python Code:

```
class Solution:
    # Function to return a list of integers denoting spiral traversal of matrix.
    def spirallyTraverse(self, mat):
        # code here
        row_0, col_0 = 0, 0
        row_1, col_1 = len(mat) - 1, len(mat[0]) - 1
        res = []
        
        while row_0 <= row_1 and col_0 <= col_1:
            # Traverse right across the top row
            for j in range(col_0, col_1 + 1):
                res.append(mat[row_0][j])
            row_0 += 1
            
            # Traverse down along the right column
            for i in range(row_0, row_1 + 1):
                res.append(mat[i][col_1])
            col_1 -= 1
            
            # Traverse left across the bottom row (if still valid)
            if row_0 <= row_1:
                for j in range(col_1, col_0 - 1, -1):
                    res.append(mat[row_1][j])
                row_1 -= 1
            
            # Traverse up along the left column (if still valid)
            if col_0 <= col_1:
                for i in range(row_1, row_0 - 1, -1):
                    res.append(mat[i][col_0])
                col_0 += 1
        
        return res
```
### JavaScript Code:

```
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(mat) {
        // code here
        let row_0 = 0, col_0 = 0;
        let row_1 = mat.length - 1, col_1 = mat[0].length - 1;
        let res = [];

        while (row_0 <= row_1 && col_0 <= col_1) {
            for (let j = col_0; j <= col_1; j++) {
                res.push(mat[row_0][j]);
            }
            row_0++;
            for (let i = row_0; i <= row_1; i++) {
                res.push(mat[i][col_1]);
            }
            col_1--;
            if (row_0 <= row_1) {
                for (let j = col_1; j >= col_0; j--) {
                    res.push(mat[row_1][j]);
                }
                row_1--;
            }
            if (col_0 <= col_1) {
                for (let i = row_1; i >= row_0; i--) {
                    res.push(mat[i][col_0]);
                }
                col_0++;
            }
        }
        return res;
    }
}

```
