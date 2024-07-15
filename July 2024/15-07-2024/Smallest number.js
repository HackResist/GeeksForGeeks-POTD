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

        let pp1 = readLine().split(" ").map(Number);
        let s = pp1[0];
        let d = pp1[1];

        let obj = new Solution();
        let res = obj.smallestNumber(s, d);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number s
    * @param number d

    * @returns string
    */
    smallestNumber(s, d) {
     //Your Code Start
            // If the sum of digits is greater than the maximum possible sum for the given number of digits, return "-1"
    if (s > 9 * d) {
        return "-1";
    }
    
    // Initialize the result string with spaces of length 'digits'
    let result = Array(d).fill(' ');
    
    // Decrease sum by 1 to handle the most significant digit separately
    s--;
    
    // Fill the digits from the least significant to the most significant using a different loop structure
    for (let pos = d - 1; pos > 0; pos--) {
        // Assign the maximum possible value (either 9 or the remaining sum)
        let val = Math.min(9, s);
        result[pos] = String(val);
        s -= val;
    }
    
    // Set the most significant digit
    result[0] = String(1 + s);
    
    return result.join('');
    //Your Code End
    }
}
