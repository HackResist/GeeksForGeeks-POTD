//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let nd = readLine().split(' ').map(Number);
        let n = nd[0];
        let m = nd[1];

        let a = [];
        let input_arr = readLine().split(' ').map(Number);
        for (let j = 0; j < n; j++) {
            a[j] = input_arr[j];
        }
        let b = [];
        let input_ar = readLine().split(' ').map(Number);
        for (let j = 0; j < m; j++) {
            b[j] = input_ar[j];
        }

        let obj = new Solution();
        let res = obj.maxDotProduct(n, m, a, b);
        console.log(res);
    }
}

// } Driver Code Ends




// User function Template for javascript

/**
 * @param {number} n
 * @param {number} m
 *  @param {number[]} a
 *  @param {number[]} b
 * @return {number}
 */
class Solution {
    maxDotProduct(n, m, a, b) {
        //Your Code Start
          // Initialize a 2D array for dynamic programming
        let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
        
        // Iterate over the array elements to compute the maximum dot product
        for (let y = 1; y <= m; y++) {
            for (let x = y; x <= n; x++) {
                let mx = dp[y - 1][x - 1] + a[x - 1] * b[y - 1];
                mx = Math.max(mx, dp[y][x - 1]);
                dp[y][x] = mx;
            }
        }
        
        // Return the maximum dot product
        return dp[m][n];
        //Your Code End
    }
}
