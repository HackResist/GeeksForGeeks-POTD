//{ Driver Code Starts
// Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => { inputString += inputStdin; });

process.stdin.on("end", (_) => {
    inputString =
        inputString.trim().split("\n").map((string) => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function printArray(arr) {
    let s = "";
    for (let i of arr) {
        s = s + i + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let inputArr = readLine().trim().split(" ").map((x) => parseInt(x));

        let [n, m] = inputArr;
        let A = [];
        inputArr = readLine().trim().split(" ").map((x) => parseInt(x));
        for (let j = 0; j < n * m; j += m) {
            let row = [];
            for (let k = 0; k < m; k++) {
                row.push(inputArr[j + k]);
            }
            A.push(row);
        }
        let obj = new Solution();
        let res = obj.isToeplitz(A);

        console.log(res);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} edges
 * @param {number} N
 * @param {number} M
 * @return {boolean}
 */

class Solution {
    isToeplitz(mat) {
        //Your Code Start
        let r = mat.length;
        let c = mat[0].length;
        
        for (let row = 0; row < r - 1; ++row) {
            for (let col = 0; col < c - 1; ++col) {
                if (mat[row][col] !== mat[row + 1][col + 1]) {
                    return false;
                }
            }
        }
        return true;
        //Your Code End
    }
}
