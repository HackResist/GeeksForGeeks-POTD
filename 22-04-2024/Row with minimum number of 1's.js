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
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let N = input_ar1[0];
        let M = input_ar1[1];
        let A = new Array(N);
        for(let i=0;i<N;i++)
        {
            A[i] = new Array(M);
            let input_ar2=readLine().split(' ').map(x=>parseInt(x));
            for(let j=0;j<M;j++){
                A[i][j] = input_ar2[j];
            }
        }
        let obj = new Solution();
        let res = obj.minRow(N, M, A);
        console.log(res);
        
    }
}// } Driver Code Ends



// } Driver Code Ends




//User function Template for javascript
/**
 * @param {number} n
 * @param {number} m
 * @param {Array.<Array.<number>>} a
 * @returns {number}
 */
//Your Code Start
class Solution {
    //Function to find the row of first index containing 1.
    minRow(n, m, a)
    {
         let min_index = 0; // Initialize the index of the row with the minimum ones count
        let min_count = Infinity; // Initialize the minimum ones count with a large value
        
        // Iterate over each row
        for (let i = 0; i < n; i++) {
            let cnt = 0; // Initialize count for ones in the current row
            
            // Count the number of ones in the current row
            for (let j = 0; j < m; j++) {
                if (a[i][j] === 1) {
                    cnt++;
                }
            }
            
            // Update the minimum ones count and corresponding row index if a smaller count is found
            if (cnt < min_count) {
                min_count = cnt;
                min_index = i + 1;
            }
        }
        
        // Return the index of the row with the minimum ones count
        return min_index;
    }
}
//Your Code End
