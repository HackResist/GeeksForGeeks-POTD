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
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        let n = input_ar1.length;
        let arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findPages(arr, x);
        console.log(res);
        console.log("~");
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

//Your Code Starts
class Solution {
    isFeasible(arr, k, maxPages) {
        let stu = 1;
        let currSum = 0;

        for (let pages of arr) {
            if (pages > maxPages) return false; 
            if (currSum + pages > maxPages) {
                stu++; 
                currSum = pages; 
                if (stu > k) return false; 
            } else {
                currSum += pages;
            }
        }
        return true;
    }
    findPages(arr, k) {
        let n = arr.length;
        if (k > n) return -1; 

        let l = Math.max(...arr); 
        let h = arr.reduce((a, b) => a + b, 0); 
        let res = -1;
        while (l <= h) {
            let mid = Math.floor(l + (h - l) / 2);
            if (this.isFeasible(arr, k, mid)) {
                res = mid; 
                h = mid - 1; 
            } else {
                l = mid + 1; 
            }
        }
        return res;
    }
}


//Your Code Ends
