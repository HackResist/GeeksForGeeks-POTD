 [Go To Problem](https://www.geeksforgeeks.org/problems/k-distance-from-root/1)
# K distance from root

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy : 52.18%</strong>    
               <strong>Points: 2</strong>
</div>

Given a binary tree having **n** nodes and an integer **k**. Print all nodes that are at distance k from the root (root is considered at distance 0 from itself). Nodes should be printed from **left to right**.

### 💡Example 1:
<pre>
<strong>Input:</strong>
  k=0
       1
     /   \
    3     2
<strong>Output:</strong>  
    1
<strong>Explanation:</strong> 
    1 is the only node which is 0 distance from the root 1.
</pre>
### 💡Example 2:
<pre>

<strong>Input:</strong>
    k = 3
         1
         /
        2
         \
          1
        /  \
       5    3
<strong>Output:</strong> 
    5 3
<strong>Explanation:</strong>  
    5 and 3 are the nodes which are at distance 3 from the root 3.
    Here, returning 3 5 will be <strong>incorrect</strong>.
</pre>
## Your Task:
  - You don't have to take input. Complete the function **Kdistance()** that accepts **root** node and **k** as parameters and returns the value of the nodes that are at a distance k from the root.
## Expected Time Complexity:
 ``` O(n)```
## Expected Space Complexity: 
```O(Height of the Tree)```

## Constraints: 
1 <= n <= 10<sup>4</sup>

0 <= k <= 30

## Company Tag: 
<p align="left">


<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=&labelColor=FEFAF6&color=090907"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=121481&labelColor=FDFFC2&color=929292"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Samsung"><img src="https://img.shields.io/badge/Samsung-10000?style=for-the-badge&logo=Samsung&logoColor=121481&labelColor=FDFFC2&color=D88913"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Ola%20Cabs"><img src="https://img.shields.io/badge/ola Cabs-10000?style=for-the-badge&logo=ola cabs&logoColor=FFFFFF&labelColor=322C2B&color=ff3300"/></a>

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-258FFA?style=flat&logo=Tree&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/03-05-2024/K%20distance%20from%20root.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/03-05-2024/K%20distance%20from%20root.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/03-05-2024/K%20distance%20from%20root.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/03-05-2024/K%20distance%20from%20root.js)


 
