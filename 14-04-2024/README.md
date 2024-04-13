 [Go To Problem](https://www.geeksforgeeks.org/problems/xoring-and-clearing/1)
# Xoring and Clearing

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 57.78%</strong>    
      <strong>Points: 2</strong>
</div>



You are given an array <strong>arr[]</strong> of <strong>size n</strong>. You need to do the following:

 1. You need to calculate the <strong>bitwise XOR</strong> of each element in the array with its <strong>corresponding index </strong>(indices start from 0).

 2. After step1, <strong>print the array.</strong>

 3. Now, <strong>set all the elements of arr[] to zero.</strong>

 4. Now, <strong>print arr[].</strong>


### 💡Example 1:

``` 
Input:
  n = 10
  arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
Output:
  1 3 1 7 1 3 1 15 1 3
  0 0 0 0 0 0 0 0 0 0
Explanation:
  First we take xor of every element with
  their indices, like (1xor0), (2xor1), (3xor2), (4xor3) and so on.
  Now print the resultant array
  Now set all the elements of array to zero
  Now print the resultant array
```

### 💡Example 2:

``` 
Input:
  n = 4
  arr[] = {10, 20, 30, 40}
Output:
  10 21 28 43
  0 0 0 0
Explanation:
  First we take xor of every element with
  their indices, like (1xor0), (2xor1), (3xor2).
  Now print the resultant array
  Now set all the elements of array to zero
  Now print the resultant array
```

## Your Task:
  - Since this is a function problem, you don't need to take any input. Just complete the provided functions. In a new line, print the <strong>output.</strong>





## Expected Time Complexity:
 ``` O(n)```
## Expected Auxiliary Space Complexity: 
```O(1)```

## Constraints: 
```1 <= n <= 1000```

```1 <= arr[i] <= 1000```


## Topic Tags:
<p align="left">
    <a href="https://www.geeksforgeeks.org/explore/?category[]=Bit%20Magic"><img src="https://img.shields.io/badge/Bit Magic-258FFA?style=flat&logo=&logoColor=FFFF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data Structures-100000?style=flat&logo=&logoColor=F7F7F7&labelcolor=DC6B19&color=DC6B19" /></a>
</p>
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/14-04-2024/Xoring%20and%20Clearing.cpp) 
 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/14-04-2024/Xoring%20and%20Clearing.java)

 - [Python3 Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/14-04-2024/Xoring%20and%20Clearing.py)

 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/14-04-2024/Xoring%20and%20Clearing.js)



 
