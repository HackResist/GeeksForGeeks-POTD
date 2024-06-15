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

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        let res = obj.getCount(n);
        console.log(res);
        
    }
}// } Driver Code Ends





// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution{
    getCount(n){
  //Your Code Start
              if (n === 1) return 10; // For n=1, there are 10 single-digit numbers from 0 to 9

        // Define the moves from each digit
        const moves = {
            0: [0, 8],    // 0 can move to 0, 8
            1: [1, 2, 4], // 1 can move to 1, 2, 4
            2: [1, 2, 3, 5], // 2 can move to 1, 2, 3, 5
            3: [2, 3, 6], // 3 can move to 2, 3, 6
            4: [1, 4, 5, 7], // 4 can move to 1, 4, 5, 7
            5: [2, 4, 5, 6, 8], // 5 can move to 2, 4, 5, 6, 8
            6: [3, 5, 6, 9], // 6 can move to 3, 5, 6, 9
            7: [4, 7, 8], // 7 can move to 4, 7, 8
            8: [0, 5, 7, 8, 9], // 8 can move to 0, 5, 7, 8, 9
            9: [6, 8, 9] // 9 can move to 6, 8, 9
        };

        // DP table
        let dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));

        // Initialize the base case
        for (let j = 0; j <= 9; ++j) {
            dp[1][j] = 1;
        }

        // Fill the DP table
        for (let i = 2; i <= n; ++i) {
            for (let j = 0; j <= 9; ++j) {
                for (let move of moves[j]) {
                    dp[i][move] += dp[i - 1][j];
                }
            }
        }

        // Sum up all the numbers of length n
        let result = 0;
        for (let j = 0; j <= 9; ++j) {
            result += dp[n][j];
        }

        return result;
      //Your Code End
    }
}

