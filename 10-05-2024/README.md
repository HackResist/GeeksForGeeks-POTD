 [Go To Problem](https://www.geeksforgeeks.org/problems/combination-sum-ii-1664263832/1)
# Combination Sum II


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy :49.5%</strong>    
               <strong>Points: 4</strong>
</div>

Given an array of integers **arr**, the length of the array **n**, and an integer **k**, find all the unique combinations in arr where the sum of the combination is equal to **k**. Each number can only be used once in a combination.
Return the combinations in the lexicographically sorted order, where each combination is in non-decreasing order.
### 💡Example 1:
<pre>
<strong>Input:</strong>
  n = 5, k = 7
  arr[] = { 1, 2, 3, 3, 5 }
<strong>Output:</strong> 
  { { 1, 3, 3 }, { 2, 5 } }
<strong>Explanation:</strong> 
  1 + 3 + 3 = 7
  2 + 5 = 7
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  n = 6, k = 30
  arr[] = { 5, 10, 15, 20, 25, 30 }
<strong>Output:</strong>
  { { 5, 10, 15 }, { 5, 25 }, { 10, 20 }, { 30 } }
<strong>Explanation:</strong>  
  5 + 10 + 15 = 30
  5 + 25 = 30
  10 + 20 = 30
</pre>
## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function **CombinationSum2()** which takes arr[],n, and k as input parameters and returns all the unique combinations.

let p = number of elements, at maximum, can sum up to the given value k.
## Expected Time Complexity:


<!-- HTML code for the first rounded box -->
<div class="rounded-box1">
    O(2<sup>min(n,p)</sup>)
</div>



## Expected Space Complexity: 

<div class="rounded-box1">
    O(n)
</div>

## Constraints: 
```1 <= n <= 100```

```1 <= arr[i] <= 50```

```1 <= k <= 30```


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Arrays&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Recursion"><img src="https://img.shields.io/badge/Recursion-100000?style=flat&logo=Recursion&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/10-05-2024/Combination%20Sum%20II.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/10-05-2024/Combination%20Sum%20II.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/10-05-2024/Combination%20Sum%20II.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/10-05-2024/Combination%20Sum%20II.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/10-05-2024/Combination%20Sum%20II.js)


 
