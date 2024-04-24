 [Go To Problem](https://www.geeksforgeeks.org/problems/paths-to-reach-origin3850/1)
# Paths to reach origin

<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 53.93%</strong>    
               <strong>Points: 4</strong>
</div>
You are standing on a point <strong>(x, y)</strong> and you want to go to the origin <strong>(0, 0)</strong> by taking steps either <strong>left</strong> or <strong>down</strong> i.e. from each point you are allowed to move either in <strong>(x-1, y) or (x, y-1)</strong>. Find the number of <strong>paths</strong> from <strong>point</strong> to <strong>origin</strong>.

### 💡Example 1:
<pre>

<strong>Input:</strong>
    x = 3, y = 0 
<strong>Output:</strong> 
    1
<strong>Explanation:</strong> Path used was -  (<strong>3,0</strong>)  --> (<strong> 2,0</strong>) --> (<strong>1,0</strong>) --> (<strong>0,0</strong>).We can see that there is no other path than this, so we return 1.

</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
    x = 3, y = 6
<strong>Output:</strong> 
    84 
<strong>Explanation:</strong>
    There are total 84 possible paths.
</pre>
## Your Task:
  - Since this is a function problem. You don't need to take any input, as it is already accomplished by the driver code. You just need to complete the function <strong>ways()</strong> that takes integer <strong>x</strong> and <strong>y</strong> as parameters and returns the total number of <strong>paths</strong> from <strong>point(x,y)</strong> to the <strong>origin(0,0) % 1000000007</strong>.

## Expected Time Complexity:
 ```O(x*y)```
## Expected Space Complexity: 
```O(x*y)```

## Constraints: 
0 ≤ x, y ≤ 500





## Topic Tags:
<p align="left">
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Arrays"><img src="https://img.shields.io/badge/Arrays-258FFA?style=flat&logo=Arrays&logoColor=FF&labelColor=4322C&color=FFFAB7" /></a>
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=Dynamic%20Programming&logoColor=FF&labelColor=FFF5E0&color=FFF5E0" /></a>
  <a href="https://www.geeksforgeeks.org/explore/?category[]=Matrix"><img src="https://img.shields.io/badge/Matrix-258FFA?style=flat&logo=Matrix&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Data%20Structures"><img src="https://img.shields.io/badge/Data%20Structures-100000?style=flat&logo=Data Structures&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=874CCC&color=874CCC" /></a>
 


## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/24-04-2024/Paths%20to%20reach%20origin.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/24-04-2024/Paths%20to%20reach%20origin.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/24-04-2024/Paths%20to%20reach%20origin.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/24-04-2024/Paths%20to%20reach%20origin.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/24-04-2024/Paths%20to%20reach%20origin.js)


 
