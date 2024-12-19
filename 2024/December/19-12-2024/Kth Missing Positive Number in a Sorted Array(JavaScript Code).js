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

function printArray(res, n) {

    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < res[i].length; j++) {
            s += res[i][j];
            s += " ";
        }
        console.log(s);
    }
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let arr = readLine().split(' ').map(x => parseInt(x));

        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let k = input_ar1[0];
        let obj = new Solution();
        let res = obj.kthMissing(arr, k);
        console.log(res);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */


//Your Code Starts
class Solution {
    kthMissing(arr, k) {
        // code here
        let l = 0, h = arr.length - 1;
        while (l <= h) {
            let mid = Math.floor(l + (h - l) / 2);
            let mis = arr[mid] - (mid + 1); 

            if (mis < k) {
                l = mid + 1; 
            } else {
                h = mid - 1; 
            }
        }
        return l + k;
    }
}

//Your Code Ends
