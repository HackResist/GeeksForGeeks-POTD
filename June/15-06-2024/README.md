 [Go To Problem](https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1)
# Mobile numeric keypad



<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 32.6%</strong>    
               <strong>Points: 4</strong>
</div>
There is a standard numeric keypad on a mobile phone. You can only press the current button or buttons that are directly up, left, right, or down from it (for ex if you press 5, then pressing 2, 4, 6 & 8 are allowed). Diagonal movements and pressing the bottom row corner buttons (* and #) are prohibited.

<p align="center">
  <a href="https://www.geeksforgeeks.org/problems/mobile-numeric-keypad5456/1"><img src="https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/704157/Web/Other/blobid0_1718345574.png" alt="Mobile numeric keypad
"></a>
</p>

Given a number <strong>n</strong>, find the number of possible unique sequences of length n that you can create by pressing buttons. You can start from any digit.


### 💡Example 1:
<pre>
Input :
  n = 1
Output :
  10
Explanation:
    Number of possible numbers are 10 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)  
</pre>

### 💡Example 2:

<pre>
Input:
   n = 2
Output: 
    36
Explanation: 
    Possible numbers: 00, 08, 11, 12, 14, 22, 21, 23, 25 and so on. If we start with 0, valid numbers will be 00, 08 (count: 2). If we start with 1, valid numbers will be 11, 12, 14 (count: 3). If we start with 2, valid numbers  will be 22, 21, 23,25 (count: 4). If we start with 3, valid numbers will be 33, 32, 36 (count: 3). If we start with 4, valid numbers will be 44,41,45,47 (count: 4). If we start with 5, valid numbers will be 55,54,52,56,58 (count: 5) and so on.
</pre>

## Expected Time Complexity:
 ```O(n)```
## Expected Space Complexity: 
```O(n)```

## Constraints: 

1 ≤ n ≤ 25

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-10000?style=for-the-badge&logo=Flipkart&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=FFFFFF&labelColor=43822C&color=43822C"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MAQ%20Software"><img src="https://img.shields.io/badge/MAQ%20Software-10000?style=for-the-badge&logo=MAQ%20Software&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Sprinklr"><img src="https://img.shields.io/badge/Sprinklr-10000?style=for-the-badge&logo=Sprinklr&logoColor=FFFFFF&labelColor=C40C0C&color=C40C0C"/></a>
</p>



## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-100000?style=flat&logo=Dynamic%20Programming&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Mathematical"><img src="https://img.shields.io/badge/Mathematical-100000?style=flat&logo=https://www.geeksforgeeks.org/explore/?category[]=Mathematical&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>




## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/15-06-2024/Mobile%20numeric%20keypad.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/15-06-2024/Mobile%20numeric%20keypad.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/15-06-2024/Mobile%20numeric%20keypad.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/15-06-2024/Mobile%20numeric%20keypad.cs)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/15-06-2024/Mobile%20numeric%20keypad.js)
