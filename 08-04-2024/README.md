 [Go To Problem](https://www.geeksforgeeks.org/problems/optimal-strategy-for-a-game-1587115620/1)
# Optimal Strategy For A Game



<div align="center">
  <strong>Medium</strong>    
</div>
<div align="center">
       <strong>Accuracy: 49.03%</strong>    
      <strong>Points: 4</strong>
</div>

You are given an array <strong>arr</strong> of size <strong> n</strong>. The elements of the array represent <strong>n coin </strong>of <strong>values v1, v2, ....vn.</strong> You play against an opponent in an <strong>alternating </strong>way. In each<strong> turn,</strong> a player selects either the <strong>first or last coin</strong> from the<strong> row</strong>, removes it from the row permanently, and <strong>receives the value</strong> of the coin.
You need to determine the <strong>maximum possible amount of money </strong> you can win if you <strong> go first.</strong>

<strong>Note:</strong> Both the players are playing optimally.


### 💡Example 1:

``` 
Input:
n = 4
arr[] = {5, 3, 7, 10}
Output: 
15
Explanation: The user collects maximum
value as 15(10 + 5)
```

### 💡Example 2:

``` 
Input:
n = 4
arr[] = {8, 15, 3, 7}
Output: 
22
Explanation: The user collects maximum
value as 22(7 + 15)
```

## Your Task:
  - Complete the function <strong>maximumAmount() </strong>which takes an array <strong>arr[] </strong>(represent values of<strong> n </strong>coins) and <strong>n</strong> as number of coins as a parameter and returns the <strong> maximum possible amount of money</strong> you can win if you <strong>go first.</strong>

## Expected Time Complexity:
 ```O(n*n)```
## Expected Auxiliary Complexity: 
```O(n*n)```

## Constraints: 
```2 <= n <= 10^3```

```1 <= arr[i] <= 10^6```

## Topic Tags:
<p align="center">
 
 <a href="https://www.geeksforgeeks.org/explore/?category[]=Dynamic%20Programming"><img src="https://img.shields.io/badge/Dynamic%20Programming-258FFA?style=flat&logo=&logoColor=FF&labelColor=43822C&color=43822C" /></a>



## Codes:

 - [C++ Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/08-04-2024/Optimal%20Strategy%20For%20A%20Game.cpp) 
 - [Java Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/08-04-2024/Optimal%20Strategy%20For%20A%20Game.java)
 - [Python3 Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/08-04-2024/Optimal%20Strategy%20For%20A%20Game.py)
 - [C# Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/08-04-2024/Optimal%20Strategy%20For%20A%20Game.cs)
 - [Javascript Code](https://github.com/HackResist/GeeksForGeeks-POTD/blob/main/08-04-2024/Optimal%20Strategy%20For%20A%20Game.js)



 
