 [Go To Problem](https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1)
# Largest square formed in a matrix

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:36.98%</strong>    
               <strong>Points: 4</strong>
</div>
Given a binary matrix mat of size n * m, find out the maximum length of a side of a <strong>square</strong> sub-matrix with all 1s.

### 💡Example 1:
<pre>
<strong>Input :</strong> n = 6, m = 5
mat = [[0, 1, 1, 0, 1], 
       [1, 1, 0, 1, 0],
       [0, 1, 1, 1, 0],
       [1, 1, 1, 1, 0],
       [1, 1, 1, 1, 1],
       [0, 0, 0, 0, 0]]
<strong>Output :</strong>  3
<strong>Explanation: </strong>   <p align="left">
  <a href="https://www.geeksforgeeks.org/problems/largest-square-formed-in-a-matrix0806/1"><img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705423/Web/Other/blobid0_1720438143.png" alt="Geeksforgeeks"></a>
  The maximum length of a side of the square sub-matrix is 3 where every element is 1.
</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong>  n = 2, m = 2
mat = [[1, 1], 
       [1, 1]]
<strong>Output :</strong>  2

<strong>Explanation: </strong> The maximum length of a side of the square sub-matrix is 2. The matrix itself is the maximum sized sub-matrix in this case.
</pre>

### 💡Example 3:

<pre>
<strong>Input :</strong>  n = 2, m = 2
mat = [[0, 0], 
       [0, 0]]
<strong>Output :</strong>  0

<strong>Explanation: </strong>  There is no 1 in the matrix.
</pre>


## Expected Time Complexity:
```O(n*m)```
## Expected Space Complexity: 
```O(n*m)```

## Constraints: 

```1 ≤ n, m ≤ 500```

```0 ≤ mat[i][j] ≤ 1```

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=FF9900&color=FF9900"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Samsung"><img src="https://img.shields.io/badge/Samsung-10000?style=for-the-badge&logo=Samsung&logoColor=FFFFFF&labelColor=FF6F61&color=FF6F61"/></a>
</p>

## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=1E90FF&color=1E90FF" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FFD700&color=FFD700" /></a>
</p>


## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/10-07-2024/Largest%20square%20formed%20in%20a%20matrix.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/10-07-2024/Largest%20square%20formed%20in%20a%20matrix.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/10-07-2024/Largest%20square%20formed%20in%20a%20matrix.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/10-07-2024/Largest%20square%20formed%20in%20a%20matrix.js)
