 [Go To Problem](https://www.geeksforgeeks.org/problems/merge-two-bst-s/1)
 
# Merge two BST 's

<div align="center">
  <strong> Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy:64.95%</strong>    
               <strong>Points: 4</strong>
</div>

Given two BSTs, return elements of merged BSTs in **sorted** form.

### 💡Example 1:
<pre>
<strong>Input:</strong>
BST1:
       5
     /   \
    3     6
   / \
  2   4  
BST2:
        2
      /   \
     1     3
            \
             7
            /
           6
<strong>Output:</strong> 1 2 2 3 3 4 5 6 6 7
<strong>Explanation:</strong> After merging and sorting the two BST we get 1 2 2 3 3 4 5 6 6 7.
</pre>

### 💡Example 2:

<pre>
<strong>Input:</strong>
BST1:
       12
     /   
    9
   / \    
  6   11
BST2:
      8
    /  \
   5    10
  /
 2
<strong>Output:</strong> 2 5 6 8 9 10 11 12
<strong>Explanation:</strong> After merging and sorting the two BST we get 2 5 6 8 9 10 11 12.
</pre>


## Expected Time Complexity:
```O(m+n)```
## Expected Space Complexity: 
```O(Height of BST1 + Height of BST2 + m + n)```

## Constraints: 
1 ≤ Number of nodes ≤ 10<sup>5</sup>


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Binary%20Search%20Tree"><img src="https://img.shields.io/badge/Binary%20Search%20Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=8B0000&color=8B0000" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=228B22&color=228B22" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
</p>





## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/23-07-2024/Merge%20two%20BST%20's.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/23-07-2024/Merge%20two%20BST%20's.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/23-07-2024/Merge%20two%20BST%20's.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/23-07-2024/Merge%20two%20BST%20's.js)
