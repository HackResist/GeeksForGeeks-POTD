//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
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
        let [n, m] = readLine().trim().split(" ").map((x) => parseInt(x));
        let mat = [];
        for (let j = 0; j < n * m; j += m) {
            let arr = readLine().trim().split(" ").map((x) => parseInt(x));
            mat.push(arr);
        }
        let obj = new Solution();
        let res = obj.minPoints(m,n, mat);
        console.log(res);

    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[][]} points
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

class Solution {
    minPoints(m,n,points) {
        //Your Code Start
         let dp = new Array(m);
        for (let i = 0; i < m; i++) {
            dp[i] = new Array(n);
        }

        // Initialize the bottom-right cell
        dp[m - 1][n - 1] = Math.max(1, 1 - points[m - 1][n - 1]);

        // Fill the last column
        for (let i = m - 2; i >= 0; i--) {
            dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - points[i][n - 1]);
        }

        // Fill the last row
        for (let j = n - 2; j >= 0; j--) {
            dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - points[m - 1][j]);
        }

        // Fill the rest of the cells starting from the second-to-last row and column
        for (let i = m - 2; i >= 0; i--) {
            for (let j = n - 2; j >= 0; j--) {
                let minPointsRequired = Math.min(dp[i + 1][j], dp[i][j + 1]);
                dp[i][j] = Math.max(1, minPointsRequired - points[i][j]);
            }
        }

        return dp[0][0];
        //Your Code End
    }
}
