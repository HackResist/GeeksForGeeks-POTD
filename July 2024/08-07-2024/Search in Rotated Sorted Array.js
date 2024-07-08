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
        // let n = parseInt(readLine());
        let A = readLine().trim().split(" ").map((x) => parseInt(x));
        let key = parseInt(readLine());
        let obj = new Solution();
        let res = obj.search(A, key);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**

 * @param {number[]} arr
 * @param {number} key
 * @return {number}
 */

class Solution {
    search(arr, key) {
                // Your Code Start
        let n = arr.length;
        let l = 0, r = n - 1;
        
        while (l <= r) {
            let m = Math.floor(l + (r - l) / 2);
            
            if (arr[m] == key) {
                return m;
            }
            
            // Left half is sorted
            if (arr[l] <= arr[m]) {
                if (key >= arr[l] && key < arr[m]) {
                    r = m - 1;
                } else {
                    l = m + 1;
                }
            }
            // Right half is sorted
            else {
                if (key > arr[m] && key <= arr[r]) {
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
        }
        
        return -1; // Key not found
        // Your Code End
    }
}
