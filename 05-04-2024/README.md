
# Strictly Increasing Array
<div align="center">
  <strong>Hard</strong>    
</div>
<div align="center">
       <strong>Accuracy: 36.05%</strong>  
            <strong>Submissions: 13K+</strong>   
               <strong>Points: 8</strong>
</div>

<div align ="left">
Given an array nums of n positive integers. Find the minimum number of operations required to modify the array such that array elements are in strictly increasing order (nums[i] < nums[i+1]).
Changing a number to greater or lesser than original number is counted as one operation.
  </div>

  
<strong>Note:</strong> Array elements can become negative after applying operation.

### 💡Example 1:

``` 
Input:
n = 6
nums = [1, 2, 3, 6, 5, 4]
Output: 
2
Explanation: 
By decreasing 6 by 2 and increasing 4 by 2, nums will be like [1, 2, 3, 4, 5, 6] which is stricly increasing.
```

### 💡Example 2:

``` 
Input: 
n = 4
nums = [1, 1, 1, 1]
Output: 
3
Explanation: 
One such array after operation can be [-2, -1, 0, 1]. We require atleast 3 operations for this example.
```

## Your Task:
  - You don't need to read or print anything. Your task is to complete the function min_opeartions() which takes the array nums as input parameter and returns the minimum number of opeartion needed to make the array strictly increasing.

## Expected Time Complexity:
 ```n^2```
## Expected Space Complexity: 
```O(n)```

## Constraints: 
```1 <= n <= 10^3```

```1 <= nums[i] <= 10^9```
## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=FFFFFF&labelColor=2A79D7&color=2A79D7"/> </a>

</p>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=&logoColor=FF&labelColor=43822C&color=43822C" /></a>
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>

## Codes:


  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-04-2024/Strictly%20Increasing%20Array.cpp)
  - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-04-2024/Strictly%20Increasing%20Array.java)
  - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-04-2024/Strictly%20Increasing%20Array.py)
  - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-04-2024/Strictly%20Increasing%20Array.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-04-2024/Strictly%20Increasing%20Array.js)
