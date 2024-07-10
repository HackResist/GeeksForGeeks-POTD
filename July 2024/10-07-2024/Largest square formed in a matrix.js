//{ Driver Code Starts

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

        let mat = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat.push(a);
        }

        let obj = new Solution();
        let res = obj.maxSquare(n, m, mat);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] mat

    * @returns number
    */
    maxSquare(n, m, mat) {
        // Your Code Start
        if (n === 0 || m === 0) return 0;

        let dp = Array.from({ length: n }, () => Array(m).fill(0));
        let max = 0;

        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < m; ++j) {
                if (mat[i][j] === 1) {
                    if (i === 0 || j === 0) {
                        dp[i][j] = 1;  // If it's in the first row or column, the largest square is itself
                    } else {
                        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                    }
                    max = Math.max(max, dp[i][j]);
                }
            }
        }

        return max;
        //Your Code End
    }
}
