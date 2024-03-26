//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let N = readLine().trim();
        let obj = new Solution();
        let res = obj.isAdditiveSequence(N);
        console.log(Number(res));
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} n
 * @return {boolean}
 */
//Your Code Start
function getSequence(a, b, n) {
    let length = a.length + b.length;
    let arr = [a, b];
    let i = 2;
    while (true) {
        let summ = parseInt(arr[i - 1]) + parseInt(arr[i - 2]);
        arr.push(String(summ));
        length += arr[arr.length - 1].length;
        i += 1;
        if (length >= n) {
            break;
        }
    }
    if (arr.length === 2) {
        return '';
    }
    return arr.join('');
}

function solve(s) {
    let n = s.length;
    for (let i = 0; i < n; i++) {
        let a = s.substring(0, i + 1);
        for (let j = i + 1; j < n; j++) {
            let b = s.substring(i + 1, j + 1);
            let x = getSequence(a, b, n);
            if (s === x) {
                return 1;
            }
        }
    }
    return 0;
}

class Solution {
    isAdditiveSequence(n) {
        return solve(n);
    }
}
//Your Code End
