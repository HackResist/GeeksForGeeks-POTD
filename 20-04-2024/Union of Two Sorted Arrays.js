//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let m = input_ar0[1];
        let arr1 = new Array(n);
        let arr2 = new Array(m);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr1[i] = input_ar1[i];
        let input_ar2 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++)
            arr2[i] = input_ar2[i];
        let obj = new Solution();
        let res = obj.findUnion(arr1, arr2, n, m);
        printArray(res, res.length);
    }
}
// } Driver Code Ends




//User function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/

//Back-end complete function Template for javascript

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} n
 * @param {number} m
 * @returns {number[]}
*/
class Solution {
    // Function to return a list containing the union of the two arrays.
    findUnion(arr1, arr2, n, m) {
        let unionList = [];
        
        // Iterating through arr1 and arr2 simultaneously
        for (let i = 0, j = 0; i < n || j < m;) {
            // If both arrays have elements left
            if (i < n && j < m) {
                // If arr1[i] is smaller
                if (arr1[i] < arr2[j]) {
                    unionList.push(arr1[i++]);
                    // Skip duplicate elements in arr1
                    while (i < n && arr1[i] === arr1[i - 1]) i++;
                }
                // If arr2[j] is smaller
                else if (arr1[i] > arr2[j]) {
                    unionList.push(arr2[j++]);
                    // Skip duplicate elements in arr2
                    while (j < m && arr2[j] === arr2[j - 1]) j++;
                }
                // If both elements are equal
                else {
                    unionList.push(arr1[i++]);
                    j++;
                    // Skip duplicate elements in both arrays
                    while (i < n && arr1[i] === arr1[i - 1]) i++;
                    while (j < m && arr2[j] === arr2[j - 1]) j++;
                }
            }
            // If only arr1 has elements left
            else if (i < n) {
                unionList.push(arr1[i++]);
                // Skip duplicate elements in arr1
                while (i < n && arr1[i] === arr1[i - 1]) i++;
            }
            // If only arr2 has elements left
            else if (j < m) {
                unionList.push(arr2[j++]);
                // Skip duplicate elements in arr2
                while (j < m && arr2[j] === arr2[j - 1]) j++;
            }
        }
        
        return unionList;
    }
}

