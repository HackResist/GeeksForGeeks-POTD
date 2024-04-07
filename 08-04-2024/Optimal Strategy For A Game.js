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
        let n = parseInt(input_line[0]);
        
        input_line = readLine().split(' ');
        let arr = new Array(n);
        for(let i=0;i<n;i++)
            arr[i] = parseInt(input_line[i]);
        
        
        let obj = new Solution();
        let ans = obj.maximumAmount(arr, n);
        if(ans==-0n)
            ans=0n;
        console.log(ans.toString());
    }
}
// } Driver Code Ends




//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {BigInt}
*/

class Solution 
{
    //Function to find the maximum possible amount of money we can win.
    maximumAmount(arr, n)
    { 
        //Your Code Start
          let dp = Array.from({ length: n }, () => Array(n).fill(0));

        for (let g = 0; g < n; g++) {
            for (let i = 0, j = g; j < n; i++, j++) {
                if (g === 0)
                    dp[i][j] = arr[i];
                else if (g === 1)
                    dp[i][j] = Math.max(arr[i], arr[j]);
                else {
                    dp[i][j] = Math.max(
                        arr[i] + Math.min(dp[i + 2][j] || 0, dp[i + 1][j - 1] || 0),
                        arr[j] + Math.min(dp[i + 1][j - 1] || 0, dp[i][j - 2] || 0)
                    );
                }
            }
        }

        return dp[0][n - 1];
         // Your code End
    
    
      
    }
}

