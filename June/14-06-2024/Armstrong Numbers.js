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
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.armstrongNumber(n);
        console.log(res);
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @returns {string}
 */

class Solution {
    armstrongNumber(n) {
//Your Code Start
            // Convert the number to a string to easily iterate through each digit
        let numStr = n.toString();
        
        // Number of digits
        let numDigits = numStr.length;
        
        // Compute the sum of each digit raised to the power of the number of digits
        let sumOfPowers = 0;
        for (let digitChar of numStr) {
            let digit = parseInt(digitChar);
            sumOfPowers += Math.pow(digit, numDigits);
        }
        
        // Check if the sum of powers is equal to the original number
        if (sumOfPowers === n) {
            return "true";
        } else {
            return "false";
        }
      //Your Code End
    }
}
