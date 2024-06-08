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
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let a = new Array(n);
        let b = new Array(n - 1);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let input_ar2 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) a[i] = input_ar1[i];
        for (let i = 0; i < n - 1; i++) b[i] = input_ar2[i];
        let obj = new Solution();
        console.log(obj.findExtra(n, a, b));
    }
} // } Driver Code Ends
// } Driver Code Ends




// User function Template for javascript

/**
 * @param {Number[]} a
 * @param {Number[]} b
 * @param {Number} n
 * @returns {Number}
 */
class Solution {
    findExtra(n, arr1, arr2) {
        // Your Code Start
          let left = 0;
        let right = n - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (mid >= arr2.length || arr1[mid] !== arr2[mid]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
      //Your Code End
    }
}
