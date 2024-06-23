 [Go To Problem](https://www.geeksforgeeks.org/problems/print-bracket-number4058/1)
# Print Bracket Number



<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy: 51.19%</strong>    
               <strong>Points: 2</strong>
</div>
Given a string <strong>str</strong>, the task is to find the bracket numbers, i.e., for each bracket in str, return i if the bracket is the i<sup><strong>th</strong></sup> opening or closing bracket to appear in the string. 

### 💡Example 1:
<pre>
Input :
  str = "(aa(bdc))p(dee)"
Output :
  1 2 2 1 3 3
Explanation:
      The highlighted brackets in
      the given string (aa(bdc))p(dee) are
      assigned the numbers as: 1 2 2 1 3 3.
</pre>

### 💡Example 2:

<pre>
Input:
  str = "(((()("
Output: 
   1 2 3 4 4 5
Explanation: 
    The highlighted brackets in
    the given string (((()( are assigned
    the numbers as: 1 2 3 4 4 5
</pre>


## Expected Time Complexity:
 ``` O(|str|)```
## Expected Space Complexity: 
```O(|str|)```

## Constraints: 
1 <= |str| <= 10<sup>5</sup>

str contains lowercase English alphabets, and '(', ')' characters

At any index, the number of opening brackets is greater than or equal to closing brackets

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-10000?style=for-the-badge&logo=Flipkart&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
</p>



## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Strings"><img src="https://img.shields.io/badge/Strings-100000?style=flat&logo=Strings&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Stack"><img src="https://img.shields.io/badge/Stack-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Regular%20Expression"><img src="https://img.shields.io/badge/Regular%20Expression-100000?style=flat&logo=Regular%20Expression&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/23-06-2024/Print%20Bracket%20Number.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/23-06-2024/Print%20Bracket%20Number.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/23-06-2024/Print%20Bracket%20Number.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/23-06-2024/Print%20Bracket%20Number.js)
