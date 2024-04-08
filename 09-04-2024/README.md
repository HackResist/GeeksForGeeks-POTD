 [Go To Problem](https://www.geeksforgeeks.org/problems/minimum-points-to-reach-destination0540/1)
# Minimum Points To Reach Destination




<div align="center">
  <strong>Hard</strong>    
</div>
<div align="center">
       <strong>Accuracy: 33.00%</strong>    
      <strong>Points: 8</strong>
</div>

Given a <strong>m*n</strong> grid with each cell consisting of <strong>positive, negative,</strong> or<strong> zero</strong> point. We can move across a cell only if we have positive points. Whenever we pass through a cell, points in that cell are added to our overall points, the task is to find <strong>minimum initial points</strong> to reach cell (<strong>m-1, n-1</strong>) from (<strong>0, 0</strong>) by following these certain set of rules :

 1. From a cell (i, j) we can move to (i + 1, j) or (i, j + 1).

 2. We cannot move from (i, j) if your overall points at (i, j) are <= 0.
   
 3. We have to reach at (n-1, m-1) with minimum positive points i.e., > 0.
   
### 💡Example 1:

``` 
Input: 
m = 3, n = 3 
points = {{-2,-3,3}, 
          {-5,-10,1},
          {10,30,-5}} 
Output: 
7 
Explanation: 7 is the minimum value to reach the destination with positive throughout the path. Below is the path. (0,0) -> (0,1) -> (0,2) -> (1, 2) -> (2, 2) We start from (0, 0) with 7, we reach (0, 1) with 5, (0, 2) with 2, (1, 2) with 5, (2, 2) with and finally we have 1 point (we needed greater than 0 points at the end).
```

### 💡Example 2:

``` 
m = 3, n = 2
points = {{2,3},  
          {5,10},  
          {10,30}} 
Output: 
1 
Explanation: Take any path, all of them are positive. So, required one point at the start
```

## Your Task:
  -  You don't need to read input or print anything. Complete the function <strong> minPoints() </strong>which takes <strong>m,n</strong> and 2-d vector <strong>points </strong>as input parameters and returns the<strong> minimum initial points </strong>to reach cell (<strong>m-1, n-1</strong>) from (<strong>0, 0</strong>).

## Expected Time Complexity:
 ```O(n*m)```
## Expected Auxiliary Space:
``` O(n*m)```

## Constraints: 
```2 <= n <= 10^3```

```1 ≤ m ≤ 10^3  ```

```1 ≤ n ≤ 10^3```

```-10^3 ≤ points[i][j] ≤ 10^3```

## Company Tag: 

<p align="left">
 <a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=FFFFFF&labelColor=43822C&color=43822C"/> </a>

</p>


## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=&logoColor=FF&labelColor=43822C&color=43822C" /></a>
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 



## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-04-2024/Minimum%20Points%20To%20Reach%20Destination.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-04-2024/Minimum%20Points%20To%20Reach%20Destination.java)
 - [Python3 Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-04-2024/Minimum%20Points%20To%20Reach%20Destination.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-04-2024/Minimum%20Points%20To%20Reach%20Destination.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-04-2024/Minimum%20Points%20To%20Reach%20Destination.js)



 
