 [Go To Problem](https://www.geeksforgeeks.org/problems/maximize-dot-product2649/1)
# Maximize dot product


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 13.27%</strong>    
      <strong>Points: 2</strong>
</div>



Given two arrays <strong>a</strong> and <strong>b</strong> of positive integers of size <strong>n </strong>and <strong>m</strong> where <strong>n >= m</strong>, the task is to maximize the dot product by inserting zeros in the second array but you cannot disturb the order of elements.

Dot product of array <strong>a</strong> and <strong>b</strong> of size <strong>n</strong> is <strong>a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1].</strong>


### 💡Example 1:

``` 
Input: 
n = 5, a[] = {2, 3, 1, 7, 8} 
m = 3, b[] = {3, 6, 7}
Output: 
107
Explanation: 
We get maximum dot product after inserting 0 at first and third positions in second array.
Therefore b becomes {0, 3, 0, 6, 7}. 
Maximum dot product = 2*0 + 3*3 + 1*0 + 7*6 + 8*7 = 107.
```

### 💡Example 2:

``` 
Input: 
n = 3, a[] = {1, 2, 3}
m = 1, b[] = {4} 
Output: 
12 
Explanation: 
We get maximum dot product after inserting 0 at first and second positions in second array.
Therefore b becomes {0, 0, 4}. 
Maximum Dot Product = 1*0 + 2*0 + 3*4 = 12.
```

## Your Task:
  - You don't need to read input or print anything. Complete the function <strong>maxDotProduct()</strong> which takes<strong> n</strong>,<strong> m</strong>, array <strong> a </strong>and <strong> b</strong> as input parameters and returns the maximum value.

## Expected Time Complexity:
 ```O(n*m)```
## Expected Space Complexity: 
```O(n*m)```

## Constraints: 
```1 ≤ m ≤n ≤ 10^3```

```1 ≤ a[i], b[i] ≤ 10^3```
## Company Tag: 

<p align="left">
<!--<a href="https://www.geeksforgeeks.org/explore/?company[]=Directi"><img src="https://img.shields.io/badge/Directi
-10000?style=for-the-badge&logo=Directi&logoColor=FFFFF&labelColor=D8893&color=2A19D7"/></a> -->
 <a href="https://www.geeksforgeeks.org/explore/?company[]=Directi"><img src="https://img.shields.io/badge/Directi-10000?style=for-the-badge&logo=Directi&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/> </a>

</p>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/07-04-2024/Maximize%20dot%20product.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/07-04-2024/Maximize%20dot%20product.java)
 - [Python3 Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/07-04-2024/Maximize%20dot%20product.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/07-04-2024/Maximize%20dot%20product.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/07-04-2024/Maximize%20dot%20product.js)



 
