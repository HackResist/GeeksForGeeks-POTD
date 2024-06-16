 [Go To Problem](https://www.geeksforgeeks.org/problems/sum-of-prime4751/1)
# Prime Pair with Target Sum



<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 27.67%</strong>    
               <strong>Points: 4</strong>
</div>
Given a number n, find out if n can be expressed as a+b, where both a and b are prime numbers. If such a pair exists, return the values of a and b, otherwise return [-1,-1] as an array of size 2.


**Note:** If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, and a < c then  [a, b] is considered as our answer.

### 💡Example 1:
<pre>
Input :
  n = 10
Output :
  3 7
Explanation:
     There are two possiblities 3, 7 & 5, 5 are both prime & their sum is 10, but we'll pick 3, 7 as 3 < 5.
</pre>

### 💡Example 2:

<pre>
Input:
   n = 3
Output: 
     -1 -1
Explanation: 
    There are no solutions to the number 3.
</pre>

## Expected Time Complexity:
 ```O(n*loglog(n))```
## Expected Space Complexity: 
```O(n)```

## Constraints: 

2 <= n <= 10<sup>6</sup>



## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=number-theory"><img src="https://img.shields.io/badge/number-theory-100000?style=flat&logo=number-theory&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=constructive%20algo"><img src="https://img.shields.io/badge/constructive%20algo-100000?style=flat&logo=constructive%20algo&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Prime%20Number"><img src="https://img.shields.io/badge/Prime%20Number-100000?style=flat&logo=Prime%20Number&logoColor=FFFFFF&labelColor=C40C0C&color=C40C0C"/></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Mathematical"><img src="https://img.shields.io/badge/Mathematical-100000?style=flat&logo=https://www.geeksforgeeks.org/explore/?category[]=Mathematical&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>




## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/16-06-2024/Prime%20Pair%20with%20Target%20Sum.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/16-06-2024/Prime%20Pair%20with%20Target%20Sum.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/16-06-2024/Prime%20Pair%20with%20Target%20Sum.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/16-06-2024/Prime%20Pair%20with%20Target%20Sum.cs)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/16-06-2024/Prime%20Pair%20with%20Target%20Sum.js)
