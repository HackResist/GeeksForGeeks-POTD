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
        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.NBitBinary(N);
        let s = "";
        for(let j = 0;j<res.length;j++){
            s+=res[j] + " ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {string[]}
*/

class Solution {
    NBitBinary(n){
      //Your Code Start
          let result = [];

    // Helper function to generate numbers recursively
    function generate(prefix, ones, zeros) {
      if (prefix.length === n) {
        result.push(prefix);
        return;
      }

      // If we can add more ones, do so
      if (ones < n) {
        generate(prefix + '1', ones + 1, zeros);
      }

      // If we have more ones than zeros, we can add zeros
      if (ones > zeros) {
        generate(prefix + '0', ones, zeros + 1);
      }
    }

    generate('', 0, 0);

    // Sort the result in decreasing order
    result.sort((a, b) => b - a);

    return result;
       //Your Code End
    }
}
