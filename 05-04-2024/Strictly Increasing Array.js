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
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.min_operations(arr, n);
        console.log(res);
        
    }
}// } Driver Code Ends


// } Driver Code Ends




//User function Template for javascript




/**
 * @param {number[]} num
 * @param {number} n
 * @returns {number}
*/

class Solution{
    //Your Code Start
    min_operations(num){
        let n = num.length;
    let dp = new Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (num[i] - num[j] >= i - j) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    let max = dp[0];
    for (let i = 1; i < n; i++) {
        if (dp[i] > max) {
            max = dp[i];
        }
    }

    return n - max;
        //Your Code End
    }
}
