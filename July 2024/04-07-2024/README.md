 [Go To Problem](https://www.geeksforgeeks.org/problems/duplicate-subtrees/1)
# Duplicate Subtrees

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 23.98%</strong>    
               <strong>Points: 4</strong>
</div>

Given a binary tree, your task is to find all duplicate subtrees from the given binary tree.
  - Duplicate Subtree : Two trees are duplicates if they have the same structure with the same node values.

**Note:**  Return the root of each tree in the form of a list array & the driver code will print the tree in pre-order tree traversal in lexicographically increasing order.
### 💡Example 1:
<pre>
Input :
           <p align="left">
  <a href="https://www.geeksforgeeks.org/problems/duplicate-subtrees/1"><img src="https://contribute.geeksforgeeks.org/wp-content/uploads/tree1-1.png" alt="Geeksforgeeks"></a>
Output :
        2 4   
        4
Explanation: The above tree have two duplicate subtrees.i.e 
  2
 /
4  and 4. Therefore, you need to return the above tree root in the form of a list.  
</pre>

### 💡Example 2:

<pre>
Input:      5
          / \
         4   6
        / \
       3   4
          / \
         3   6
Output: 
    3
    6
Explanation: In the above tree, there are two duplicate subtrees.i.e
3 and 6. Therefore, you need to return the above subtrees root in the form of a list. Here, 4 3  is not considered because for a subtree to be equal, it should have the same values as well as structure. If we consider the first subtree on the left, it has  
two children, 3 on the left and 4 3 6   on the right. And for the second subtree it has 3 on the left and 6 on the right.

  Since the structures are not same for the subtrees hence they are not equal
</pre>


## Expected Time Complexity:
 ``` O(n)```
## Expected Space Complexity: 
```O(n)```

## Constraints: 
1<= height of binary tree <=10<sup>3</sup>

## Topic Tags:
<p align="left">
  
<a href="https://www.geeksforgeeks.org/explore/?category[]Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=D88913&labelcolor=D88913&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Recursion"><img src="https://img.shields.io/badge/Recursion-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/04-07-2024/Duplicate%20Subtrees.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/04-07-2024/Duplicate%20Subtrees.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/04-07-2024/Duplicate%20Subtrees.py)
 - [JavaScript Code](#blank)
