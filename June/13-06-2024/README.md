 [Go To Problem](https://www.geeksforgeeks.org/problems/padovan-sequence2855/1)
# Padovan Sequence  



<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 34.96%</strong>    
               <strong>Points: 2</strong>
</div>

Given a number <strong>n</strong>., find the <strong>n<sup>th</sup></strong> number in the Padovan Sequence.

-  A Padovan Sequence is a sequence which is represented by the following recurrence relation
<pre>
      P(n) = P(n-2) + P(n-3)

      P(0) = P(1) = P(2) = 1
</pre>

**Note**: Since the output may be too large, compute the answer modulo <strong>10^9+7.</strong>

### 💡Example 1:

``` 
Input :
  n = 3
Output :
  2
Explanation:
    We already know, P1 + P0 = P3 and P1 = 1 and P0 = 1
```
### 💡Example 2:

``` 
Input:
   n = 4
Output: 
     2
Explanation: 
     We already know, P4  = P2 + P1 and P2 = 1 and P1 = 1
```


## Expected Time Complexity:
 ```O(n)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 <= n <= 10<sup>6</sup>



## Topic Tags:
<p align="center">

<a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-100000?style=flat&logo=https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=series"><img src="https://img.shields.io/badge/series-100000?style=flat&logo=series&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Modular%20Arithmetic"><img src="https://img.shields.io/badge/Modular%20Arithmetic-100000?style=flat&logo=Modular%20Arithmetic&logoColor=F7F7F7&labelcolor=D88913&color=D88913" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=&labelColor=FC4100&color=FC4100"/> </a>


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/13-06-2024/Padovan%20Sequence.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/13-06-2024/Padovan%20Sequence.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/13-06-2024/Padovan%20Sequence.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/13-06-2024/Padovan%20Sequence.cs)
