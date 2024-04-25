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
        let input1 = readLine().split(" ").map((x) => parseInt(x));
        let n = input1[0];
        let m = input1[1];
        let a = [];
        for(let j = 0;j < n;j++){
            let row = readLine().split(" ").map((x) => parseInt(x));
            a.push(row);
        }
        let obj = new Solution();
        let res = obj.findMaxSum(n,m,a);
        console.log(res);
    }

}

// } Driver Code Ends


//User function Template for javascript
/**
* @param {number} n
* @param {number} m
* @param {number[][]} mat
* @returns {number}
*/
//Your code start
class Solution {
    // Function to find maximum sum submatrix.
    findMaxSum(n, m, mat) {
        let cons = 3;
        if (m < cons || n < cons)
            return -1;
        let fix = -1;
        for (let a = 0; a < n - 2; a++) {
            for (let b = 0; b < m - 2; b++) {
                let max = mat[a][b] + mat[a][b + 1] + mat[a][b + 2] +
                           mat[a + 1][b + 1] +
                           mat[a + 2][b] + mat[a + 2][b + 1] + mat[a + 2][b + 2];
                fix = Math.max(fix, max);
            }
        }
        return fix;
    }
}
//Your Code End
