//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);

        let obj = new Solution();
        let ans = obj.countWays(n);
        if (ans == -0n) ans = 0n;
        console.log(ans.toString());
    }
}

// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number} m
 * @returns {BigInt}
 */

class Solution {
    // Function to count number of ways to reach the nth stair
    // when order does not matter.
    countWays(n) {
      //Your Code Start
         return Math.floor(n/2+1);
      //Your Code End
    }
}
