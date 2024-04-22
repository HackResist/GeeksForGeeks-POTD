 [Go To Problem](https://www.geeksforgeeks.org/problems/row-with-minimum-number-of-1s5430/1)
# Row with minimum number of 1's


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 25.0%</strong>    
               <strong>Points: 2</strong>
</div>

  Given a 2D <strong>binary matrix</strong>(1-based indexed)</strong> a</strong> of dimensions <strong>nxm</strong> , determine the <strong>row</strong> that contains the <strong>minimum number</strong> of <strong>1's</strong>.

<strong>Note:</strong> The matrix contains only <strong>1's</strong> and </strong>0's</strong>. Also, if two or more rows contain the <strong>minimum number</strong> of <strong>1's</strong>, the answer is the <strong>lowest</strong> of those <strong>indices</strong>.


### 💡Example 1:

``` 
Input:
    n = 4,m = 4
    a = [[1, 1, 1, 1],
     [1, 1, 0, 0], 
     [0, 0, 1, 1],
     [1, 1, 1, 1]]
Output:
    2
Explanation:
    Rows 2 and 3 contain the minimum number 
    of 1's(2 each).Since,row 2 is less than row 3.
    Thus, the answer is 2.
```
### 💡Example 2:

``` 
Input:
    n = 3,m = 3
    a = [[0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]]
Output:
    1
Explanation:
    All the rows contain the same number 
    of 1's(0 each).Among them, index 1 
    is the smallest, so the answer is 1.
```


## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function <strong>minRow()</strong> which takes the two integers <strong>n</strong>, </strong>m</strong> as well as the <strong>2D binary matrix a</strong> as input parameters and returns the <strong>minimum index</strong> of the </strong>row</strong> which contains the <strong>least number of 1's</strong>.

## Expected Time Complexity:
 ```O(n*m)```
## Expected Auxiliary Space: 
```O(1)```

## Constraints: 
1 <= n,m <= 1000

0 <= a[i][j] <= 1

## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=D88913"/></a>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-258FFA?style=flat&logo=Matrix&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
  


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/22-04-2024/Row%20with%20minimum%20number%20of%201's.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/22-04-2024/Row%20with%20minimum%20number%20of%201's.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/22-04-2024/Row%20with%20minimum%20number%20of%201's.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/22-04-2024/Row%20with%20minimum%20number%20of%201's.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/22-04-2024/Row%20with%20minimum%20number%20of%201's.js)


 
