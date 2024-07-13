 [Go To Problem](https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1)
# Shortest Path in Weighted undirected graph


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy50.0%</strong>    
               <strong>Points: 4</strong>
</div>

You are given a weighted undirected graph having <strong>n</strong> vertices numbered from **1 to n** and **m** edges along with their weights. Find the **shortest path** between the vertex 1 and the vertex **n**,  if there exists a path, and return a list of integers whose first element is the **weight** of the path, and the rest consist of the nodes on that path. If no path exists, then return a list containing a single element **-1**.

The input list of edges is as follows - **{a, b, w}**, denoting there is an edge between **a** and **b**, and **w** is the weight of that edge.

**Note:** The driver code here will first check if the weight of the path returned is **equal** to the **sum** of the weights along the nodes on that path, if **equal** it will output the weight of the path, else **-2**. In case the list contains only a single element (**-1**) it will simply output **-1**.

### 💡Example 1:
<pre>
<strong>Input :</strong>n = 5, m= 6, edges = [[1, 2, 2], [2, 5, 5], [2, 3, 4], [1, 4, 1], [4, 3, 3], [3, 5, 1]]
<strong>Output :</strong>  5
<strong>Explanation: </strong> Shortest path from 1 to n is by the path 1 4 3 5 whose weight is 5. 

</pre>

### 💡Example 2:

<pre>
<strong>Input :</strong>  n = 2, m= 1, edges = [[1, 2, 2]]

<strong>Output :</strong>  2

<strong>Explanation: </strong>  Shortest path from 1 to 2 is by the path 1 2 whose weight is 2. 
</pre>

### 💡Example 3:

<pre>
<strong>Input :</strong> n = 2, m= 0, edges = [ ]
<strong>Output :</strong>  -1

<strong>Explanation: </strong> Since there are no edges, so no answer is possible.
</pre>


## Expected Time Complexity:
```O(m* log(n))```
## Expected Space Complexity: 
```O(n+m)```

## Constraints: 

2 <= n <= 10<sup>6</sup>

0 <= m <= 10<sup>6</sup>

1 <= a, b <= n

1 <= w <= 10<sup>5</sup>


## Topic Tags:
<p align="left">
<a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=32CD32&color=32CD32" /></a>
<a href="https://www.geeksforgeeks.org/explore/?category[]=Graph"><img src="https://img.shields.io/badge/Graph-100000?style=flat&logo=&logoColor=FFFFFF&labelColor=800080&color=800080" /></a>
</p>


## Codes:
  - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/13-07-2024/Shortest%20Path%20in%20Weighted%20undirected%20graph.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/13-07-2024/Shortest%20Path%20in%20Weighted%20undirected%20graph.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/July%202024/13-07-2024/Shortest%20Path%20in%20Weighted%20undirected%20graph.py)
 - [JavaScript Code](#blank)
