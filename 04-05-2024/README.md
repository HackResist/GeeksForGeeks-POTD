 [Go To Problem](https://www.geeksforgeeks.org/problems/tree-from-postorder-and-inorder/1)
# Construct Binary Tree from Inorder and Postorder


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy :64.78%</strong>    
               <strong>Points: 4</strong>
</div>

Given **inorder** and **postorder** traversals of a binary tree(having **n** nodes) in the arrays **in[]** and **post[]** respectively. The task is to construct a binary tree from these traversals.

Driver code will print the preorder traversal of the constructed tree.
### 💡Example 1:
<pre>
<strong>Input:</strong>
  n = 8
  in[] = {4, 8, 2, 5, 1, 6, 3, 7}
  post[] = {8, 4, 5, 2, 6, 7, 3, 1}
<strong>Output:</strong> 
  1 2 4 8 5 3 6 7
<strong>Explanation:</strong> 
  For the given postorder and inorder traversal of tree the  resultant binary tree will be
           1
         /    \
      2        3
    /  \      /  \
   4   5     6    7
    \
     8
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  n = 5
  in[] = {9, 5, 2, 3, 4}
  post[] = {5, 9, 3, 4, 2}
<strong>Output:</strong>
  2 9 5 4 3
<strong>Explanation:</strong>  
  The  resultant binary tree will be
             2
          /     \
         9      4
          \     /
           5   3
</pre>
## Your Task:
  - You do not need to read input or print anything. Complete the function <strong>buildTree()</strong> which takes the inorder, postorder traversals and the number of nodes in the tree as input parameters and returns the root node of the newly constructed Binary Tree.
## Expected Time Complexity:
``` O(n^2)```
## Expected Space Complexity: 
```O(n)```
## Constraints: 
1 <= n <= 10<sup>3</sup>

1 <= in[i], post[i] <= 10<sup>6</sup>

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=&labelColor=FEFAF6&color=090907"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Microsoft"><img src="https://img.shields.io/badge/Microsoft-10000?style=for-the-badge&logo=Microsoft&logoColor=121481&labelColor=FDFFC2&color=929292"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Hike"><img src="https://img.shields.io/badge/Hike-10000?style=for-the-badge&logo=Hike&logoColor=&labelColor=FEFAF6&color=C70039"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=Adobe&logoColor=FFFFFF&labelColor=322C2B&color=ff3300"/></a>


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-258FFA?style=flat&logo=Tree&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Recursion"><img src="https://img.shields.io/badge/Recursion-100000?style=flat&logo=Recursion&logoColor=F7F7F7&labelcolor=2A79D7&color=7E3BE4" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/04-05-2024/Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/04-05-2024/Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/04-05-2024/Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/04-05-2024/Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/04-05-2024/Construct%20Binary%20Tree%20from%20Inorder%20and%20Postorder.js)


 
