 [Go To Problem](https://www.geeksforgeeks.org/problems/populate-inorder-successor-for-all-nodes/1)
# Populate Inorder Successor for all nodes


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 51.2%</strong>    
               <strong>Points: 4</strong>
</div>

Given a Binary Tree, complete the function to populate the next pointer for all nodes. The next pointer for every node should point to the Inorder successor of the node.

You do not have to return or print anything. Just make changes in the root node given to you.

**Note**: The node having no in-order successor will be pointed to -1. You don't have to add -1 explicitly, the driver code will take care of this.
### 💡Example 1:
<pre>
Input :
       10
       /  \
      8   12
     /
    3
Output :
        3->8 8->10 10->12 12->-1
Explanation:The inorder of the above tree is : 3 8 10 12. So the next pointer of node 3 
  is pointing to 8 , next pointer of 8 is pointing to 10 and so on.And next pointer of 12 
  is pointing to -1 as there is no inorder successor of 12.
</pre>

### 💡Example 2:

<pre>
Input:       
       1
      /  
     2 
   /
 3  
Output: 3->2 2->1 1->-1
    
Explanation: The inorder of the above tree is: 3 2 1. So the next pointer of node 3 
  is pointing to 2 , next pointer of 2 is pointing to 1. And next pointer of 1 is
  pointing to -1 as there is no inorder successor of 1.
</pre>


## Expected Time Complexity:
 ``` O(n)```
## Expected Space Complexity: 
``` O(1)```

## Constraints: 
1<= no. of nodes <=10<sup>5</sup>

1<= data of the node <=10<sup>5</sup>

## Topic Tags:
<p align="left">
  
<a href="https://www.geeksforgeeks.org/explore/?category[]Tree"><img src="https://img.shields.io/badge/Tree-100000?style=flat&logo=&logoColor=D88913&labelcolor=D88913&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Traversal"><img src="https://img.shields.io/badge/Traversal-100000?style=flat&logo=&logoColor=08080&labelcolor=08080&color=08080" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=FFFFFF&labelColor=FC4100&color=FC4100"/></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/06-07-2024/Populate%20Inorder%20Successor%20for%20all%20nodes.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/06-07-2024/Populate%20Inorder%20Successor%20for%20all%20nodes.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/06-07-2024/Populate%20Inorder%20Successor%20for%20all%20nodes.py)
 - [JavaScript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/06-07-2024/Populate%20Inorder%20Successor%20for%20all%20nodes.js)
