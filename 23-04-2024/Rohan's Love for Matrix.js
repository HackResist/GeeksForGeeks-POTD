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

        let n = parseInt(readLine());

        let obj = new Solution();
        let res = obj.firstElement(n);
        console.log(res);
    }
}

// } Driver Code Ends

//Your Code Start

class Solution {
    /**
    * @param number n

    * @returns number
    */
  
    firstElement(n) {
        // Define modulo value
        const mod = 1000000007;

        // Check if n is 1 or 2, return 1 as per the problem statement
        if (n === 1 || n === 2) {
            return 1;
        }

        // Initialize the first two elements of the sequence
        let n1 = 1, n2 = 1;

        // Initialize the variable to store the current element
        let current = 0;

        // Loop through the sequence starting from the third element (i = 3)
        for (let i = 2; i <= n; i++) {
            // Calculate the current element by adding the previous two elements
            current = n2 + n1;

            // Take modulo to avoid overflow and store the result back to current
            current %= mod;

            // Update n1 and n2 for the next iteration
            n1 = n2;
            n2 = current;
        }

        // Calculate the first element modulo mod
        const firstElement = n1 % mod;

        // Return the first element
        return firstElement;
    }
}
//Your Code End
