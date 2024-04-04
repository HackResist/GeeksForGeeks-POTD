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
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let s = input_line[0];
        
        let obj = new Solution();
        let ans = obj.sumSubstrings(s);
        if(ans==-0n)
            ans=0n;
        console.log(ans.toString());
    }
}

// } Driver Code Ends




//User function Template for javascript

/**
 * @param {string} s
 * @returns {BigInt}
*/

class Solution
{
    //Function to find sum of all possible substrings of the given string.
    sumSubstrings(s)
    {
        // Your Code Start
        const mod = 1000000007;
        let ans = 0;
        let temp = 0;
        const n = s.length;
        for (let i = 0; i < n; i++) {
            temp = (temp * 10 + (i + 1) * (s.charCodeAt(i) - '0'.charCodeAt(0))) % mod;
            ans = (ans + temp) % mod;
        }
        return ans;
        //Your Code End
    }
}
