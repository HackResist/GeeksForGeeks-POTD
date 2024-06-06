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
        let input_ar = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) a[i] = input_ar[i];
        let obj = new Solution();
        let res = obj.max_sum(a, n);
        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} a
 * @param {number} n
 * @returns {number}
 */

class Solution {

    max_sum(a, n) {
        // Your Code Start
          let cumulativeSum = 0;
    for (let i = 0; i < n; i++) cumulativeSum += a[i];

    let initialVal = 0;
    let maximum = 0;

    for (let i = 0; i < n; i++) {
        initialVal += i * a[i];
        maximum = initialVal;
    }

    for (let i = 1; i < n; i++) {
        let temp = initialVal - (cumulativeSum - a[i - 1]) + a[i - 1] * (n - 1);
        initialVal = temp;
        if (temp > maximum) maximum = temp;
    }

    return maximum;
      //Your Code End
    }
}
