 [Go To Problem](https://www.geeksforgeeks.org/problems/count-pairs-in-an-array4145/1)
# Count Pairs in an Array


<div align="center">
  <strong>Hard</strong>    
</div>
<div align="center">
       <strong>Accuracy: 48.25%</strong>    
               <strong>Points: 8</strong>
</div>

Given an array <strong>arr</strong> of<strong> n</strong> integers, count all pairs <strong>(arr[i], arr[j])</strong> in it such that <strong>i*arr[i] > j*arr[j]</strong> and <strong>0 ≤ i < j < n.</strong>

 <strong>Note:</strong> 0-based Indexing is followed.



### 💡Example 1:

``` 
Input :
  n = 4
  arr[] = {8, 4, 2, 1}
Output :
  2
Explanation:
  If we see the array after operations
  [0*8, 1*4, 2*2, 3*1] => [0, 4, 4, 3]
  Pairs which hold the condition i*arr[i] > j*arr[j] are (4,1) and (2,1), so in total 2 pairs are available. 
```
### 💡Example 2:

``` 
Input :
  n = 7
  arr[] = {5, 0, 10, 2, 4, 1, 6}
Output:
  5
Explanation :
  Pairs which hold the condition i*arr[i] > j*arr[j] are (10,2), (10,4), (10,1), (2,1) and (4,1), so in total 5 pairs are there.
```


## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function <strong>countPairs()</strong> which takes the array <strong>arr[]</strong> and its size<strong> n</strong> as inputs and returns the required result.

## Expected Time Complexity:
 ```O(n*log(n))```
## Expected Space Complexity: 
```O(n*log(n))```

## Constraints: 
1 ≤ n ≤ 10<sup>4</sup>

1 ≤ arr[i] ≤ 10<sup>4</sup>


## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
    <a href="https://www.geeksforgeeks.org/explore/?category[]=Merge%20Sort"><img src="https://img.shields.io/badge/Merge-100000?style=flat&logo=Merge&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/17-04-2024/Count%20Pairs%20in%20an%20Array.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/17-04-2024/Count%20Pairs%20in%20an%20Array.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/17-04-2024/Count%20Pairs%20in%20an%20Array.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/17-04-2024/Count%20Pairs%20in%20an%20Array.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/17-04-2024/Count%20Pairs%20in%20an%20Array.js)


 
