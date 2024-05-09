 [Go To Problem](https://www.geeksforgeeks.org/problems/divisor-game-1664432414/1)
# Construct Binary Tree from Inorder and Postorder


<div align="center">
  <strong>Easy</strong>    
</div>
<div align="center">
       <strong>Accuracy :70.69%</strong>    
               <strong>Points: 2</strong>
</div>
Alice and Bob take turns playing a game, with Alice starting first.


Initially, there is a number n on the chalkboard. On each player's turn, that player makes a move consisting of: 
        <li>   Choosing any <strong>x</strong> with <strong>0 < x < n </strong>  and <strong> n % x == 0. </strong> 
      </li>
      <li>Replacing the number <strong>n</strong> on the chalkboard with <strong>n - x.</strong></li>

Also, if a player cannot make a move, they lose the game.

Return **true** if and only if Alice wins the game, assuming both players play **optimally.**
### 💡Example 1:
<pre>
<strong>Input:</strong>
       n = 2
  <strong>Output:</strong> 
       True 
<strong>Explanation:</strong> 
       Alice chooses 1, and Bob has no more moves. 
</pre>
### 💡Example 2:
<pre>
<strong>Input:</strong>
      n = 3
<strong>Output:</strong>
      False
<strong>Explanation:</strong>  
      Alice chooses 1, Bob chooses 1, and Alice has no more moves.
</pre>
## Your Task:
  - You don't need to read input or print anything. Your task is to complete the function **divisorGame()** which takes an integer **n** as a parameter and returns true if Alice wins the game.
## Expected Time Complexity:
```O(1)```
## Expected Space Complexity: 
```O(1)```

## Constraints: 
1 ≤ n ≤ 10<sup>3</sup>

## Topic Tags:
<p align="left">
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=Dynamic%20Programming&logoColor=FF&labelColor=43822C&color=43822C" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Recursion"><img src="https://img.shields.io/badge/Recursion-100000?style=flat&logo=Recursion&logoColor=F7F7F7&labelcolor=2A79D7&color=2A79D7" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Backtracking"><img src="https://img.shields.io/badge/Backtracking-100000?style=flat&logo=Backtracking&logoColor=F7F7F7&labelcolor=7E3BE4&color=7E3BE4" /></a>
   <a href="https://www.geeksforgeeks.org/explore/?category[]=Algorithms"><img src="https://img.shields.io/badge/Algorithms-100000?style=flat&logo=Algorithms&logoColor=F7F7F7&labelcolor=0422FB&color=0422FB" /></a>
 
## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-05-2024/Divisor%20Game.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-05-2024/Divisor%20Game.java)
 - [Python Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-05-2024/Divisor%20Game.py)
 - [C # Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-05-2024/Divisor%20Game.cs)
  - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/09-05-2024/Divisor%20Game.js)


 
