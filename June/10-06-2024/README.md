 [Go To Problem](https://www.geeksforgeeks.org/problems/nuts-and-bolts-problem0431/1)
# Nuts and Bolts Problem


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:  59.03%</strong>    
               <strong>Points: 4</strong>
</div>

Given a set of **n nuts** & **bolts**. There is a one-on-one mapping between nuts and bolts. You have to **Match** nuts and bolts efficiently. Comparison of a nut to another nut or a bolt to another bolt is not allowed. It means the nut can only be compared with the bolt and the bolt can only be compared with the nut to see which one is bigger/smaller.

The elements should follow the following order: **{ !,#,$,%,&,*,?,@,^ }**


**Note:** Make all the required changes **directly** in the given arrays, output will be handled by the driver code.

### 💡Example 1:

``` 
Input :
  n = 5, nuts[] = {@, %, $, #, ^}, bolts[] = {%, @, #, $ ^}
Output :
  # $ % @ ^
  # $ % @ ^
Explanation:
    As per the order # should come first after that $ then % then @ and ^. 
```
### 💡Example 2:

``` 
Input:
   n = 9, nuts[] = {^, &, %, @, #, *, $, ?, !}, bolts[] = {?, #, @, %, &, *, $ ,^, !}
Output: 
    ! # $ % & * ? @ ^
    ! # $ % & * ? @ ^
Explanation: 
    We'll have to match first ! then  # , $,  %,  &,  *,  @,  ^,  ? as per the required ordering.
```

## Expected Time Complexity:
 ```O(n(logn))```
## Expected Space Complexity: 
```O(log(n))```

## Constraints: 
1 <= n <= 9

The arrays 'nuts' and 'bolts' can only consist of the following elements: {'@', '#', '$', '%', '^', '&', '?', '*', '!'}.
All the elements of arrays 'nuts' and 'bolts' should be unique.
## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=FFFFFF&labelColor=D88913&color=2A79D7"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Hike"><img src="https://img.shields.io/badge/Hike-10000?style=for-the-badge&logo=Hike&logoColor=FFFFFF&labelColor=43822C&color=43822C"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MakeMyTrip"><img src="https://img.shields.io/badge/MakeMyTrip-10000?style=for-the-badge&logo=MakeMyTrip&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=MAQ%20Software"><img src="https://img.shields.io/badge/MAQ%20Software-10000?style=for-the-badge&logo=MAQ%20Software&logoColor=FFFFFF&labelColor=C40C0C&color=EEEEEE"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=Adobe&logoColor=FFFFFF&labelColor=C40C0C&color=C40C0C"/></a>
</p>

## Topic Tags:
<p align="center">
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Array&logoColor=FF&labelColor=43822C&color=43822C" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Hash"><img src="https://img.shields.io/badge/Hash-100000?style=flat&logo=https://www.geeksforgeeks.org/explore/?category[]=Hash&logoColor=F7F7F7&labelcolor=2A79D7&color=D1BB9E" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>

 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/10-06-2024/Nuts%20and%20Bolts%20Problem.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/10-06-2024/Nuts%20and%20Bolts%20Problem.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/10-06-2024/Nuts%20and%20Bolts%20Problem.py)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/June/10-06-2024/Nuts%20and%20Bolts%20Problem.js)


 
