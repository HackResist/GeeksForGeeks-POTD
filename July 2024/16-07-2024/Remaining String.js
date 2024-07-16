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
        let S = readLine().trim();
        let ch = readLine().trim();
        let count = parseInt(readLine());
        let obj = new Solution();
        let res = obj.printString(S, ch, count);
        console.log(res)
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {string} S
 * @param {string} ch
 * @param {number} count
 * @return {string}
 */

class Solution {
    printString(s, ch, count) {
     //Your Code Start
            let occ= 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ch) {
            occ++;
            if (occ === count) {
                return s.substring(i + 1);
            }
        }
    }
    
    return "";
    //Your Code End
    }
}
