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
        let res = obj.divisorGame(n);
        if (res) {
            console.log("True");
        } else {
            console.log("False");
        }
    }
} // } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    // Your Code Start
    divisorGame(n) {
          // The game starts with Alice having `n`.
        // Alice wins if `n` is even, as she can always subtract a proper divisor (2) and give Bob an odd number.
        // Bob is left with an odd number and can't make a valid move, so Alice wins.
        // If `n` is odd, Alice has no valid move, so Bob wins.
        return n % 2 === 0;
        // your code end
    }
}
