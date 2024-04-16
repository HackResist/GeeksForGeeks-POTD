 [Go To Problem](https://www.geeksforgeeks.org/problems/minimize-the-difference/1)
# Minimize the Difference


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 54.13%</strong>    
               <strong>Points: 4</strong>
</div>

 > You are given an array <strong>arr</strong> of size <strong>n</strong>. You have to remove a <strong>subarray</strong> of size<strong> k</strong> , such that the difference between the maximum and minimum values of the <strong>remaining array</strong> is<strong> minimized.</strong>

Find the <strong>minimum</strong> value obtained after performing the operation of the removal of the subarray and return it.

### 💡Example 1:

``` 
Input:
  n = 5
  k = 3
  arr = {1, 2, 3, 4, 5}
Output: 
  1
Explanation: 
  We can remove first subarray of length 3(i.e. {1, 2, 3})    then remaining array will be {4,5} and the difference of maximum and minimum element will be 1 i.e 5 - 4 = 1
```

### 💡Example 2:

``` 
Input:
  n = 6
  k = 3
  arr = {2, 3, 1, 4, 6, 7}
Output: 
  2
Explanation:
  If we remove the subarray {2,3,1} then remaining array will be {4,6,7} and the difference  = 7-4 = 3
  If we remove the subarray {3,1,4} then remaining array will be {2,6,7} and the difference  = 7-2 = 5
  If we remove the subarray {1,4,6} then remaining array will be {2,3,7} and the difference  = 7-2 = 5
  If we remove the subarray {4,6,7} then remaining array will be {2,3,1} and the difference  = 3-1 = 2

So the answer will be min(3,5,5,2) = 2
```

## Your Task:
  - You have to complete the function <strong>minimizeDifference( )</strong>, which takes two integers <strong>n</strong> and <strong>k </strong>and an integer array <strong> arr</strong>of size n. You have to return the <strong>minimum difference </strong>of maximum and minimum elements of the remaining array after removing one k length subarray of it.

## Expected Time Complexity:
 ```O(n)```
## Expected Space Complexity: 
```O(n)```

## Constraints: 
2 <= n <= 10<sup>5</sup>

1 <= k <= n-1

0 <= arr[i] <= 10<sup>9</sup>




## Topic Tags:
<p align="left">
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Map"><img src="https://img.shields.io/badge/Map-258FFA?style=flat&logo=Map&logoColor=FF&labelColor=4322C&color=FFFAB7" /></a>
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/16-04-2024/Minimize%20the%20Difference.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/16-04-2024/Minimize%20the%20Difference.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/16-04-2024/Minimize%20the%20Difference.py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/16-04-2024/Minimize%20the%20Difference.js)


 
