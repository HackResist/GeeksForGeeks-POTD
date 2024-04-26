 [Go To Problem](https://www.geeksforgeeks.org/problems/exit-point-in-a-matrix0905/1)
# Exit Point in a Matrix


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 50.00%</strong>    
               <strong>Points: 2</strong>
</div>
Given a <string>matrix</string> of size <strong>n x m</strong> with <strong>0’s</strong> and <strong>1’s</strong>, you enter the matrix at cell <strong>(0,0)</strong> in <strong>left to right</strong> direction. Whenever you encounter a <strong>0</strong> you retain it in the <strong>same direction</strong>, else if you encounter a <strong>1</strong> you have to <strong>change</strong> the direction to the <strong>right</strong> of the current direction and <strong>change that 1</strong> value to <strong>0</strong>, you have to find out from which index you will <strong>leave</strong> the matrix at the end.

### 💡Example 1:
<pre>
<strong>Input:</strong>
    n = 3, m = 3
    matrix = {{0, 1, 0},
             {0, 1, 1}, 
             {0, 0, 0}}
<strong>Output:</strong> 
    {1, 0}
<strong>Explanation:</strong>
    Enter the matrix at (0, 0) 
    -> then move towards (0, 1) ->  1 is encountered 
    -> turn right towards (1, 1)  -> again 1 is encountered 
    -> turn right again towards (1, 0) 
    -> now, the boundary of matrix will be crossed ->hence, exit point reached at 1, 0..
</pre>
### 💡Example 2:
<pre>

<strong>Input:</strong>
    n = 1, m = 2
    matrix = {{0, 0}}
<strong>Output:</strong> 
    {0, 1}
<strong>Explanation:</strong>
    Enter the matrix at cell (0, 0).
    Since the cell contains a 0, we continue moving in the same direction.
    We reach cell (0, 1), which also contains a 0. So, we continue moving in the same direction, we exit the matrix from cell (0, 1).
</pre>
## Your Task:
  - You don't need to read or print anything. Your task is to complete the function <strong>FindExitPoint()</strong> which takes the <strong>matrix</strong> as an input parameter and returns a <strong>list</strong> containing the <strong>exit point</strong>.

## Expected Time Complexity:
 ```O(n * m) where n = number of rows and m = number of columns.```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 <= n, m <= 100


## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Samsung"><img src="https://img.shields.io/badge/Samsung-10000?style=for-the-badge&logo=Samsung&logoColor=121481&labelColor=FDFFC2&color=D88913"/></a>



## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-258FFA?style=flat&logo=Matrix&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/26-04-2024/Exit%20Point%20in%20a%20Matrix.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/26-04-2024/Exit%20Point%20in%20a%20Matrix.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/26-04-2024/Exit%20Point%20in%20a%20Matrix.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/26-04-2024/Exit%20Point%20in%20a%20Matrix.js)


 
