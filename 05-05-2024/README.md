 [Go To Problem](https://www.geeksforgeeks.org/problems/vertical-sum/1)
# Vertical sum
<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy :64.76%</strong>    
               <strong>Points: 4</strong>
</div>

Given a binary tree having **n** nodes, find the vertical sum of the nodes that are in the same vertical line. Return all sums through different vertical lines starting from the left-most vertical line to the right-most vertical line.
### 💡Example 1:
<pre>
<strong>Input:</strong>
          1
        /    \
       2      3
      /  \    /  \
    4     5  6    7
<strong>Output:</strong> 
    4 2 12 3 7
<strong>Explanation:</strong> 
   The tree has 5 vertical lines
   Line 1 has only one node 4 => vertical sum is 4.
   Line 2 has only one node 2 => vertical sum is 2.
   Line-3 has three nodes: 1,5,6 => vertical sum is 1+5+6 = 12.
   Line-4 has only one node 3 => vertical sum is 3.
   Line-5 has only one node 7 => vertical sum is 7.
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
          1
         /
        2
       /
      3
     /
    4
   /
  6
 /
7
<strong>Output:</strong>
  7 6 5 4 3 2 1
<strong>Explanation:</strong>  
  There are seven vertical lines each having one node.
</pre>
## Your Task:
  - You don't need to take input. Just complete the function **verticalSum()** that takes **root** node of the tree as parameter and returns an array containing the vertical sum of tree from left to right.
## Expected Time Complexity:

```O(nlogn)```


## Expected Space Complexity: 
```O(n)```

## Constraints: 
1<=n<=10<sup>4</sup>

1<= Node value <= 10<sup>5</sup>

## Company Tag: 
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?company[]=Amazon"><img src="https://img.shields.io/badge/Amazon-10000?style=for-the-badge&logo=Amazon&logoColor=&labelColor=FEFAF6&color=090907"/></a>


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Tree"><img src="https://img.shields.io/badge/Tree-258FFA?style=flat&logo=Tree&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-05-2024/Vertical%20sum.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-05-2024/Vertical%20sum.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-05-2024/Vertical%20sum.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/05-05-2024/Vertical%20sum.js)


 
