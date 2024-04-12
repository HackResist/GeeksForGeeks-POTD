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


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.reversedBits(n);
        console.log(res);
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} X
 * @return {number}
*/

class Solution {
    reversedBits(x){
        //Your Code Start
   
        let ans = 0;
        let i = 0;

        while (x !== 0) {
            const bit = x & 1;
            ans = ans | (bit << (31 - i));
            x = x >>> 1;
            i++;
        }

        // If the original number was negative, set the leftmost bit to 1
        if (ans < 0) {
            ans = 4294967296 + ans; // 4294967296 = 2^32
        }

        return ans;
       //Your Code End
    }
}
