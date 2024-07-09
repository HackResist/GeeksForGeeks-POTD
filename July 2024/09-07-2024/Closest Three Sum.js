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
        let res = obj.threeSumClosest(A, key);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {Number[]} arr
 * @param {Number} target
 * @returns {Number}
 */

class Solution {
    threeSumClosest(arr, target) {
        // Your Code Start
                // Sort the array
        arr.sort((a, b) => a - b);
        
        let n = arr.length;
        let closeSum = arr[0] + arr[1] + arr[2]; // Initialize closeSum with the first triplet
        
        // Iterate through the array
        for (let i = 0; i < n - 2; i++) {
            let l = i + 1;
            let r = n - 1;
            
            // Use two-pointer technique
            while (l < r) {
                let currSum = arr[i] + arr[l] + arr[r];
                
                // If the current sum is exactly equal to the target, return it
                if (currSum === target) {
                    return currSum;
                }
                
                // Update the closeSum if the current sum is closer to the target
                if (Math.abs(currSum - target) < Math.abs(closeSum - target)) {
                    closeSum = currSum;
                } else if (Math.abs(currSum - target) === Math.abs(closeSum - target) && currSum > closeSum) {
                    // Prefer the maximum sum if the difference is the same
                    closeSum = currSum;
                }
                
                // Move the pointers
                if (currSum < target) {
                    l++;
                } else {
                    r--;
                }
            }
        }
        
        return closeSum;

//Your Code End
    }
}
