 [Go To Problem](https://www.geeksforgeeks.org/problems/maximum-tip-calculator2631/1)
# Maximum Tip Calculator


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:  16.39%</strong>    
               <strong>Points: 4</strong>
</div>

In a restaurant, two waiters, **A** and **B**, receive n orders per day, earning tips as per arrays <strong>arr[i]</strong> and <strong>brr[i]</strong> respectively. If A takes the ith order, the tip is a<strong>rr[i]</strong> rupees; if B takes it, the tip is <strong>brr[i]</strong> rupees.

To maximize total tips, they must distribute the orders such that:


- A can handle at most x orders
- B can handle at most y orders

Given that <strong>x + y ≥ n</strong>, all orders can be managed by either A or B. <strong>Return</strong> the <strong>maximum</strong> possible total tip after processing all the orders.

### 💡Example 1:

``` 
Input :
  n = 5, x = 3, y = 3, arr = {1, 2, 3, 4, 5}, brr = {5, 4, 3, 2, 1}
Output :
  21
Explanation:
     Person A will serve the 3rd, 4th and 5th order while person B will serve the rest so the total tip from A = 3+4+5 & B = 5 + 4 i.e. 21. 
```
### 💡Example 2:

``` 
Input:
   n = 8, x = 4, y = 4, arr = {1, 4, 3, 2, 7, 5, 9, 6}, brr = {1, 2, 3, 6, 5, 4, 9, 8}
Output: 
    43
Explanation: 
    Person A will serve 1st, 2nd, 5th and 6th order while Person B will serve the rest & the total tip will be 43.
```

### 💡Example 3:

``` 
Input:
   n = 7, x = 3, y = 4, arr[] = {8, 7, 15, 19, 16, 16, 18}, brr[] = {1, 7, 15, 11, 12, 31, 9}

Output: 
    110
Explanation: 
     Person A will serve orders 8,19,18 while person B will serve 7,15, 12 & 31.
```

## Expected Time Complexity:
 ```O(n*logn)```
## Expected Space Complexity: 
```O(n)```

## Constraints: 
1 ≤ n ≤ 10<sup>5</sup>

1 ≤ x, y ≤ n

1 ≤ arr[i], brr[i] ≤ 10<sup>9</sup>

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=TCS"><img src="https://img.shields.io/badge/TCS-10000?style=for-the-badge&logo=TCS&logoColor=FFFFFF&labelColor=43822C&color=43822C"/></a>

</p>

## Topic Tags:
<p align="center">
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-100000?style=flat&logo=https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Sorting"><img src="https://img.shields.io/badge/Sorting-10000?style=flat&logo=Sorting&logoColor=FFFFFF&labelColor=EEEEEE&color=EEEEEE"/></a>



## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/11-06-2024/Maximum%20Tip%20Calculator.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/11-06-2024/Maximum%20Tip%20Calculator.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/11-06-2024/Maximum%20Tip%20Calculator.py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/11-06-2024/Maximum%20Tip%20Calculator.js)


 
