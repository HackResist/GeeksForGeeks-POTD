//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size) {
  let i;
  let s = "";
  for (i = 0; i < size; i++) {
    s += arr[i] + " ";
  }
  console.log(s);
}

function main() {
  let t = parseInt(readLine());
  let i = 0;
  for (; i < t; i++) {
    let input_ar1 = readLine().split(" ").map((x) => parseInt(x));
    let n = input_ar1[0];
    let m = input_ar1[1];
    let arr1 = new Array(n);
    let input_ar2 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < n; i++) arr1[i] = input_ar2[i];
    let arr2 = new Array(m);
    let input_ar3 = readLine().split(" ").map((x) => parseInt(x));
    for (let i = 0; i < m; i++) arr2[i] = input_ar3[i];
    let obj = new Solution();
    let res = obj.findMissing(arr1,arr2,n,m);
    printArray(res,res.length);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {Number[]} arr1
 * @param {Number[]} arr2
 * @param {Number} n
 * @param {Number} m
 * @returns {Number[]}
 */

//Your Code Start
class Solution {
    findMissing(a, b, n, m) {
        // Convert array b to a Set for faster lookup
        let setB = new Set(b);
        
        // Initialize an array to store missing elements
        let missing = [];
        
        // Iterate through array a
        for (let i = 0; i < n; i++) {
            // If the current element of array a is not present in setB (array b),
            // add it to the list of missing elements
            if (!setB.has(a[i])) {
                missing.push(a[i]);
            }
        }
        
        return missing;
    }
}
//Your Code End
