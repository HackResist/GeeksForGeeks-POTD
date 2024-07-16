 [Go To Problem](https://www.geeksforgeeks.org/problems/remaining-string3515/1)
 
# Remaining String


<div align="center">
  <strong> Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy:17.06%</strong>    
               <strong>Points: 2</strong>
</div>

Given a string **s** without spaces, a character **ch** and an integer **count**. Your task is to return the substring that remains after the character **ch** has appeared **count** number of times.

**Note:**  Assume upper case and lower case alphabets are different. “ ”(**Empty string**) should be returned if it is not possible, or the remaining substring is empty.


### 💡Example 1:
<pre>
<strong>Input :</strong> s = "Thisisdemostring", ch = 'i', count = 3
<strong>Output :</strong> ng
<strong>Explanation: </strong> The remaining substring of s after the 3rd
occurrence of 'i' is "ng", hence the output is ng.

</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong> s = "Thisisdemostri", ch = 'i', count = 3

<strong>Output :</strong> " "

<strong>Explanation: </strong> The 3rd occurence of 'i' is at the last index. In this case the remaining substring is empty, hence we return empty string.
</pre>

### 💡Example 3:

<pre>
<strong>Input :</strong> s = "abcd", ch = 'x', count = 2

<strong>Output :</strong> " "

<strong>Explanation: </strong> The character x is not present in the string, hence we return empty string.
</pre>

## Expected Time Complexity:
```O(|s|)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 

1<= s.length()<=10<sup>5</sup>

1<=count<=s.length()

s[i] is both upper case and lower case

   
## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Zoho"><img src="https://img.shields.io/badge/Zoho-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Oracle"><img src="https://img.shields.io/badge/Oracle-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=4682B4&color=4682B4"/></a>
</p>  

## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Strings"><img src="https://img.shields.io/badge/Strings-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FFD700&color=FFD700" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=0000FF&color=0000FF" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data Structures"><img src="https://img.shields.io/badge/Data Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
</p>




## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/16-07-2024/Remaining%20String.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/16-07-2024/Remaining%20String.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/16-07-2024/Remaining%20String.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/16-07-2024/Remaining%20String.cs)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/16-07-2024/Remaining%20String.js)
