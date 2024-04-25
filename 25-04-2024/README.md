 [Go To Problem](https://www.geeksforgeeks.org/problems/maximum-sum-of-hour-glass3842/1)
# Maximum sum of hour glass

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 54.82%</strong>    
               <strong>Points: 4</strong>
</div>
Given two integers <strong>n</strong>, <strong>m</strong> and a 2D matrix <strong>mat</strong> of dimensions <strong>nxm</strong>, the task is to find the <strong>maximum sum</strong> of an <strong>hourglass.</strong>


An <strong>hourglass</strong> is defined as a part of the matrix with the following form:
<p align="left">
  <a href="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705187/Web/Other/blobid1_1710860182.png">
    <img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/705187/Web/Other/blobid1_1710860182.png" alt="GeeksForGeeks" width="170" height="170">
  </a>
</p>
Return <strong>-1</strong> if any hourglass is <strong>not found.</strong>




### 💡Example 1:
<pre>
<strong>Input:</strong>
    n = 3, m = 3
    mat = [[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]]
<strong>Output:</strong> 
    35
<strong>Explanation:</strong>
    There is only one hour glass which is
    1 2 3
      5
    7 8 9   and its sum is 35.
</pre>
### 💡Example 2:
<pre>

<strong>Input:</strong>
    n = 2, m = 3
    mat = [[1, 2, 3],
          [4, 5, 6]]
<strong>Output:</strong> 
    -1
<strong>Explanation:</strong>
    There are no hour glasses in this matrix.

</pre>
## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function <strong>findMaxSum()</strong> which takes the two integers <strong>n</strong>, <strong>m</strong>, and the 2D matrix <strong>mat</strong> as input parameters and returns the maximum sum of an hourglass in the matrix. If there are no hourglasses, it returns -1.

## Expected Time Complexity:
 ```O(n*m)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 <= n <= 150

3 <= m <= 150

0 <= mat[i][j] <= 10<sup>6</sup>






## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-258FFA?style=flat&logo=Matrix&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/25-04-2024/Maximum%20sum%20of%20hour%20glass.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/25-04-2024/Maximum%20sum%20of%20hour%20glass.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/25-04-2024/Maximum%20sum%20of%20hour%20glass.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/25-04-2024/Maximum%20sum%20of%20hour%20glass.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/25-04-2024/Maximum%20sum%20of%20hour%20glass.js)


 
