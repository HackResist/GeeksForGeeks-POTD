 [Go To Problem](https://www.geeksforgeeks.org/problems/three-way-partitioning/1)
# Three way partitioning



<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 41.58%</strong>    
               <strong>Points: 2</strong>
</div>

 Given an <strong>array</strong> of size <strong>n</strong> and <strong>a</strong> range <strong>[a, b]</strong>. The task is to partition the array around the range such that the array is divided into three parts.
1) All elements smaller than <strong>a</strong> come first.
2) All elements in range <strong>a</strong> to <strong>b</strong> come next.
3) All elements greater than <strong>b</strong> appear in the end.

The individual elements of three sets can appear in any order. You are required to return the modified array.

<strong>Note:</strong> The generated output is 1 if you modify the given array successfully.

<strong>Geeky Challenge:</strong> Solve this problem in O(n) time complexity.



### 💡Example 1:

``` 
Input: 
    n = 5
    array[] = {1, 2, 3, 3, 4}
    [a, b] = [1, 2]
Output: 
    1
Explanation: 
    One possible arrangement is: {1, 2, 3, 3, 4}. If you return a valid arrangement, output will be 1.
```
### 💡Example 2:

``` 
Input: 
    n = 6 
    array[] = {1, 4, 3, 6, 2, 1}
    [a, b] = [1, 3]
Output: 
    1
Explanation: 
    One possible arrangement is: {1, 3, 2, 1, 4, 6}. If you return a valid arrangement, output will be 1.
```


## Your Task:
  - You don't need to read input or print anything. The task is to complete the function <strong>threeWayPartition()</strong> which takes the array <strong>array, a</strong>, and <strong>b</strong> as input parameters and modifies the array in place according to the given conditions.

## Expected Time Complexity:
 ```O(n)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 <=  n <= 10<sup>6</sup>

1 <=array[i],a,b <= 10<sup>9</sup>



## Company Tag: 
<p align="left">
    <a href="https://www.geeksforgeeks.org/explore/?company[]=Yahoo"><img src="https://img.shields.io/badge/Yahoo!-10000?style=for-the-badge&logo=Yahoo&logoColor=F7F7F7&labelcolor=6420AA&color=6420AA" /></a>
 



</p>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
    <a href="https://www.geeksforgeeks.org/explore/?category[]=Sorting"><img src="https://img.shields.io/badge/Sorting-100000?style=flat&logo=Sorting&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
    <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=78A083&color=78A083" /></a>
 


## Codes:
 - [C Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.c)
 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/21-04-2024/Three%20way%20partitioning.js)


 
