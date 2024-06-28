 [Go To Problem](https://www.geeksforgeeks.org/problems/the-palindrome-pattern3900/1)
# The Palindrome Pattern


<div align="center">
  <strong>Hard</strong>    
</div>
<div align="center">
       <strong>Accuracy:64.96%</strong>    
               <strong>Points: 8</strong>
</div>

Given a two-dimensional integer array <strong>arr</strong> of dimensions <strong>n x n</strong>, consisting solely of zeros and ones, identify the row or column (using 0-based indexing) where all elements form a palindrome. If multiple palindromes are identified, prioritize the palindromes found in rows over those in columns. Within rows or columns, the palindrome with the smaller index takes precedence. The result should be represented by the index followed by either <strong>'R'</strong> or <strong>'C'</strong>, indicating whether the palindrome was located in a row or column. The output should be space-separated. If no palindrome is found, return the string<strong> -1.</strong>

### 💡Example 1:
<pre>
Input :
   arr[][] =  [[1, 0, 0], 
               [0, 1, 0],
               [1, 1, 0]]
Output :
  1 R
Explanation: In the first test case, 0-1-0 is a palindrome 
occuring in a row having index 1.
</pre>

### 💡Example 2:

<pre>
Input:
    arr[][] =   [[1, 0],
                 [1, 0]]
Output: 
    0 C
Explanation:1-1 occurs before 0-0 in the 0th column. And there is no palindrome in the two rows.
</pre>


## Expected Time Complexity:
 O(n<sup>2</sup>)
## Expected Space Complexity: 
O(1)

## Constraints: 
1<= arr.size <= 50

0 <= arr[i][j] <= 1



## Topic Tags:
<p align="left">
  
<a href="https://www.geeksforgeeks.org/explore/?category[]Functions"><img src="https://img.shields.io/badge/Functionsc-100000?style=flat&logo=&logoColor=D88913&labelcolor=D88913&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/28-06-2024/The%20Palindrome%20Pattern.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/28-06-2024/The%20Palindrome%20Pattern.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/28-06-2024/The%20Palindrome%20Pattern.py)
 - [JavaScript Code](#blank)
