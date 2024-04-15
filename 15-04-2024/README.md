 [Go To Problem](https://www.geeksforgeeks.org/problems/count-the-elements1529/1)
# Count the elements

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 25.32%</strong>    
               <strong>Points: 2</strong>
</div>

 > Given two arrays <strong>a</strong> and <strong>b</strong> both of size <strong> n</strong>. Given <strong>q</strong> queries in an arrray <strong>query </strong>each having a positive integer <strong>x </strong>denoting an index of the array <strong>a</strong>. For each query, your task is to find all the elements<strong> less than or equal </strong>to <strong>a[x]</strong> in the array <strong>b</strong>.


### 💡Example 1:

``` 
Input:
  n = 3
  a[] = {4,1,2}
  b[] = {1,7,3}
  q = 2
  query[] = {0,1}
Output : 
  2
  1
Explanation: 
  For 1st query, the given index is 0, a[0] = 4. There are 2 elements(1 and 3) which are less than or equal to 4.
  For 2nd query, the given index is 1, a[1] = 1. There exists only 1 element(1) which is less than or equal to 1. 
```

### 💡Example 2:

``` 
Input:
  n = 4
  a[] = {1,1,5,5}
  b[] = {0,1,2,3}
  q = 4
  query[] = {0,1,2,3}
Output : 
  2
  2
  4
  4
Explanation: 
  For 1st query and 2nd query, the given index is 0 and 1 respectively, a[0] = a[1] = 1. There are 2 elements(0 and 1) which are less than or equal to 1. 
  For 3rd query and 4th query, the given index is 2 and 3 respectively, a[2] = a[3] = 5. All the 4 elements are less than or equal to 5.   
```

## Your Task:
  - You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function<strong> countElements()</strong> that takes array <strong>a</strong> and<strong> b</strong> of size <strong>n</strong>, and array <strong>query</strong> of size <strong>q</strong> as parameters and returns an array that contains the answer to the corresponding queries. 

## Expected Time Complexity:
 ```O(n+q)```
## Expected Space Complexity: 
```O(maximum of a and b)```

## Constraints: 
1 ≤ q ≤ n ≤ 10<sup>5</sup>

1 ≤ a[i], b[i] ≤ 10<sup>5</sup>

0 ≤ query[i] < n
## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Yatra.com"><img src="https://img.shields.io/badge/Yatra-10000?style=for-the-badge&logo=Yatra&logoColor=FFFFFF&labelColor=D82913&color=2A79D7"/></a>


</p>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=Hash&logoColor=F7F7F7&labelcolor=2A79D7&color=3B2191" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/15-04-2024/Count%20the%20elements.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/15-04-2024/Count%20the%20elements.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/15-04-2024/Count%20the%20elements.py)
 - [Javascript Code](#blank)


 
