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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.rectanglesInCircle(N);
        console.log(res);
    }
}

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} R
 * @returns {number}
 */

class Solution {
    // Function to count the number of rectangles that can be circumscribed in a circle.
    rectanglesInCircle(r) {
      //Your Code Start
             // Initialize count to keep track of valid rectangles
        let count = 0;
        // Calculate the square of the diameter of the circle (2r)^2 = 4r^2
        let diameterSquared = 4 * r * r;

        // Iterate over all possible widths (w) from 1 to 2r
        for (let w = 1; w <= 2 * r; ++w) {
            // Iterate over all possible heights (h) from 1 to 2r
            for (let h = 1; h <= 2 * r; ++h) {
                // Check if the rectangle with width w and height h can fit inside the circle
                // This is true if the sum of squares of width and height is less than or equal to the square of the diameter
                if (w * w + h * h <= diameterSquared) {
                    // Increment the count of valid rectangles
                    count++;
                }
            }
        }

        // Return the total count of rectangles that can fit inside the circle
        return count;
      //Your Code End
    }
}
