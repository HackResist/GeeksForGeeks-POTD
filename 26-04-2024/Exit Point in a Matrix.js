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

        let arr = [];

        for (let j = 0; j < n; j++) {
            let input_arr = readLine().split(' ').map(Number);
            arr[j] = input_arr;
        }

        let obj = new Solution();
        let res = obj.FindExitPoint(n, m, arr);
        let ans = "";
        for (let j = 0; j < res.length; j++) {
            ans += res[j];
            if (j < res.length - 1) ans += " ";
        }
        console.log(ans);
    }
}
// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number[][]} matrix
 * @returns {INTEGER_ARRAY}
 */
//Your Code Start
class Solution {
    FindExitPoint(n, m, matrix) {
        // Code here
    
           let rows = matrix.length; // Number of rows
        let columns = matrix[0].length; // Number of columns

        let i = 0, j = 0;
        let count = 0;

        while (i < rows && j < columns && i >= 0 && j >= 0) {
            if (matrix[i][j] !== 1) {
                if (count % 4 === 0)
                    j++;
                else if (count % 4 === 1)
                    i++;
                else if (count % 4 === 2)
                    j--;
                else
                    i--;
            } else {
                count++;
                matrix[i][j] = 0;
            }
        }

        let ans = [];
        if (count % 4 === 0) {
            j--;
            ans = [i, j];
        } else if (count % 4 === 1) {
            i--;
            ans = [i, j];
        } else if (count % 4 === 2) {
            j++;
            ans = [i, j];
        } else {
            i++;
            ans = [i, j];
        }

        return ans;
    }
};
//Your Code End
