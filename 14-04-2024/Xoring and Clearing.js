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
        let n = parseInt(readLine());

        let arr = [];
        let input_arr = readLine().split(' ').map(Number);
        for (let j = 0; j < n; j++) {
            arr[j] = input_arr[j];
        }

        let obj = new Solution();
        obj.xor1ToN(n, arr);
        obj.printArr(n, arr);
        obj.setToZero(n, arr);
        obj.printArr(n, arr);
        // console.log(res);
    }
}

// } Driver Code Ends




// User function Template for javascript

class Solution {
    printArr(n, arr) {
        //Your Code Start
        // Your code for printing array here
           let result = "";
        for (let i = 0; i < n; i++) {
            result += arr[i];
            if (i < n - 1) {
                result += " ";
            }
        }
        console.log(result);
    }

    setToZero(n, arr) {
         for(let i = 0; i < n; i++) {
            arr[i] = 0;
        }
        // set element of arr to zero
    }

    xor1ToN(n, arr) {
        for(let i = 0; i < n; i++) {
            arr[i] ^= i;
        }
        // Xor arr[i]^i
        
        //Your Code End
    }
}
