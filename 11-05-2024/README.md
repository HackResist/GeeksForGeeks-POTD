 [Go To Problem](https://www.geeksforgeeks.org/problems/juggler-sequence3930/1)
# Juggler Sequence



<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy :52.04%</strong>    
               <strong>Points: 2</strong>
</div>

Juggler Sequence is a series of integers in which the first term starts with a positive integer number a and the remaining terms are generated from the immediate previous term using the below recurrence relation:

<p align="left">
  <a href="https://www.geeksforgeeks.org/problems/juggler-sequence3930/1"><img src="https://media.geeksforgeeks.org/img-practice/PROD/addEditProblem/705067/Web/Other/2220ffd2-353d-4b30-b2aa-68fe4047f959_1685087657.png" alt="Geeksforgeeks"></a>
</p>

Given a number n, find the Juggler Sequence for this number as the first term of the sequence until it becomes 1.
### 💡Example 1:
<pre>
<strong>Input:</strong>
  n = 9
<strong>Output:</strong> 
  9 27 140 11 36 6 2 1
<strong>Explanation:</strong> 
    We start with 9 and use
  above formula to get next terms.
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
  n = 6
<strong>Output:</strong>
   6 2 1
<strong>Explanation:</strong>  
  [6<sup>1/2</sup>] = 2. 
  [2<sup>1/2</sup>] = 1.
</pre>
## Your Task:
  - You do not need to read input or print anything. Your Task is to complete the function **jugglerSequence()** which takes n as the input parameter and returns a list of integers denoting the generated sequence.

let p = number of elements, at maximum, can sum up to the given value k.
## Expected Time Complexity:
```O(n)```



## Expected Space Complexity: 
```O(n)```

## Constraints: 
```1 ≤ n ≤ 100```


## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Mathematical"><img src="https://img.shields.io/badge/Mathematical-258FFA?style=flat&logo=Mathematical&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Recursion"><img src="https://img.shields.io/badge/Recursion-100000?style=flat&logo=Recursion&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=series"><img src="https://img.shields.io/badge/series-100000?style=flat&logo=series&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/11-05-2024/Juggler%20Sequence.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/11-05-2024/Juggler%20Sequence.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/11-05-2024/Juggler%20Sequence.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/11-05-2024/Juggler%20Sequence.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/11-05-2024/Juggler%20Sequence.js)


 
