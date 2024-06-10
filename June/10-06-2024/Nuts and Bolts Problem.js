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
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let brr = new Array(n);
        input_ar1 = readLine().split(' ');
        for (let i = 0; i < n; i++) {
            brr[i] = input_ar1[i];
        }
        let obj = new Solution();
        obj.matchPairs(n, arr, brr);
        printList(arr, arr.length);
        printList(brr, brr.length);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

// User function Template for javascript

/**
 * @param {char[]} nuts
 * @param {char[]} bolts
 * @param {number} n
 * @returns {number}
 */

class Solution {
    matchPairs(n, nuts, bolts) {
        // Your Code Start
        const order = ['!', '#', '$', '%', '&', '*', '?', '@', '^'];
        const orderMap = new Map();
        
        for (let i = 0; i < order.length; i++) {
            orderMap.set(order[i], i);
        }
        
        nuts.sort((a, b) => orderMap.get(a) - orderMap.get(b));
        bolts.sort((a, b) => orderMap.get(a) - orderMap.get(b));
      //Your Code End
    }
}
