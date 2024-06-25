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

        const [n, m, k] = readLine().split(' ').map(x => parseInt(x));

        let mat = [];
        for (let i = 0; i < n; i++) {
            let a = readLine().trim().split(' ').map((x) => parseFloat(x));
            mat.push(a);
        }

        let obj = new Solution();
        let res = obj.rotateMatrix(k, mat);

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
    * @param number m
    * @param number k
    * @param number[][] mat

    * @returns number[][]
    */
    rotateMatrix(k, mat) {
        // Your Code Start
           const r_no = mat.length; // Number of rows in the matrix
        const c_no = mat[0].length; // Number of columns in the matrix
        
        // If k is a multiple of c_no, the matrix remains unchanged
        if (k % c_no === 0) return mat;
        
        // Rotate each row individually
        for (let i = 0; i < r_no; i++) {
            const v = [...mat[i]]; // Copy the current row
            for (let j = 0; j < c_no; j++) {
                // Calculate the new position for each element in the row
                mat[i][(c_no - k % c_no + j) % c_no] = v[j];
            }
        }
        return mat;
        //Your Code End
    }
}
