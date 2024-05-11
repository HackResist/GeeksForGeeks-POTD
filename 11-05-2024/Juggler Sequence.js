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
        let res = obj.jugglerSequence(n);

        let S_res = '';
        for (let i = 0; i < res.length; i++) {
            S_res += (res[i]);
            S_res += ' ';
        }
        console.log(S_res);
    }
}

// } Driver Code Ends





class Solution {
    /**
    * @param number n

    * @returns number[]
    */
    jugglerSequence(n) {
        // Your Code Start
 
        const sequence = [];
        while (n > 1) {
            sequence.push(n);
            n = n % 2 === 0 ? Math.floor(Math.sqrt(n)) : Math.floor(Math.sqrt(n) * n);
        }
        sequence.push(1);
        return sequence;
      //Your Code End
    
    }
}
