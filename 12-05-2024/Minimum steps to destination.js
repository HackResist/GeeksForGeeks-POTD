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

function printList(res, n) {
    let s = "";
    for (let i = 0; i < n; i++) {
        s += res[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let d = parseInt(readLine());
        let obj = new Solution();
        let res = obj.minSteps(d);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number} d
 * @returns {number}
 */

class Solution {
    minSteps(d) {
        // Your Code Start
        let addition = 1;
        let element = 0;
        let count = 0;
        while (element < d) {
            element += addition;
            addition++;
            count++;
        }
        while ((element - d) % 2 !== 0) {
            count++;
            element += addition;
            addition++;
        }
        return count;
      //Your Code End
    }
}
