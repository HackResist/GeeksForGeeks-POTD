 [Go To Problem](https://www.geeksforgeeks.org/problems/toeplitz-matrix/1)
# Toeplitz matrix


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 49.05%</strong>    
               <strong>Points: 4</strong>
</div>

A Toeplitz (or diagonal-constant) matrix is a matrix in which each descending diagonal from left to right is constant, i.e., all elements in a diagonal are the same. Given a rectangular matrix <strong>mat</strong>, your task is to complete the function <strong>isToeplitz</strong> which returns <strong>true</strong> if the matrix is Toeplitz otherwise, it returns <strong>false</strong>.
### 💡Example 1:
<pre>
Input :
  mat = [[6, 7, 8],
         [4, 6, 7],
         [1, 4, 6]]
Output :
  true
Explanation:
      The test case represents a 3x3 matrix
       6 7 8 
       4 6 7 
       1 4 6
      Output will be true, as values in all downward diagonals from left to right contain the same elements.
</pre>

### 💡Example 2:

<pre>
Input:
  mat = [[1,2,3],
         [4,5,6]]
Output: 
   false
Explanation: 
    Matrix of order 2x3 will be 1 2 3 4 5 6 Output: false as values in all diagonals are not the same.
</pre>


## Expected Time Complexity:
 ```O(n * m)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1<=mat.size,mat[0].size<=40

0<=mat[i][j]<=100

## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/27-06-2024/Toeplitz%20matrix.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/27-06-2024/Toeplitz%20matrix.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/27-06-2024/Toeplitz%20matrix.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/27-06-2024/Toeplitz%20matrix.js)
