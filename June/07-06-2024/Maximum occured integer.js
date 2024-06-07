//{ Driver Code Starts
// Initial Template for javascript

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
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let l = new Array(n);
        let r = new Array(n);
        let maxx = 0;
        let input_ar0 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) l[i] = input_ar0[i];
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            r[i] = input_ar1[i];
            if (r[i] > maxx) {
                maxx = r[i];
            }
        }
        let obj = new Solution();
        console.log(obj.maxOccured(n, l, r, maxx));
    }
}
// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number[]} L
 * @param {number[]} R
 * @param {number} n
 * @param {number} maxx
 * @returns {number}
 */

class Solution {
    // Function to find the maximum occurred integer in all ranges.
    maxOccured(n, l, r, maxx) {
      //Your Code Start
         let arr = new Array(maxx + 2).fill(0); // Create an array of size maxx + 2 and initialize to 0

        // Increment start points and decrement points just after end points
        for (let i = 0; i < n; i++) {
            arr[l[i]]++;
            if (r[i] + 1 <= maxx) {
                arr[r[i] + 1]--;
            }
        }

        // Compute the prefix sum to find the number of active intervals at each point
        let maxOccuredValue = 0;
        let maxOccuredIndex = 0;
        let currentSum = 0;
        for (let i = 0; i <= maxx; i++) {
            currentSum += arr[i];
            if (currentSum > maxOccuredValue) {
                maxOccuredValue = currentSum;
                maxOccuredIndex = i;
            }
        }

        return maxOccuredIndex;
        // your code end
    }
}
