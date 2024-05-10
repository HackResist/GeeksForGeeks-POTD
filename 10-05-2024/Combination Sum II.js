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

        let p = readLine().split(' ').map(x => parseInt(x));
        let n = p[0];
        let k = p[1];

        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.CombinationSum2(arr, n, k);

        let S_res = '';
        for (let row of res) {
            let tmp = '';
            for (let col of row) {
                tmp += col;
                tmp += ' ';
            }
            console.log(tmp);
        }
    }
}

// } Driver Code Ends



class Solution {
    /**
     * @param number n
     * @param number[] arr
     * @param number k
     *
     * @returns number[][]
     */
    CombinationSum2(arr, n, k) {
        // Your Code Start
            // Sort the input array in ascending order
        arr.sort((a, b) => a - b);
        const result = []; // Initialize an array to store the combinations
        
        // Define a backtracking function to find combinations
        const backtrack = (start, target, curr) => {
            // If the target sum is reached, add the combination to the result
            if (target === 0) {
                result.push([...curr]);
                return;
            }
            // If target becomes negative, or all elements are used, or current element exceeds target, return
            if (target < 0 || start === arr.length || target < arr[start]) {
                return;
            }
            // Iterate through the array starting from 'start'
            for (let i = start; i < arr.length; i++) {
                // Skip duplicates
                if (i > start && arr[i] === arr[i - 1]) {
                    continue;
                }
                // Add current element to the combination
                curr.push(arr[i]);
                // Recursively call backtrack with updated parameters
                backtrack(i + 1, target - arr[i], curr);
                // Backtrack: Remove the last added element from the combination
                curr.pop();
            }
        };
        
        // Start backtracking from index 0 with initial target as 'k' and empty combination
        backtrack(0, k, []);
        // If no valid combinations found, return an empty array, otherwise return the result
        return result.length === 0 ? [[]] : result;
      //Your Code End
    }
}
