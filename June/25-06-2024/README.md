 [Go To Problem](https://www.geeksforgeeks.org/problems/left-rotate-matrix-k-times2351/1)
# Left Rotate Matrix K times

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 41.89%</strong>    
               <strong>Points: 4</strong>
</div>

You are given an integer <strong>k</strong> and matrix <strong>mat</strong>. Rotate the elements of the given matrix to the left <strong>k</strong> times and return the resulting matrix.

### 💡Example 1:
<pre>
Input :
   k=1, mat=[[1,2,3],[4,5,6],[7,8,9]]
Output :
  2 3 1
  5 6 4
  8 9 7
Explanation: Rotate the matrix by one
1 2 3       2 3 1
4 5 6  =>  5 6 4
7 8 9       8 9 7
</pre>

### 💡Example 2:

<pre>
Input:
    k=2, mat=[[1,2,3],[4,5,6],[7,8,9]]
Output: 
    3 1 2
    6 4 5
    9 7 8
Explanation: After rotating the matrix looks like
1 2 3       2 3 1       3 1 2
4 5 6  =>  5 6 4  =>   6 4 5
7 8 9       8 9 7       9 7 8
</pre>


## Expected Time Complexity:
 ``` O(n*m)```
## Expected Space Complexity: 
```O(n*m)```

## Constraints: 
1<= mat.size, mat[0].size, mat[i][j] <=1000

1<=k<=10000

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
</p>

## Topic Tags:
<p align="left">
  
<a href="https://www.geeksforgeeks.org/explore/?category[]Modular Arithmetic"><img src="https://img.shields.io/badge/Modular Arithmetic-100000?style=flat&logo=&logoColor=D88913&labelcolor=D88913&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/25-06-2024/Left%20Rotate%20Matrix%20K%20times.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/25-06-2024/Left%20Rotate%20Matrix%20K%20times.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/25-06-2024/Left%20Rotate%20Matrix%20K%20times.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/25-06-2024/Left%20Rotate%20Matrix%20K%20times.cs)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/25-06-2024/Left%20Rotate%20Matrix%20K%20times.js)
