 [Go To Problem](https://www.geeksforgeeks.org/problems/maximum-occured-integer4602/1)
# Maximum occured integer

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy : 32.93%</strong>    
               <strong>Points: 4</strong>
</div>

Given n integer ranges, the task is to return the **maximum occurring integer** in the given ranges. If more than one such integer exists, return the **smallest** one.

The ranges are in two arrays **l[]** and **r[]**.  **l[i]** consists of the starting point of the range and **r[i]** consists of the corresponding endpoint of the range & a maxx which is the **maximum** value of **r[]**.

  For example,
    <pre>consider the following ranges.
      l[] = {2, 1, 3}, r[] = {5, 3, 9)
    
  Ranges represented by the above arrays are.
    [2, 5] = {2, 3, 4, 5} 
    [1, 3] = {1, 2, 3}
    [3, 9] = {3, 4, 5, 6, 7, 8, 9}
  
  The maximum occurred integer in these ranges is 3.
</pre>

### 💡Example 1:
<pre>
<strong>Input:</strong>
  n = 4, l[] = {1,4,3,1}, r[] = {15,8,5,4}, maxx = 15
<strong>Output:</strong>  
    4
<strong>Explanation:</strong> 
    The given ranges are [1,15] [4, 8] [3, 5] [1, 4]. The smallest number that is most common or appears most times in the ranges is 4.
</pre>
### 💡Example 2:
<pre>

<strong>Input:</strong>
    n = 5, l[] = {1,5,9,13,21}, r[] = {15,8,12,20,30}, maxx = 30
<strong>Output:</strong> 
    5
<strong>Explanation:</strong>  
    The given ranges are [1, 15] [5, 8] [9, 12] [13, 20] [21, 30]. The smallest number that is most common or appears most times in the ranges is 5.
</pre>
## Your Task:
  - You don't have to take input. Complete the function **Kdistance()** that accepts **root** node and **k** as parameters and returns the value of the nodes that are at a distance k from the root.
## Expected Time Complexity:
 ``` O(n+maxx)```
## Expected Space Complexity: 
``` O(maxx), maxx is maximum element in r[]```

## Constraints: 
1 ≤ n ≤ 10<sup>6</sup>

0 ≤ l[i], r[i] ≤ 10<sup>6</sup>



## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Arrays&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Mathematical"><img src="https://img.shields.io/badge/Mathematical-10000?style=flat&logo=Mathematical&logoColor=FFFFFF&labelColor=ff3300&color=ff3300"/></a>

  ## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/07-06-2024/Maximum%20occured%20integer.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/07-06-2024/Maximum%20occured%20integer.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/07-06-2024/Maximum%20occured%20integer.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/07-06-2024/Maximum%20occured%20integer.js)
