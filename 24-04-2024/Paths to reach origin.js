//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let [n, m] = readLine()
      .trim()
      .split(" ")
      .map((x) => parseInt(x));
    let obj = new Solution();
    let res = obj.ways(n, m);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
//Your Code Start
class Solution {
  ways(x, y) {
             // Define a constant for modular arithmetic
    let  modulo = 1000000007;
        // Initialize a 2D array to store the number of ways to reach each point
        let dp = new Array(x + 1).fill(0).map(() => new Array(y + 1).fill(0));

        // Base case: there is only one way to reach the starting point (0, 0)
        dp[0][0] = 1;

        // Iterate through each point in the grid
        for (let i = 0; i <= x; i++) {
            for (let j = 0; j <= y; j++) {
                // Check if current point is not the starting point
                if (!(i === 0 && j === 0)) {
                    // Calculate the number of ways to reach the current point
                    // by summing the number of ways from the left and from above
                    dp[i][j] = ((i > 0 ? dp[i - 1][j] : 0) + (j > 0 ? dp[i][j - 1] : 0)) % modulo;
                }
            }
        }

        // Return the number of ways to reach the target point (x, y)
        return dp[x][y];
    //code here
  }
}
//Your Code End
