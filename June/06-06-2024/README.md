 [Go To Problem](https://www.geeksforgeeks.org/problems/max-sum-in-the-configuration/1)
# Max sum in the configuration



<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 36.56%</strong>    
               <strong>Points: 4</strong>
</div>

> Given an integer array(0-based indexing) **a** of size **n**. Your task is to **return** the **maximum** value of the sum of **i*a[i]** for all **0<= i <=n-1**, where **a[i]** is the element at index **i** in the array. The only operation allowed is to rotate(clockwise or counterclockwise) the array any number of times.



### 💡Example 1:

``` 
Input :
  n = 4
  a[] = {8, 3, 1, 2}
Output :
  29
Explanation:
   All the configurations possible by rotating the elements are:
    3 1 2 8 here sum is 3*0+1*1+2*2+8*3 = 29
    1 2 8 3 here sum is 1*0+2*1+8*2+3*3 = 27
    2 8 3 1 here sum is 2*0+8*1+3*2+1*3 = 17
    8 3 1 2 here sum is 8*0+3*1+1*2+2*3 = 11, so the maximum sum will be 29. 
```
### 💡Example 2:

``` 
Input :
   n = 3, a[] = {1, 2, 3}
Output:
  8
Explanation :
  All the configurations possible by rotating the elements are:
      1 2 3 here sum is 1*0+2*1+3*2 = 8
      3 1 2 here sum is 3*0+1*1+2*2 = 5
      2 3 1 here sum is 2*0+3*1+1*2 = 5, so the maximum sum will be 8.
```

## Expected Time Complexity:
 ```O(n)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1<=n<=10<sup>5</sup>
1<=a[]<=10<sup>6</sup>
## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/> </a>



</p>

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
    <a href="https://www.geeksforgeeks.org/explore/?category[]=Mathematical"><img src="https://img.shields.io/badge/Mathematical-100000?style=flat&logo=Mathematical&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/06-06-2024/Max%20sum%20in%20the%20configuration.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/06-06-2024/Max%20sum%20in%20the%20configuration.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/06-06-2024/Max%20sum%20in%20the%20configuration.py)
 - [C# Code](#start)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/06-06-2024/Max%20sum%20in%20the%20configuration.js)


 
