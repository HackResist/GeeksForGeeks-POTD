 [Go To Problem](https://www.geeksforgeeks.org/problems/search-in-a-rotated-array4618/1)
# Search in Rotated Sorted Array


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:37.64%</strong>    
               <strong>Points: 4</strong>
</div>

Given a sorted (in ascending order) and rotated array **arr** of distinct elements which may be rotated at some point and given an element **key**, the task is to find the index of the given element **key** in the array **arr**. The whole array **arr** is given as the range to search.

  Rotation shifts elements of the array by a certain number of positions, with elements that fall off one end reappearing at the other end.

**Note:**- 0-based indexing is followed & returns -1 if the key is not present.
### 💡Example 1:
<pre>
<strong>Input :</strong>  arr[] = [5, 6, 7, 8, 9, 10, 1, 2, 3], key = 10
<strong>Output :</strong>  5
<strong>Explanation: </strong>10 is found at index 5.
</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong>  arr[] = [3, 5, 1, 2], key = 6

<strong>Output :</strong>  -1

<strong>Explanation: </strong> There is no element that has value 6.
</pre>


## Expected Time Complexity:
```O(log n)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 ≤ arr.size() ≤ 10<sup>6</sup>

0 ≤ arr[i] ≤ 10<sup>6</sup>

1 ≤ key ≤ 10<sup>5</sup>

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=FFFFFF&labelColor=CC2936&color=CC2936"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Paytm"><img src="https://img.shields.io/badge/Paytm-10000?style=for-the-badge&logo=Paytm&logoColor=FFFFFF&labelColor=5E97F6&color=5E97F6"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Flipkart"><img src="https://img.shields.io/badge/Flipkart-10000?style=for-the-badge&logo=Flipkart&logoColor=FFFFFF&labelColor=FFB900&color=FFB900"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=FF9900&color=FF9900"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Snapdeal"><img src="https://img.shields.io/badge/Snapdeal-10000?style=for-the-badge&logo=Snapdeal&logoColor=FFFFFF&labelColor=FF69B4&color=FF69B4"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=D-E-Shaw"><img src="https://img.shields.io/badge/D--E--Shaw-10000?style=for-the-badge&logo=D-E-Shaw&logoColor=FFFFFF&labelColor=6A3FF5&color=6A3FF5"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=FactSet"><img src="https://img.shields.io/badge/FactSet-10000?style=for-the-badge&logo=FactSet&logoColor=FFFFFF&labelColor=19A974&color=19A974"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Hike"><img src="https://img.shields.io/badge/Hike-10000?style=for-the-badge&logo=Hike&logoColor=FFFFFF&labelColor=525252&color=525252"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-10000?style=for-the-badge&logo=MakeMyTrip&logoColor=FFFFFF&labelColor=00C7B7&color=00C7B7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Intuit"><img src="https://img.shields.io/badge/Intuit-10000?style=for-the-badge&logo=Intuit&logoColor=FFFFFF&labelColor=FF4081&color=FF4081"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=Adobe&logoColor=FFFFFF&labelColor=FF6F61&color=FF6F61"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Google"><img src="https://img.shields.io/badge/Google-10000?style=for-the-badge&logo=Google&logoColor=FFFFFF&labelColor=4285F4&color=4285F4"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=BankBazaar"><img src="https://img.shields.io/badge/BankBazaar-10000?style=for-the-badge&logo=BankBazaar&logoColor=FFFFFF&labelColor=7B113A&color=7B113A"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Times Internet"><img src="https://img.shields.io/badge/Times Internet-10000?style=for-the-badge&logo=Times%20Internet&logoColor=FFFFFF&labelColor=FFD700&color=FFD700"/></a>
</p>


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Searching"><img src="https://img.shields.io/badge/Searching-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF6347&color=FF6347" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Divide%20and%20Conquer"><img src="https://img.shields.io/badge/Divide%20and%20Conquer-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=4682B4&color=4682B4" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=32CD32&color=32CD32" /></a>
</p>

## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/08-07-2024/Search%20in%20Rotated%20Sorted%20Array.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/08-07-2024/Search%20in%20Rotated%20Sorted%20Array.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/08-07-2024/Search%20in%20Rotated%20Sorted%20Array.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/08-07-2024/Search%20in%20Rotated%20Sorted%20Array.js)
