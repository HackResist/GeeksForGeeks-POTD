 [Go To Problem](https://www.geeksforgeeks.org/problems/remove-half-nodes/1)
# Remove Half Nodes

<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy:59.67%</strong>    
               <strong>Points: 2</strong>
</div>

You are given a binary tree and you need to remove all the **half nodes** (which have only one child). Return the root node of the modified tree after removing all the half-nodes.

**Note:** The output will be judged by the **inorder traversal** of the resultant tree, inside the driver code.

### 💡Example 1:
<pre>
<strong>Input:</strong> tree = 5
            /   \
          7     8
        / 
      2
<strong>Output:</strong> 2 5 8
<strong>Explanation:</strong> In the above tree, the node 7 has only single child. After removing the node the tree becomes  2<-5->8. Hence, the answer is 2 5 8 & it is in inorder traversal.
</pre>

### 💡Example 2:

<pre>

<strong>Input:</strong>  tree = 2   
              / \   
            7   5 
<strong>Output:</strong> 7 2 5
<strong>Explanation:</strong>Here there are no nodes which has only one child. So the tree remains same.
  
</pre>


## Expected Time Complexity:
```O(n)```
## Expected Space Complexity: 
``` O(height of the binary tree)```

## Constraints: 

1<=number of nodes<=10<sup>4</sup>

## Company Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=f5fffa&labelColor=cc5500&color=cc5500"/></a>
</p>


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=228B22&color=228B22" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=800080&color=800080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=00008B&color=00008B" /></a>
</p>



## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/20-07-2024/Remove%20Half%20Nodes.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/20-07-2024/Remove%20Half%20Nodes.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/20-07-2024/Remove%20Half%20Nodes.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/20-07-2024/Remove%20Half%20Nodes.js)
