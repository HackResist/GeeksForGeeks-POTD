 [Go To Problem](https://www.geeksforgeeks.org/problems/number-of-good-components--170647/1)
# Number of Good Components


<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy :60.81%</strong>    
               <strong>Points: 4</strong>
</div>

Given an undirected graph with **v** vertices(numbered from **1** to **v**) and **e** edges. Find the number of good components in the graph.

A component of the graph is good if and only if the component is fully connected.

**Note:** A fully connected component is a subgraph of a given graph such that there's an edge between every pair of vertices in the component, the given graph can be a **disconnected graph.** 

### 💡Example 1:
<pre>
<strong>Input:</strong>
  
<p align="left">
  <a href="https://www.geeksforgeeks.org/problems/number-of-good-components--170647/1"><img src="https://media.geeksforgeeks.org/img-practice/good_comp_1-1656905170.png" alt="GeeksForGeeks"></a>
</p>

  e=3 
  v=3
  edges={{1, 2},{1, 3},{3, 2}}
<strong>Output:</strong> 
  1
<strong>Explanation:</strong> 
  We can see that there is only one component in the graph and in this component there is a edge between any two vertces.
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  <p align="left">
  <a href="https://www.geeksforgeeks.org/problems/number-of-good-components--170647/1"><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/713974/Web/Other/0b0c03cb-9f66-4c94-8900-8120a171f9a3_1685087973.png" alt="GeeksForGeeks"></a>
</p>
  e=5 
  v=7
  edges={{1, 2},{7, 2},{3, 5},{3, 4},{4, 5}}
<strong>Output:</strong>
  2
<strong>Explanation:</strong>  
  We can see that there are 3 components in the graph. For 1-2-7 there is no edge between 1 to 7, so it is not a fully connected component. Rest 2 are individually fully connected component.
</pre>
## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function **findNumberOfGoodComponent()**, which takes an integer **e** and **v** and **edges[][]** as input parameters and returns an integer denoting the number of good components.
## Expected Time Complexity:

```O(v+e)```

## Expected Space Complexity: 
```O(depth of the graph)```

## Constraints: 
1 <= edges[i][0], edges[i][1] <= v

1 ≤ v, e ≤ 10<sup>4</sup>

All edges are unique

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=DFS"><img src="https://img.shields.io/badge/DFS-258FFA?style=flat&logo=DFS&logoColor=FF&labelColor=D88913&color=D88913" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Graph"><img src="https://img.shields.io/badge/Graph-258FFA?style=flat&logo=Graph&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data%20Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/13-05-2024/Number%20of%20Good%20Components.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/13-05-2024/Number%20of%20Good%20Components.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/13-05-2024/Number%20of%20Good%20Components.py)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/13-05-2024/Number%20of%20Good%20Components.js)


 
