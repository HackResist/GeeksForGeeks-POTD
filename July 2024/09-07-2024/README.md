 [Go To Problem](https://www.geeksforgeeks.org/problems/three-sum-closest/1)
# Closest Three Sum

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:17.65%</strong>    
               <strong>Points: 4</strong>
</div>

Given an array, <strong>arr</strong> of integers, and another number <strong>target</strong>, find three integers in the array such that their sum is closest to the target. Return the sum of the three integers.

**Note:** If there are multiple solutions, return the <strong>maximum</strong> one.
### 💡Example 1:
<pre>
<strong>Input :</strong> arr[] = [-7, 9, 8, 3, 1, 1], target = 2
<strong>Output :</strong>  2
<strong>Explanation: </strong>There is only one triplet present in the array where elements are -7,8,1 whose sum is 2.
</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong>   arr[] = [5, 2, 7, 5], target = 13

<strong>Output :</strong>  14

<strong>Explanation: </strong> There is one triplet with sum 12 and other with sum 14 in the array.
  Triplet elements are 5, 2, 5 and 2, 7, 5 respectively. Since abs(13-12) ==abs(13-14) maximum triplet
  sum will be preferred i.e 14.
</pre>


## Expected Time Complexity:
```O(n^2)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
3 ≤ arr.size() ≤ 10<sup>3</sup>

-105 ≤ arr[i] ≤ 10<sup>5</sup>

1 ≤ target ≤ 10<sup>5</sup>

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=FFFFFF&labelColor=CC2936&color=CC2936"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=FF9900&color=FF9900"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Apple"><img src="https://img.shields.io/badge/Apple-10000?style=for-the-badge&logo=Apple&logoColor=FFFFFF&labelColor=FF6F61&color=FF6F61"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Google"><img src="https://img.shields.io/badge/Google-10000?style=for-the-badge&logo=Google&logoColor=FFFFFF&labelColor=4285F4&color=4285F4"/></a>
</p>


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=8A2BE2&color=8A2BE2" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=2E8B57&color=2E8B57" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Two-Pointer%20Algorithm"><img src="https://img.shields.io/badge/Two--Pointer%20Algorithm-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF69B4&color=FF69B4" /></a>
</p>

## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/09-07-2024/Closest%20Three%20Sum.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/09-07-2024/Closest%20Three%20Sum.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/09-07-2024/Closest%20Three%20Sum.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/09-07-2024/Closest%20Three%20Sum.js)
