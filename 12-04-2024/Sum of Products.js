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
        let N = parseInt(readLine());
        let Arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.pairAndSum(N, Arr);
        console.log(res);
    }
}

// } Driver Code Ends




// User function Template for javascript
/**
 * @param {number} N
 * @param {number[]} Arr
 * @returns {number[]}
 */

class Solution {
    // Function to pair and sum the elements of the array.
    pairAndSum(n, arr) {
        //Your Code Start
           let value = 0;
        for (let i = 0; i < 32; i++) {
            let a = 0;
            for (let j of arr) {

                if (j & (1 << i)) {
                    a =a+1;
                }
            }
            value=value+ (1 << i) * (a * (a - 1) / 2);
        }
        return value;
        // your code End
    }
}
