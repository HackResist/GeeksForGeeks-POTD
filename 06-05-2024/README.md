 [Go To Problem](https://www.geeksforgeeks.org/problems/print-all-nodes-that-dont-have-sibling/1)
# Print all nodes that don't have sibling


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy :18.01%</strong>    
               <strong>Points: 2</strong>
</div>

Given a Binary Tree of ***n*** nodes, ***find all the nodes that don't have any siblings.*** You need to return a list of integers containing all the nodes that don't have a sibling in ***sorted order*** (Increasing).

Two nodes are said to be ***siblings*** if they are present at the same level, and their parents are the same.

**Note:** The root node can not have a sibling so it cannot be included in our answer.
### 💡Example 1:
<pre>
<strong>Input:</strong>
      37
      /   
    20
    /     
  113 
<strong>Output:</strong> 
   20 113
<strong>Explanation:</strong> 
  Nodes 20 and 113 dont have any siblings.
   
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
       1
      / \
     2   3 
<strong>Output:</strong>
  -1
<strong>Explanation:</strong>  
  Every node has a sibling.
</pre>
## Your Task:
  -  You don't need to read input or print anything. Complete the function ***noSibling()*** which takes the root of the tree as input parameter and returns a list of integers containing all the nodes that don't have a sibling in sorted order. If all nodes have a sibling, then the returning list should contain only one element -1.
## Expected Time Complexity:

```O(nlogn)```


## Expected Space Complexity: 
```O(Height of the tree)```

## Constraints: 
1 <= n <= 10<sup>4</sup>


## Company Tag: 
<p align="left">

<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=&labelColor=FEFAF6&color=090907"/></a>
<a href="https://www.geeksforgeeks.org/explore/?company[]=D-E-Shaw"><img src="https://img.shields.io/badge/D E Shaw-10000?style=for-the-badge&logo=D-E-Shaw&logoColor=&labelColor=FEFAF6&color=C70039"/></a>

## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/06-05-2024/Print%20all%20nodes%20that%20don't%20have%20sibling.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/06-05-2024/Print%20all%20nodes%20that%20don't%20have%20sibling.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/06-05-2024/Print%20all%20nodes%20that%20don't%20have%20sibling.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/02-05-2024/Serialize%20and%20deserialize%20a%20binary%20tree.js)


 
