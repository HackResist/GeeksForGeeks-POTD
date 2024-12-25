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

/* Function to print an array */
function printArray(arr, size) {
    let i;
    let s = '';
    for (i = 0; i < size; i++) {
        if (arr[i] == -0) arr[i] = 0;
        s += arr[i];
        s += " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let m = parseInt(readLine());
        let matrix = new Array(n);
        for (let i = 0; i < n; i++) {
            let a = new Array(m);
            let input_ar1 = readLine().split(' ').map(x => parseInt(x));
            for (let j = 0; j < m; j++) a[j] = input_ar1[j];
            matrix[i] = a;
        }
        let X = parseInt(readLine());
        let obj = new Solution();
        let ans = obj.searchMatrix(matrix, X);
        if (ans)
            console.log("true");
        else
            console.log("false");
        console.log("~")
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} mat
 * @param {number} x
 * @returns {boolean}
 */
 
 //Your Code Starts
class Solution {
    // Function to search a given number in row-column sorted matrix.
    searchMatrix(mat, x) {
        // code here
        let n = mat.length, m = mat[0].length;
        let i = 0, j = m - 1; 
        while (i < n && j >= 0) {
            if (mat[i][j] === x) return true; 
            if (mat[i][j] > x) j--;        
            else i++;                       
        }
        return false;
    }
}
//Your Code Ends