//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => {
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
    for(;i<t;i++){
        
        let n = parseInt(readLine());
        
        
        let k = parseInt(readLine());
        
        
        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_arr[i];
        }
        
        let obj = new Solution();
        let res = obj.minimizeDifference(n, k, arr);
        console.log(res);
    }
}

// } Driver Code Ends


//Your Code Start
class Solution {
    
    minimizeDifference(length, k, array) {
        let postMax = new Array(length);
        let postMin = new Array(length);

        postMin[length - 1] = array[length - 1];
        postMax[length - 1] = array[length - 1];

        for (let i = length - 2; i >= 0; --i) {
            postMax[i] = Math.max(array[i], postMax[i + 1]);
            postMin[i] = Math.min(array[i], postMin[i + 1]);
        }

        let minDiff = postMax[k] - postMin[k];

        let pMin = array[0];
        let pMax = array[0];

        for (let i = 1; i < length - k; ++i) {
            let currentMin = Math.max(pMax, postMax[i + k]) - Math.min(pMin, postMin[i + k]);
            minDiff = Math.min(minDiff, currentMin);
            pMax = Math.max(array[i], pMax);
            pMin = Math.min(array[i], pMin);
        }

        minDiff = Math.min(minDiff, pMax - pMin);

        return minDiff;
    }
}
//Your Code End
        
