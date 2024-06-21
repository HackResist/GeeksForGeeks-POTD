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
        let str = readLine();
        let obj = new Solution();
        let res = obj.compareFrac(str);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param string str

    * @returns string
    */
    compareFrac(str) {
        // Your Code Start
             // Regular expression to extract fractions
        let fractionRegex = /(-?\d+)\s*\/\s*(-?\d+)/g;
        let matches = [];
        let match;

        // Find all matches
        while ((match = fractionRegex.exec(str)) !== null) {
            matches.push([parseInt(match[1]), parseInt(match[2])]);
        }

        // Extract numerators and denominators
        let a = matches[0][0], b = matches[0][1];
        let c = matches[1][0], d = matches[1][1];

        // Cross-multiplication comparison
        let lhs = a * d;
        let rhs = c * b;

        if (lhs > rhs) {
            return `${a}/${b}`;
        } else if (lhs < rhs) {
            return `${c}/${d}`;
        } else {
            return "equal";
        }
        //Your Code End
    }
}
