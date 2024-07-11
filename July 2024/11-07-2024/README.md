 [Go To Problem](https://www.geeksforgeeks.org/problems/maximum-connected-group/1)
# Maximum Connected group

<div align="center">
  <strong>Hard</strong>    
</div>
<div align="center">
       <strong>Accuracy:49.48%</strong>    
               <strong>Points: 8</strong>
</div>

You are given a square binary grid. A grid is considered binary if every value in the grid is either <strong>1 or 0.</strong> You can change <strong>at most one</strong> cell in the grid from <strong>0 to 1.</strong> You need to find the largest group of connected <strong> 1's</strong>. Two cells are said to be connected if both are <strong>adjacent</strong>(top, bottom, left, right) to each other and both have the same value.
### 💡Example 1:
<pre>
<strong>Input :</strong> grid = [1, 1]
                                [0, 1]
<strong>Output :</strong>  4
<strong>Explanation: </strong>By changing cell (2,1), we can obtain a connected group of 4 1's
[1, 1]
[1, 1]
</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong>  grid = [1, 0, 1]
                                 [1, 0, 1]
                                 [1, 0, 1]

<strong>Output :</strong>  7

<strong>Explanation: </strong>  By changing cell (3,2), we can obtain a connected group of 7 1's
[1, 0, 1]
[1, 0, 1]
[1, 1, 1]
</pre>


## Expected Time Complexity:
```O(n^2)```
## Expected Space Complexity: 
```O(n^2)```

## Constraints: 
```1 <= size of the grid<= 500```

```0 <= grid[i][j] <= 1```


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=32CD32&color=32CD32" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=BFS"><img src="https://img.shields.io/badge/BFS-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=4B0082&color=4B0082" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Graph"><img src="https://img.shields.io/badge/Graph-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=800080&color=800080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=DFS"><img src="https://img.shields.io/badge/DFS-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=006400&color=006400" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=1E90FF&color=1E90FF" /></a>
</p>


## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/11-07-2024/Maximum%20Connected%20group.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/11-07-2024/Maximum%20Connected%20group.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/11-07-2024/Maximum%20Connected%20group.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/11-07-2024/Maximum%20Connected%20group.js)
