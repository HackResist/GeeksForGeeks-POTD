//{ Driver Code Starts
// Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {

        let a = readLine().split(' ').map(x => parseInt(x, 10));
        let b = readLine().split(' ').map(x => parseInt(x, 10));

        let obj = new Solution();

        const res = obj.intersectionWithDuplicates(a, b).sort((aa, bb) => aa - bb);

        // Format the result
        if (res.length === 0) {
            console.log("[]");
        } else {
            console.log(res.join(" "));
        }
        console.log("~");
    }
}

// } Driver Code Ends


//Back-end complete function Template for javascript

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
 //Your Code Starts
class Solution {
    intersectionWithDuplicates(a, b) {
        const freqMap = new Map();
        for (const num of a) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        const resultSet = new Set();
        for (const num of b) {
            if (freqMap.has(num)) {
                resultSet.add(num);
            }
        }
        return Array.from(resultSet);
    }
}
//Your COde Ends
