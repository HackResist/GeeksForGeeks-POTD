//{ Driver Code Starts
// Driver program to test the above  function
const readline = require('readline');

const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let input = [];
rl.on('line', function(line) { input.push(line); });

rl.on('close', function() {
    let t = parseInt(input[0]);
    let index = 1;
    while (t--) {
        let n = parseInt(input[index]);
        let arr = input[index + 1].split(' ').map(Number);
        index += 2;
        let solution = new Solution();
        let ans = solution.findMaxProduct(arr);
        console.log(ans);
    }
});
// } Driver Code Ends



class Solution {
    /**
    * @param number[] a

    * @returns number
    */
    findMaxProduct(arr) {
      //Your code start
                let size = arr.length;
        if (size === 1) return arr[0];

        const mod = 1e9 + 7;
        let z = false;
        let mProd = 1;
        let n = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < size; ++i) {
            if (arr[i] === 0) {
                z = true;
            } else if (arr[i] > 0) {
                mProd = (mProd * arr[i]) % mod;
            } else {
                mProd = (mProd * arr[i]) % mod;
                n = Math.max(n, arr[i]);
            }
        }

        if (mProd < 0) {
            mProd = Math.floor(mProd / n);
        }

        if (mProd === 1 && z) {
            return 0;
        }

        return mProd;
        //Your code end
    }
}
