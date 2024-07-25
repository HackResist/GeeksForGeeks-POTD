 [Go To Problem](https://www.geeksforgeeks.org/problems/array-to-bst4443/1)

# Array to BST


<div align="center">
  <strong> Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy:46.02%</strong>    
               <strong>Points: 2</strong>
</div>

Given a **sorted** array. Convert it into a **Height Balanced** Binary Search Tree (BST). Return the **root** of the BST.

  - **Height-balanced** BST means a binary tree in which the depth of the left subtree and the right subtree of every node never differ by more than 1.

**Note:** The driver code will check the BST, if it is a Height-balanced BST, the output will be **true** otherwise the output will be **false**.



### 💡Example 1:
<pre>
<strong>Input:</strong> nums = [1, 2, 3, 4]
<strong>Output:</strong> true
<strong>Explanation:</strong> The preorder traversal of the following BST formed is [2, 1, 3, 4]:
           2
         /   \
        1     3
               \
                4
</pre>

### 💡Example 2:

<pre>
<strong>Input:</strong>  nums = [1, 2, 3, 4, 5, 6, 7]
<strong>Output:</strong> true
<strong>Explanation:</strong> The preorder traversal of the following BST formed is [4, 2, 1, 3, 6, 5, 7]:
        4
       / \
      2   6
     / \   / \
   1    3 5   7
</pre>




## Expected Time Complexity:
```O(n)```
## Expected Space Complexity: 
```O(n)```

## Constraints: 
1 ≤ nums.size() ≤ 10<sup>5</sup>

1 ≤ nums[i] ≤ 10<sup>5</sup>

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Snapdeal"><img src="https://img.shields.io/badge/Snapdeal-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=E21737&color=E21737"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Adobe"><img src="https://img.shields.io/badge/Adobe-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=FF0000&color=FF0000"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=Cisco"><img src="https://img.shields.io/badge/Cisco-10000?style=for-the-badge&logo=&logoColor=FFFFFF&labelColor=0077B5&color=0077B5"/></a>
</p>

## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Binary%20Search%20Tree"><img src="https://img.shields.io/badge/Binary%20Search%20Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=8B0000&color=8B0000" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=228B22&color=228B22" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=FF4500&color=FF4500" /></a>
</p>



## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/25-07-2024/Array%20to%20BST.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/25-07-2024/Array%20to%20BST.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/25-07-2024/Array%20to%20BST.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/25-07-2024/Array%20to%20BST.js)
