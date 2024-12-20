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
        let obj = new Solution();
        let ans = obj.spirallyTraverse(matrix);
        printArray(ans, ans.length);
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[][]} mat
 * @returns {number[]}
 */
//Your Code Starts
class Solution {
    // Function to return a list of integers denoting spiral traversal of matrix.
    spirallyTraverse(mat) {
        // code here
        let row_0 = 0, col_0 = 0;
        let row_1 = mat.length - 1, col_1 = mat[0].length - 1;
        let res = [];

        while (row_0 <= row_1 && col_0 <= col_1) {
            for (let j = col_0; j <= col_1; j++) {
                res.push(mat[row_0][j]);
            }
            row_0++;
            for (let i = row_0; i <= row_1; i++) {
                res.push(mat[i][col_1]);
            }
            col_1--;
            if (row_0 <= row_1) {
                for (let j = col_1; j >= col_0; j--) {
                    res.push(mat[row_1][j]);
                }
                row_1--;
            }
            if (col_0 <= col_1) {
                for (let i = row_1; i >= row_0; i--) {
                    res.push(mat[i][col_0]);
                }
                col_0++;
            }
        }
        return res;
    }
}
//Your Code Ends
