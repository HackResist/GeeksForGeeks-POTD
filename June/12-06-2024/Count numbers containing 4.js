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
        let res = obj.countNumberswith4(n);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n

    * @returns number
    */
    countNumberswith4(n) {
        // Your Code Start
                let count = 0;
        for (let i = 1; i <= n; i++) {
            if (i.toString().includes('4')) {
                count++;
            }
        }
        return count;
      //Your Code End
    }
}
