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

        const [n, m] = readLine().split(' ').map(x => parseInt(x));

        let matrix = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            matrix.push(a);
        }

        let obj = new Solution();
        let res = obj.findCoverage(matrix);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number m
    * @param number[][] matrix

    * @returns number
    */
    findCoverage(matrix) {
        // Your Code Start
          // Initialize the coverage counter to 0
        let count = 0;
        const row = matrix.length;
        const col = matrix[0].length;

        // Iterate over each row in the matrix
        for (let i = 0; i < row; i++) {
            // Iterate over each column in the current row
            for (let j = 0; j < col; j++) {
                // Check if the current element is 0
                if (matrix[i][j] === 0) {
                    // Check the cell below the current cell
                    if (i + 1 < row && matrix[i + 1][j] === 1) {
                        count++;
                    }
                    // Check the cell above the current cell
                    if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
                        count++;
                    }
                    // Check the cell to the right of the current cell
                    if (j + 1 < col && matrix[i][j + 1] === 1) {
                        count++;
                    }
                    // Check the cell to the left of the current cell
                    if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
                        count++;
                    }
                }
            }
        }

        // Return the total count of adjacent 1s for all 0s in the matrix
        return count;
      //Your Code End
    }
}
